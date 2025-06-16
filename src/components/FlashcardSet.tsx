'use client';

import { useState } from 'react';
import { Flashcard } from './Flashcard';
import { Button } from './ui/Button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/Card';
import { cn } from '@/lib/utils';

interface FlashcardData {
  id: string;
  front: string;
  back: string;
}

interface FlashcardSetProps {
  cards: FlashcardData[];
  title: string;
  className?: string;
}

export function FlashcardSet({ cards, title, className }: FlashcardSetProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const currentCard = cards[currentIndex];

  return (
    <Card className={cn('w-full max-w-4xl mx-auto', className)}>
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Flashcard
            front={currentCard.front}
            back={currentCard.back}
            className="mb-8"
          />
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              {currentIndex + 1} of {cards.length}
            </span>
            <Button
              variant="outline"
              onClick={handleNext}
              disabled={currentIndex === cards.length - 1}
            >
              Next
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <div className="flex space-x-2">
          {cards.map((_, index) => (
            <Button
              key={index}
              variant={index === currentIndex ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setCurrentIndex(index);
                setIsFlipped(false);
              }}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
} 