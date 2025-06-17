'use client';

import { useParams } from 'next/navigation';
import { learningPaths } from '@/lib/data/learning-paths';
import { FlashcardReview } from '@/components/FlashcardReview';
import { Quiz } from '@/components/quiz/Quiz';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { useState } from 'react';

// Add type assertions
const TabsComponent = Tabs as any;
const TabsListComponent = TabsList as any;
const TabsTriggerComponent = TabsTrigger as any;
const TabsContentComponent = TabsContent as any;
const LinkComponent = Link as any;
const ButtonComponent = Button as any;

export default function LearningPathPage() {
  const params = useParams();
  const pathId = params.pathId as string;
  const path = learningPaths.find(p => p.id === pathId);
  const [quizXP, setQuizXP] = useState<number | null>(null);
  const [showReward, setShowReward] = useState(false);


  if (!path) {
    return (
      <div className="min-h-screen p-8 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Learning path not found</h1>
        <LinkComponent href="/">
          <ButtonComponent variant="outline">← Back to Home</ButtonComponent>
        </LinkComponent>
      </div>
    );
  }

  return (
    <main className="min-h-screen p-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <LinkComponent href="/">
            <ButtonComponent variant="outline">← Back to Home</ButtonComponent>
          </LinkComponent>
          <h1 className="text-4xl font-bold">{path.title}</h1>
        </div>

        <TabsComponent defaultValue="flashcards" className="w-full">
          <TabsListComponent className="grid w-full grid-cols-2">
            <TabsTriggerComponent value="flashcards">Flashcards</TabsTriggerComponent>
            <TabsTriggerComponent value="quiz">Quiz</TabsTriggerComponent>
          </TabsListComponent>
          
          <TabsContentComponent value="flashcards" className="space-y-4">
            {path.sets.map(set => (
              <div key={set.id} className="p-4 border rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">{set.title}</h2>
                <FlashcardReview
                  cards={set.cards}
                  title={set.title}
                  onReviewComplete={(results) => {
                    // TODO: Save progress to database
                  }}
                />
              </div>
            ))}
          </TabsContentComponent>
          
          <TabsContentComponent value="quiz" className="mt-6">
            {path.quiz && path.quiz.questions && path.quiz.questions.length > 0 ? (
              <>
                {showReward && quizXP !== null && (
                  <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-center text-xl font-semibold animate-bounce">
                    🎉 You earned {quizXP} XP!
                  </div>
                )}
                <Quiz
                  questions={path.quiz.questions}
                  onComplete={(score) => {
                    const xp = Math.round(score); // 1 XP per percent
                    setQuizXP(xp);
                    setShowReward(true);
                  }}
                />
              </>
            ) : (
              <div className="text-center text-muted-foreground">
                No quiz available for this learning path.
              </div>
            )}
          </TabsContentComponent>
        </TabsComponent>
      </div>
    </main>
  );
} 