import { FlashcardSet } from './flashcard';
import { Quiz } from './quiz';

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  sets: FlashcardSet[];
  quiz: Quiz;
  category: string;
  createdAt: Date;
  updatedAt: Date;
} 