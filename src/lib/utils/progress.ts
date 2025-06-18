export interface UserProgress {
  streak: number;
  xp: number;
  level: number;
  lastStudyDate?: string;
}

const PROGRESS_KEY = 'codeflash_user_progress';

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