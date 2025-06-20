export interface UserProgress {
  streak: number;
  xp: number;
  level: number;
  lastStudyDate?: string;
}

export interface FlashcardReviewState {
  cardId: string;
  state: 'known' | 'review_later' | 'dont_know';
  timestamp: string;
  reviewCount: number;
  correctCount: number;
}

export interface FlashcardSetProgress {
  setId: string;
  pathId: string;
  currentIndex: number;
  reviewStates: Record<string, FlashcardReviewState>;
  lastAccessed: string;
  completed: boolean;
}

const PROGRESS_KEY = 'codeflash_user_progress';
const FLASHCARD_PROGRESS_KEY = 'codeflash_flashcard_progress';

export const getDefaultProgress = (): UserProgress => ({
  streak: 0,
  xp: 0,
  level: 1,
  lastStudyDate: undefined
});

export const getUserProgress = (): UserProgress => {
  if (typeof window === 'undefined') {
    return getDefaultProgress();
  }
  
  try {
    const stored = localStorage.getItem(PROGRESS_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading user progress:', error);
  }
  
  return getDefaultProgress();
};

export const saveUserProgress = (progress: UserProgress): void => {
  if (typeof window === 'undefined') {
    return;
  }
  
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Error saving user progress:', error);
  }
};

export const addXP = (xpToAdd: number): UserProgress => {
  const current = getUserProgress();
  const newXP = current.xp + xpToAdd;
  const newLevel = Math.floor(Math.sqrt(newXP / 100)) + 1;
  
  const updated: UserProgress = {
    ...current,
    xp: newXP,
    level: newLevel
  };
  
  saveUserProgress(updated);
  return updated;
};

export const updateStreak = (): UserProgress => {
  const current = getUserProgress();
  const today = new Date().toDateString();
  
  if (current.lastStudyDate === today) {
    return current; // Already studied today
  }
  
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayString = yesterday.toDateString();
  
  let newStreak = current.streak;
  if (current.lastStudyDate === yesterdayString) {
    newStreak += 1; // Continue streak
  } else if (current.lastStudyDate !== today) {
    newStreak = 1; // Reset streak
  }
  
  const updated: UserProgress = {
    ...current,
    streak: newStreak,
    lastStudyDate: today
  };
  
  saveUserProgress(updated);
  return updated;
};

export const getFlashcardProgress = (pathId: string): Record<string, FlashcardSetProgress> => {
  if (typeof window === 'undefined') {
    return {};
  }
  
  try {
    const stored = localStorage.getItem(`${FLASHCARD_PROGRESS_KEY}_${pathId}`);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading flashcard progress:', error);
  }
  
  return {};
};

export const saveFlashcardProgress = (pathId: string, setId: string, progress: FlashcardSetProgress): void => {
  if (typeof window === 'undefined') {
    return;
  }
  
  try {
    const existingProgress = getFlashcardProgress(pathId);
    existingProgress[setId] = progress;
    localStorage.setItem(`${FLASHCARD_PROGRESS_KEY}_${pathId}`, JSON.stringify(existingProgress));
  } catch (error) {
    console.error('Error saving flashcard progress:', error);
  }
};

export const updateCardReviewState = (
  pathId: string, 
  setId: string, 
  cardId: string, 
  state: 'known' | 'review_later' | 'dont_know'
): void => {
  const existingProgress = getFlashcardProgress(pathId);
  const setProgress = existingProgress[setId] || {
    setId,
    pathId,
    currentIndex: 0,
    reviewStates: {},
    lastAccessed: new Date().toISOString(),
    completed: false
  };

  const existingCardState = setProgress.reviewStates[cardId] || {
    cardId,
    state: 'dont_know',
    timestamp: new Date().toISOString(),
    reviewCount: 0,
    correctCount: 0
  };

  setProgress.reviewStates[cardId] = {
    ...existingCardState,
    state,
    timestamp: new Date().toISOString(),
    reviewCount: existingCardState.reviewCount + 1,
    correctCount: state === 'known' ? existingCardState.correctCount + 1 : existingCardState.correctCount
  };

  setProgress.lastAccessed = new Date().toISOString();
  saveFlashcardProgress(pathId, setId, setProgress);
};

export const getCardReviewState = (pathId: string, setId: string, cardId: string): FlashcardReviewState | null => {
  const existingProgress = getFlashcardProgress(pathId);
  const setProgress = existingProgress[setId];
  return setProgress?.reviewStates[cardId] || null;
};

export const getSetProgress = (pathId: string, setId: string): FlashcardSetProgress | null => {
  const existingProgress = getFlashcardProgress(pathId);
  return existingProgress[setId] || null;
};

export const updateSetCurrentIndex = (pathId: string, setId: string, currentIndex: number): void => {
  const existingProgress = getFlashcardProgress(pathId);
  const setProgress = existingProgress[setId] || {
    setId,
    pathId,
    currentIndex: 0,
    reviewStates: {},
    lastAccessed: new Date().toISOString(),
    completed: false
  };

  setProgress.currentIndex = currentIndex;
  setProgress.lastAccessed = new Date().toISOString();
  saveFlashcardProgress(pathId, setId, setProgress);
};

export const markSetCompleted = (pathId: string, setId: string): void => {
  const existingProgress = getFlashcardProgress(pathId);
  const setProgress = existingProgress[setId] || {
    setId,
    pathId,
    currentIndex: 0,
    reviewStates: {},
    lastAccessed: new Date().toISOString(),
    completed: false
  };

  setProgress.completed = true;
  setProgress.lastAccessed = new Date().toISOString();
  saveFlashcardProgress(pathId, setId, setProgress);
};

export const getProgressStats = (pathId: string, setId: string) => {
  const setProgress = getSetProgress(pathId, setId);
  if (!setProgress) {
    return {
      totalCards: 0,
      reviewedCards: 0,
      knownCards: 0,
      reviewLaterCards: 0,
      dontKnowCards: 0,
      completionPercentage: 0
    };
  }

  const reviewStates = Object.values(setProgress.reviewStates);
  const totalCards = Object.keys(setProgress.reviewStates).length;
  const knownCards = reviewStates.filter(state => state.state === 'known').length;
  const reviewLaterCards = reviewStates.filter(state => state.state === 'review_later').length;
  const dontKnowCards = reviewStates.filter(state => state.state === 'dont_know').length;

  return {
    totalCards,
    reviewedCards: reviewStates.length,
    knownCards,
    reviewLaterCards,
    dontKnowCards,
    completionPercentage: totalCards > 0 ? Math.round((reviewStates.length / totalCards) * 100) : 0
  };
};

export const getCardsForReview = (pathId: string, setId: string, allCards: Array<{ id: string; front: string; back: string }>) => {
  const setProgress = getSetProgress(pathId, setId);
  if (!setProgress) {
    return allCards; // Return all cards if no progress exists
  }

  const now = new Date();
  const cardsToReview: Array<{ id: string; front: string; back: string; priority: 'high' | 'medium' | 'low' }> = [];

  allCards.forEach(card => {
    const cardState = setProgress.reviewStates[card.id];
    if (!cardState) {
      // Never reviewed - high priority
      cardsToReview.push({ ...card, priority: 'high' });
      return;
    }

    const lastReview = new Date(cardState.timestamp);
    const daysSinceReview = Math.floor((now.getTime() - lastReview.getTime()) / (1000 * 60 * 60 * 24));

    // Simple spaced repetition logic
    let shouldReview = false;
    let priority: 'high' | 'medium' | 'low' = 'low';

    if (cardState.state === 'dont_know') {
      shouldReview = daysSinceReview >= 1; // Review daily
      priority = 'high';
    } else if (cardState.state === 'review_later') {
      shouldReview = daysSinceReview >= 3; // Review every 3 days
      priority = 'medium';
    } else if (cardState.state === 'known') {
      shouldReview = daysSinceReview >= 7; // Review weekly
      priority = 'low';
    }

    if (shouldReview) {
      cardsToReview.push({ ...card, priority });
    }
  });

  // Sort by priority (high -> medium -> low)
  return cardsToReview.sort((a, b) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });
}; 