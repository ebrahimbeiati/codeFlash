'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flashcard } from './flashcards/Flashcard';
import { Button } from './ui/Button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/Card';
import { 
  getCardReviewState, 
  updateCardReviewState, 
  getSetProgress, 
  updateSetCurrentIndex,
  markSetCompleted,
  getProgressStats,
  type FlashcardReviewState 
} from '@/lib/utils/progress';

// Add type assertions for React 19 compatibility
const CardComponent = Card as any;
const CardContentComponent = CardContent as any;
const CardFooterComponent = CardFooter as any;
const CardHeaderComponent = CardHeader as any;
const CardTitleComponent = CardTitle as any;
const ButtonComponent = Button as any;

export type ReviewState = 'known' | 'review_later' | 'dont_know';

interface FlashcardReviewProps {
  cards: Array<{
    id: string;
    front: string;
    back: string;
  }>;
  title?: string;
  pathId: string;
  setId: string;
  onReviewComplete: (results: Array<{ cardId: string; state: ReviewState }>) => void;
  className?: string;
}

export function FlashcardReview({ 
  cards, 
  title, 
  pathId, 
  setId, 
  onReviewComplete, 
  className 
}: FlashcardReviewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewStates, setReviewStates] = useState<Record<string, ReviewState>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [showProgress, setShowProgress] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);

  const currentCard = cards[currentIndex];
  const isLastCard = currentIndex === cards.length - 1;
  const progressStats = getProgressStats(pathId, setId);

  // Filter cards for review mode
  const cardsToShow = reviewMode 
    ? cards.filter((_, index) => {
        const reviewState = reviewStates[cards[index].id];
        return reviewState === 'review_later' || reviewState === 'dont_know';
      })
    : cards;

  // Ensure currentIndex is within bounds
  const safeCurrentIndex = Math.min(currentIndex, cardsToShow.length - 1);
  const currentCardInFiltered = cardsToShow[safeCurrentIndex] || cardsToShow[0];
  const isLastCardInFiltered = safeCurrentIndex === cardsToShow.length - 1;

  // Debug logging
  console.log('FlashcardReview Debug:', {
    cardsLength: cards.length,
    cardsToShowLength: cardsToShow.length,
    currentIndex,
    safeCurrentIndex,
    currentCardInFiltered: !!currentCardInFiltered,
    reviewMode
  });

  // Load saved progress when component mounts
  useEffect(() => {
    const loadSavedProgress = () => {
      try {
        // Load saved current index
        const savedProgress = getSetProgress(pathId, setId);
        if (savedProgress) {
          setCurrentIndex(savedProgress.currentIndex);
        }

        // Load saved review states
        const loadedReviewStates: Record<string, ReviewState> = {};
        cards.forEach(card => {
          const savedState = getCardReviewState(pathId, setId, card.id);
          if (savedState) {
            loadedReviewStates[card.id] = savedState.state;
          }
        });
        setReviewStates(loadedReviewStates);
      } catch (error) {
        console.error('Error loading saved progress:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadSavedProgress();
  }, [pathId, setId, cards]);

  const handleNext = () => {
    if (currentIndex < cardsToShow.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      updateSetCurrentIndex(pathId, setId, newIndex);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      updateSetCurrentIndex(pathId, setId, newIndex);
    }
  };

  const handleReview = (state: ReviewState) => {
    // Update local state
    setReviewStates(prev => ({
      ...prev,
      [currentCardInFiltered.id]: state
    }));

    // Save to localStorage
    updateCardReviewState(pathId, setId, currentCardInFiltered.id, state);

    if (isLastCardInFiltered) {
      // Mark set as completed
      markSetCompleted(pathId, setId);
      
      const results = cards.map(card => ({
        cardId: card.id,
        state: reviewStates[card.id] || 'dont_know'
      }));
      onReviewComplete(results);
    } else {
      handleNext();
    }
  };

  const toggleReviewMode = () => {
    setReviewMode(!reviewMode);
    setCurrentIndex(0); // Reset to first card when switching modes
  };

  // All early returns moved here, after all hooks
  if (isLoading) {
    return (
      <CardComponent className={`w-full max-w-4xl mx-auto ${className || ''}`}>
        <CardContentComponent className="px-2 sm:px-6 py-8">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <span className="ml-2 text-sm text-muted-foreground">Loading progress...</span>
          </div>
        </CardContentComponent>
      </CardComponent>
    );
  }

  // If no cards to show in review mode, show a message
  if (reviewMode && cardsToShow.length === 0) {
    return (
      <CardComponent className={`w-full max-w-4xl mx-auto ${className || ''}`}>
        <CardContentComponent className="px-2 sm:px-6 py-8">
          <div className="text-center">
            <div className="text-2xl mb-4">🎉</div>
            <h3 className="text-lg font-semibold mb-2">No cards to review!</h3>
            <p className="text-muted-foreground mb-4">
              All cards in this set are marked as "Known". Great job!
            </p>
            <ButtonComponent
              variant="outline"
              onClick={() => setReviewMode(false)}
            >
              Switch to All Cards
            </ButtonComponent>
          </div>
        </CardContentComponent>
      </CardComponent>
    );
  }

  // Guard against undefined currentCardInFiltered
  if (!currentCardInFiltered) {
    return (
      <CardComponent className={`w-full max-w-4xl mx-auto ${className || ''}`}>
        <CardContentComponent className="px-2 sm:px-6 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <span className="text-sm text-muted-foreground">Loading cards...</span>
          </div>
        </CardContentComponent>
      </CardComponent>
    );
  }

  return (
    <CardComponent className={`w-full max-w-4xl mx-auto ${className || ''}`}>
      {title && (
        <CardHeaderComponent className="pb-4 sm:pb-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <CardTitleComponent className="text-center text-lg sm:text-xl md:text-2xl">{title}</CardTitleComponent>
            <div className="flex gap-2">
              <ButtonComponent
                variant={reviewMode ? "default" : "outline"}
                size="sm"
                onClick={toggleReviewMode}
                className="text-xs"
              >
                {reviewMode ? 'All Cards' : 'Review Mode'}
              </ButtonComponent>
              <ButtonComponent
                variant="outline"
                size="sm"
                onClick={() => setShowProgress(!showProgress)}
                className="text-xs"
              >
                {showProgress ? 'Hide Progress' : 'Show Progress'}
              </ButtonComponent>
            </div>
          </div>
          {reviewMode && (
            <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="text-sm text-yellow-800 text-center">
                Review Mode: Showing only cards marked as "Review Later" or "Don't Know" 
                ({cardsToShow.length} of {cards.length} cards)
              </div>
            </div>
          )}
          {showProgress && (
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">{progressStats.knownCards}</div>
                  <div className="text-xs text-muted-foreground">Known</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">{progressStats.reviewLaterCards}</div>
                  <div className="text-xs text-muted-foreground">Review Later</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">{progressStats.dontKnowCards}</div>
                  <div className="text-xs text-muted-foreground">Don't Know</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">{progressStats.completionPercentage}%</div>
                  <div className="text-xs text-muted-foreground">Complete</div>
                </div>
              </div>
            </div>
          )}
        </CardHeaderComponent>
      )}
      <CardContentComponent className="px-2 sm:px-6">
        <div className="space-y-4 sm:space-y-6">
          {/* Additional safety check */}
          {!currentCardInFiltered ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <span className="text-sm text-muted-foreground">Loading card...</span>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Flashcard
                front={currentCardInFiltered.front}
                back={currentCardInFiltered.back}
                onNext={handleNext}
                onPrevious={handlePrevious}
                isFirst={currentIndex === 0}
                isLast={isLastCardInFiltered}
                totalCards={cardsToShow.length}
                currentIndex={currentIndex}
              />
            </motion.div>
          )}
          
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-4 sm:mt-8">
            <ButtonComponent
              variant="outline"
              className="flex-1 sm:flex-none bg-green-50 hover:bg-green-100 text-sm sm:text-base h-10 sm:h-12"
              onClick={() => handleReview('known')}
            >
              Known
            </ButtonComponent>
            <ButtonComponent
              variant="outline"
              className="flex-1 sm:flex-none bg-yellow-50 hover:bg-yellow-100 text-sm sm:text-base h-10 sm:h-12"
              onClick={() => handleReview('review_later')}
            >
              Review Later
            </ButtonComponent>
            <ButtonComponent
              variant="outline"
              className="flex-1 sm:flex-none bg-red-50 hover:bg-red-100 text-sm sm:text-base h-10 sm:h-12"
              onClick={() => handleReview('dont_know')}
            >
              Don't Know
            </ButtonComponent>
          </div>
        </div>
      </CardContentComponent>
      <CardFooterComponent className="flex justify-center pt-2 sm:pt-4">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex space-x-1 sm:space-x-2">
            {cardsToShow.map((_, index) => {
              const isCurrent = index === currentIndex;
              const reviewState = reviewStates[cardsToShow[index].id];
              
              let dotClasses = 'w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full cursor-pointer transition-all duration-200 hover:scale-110';
              
              if (isCurrent) {
                dotClasses += ' bg-primary';
              } else if (reviewState === 'known') {
                dotClasses += ' bg-green-500';
              } else if (reviewState === 'review_later') {
                dotClasses += ' bg-yellow-500';
              } else if (reviewState === 'dont_know') {
                dotClasses += ' bg-red-500';
              } else {
                dotClasses += ' bg-muted';
              }
              
              return (
                <motion.div
                  key={index}
                  className={dotClasses}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: isCurrent ? 1.2 : 1 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => {
                    if (!isLoading && index !== currentIndex) {
                      setCurrentIndex(index);
                      updateSetCurrentIndex(pathId, setId, index);
                    }
                  }}
                  title={`Card ${index + 1}${reviewState ? ` - ${reviewState.replace('_', ' ')}` : ''}`}
                />
              );
            })}
          </div>
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Known</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <span>Review Later</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <span>Don't Know</span>
            </div>
          </div>
          <div className="text-xs text-muted-foreground text-center">
            Click on dots to navigate to specific cards
          </div>
        </div>
      </CardFooterComponent>
    </CardComponent>
  );
} 