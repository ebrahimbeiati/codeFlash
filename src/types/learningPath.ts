import { FlashcardSet } from './flashcard';
import { Quiz } from './quiz';

 
export interface LearningPath {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  sets: FlashcardSet[];
  quiz: {
    questions: Array<{
      id: string;
      question: string;
      options: string[];
      correctAnswer: number;
    }>;
  };
} 