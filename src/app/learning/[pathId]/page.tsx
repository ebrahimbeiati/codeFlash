'use client';

import { useParams } from 'next/navigation';
import { FlashcardReview } from '@/components/FlashcardReview';
import { Quiz } from '@/components/quiz/Quiz';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { Button } from '@/components/ui/Button';
import { ProgressTracker } from '@/components/ProgressTracker';
import { getUserProgress, addXP, updateStreak } from '@/lib/utils/progress';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Add type assertions for React 19 compatibility
const TabsComponent = Tabs as any;
const TabsListComponent = TabsList as any;
const TabsTriggerComponent = TabsTrigger as any;
const TabsContentComponent = TabsContent as any;
const LinkComponent = Link as any;
const ButtonComponent = Button as any;

interface LearningPath {
  id: string;
  title: string;
  description: string;
  level: string;
  difficulty?: string;
  estimatedTime?: string;
  topics?: string[];
  sets: Array<{
    id: string;
    title: string;
    description: string;
    cards: Array<{
      id: string;
      front: string;
      back: string;
    }>;
  }>;
  quizzes: Array<{
    id: string;
    title: string;
    description: string;
    questions: Array<{
      id: string;
      question: string;
      options: string[];
      correctAnswer: number;
    }>;
  }>;
}

export default function LearningPathPage() {
  const params = useParams();
  const pathId = params.pathId as string;
  const [path, setPath] = useState<LearningPath | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quizXP, setQuizXP] = useState<number | null>(null);
  const [showReward, setShowReward] = useState(false);
  const [userProgress, setUserProgress] = useState(getUserProgress());

  useEffect(() => {
    // Update progress when component mounts
    setUserProgress(getUserProgress());
  }, []);

  useEffect(() => {
    const fetchLearningPath = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/learning-paths/${pathId}`);
        
        if (!response.ok) {
          throw new Error('Learning path not found');
        }
        
        const data = await response.json();
        setPath(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load learning path');
      } finally {
        setLoading(false);
      }
    };

    if (pathId) {
      fetchLearningPath();
    }
  }, [pathId]);

  const handleQuizComplete = (score: number) => {
    const xp = Math.round(score); // 1 XP per percent
    setQuizXP(xp);
    setShowReward(true);
    
    // Update user progress
    const updatedProgress = addXP(xp);
    setUserProgress(updatedProgress);
    
    // Update streak when user studies
    updateStreak();
  };

  if (loading) {
    return (
      <div className="min-h-screen p-8 flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        <span className="ml-2 text-sm text-muted-foreground">Loading learning path...</span>
      </div>
    );
  }

  if (error || !path) {
    return (
      <div className="min-h-screen p-8 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Learning path not found</h1>
        <LinkComponent href="/">
          <ButtonComponent variant="outline" className="text-xs flex sm:text-sm !px-2 !py-1 bg-cyan-300">← Back to Home</ButtonComponent>
        </LinkComponent>
      </div>
    );
  }

  // Get the first quiz (or create a default one if none exists)
  const quiz = path.quizzes && path.quizzes.length > 0 ? path.quizzes[0] : null;

  return (
    <main className="min-h-screen p-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <LinkComponent href="/">
            <ButtonComponent variant="outline" className="text-xs flex sm:text-sm !px-2 !py-1 bg-cyan-300">← Back to Home</ButtonComponent>
          </LinkComponent>
          <h1 className="text-2xl sm:text-4xl font-bold">{path.title}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <TabsComponent defaultValue="flashcards" className="w-full">
              <TabsListComponent className="grid w-full grid-cols-2">
                <TabsTriggerComponent value="flashcards">Flashcards</TabsTriggerComponent>
                <TabsTriggerComponent value="quiz">Quiz</TabsTriggerComponent>
              </TabsListComponent>
              
              <TabsContentComponent value="flashcards" className="space-y-4">
                {path.sets.map(set => (
                  <div key={set.id} className="p-4 border rounded-lg">
                    <FlashcardReview
                      cards={set.cards}
                      title={set.title}
                      pathId={pathId}
                      setId={set.id}
                      onReviewComplete={() => {
                        // TODO: Save progress to database
                        // Update streak when user studies
                        const updatedProgress = updateStreak();
                        setUserProgress(updatedProgress);
                      }}
                    />
                  </div>
                ))}
              </TabsContentComponent>
              
              <TabsContentComponent value="quiz" className="mt-6">
                {quiz && quiz.questions && quiz.questions.length > 0 ? (
                  <>
                    {showReward && quizXP !== null && (
                      <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-center">
                        <div className="text-xl font-semibold animate-bounce mb-2">
                          🎉 You earned {quizXP} XP!
                        </div>
                        <div className="text-sm">
                          New total: {userProgress.xp} XP • Level {userProgress.level}
                        </div>
                      </div>
                    )}
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold mb-2">{quiz.title}</h2>
                      <p className="text-muted-foreground">{quiz.description}</p>
                    </div>
                    <Quiz
                      questions={quiz.questions}
                      onComplete={handleQuizComplete}
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

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ProgressTracker 
              streak={userProgress.streak}
              xp={userProgress.xp}
              level={userProgress.level}
            />
          </div>
        </div>
      </div>
    </main>
  );
} 