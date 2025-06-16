export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  category: string;
  timeLimit?: number; // in minutes
  passingScore: number;
  createdAt: Date;
  updatedAt: Date;
} 