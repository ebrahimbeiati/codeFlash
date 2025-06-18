'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Flashcard } from './flashcards/Flashcard';
import { Button } from './ui/Button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/Card';

export type ReviewState = 'known' | 'review_later' | 'dont_know';

interface FlashcardReviewProps {
  cards: Array<{
    id: string;
    front: string;
    back: string;
  }>;
  title?: string;
  onReviewComplete: (results: Array<{ cardId: string; state: ReviewState }>) => void;
  className?: string;
}

export function FlashcardReview({ cards, title, onReviewComplete, className }: FlashcardReviewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewStates, setReviewStates] = useState<Record<string, ReviewState>>({});

  const currentCard = cards[currentIndex];
  const isLastCard = currentIndex === cards.length - 1;

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleReview = (state: ReviewState) => {
    setReviewStates(prev => ({
      ...prev,
      [currentCard.id]: state
    }));

    if (isLastCard) {
      const results = cards.map(card => ({
        cardId: card.id,
        state: reviewStates[card.id] || 'dont_know'
      }));
      onReviewComplete(results);
    } else {
      handleNext();
    }
  };

  return (
    <Card className={`w-full max-w-4xl mx-auto ${className || ''}`}>
      {title && (
        <CardHeader className="pb-4 sm:pb-6">
          <CardTitle className="text-center text-lg sm:text-xl md:text-2xl">{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent className="px-2 sm:px-6">
        <div className="space-y-4 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Flashcard
              front={currentCard.front}
              back={currentCard.back}
              onNext={handleNext}
              onPrevious={handlePrevious}
              isFirst={currentIndex === 0}
              isLast={isLastCard}
              totalCards={cards.length}
              currentIndex={currentIndex}
            />
          </motion.div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-4 sm:mt-8">
            <Button
              variant="outline"
              className="flex-1 sm:flex-none bg-green-50 hover:bg-green-100 text-sm sm:text-base h-10 sm:h-12"
              onClick={() => handleReview('known')}
            >
              Known
            </Button>
            <Button
              variant="outline"
              className="flex-1 sm:flex-none bg-yellow-50 hover:bg-yellow-100 text-sm sm:text-base h-10 sm:h-12"
              onClick={() => handleReview('review_later')}
            >
              Review Later
            </Button>
            <Button
              variant="outline"
              className="flex-1 sm:flex-none bg-red-50 hover:bg-red-100 text-sm sm:text-base h-10 sm:h-12"
              onClick={() => handleReview('dont_know')}
            >
              Don't Know
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center pt-2 sm:pt-4">
        <div className="flex space-x-1 sm:space-x-2">
          {cards.map((_, index) => {
            const isCurrent = index === currentIndex;
            const reviewState = reviewStates[cards[index].id];
            
            let dotClasses = 'w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full';
            
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
              />
            );
          })}
        </div>
      </CardFooter>
    </Card>
  );
} 