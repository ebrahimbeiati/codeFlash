import {
  getUserProgress,
  saveUserProgress,
  addXP,
  updateStreak,
  getDefaultProgress,
  getFlashcardProgress,
  saveFlashcardProgress,
  updateCardReviewState,
  getCardReviewState,
  getSetProgress,
  updateSetCurrentIndex,
  markSetCompleted,
  getProgressStats,
} from '@/lib/utils/progress';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('Progress Utils', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
  });

  describe('getDefaultProgress', () => {
    it('should return default progress values', () => {
      const progress = getDefaultProgress();
      expect(progress).toEqual({
        streak: 0,
        xp: 0,
        level: 1,
        lastStudyDate: undefined,
      });
    });
  });

  describe('getUserProgress', () => {
    it('should return default progress when localStorage is empty', () => {
      localStorageMock.getItem.mockReturnValue(null);
      const progress = getUserProgress();
      expect(progress).toEqual(getDefaultProgress());
    });

    it('should return stored progress when available', () => {
      const storedProgress = {
        streak: 5,
        xp: 150,
        level: 2,
        lastStudyDate: '2024-01-01',
      };
      localStorageMock.getItem.mockReturnValue(JSON.stringify(storedProgress));
      const progress = getUserProgress();
      expect(progress).toEqual(storedProgress);
    });

    it('should handle localStorage errors gracefully', () => {
      localStorageMock.getItem.mockImplementation(() => {
        throw new Error('localStorage error');
      });
      const progress = getUserProgress();
      expect(progress).toEqual(getDefaultProgress());
    });

    it('should handle invalid JSON gracefully', () => {
      localStorageMock.getItem.mockReturnValue('invalid json');
      const progress = getUserProgress();
      expect(progress).toEqual(getDefaultProgress());
    });
  });

  describe('saveUserProgress', () => {
    it('should save progress to localStorage', () => {
      const progress = {
        streak: 3,
        xp: 100,
        level: 2,
        lastStudyDate: '2024-01-01',
      };
      saveUserProgress(progress);
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'codeflash_user_progress',
        JSON.stringify(progress)
      );
    });

    it('should handle localStorage errors gracefully', () => {
      localStorageMock.setItem.mockImplementation(() => {
        throw new Error('localStorage error');
      });
      const progress = { streak: 1, xp: 50, level: 1 };
      expect(() => saveUserProgress(progress)).not.toThrow();
    });
  });

  describe('addXP', () => {
    it('should add XP and calculate correct level', () => {
      localStorageMock.getItem.mockReturnValue(JSON.stringify({
        streak: 0,
        xp: 100,
        level: 1,
      }));

      const updated = addXP(50);
      expect(updated.xp).toBe(150);
      expect(updated.level).toBe(2); // sqrt(150/100) + 1 = 2
    });

    it('should handle level calculation correctly', () => {
      localStorageMock.getItem.mockReturnValue(JSON.stringify({
        streak: 0,
        xp: 400,
        level: 2,
      }));

      const updated = addXP(100);
      expect(updated.xp).toBe(500);
      expect(updated.level).toBe(3); // sqrt(500/100) + 1 = 3
    });

    it('should preserve other progress properties', () => {
      localStorageMock.getItem.mockReturnValue(JSON.stringify({
        streak: 5,
        xp: 100,
        level: 1,
        lastStudyDate: '2024-01-01',
      }));

      const updated = addXP(50);
      expect(updated.streak).toBe(5);
      expect(updated.lastStudyDate).toBe('2024-01-01');
    });
  });

  describe('updateStreak', () => {
    beforeEach(() => {
      // Mock Date.now() to return a fixed date
      jest.useFakeTimers();
      jest.setSystemTime(new Date('2024-01-15'));
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('should start new streak when no previous study date', () => {
      localStorageMock.getItem.mockReturnValue(JSON.stringify({
        streak: 0,
        xp: 100,
        level: 1,
      }));

      const updated = updateStreak();
      expect(updated.streak).toBe(1);
      expect(updated.lastStudyDate).toBe('Mon Jan 15 2024');
    });

    it('should continue streak when studying consecutive days', () => {
      localStorageMock.getItem.mockReturnValue(JSON.stringify({
        streak: 3,
        xp: 100,
        level: 1,
        lastStudyDate: 'Sun Jan 14 2024',
      }));

      const updated = updateStreak();
      expect(updated.streak).toBe(4);
      expect(updated.lastStudyDate).toBe('Mon Jan 15 2024');
    });

    it('should reset streak when missing a day', () => {
      localStorageMock.getItem.mockReturnValue(JSON.stringify({
        streak: 5,
        xp: 100,
        level: 1,
        lastStudyDate: 'Sat Jan 13 2024',
      }));

      const updated = updateStreak();
      expect(updated.streak).toBe(1);
      expect(updated.lastStudyDate).toBe('Mon Jan 15 2024');
    });

    it('should not update streak when already studied today', () => {
      localStorageMock.getItem.mockReturnValue(JSON.stringify({
        streak: 3,
        xp: 100,
        level: 1,
        lastStudyDate: 'Mon Jan 15 2024',
      }));

      const updated = updateStreak();
      expect(updated.streak).toBe(3);
      expect(updated.lastStudyDate).toBe('Mon Jan 15 2024');
    });
  });

  describe('Flashcard Progress', () => {
    const pathId = 'javascript-fundamentals';
    const setId = 'js-basics';

    beforeEach(() => {
      localStorageMock.getItem.mockReturnValue(null);
    });

    describe('getFlashcardProgress', () => {
      it('should return empty object when no progress exists', () => {
        const progress = getFlashcardProgress(pathId);
        expect(progress).toEqual({});
      });

      it('should return stored progress when available', () => {
        const storedProgress = {
          [setId]: {
            setId,
            pathId,
            currentIndex: 5,
            reviewStates: {},
            lastAccessed: '2024-01-01T00:00:00.000Z',
            completed: false,
          },
        };
        localStorageMock.getItem.mockReturnValue(JSON.stringify(storedProgress));
        const progress = getFlashcardProgress(pathId);
        expect(progress).toEqual(storedProgress);
      });
    });

    describe('updateCardReviewState', () => {
      it('should create new set progress if it does not exist', () => {
        updateCardReviewState(pathId, setId, 'card-1', 'known');
        
        expect(localStorageMock.setItem).toHaveBeenCalledWith(
          'codeflash_flashcard_progress_javascript-fundamentals',
          expect.stringContaining('card-1')
        );
      });

      it('should update existing card review state', () => {
        const existingProgress = {
          [setId]: {
            setId,
            pathId,
            currentIndex: 0,
            reviewStates: {
              'card-1': {
                cardId: 'card-1',
                state: 'dont_know',
                timestamp: '2024-01-01T00:00:00.000Z',
                reviewCount: 1,
                correctCount: 0,
              },
            },
            lastAccessed: '2024-01-01T00:00:00.000Z',
            completed: false,
          },
        };
        localStorageMock.getItem.mockReturnValue(JSON.stringify(existingProgress));

        updateCardReviewState(pathId, setId, 'card-1', 'known');
        
        const savedData = JSON.parse(localStorageMock.setItem.mock.calls[0][1]);
        expect(savedData[setId].reviewStates['card-1'].state).toBe('known');
        expect(savedData[setId].reviewStates['card-1'].reviewCount).toBe(2);
        expect(savedData[setId].reviewStates['card-1'].correctCount).toBe(1);
      });
    });

    describe('getCardReviewState', () => {
      it('should return null when card state does not exist', () => {
        const state = getCardReviewState(pathId, setId, 'card-1');
        expect(state).toBeNull();
      });

      it('should return card state when it exists', () => {
        const existingProgress = {
          [setId]: {
            setId,
            pathId,
            currentIndex: 0,
            reviewStates: {
              'card-1': {
                cardId: 'card-1',
                state: 'known',
                timestamp: '2024-01-01T00:00:00.000Z',
                reviewCount: 2,
                correctCount: 1,
              },
            },
            lastAccessed: '2024-01-01T00:00:00.000Z',
            completed: false,
          },
        };
        localStorageMock.getItem.mockReturnValue(JSON.stringify(existingProgress));

        const state = getCardReviewState(pathId, setId, 'card-1');
        expect(state).toEqual({
          cardId: 'card-1',
          state: 'known',
          timestamp: '2024-01-01T00:00:00.000Z',
          reviewCount: 2,
          correctCount: 1,
        });
      });
    });

    describe('markSetCompleted', () => {
      it('should mark set as completed', () => {
        // First create some progress
        updateCardReviewState(pathId, setId, 'card-1', 'known');
        markSetCompleted(pathId, setId);
        
        const savedData = JSON.parse(localStorageMock.setItem.mock.calls[localStorageMock.setItem.mock.calls.length - 1][1]);
        expect(savedData[setId].completed).toBe(true);
      });
    });

    describe('getProgressStats', () => {
      it('should return correct progress statistics', () => {
        const existingProgress = {
          [setId]: {
            setId,
            pathId,
            currentIndex: 5,
            reviewStates: {
              'card-1': { state: 'known', reviewCount: 2, correctCount: 2 },
              'card-2': { state: 'review_later', reviewCount: 1, correctCount: 0 },
              'card-3': { state: 'dont_know', reviewCount: 1, correctCount: 0 },
            },
            lastAccessed: '2024-01-01T00:00:00.000Z',
            completed: false,
          },
        };
        localStorageMock.getItem.mockReturnValue(JSON.stringify(existingProgress));

        const stats = getProgressStats(pathId, setId);
        expect(stats).toEqual({
          totalCards: 3,
          reviewedCards: 3,
          knownCards: 1,
          reviewLaterCards: 1,
          dontKnowCards: 1,
          completionPercentage: 100,
        });
      });

      it('should return default stats when no progress exists', () => {
        const stats = getProgressStats(pathId, setId);
        expect(stats).toEqual({
          totalCards: 0,
          reviewedCards: 0,
          knownCards: 0,
          reviewLaterCards: 0,
          dontKnowCards: 0,
          completionPercentage: 0,
        });
      });
    });
  });
}); 