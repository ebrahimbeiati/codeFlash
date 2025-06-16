export interface Flashcard {
  id: string;
  front: string;
  back: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  lastReviewed?: Date;
  nextReview?: Date;
  reviewCount: number;
  correctCount: number;
}

export interface FlashcardSet {
  id: string;
  title: string;
  description: string;
  cards: Flashcard[];
  category: string;
  createdAt: Date;
  updatedAt: Date;
} 