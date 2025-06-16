import { create } from 'zustand';
import { Flashcard, FlashcardSet } from '@/types/flashcard';

interface FlashcardState {
  currentSet: FlashcardSet | null;
  currentCard: Flashcard | null;
  sets: FlashcardSet[];
  isLoading: boolean;
  error: string | null;
  setCurrentSet: (set: FlashcardSet) => void;
  setCurrentCard: (card: Flashcard) => void;
  updateCardProgress: (cardId: string, isCorrect: boolean) => void;
  loadSets: () => Promise<void>;
}

export const useFlashcardStore = create<FlashcardState>((set, get) => ({
  currentSet: null,
  currentCard: null,
  sets: [],
  isLoading: false,
  error: null,
  setCurrentSet: (set) => set({ currentSet: set }),
  setCurrentCard: (card) => set({ currentCard: card }),
  updateCardProgress: (cardId, isCorrect) => {
    const { currentCard } = get();
    if (currentCard && currentCard.id === cardId) {
      set({
        currentCard: {
          ...currentCard,
          reviewCount: currentCard.reviewCount + 1,
          correctCount: isCorrect ? currentCard.correctCount + 1 : currentCard.correctCount,
          lastReviewed: new Date(),
        },
      });
    }
  },
  loadSets: async () => {
    set({ isLoading: true, error: null });
    try {
      // TODO: Implement API call to load sets
      set({ isLoading: false });
    } catch (error) {
      set({ error: 'Failed to load flashcard sets', isLoading: false });
    }
  },
})); 