export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  preferences: {
    theme: 'light' | 'dark' | 'system';
    notifications: boolean;
    dailyGoal: number; // number of cards per day
  };
  progress: {
    streak: number;
    totalCardsReviewed: number;
    correctAnswers: number;
    xp: number;
  };
  createdAt: Date;
  updatedAt: Date;
} 