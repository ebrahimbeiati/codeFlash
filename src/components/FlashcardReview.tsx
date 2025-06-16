'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Flashcard } from './flashcards/Flashcard';
import { Button } from './ui/Button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/Card';
import { cn } from '@/lib/utils';

export type ReviewState = 'known' | 'review_later' | 'dont_know';

interface FlashcardReviewProps {
  cards: Array<{
    id: string;
    front: string;
    back: string;
  }>;
  title: string;
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
    <Card className={cn('w-full max-w-4xl mx-auto', className)}>
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
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
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button
              variant="outline"
              className="flex-1 sm:flex-none bg-green-50 hover:bg-green-100"
              onClick={() => handleReview('known')}
            >
              Known
            </Button>
            <Button
              variant="outline"
              className="flex-1 sm:flex-none bg-yellow-50 hover:bg-yellow-100"
              onClick={() => handleReview('review_later')}
            >
              Review Later
            </Button>
            <Button
              variant="outline"
              className="flex-1 sm:flex-none bg-red-50 hover:bg-red-100"
              onClick={() => handleReview('dont_know')}
            >
              Don't Know
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <div className="flex space-x-2">
          {cards.map((_, index) => (
            <motion.div
              key={index}
              className={cn(
                'w-2 h-2 rounded-full',
                {
                  'bg-primary': index === currentIndex,
                  'bg-muted': index !== currentIndex,
                  'bg-green-500': reviewStates[cards[index].id] === 'known',
                  'bg-yellow-500': reviewStates[cards[index].id] === 'review_later',
                  'bg-red-500': reviewStates[cards[index].id] === 'dont_know',
                }
              )}
              initial={{ scale: 0.8 }}
              animate={{ scale: index === currentIndex ? 1.2 : 1 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </CardFooter>
    </Card>
  );
} 