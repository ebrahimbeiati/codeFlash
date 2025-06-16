import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function calculateNextReview(card: { reviewCount: number; correctCount: number }): Date {
  const now = new Date();
  const successRate = card.correctCount / card.reviewCount;
  
  // Simple spaced repetition algorithm
  let daysToAdd = 1;
  if (successRate > 0.8) {
    daysToAdd = 7;
  } else if (successRate > 0.6) {
    daysToAdd = 3;
  } else if (successRate > 0.4) {
    daysToAdd = 2;
  }
  
  return new Date(now.setDate(now.getDate() + daysToAdd));
} 