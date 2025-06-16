'use client';

import { useState } from 'react';
import { FlashcardReview, ReviewState } from '@/components/FlashcardReview';
import { ProgressTracker } from '@/components/ProgressTracker';
import { LearningPathCard } from '@/components/LearningPathCard';
import { learningPaths } from '@/lib/data/learningPaths';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export function HomeContent() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [selectedSet, setSelectedSet] = useState<string | null>(null);
  const [streak, setStreak] = useState(3);
  const [xp, setXp] = useState(450);
  const [level, setLevel] = useState(2);

  const currentPath = selectedPath ? learningPaths.find(p => p.id === selectedPath) : null;
  const currentSet = currentPath?.sets.find(s => s.id === selectedSet);

  const handleReviewComplete = (results: Array<{ cardId: string; state: ReviewState }>) => {
    // Calculate XP based on review results
    const newXp = results.reduce((total, result) => {
      switch (result.state) {
        case 'known':
          return total + 50;
        case 'review_later':
          return total + 25;
        case 'dont_know':
          return total + 10;
        default:
          return total;
      }
    }, xp);

    setXp(newXp);
    
    // Update level if XP threshold is reached
    const newLevel = Math.floor(Math.sqrt(newXp / 100));
    if (newLevel > level) {
      setLevel(newLevel);
    }

    // Update streak (in a real app, this would check if the user completed their daily review)
    setStreak(prev => prev + 1);
  };

  const handleBack = () => {
    if (selectedSet) {
      setSelectedSet(null);
    } else if (selectedPath) {
      setSelectedPath(null);
    }
  };

  if (selectedPath && currentPath && currentSet) {
    return (
      <main className="min-h-screen p-8 bg-background">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={handleBack}>
              ← Back
            </Button>
            <h1 className="text-4xl font-bold">
              {currentPath.title} - {currentSet.title}
            </h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <FlashcardReview
                cards={currentSet.cards}
                title={currentSet.title}
                onReviewComplete={handleReviewComplete}
              />
            </div>
            
            <div>
              <ProgressTracker
                streak={streak}
                xp={xp}
                level={level}
              />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (selectedPath && currentPath) {
    return (
      <main className="min-h-screen p-8 bg-background">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={handleBack}>
              ← Back
            </Button>
            <h1 className="text-4xl font-bold">{currentPath.title}</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentPath.sets.map(set => (
              <Card
                key={set.id}
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedSet(set.id)}
              >
                <h2 className="text-2xl font-semibold mb-2">{set.title}</h2>
                <p className="text-muted-foreground mb-4">{set.description}</p>
                <div className="text-sm text-muted-foreground">
                  {set.cards.length} cards
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          CodeFlash Learning Paths
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningPaths.map(path => (
            <LearningPathCard
              key={path.id}
              path={path}
              onSelect={setSelectedPath}
            />
          ))}
        </div>
      </div>
    </main>
  );
} 