import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FlashcardReview } from '@/components/FlashcardReview';

// Mock the progress utilities
jest.mock('@/lib/utils/progress', () => ({
  getCardReviewState: jest.fn(),
  updateCardReviewState: jest.fn(),
  getSetProgress: jest.fn(),
  updateSetCurrentIndex: jest.fn(),
  markSetCompleted: jest.fn(),
  getProgressStats: jest.fn(),
}));

// Mock the Flashcard component
jest.mock('@/components/flashcards/Flashcard', () => ({
  Flashcard: () => <div data-testid="mock-flashcard">Mock Flashcard</div>,
}));

import {
  getSetProgress,
  getProgressStats,
} from '@/lib/utils/progress';

describe('FlashcardReview Component', () => {
  const mockCards = [
    {
      id: 'card-1',
      front: 'What is JavaScript?',
      back: 'JavaScript is a programming language used for web development.',
    },
    {
      id: 'card-2',
      front: 'What is React?',
      back: 'React is a JavaScript library for building user interfaces.',
    },
  ];

  const mockProps = {
    cards: mockCards,
    title: 'JavaScript Basics',
    pathId: 'javascript-fundamentals',
    setId: 'js-basics',
    onReviewComplete: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    
    // Default mock implementations
    (getSetProgress as jest.Mock).mockReturnValue({
      currentIndex: 0,
      completed: false,
    });
    
    (getProgressStats as jest.Mock).mockReturnValue({
      totalCards: 2,
      knownCards: 0,
      reviewLaterCards: 0,
      dontKnowCards: 0,
      completionPercentage: 0,
      currentIndex: 0,
      completed: false,
    });
  });

  describe('Component Rendering', () => {
    it('should render with title', () => {
      render(<FlashcardReview {...mockProps} />);
      expect(screen.getByText('JavaScript Basics')).toBeInTheDocument();
    });

    it('should render flashcard component', () => {
      render(<FlashcardReview {...mockProps} />);
      expect(screen.getByTestId('mock-flashcard')).toBeInTheDocument();
    });

    it('should render review mode button', () => {
      render(<FlashcardReview {...mockProps} />);
      expect(screen.getByText('Review Mode')).toBeInTheDocument();
    });

    it('should render show progress button', () => {
      render(<FlashcardReview {...mockProps} />);
      expect(screen.getByText('Show Progress')).toBeInTheDocument();
    });
  });

  describe('Progress Loading', () => {
    it('should load set progress on mount', () => {
      render(<FlashcardReview {...mockProps} />);
      expect(getSetProgress).toHaveBeenCalledWith('javascript-fundamentals', 'js-basics');
    });

    it('should load progress stats on mount', () => {
      render(<FlashcardReview {...mockProps} />);
      expect(getProgressStats).toHaveBeenCalledWith('javascript-fundamentals', 'js-basics');
    });
  });

  describe('Review Buttons', () => {
    it('should render Known button', () => {
      render(<FlashcardReview {...mockProps} />);
      expect(screen.getByRole('button', { name: 'Known' })).toBeInTheDocument();
    });

    it('should render Review Later button', () => {
      render(<FlashcardReview {...mockProps} />);
      expect(screen.getByRole('button', { name: 'Review Later' })).toBeInTheDocument();
    });

    it('should render Dont Know button', () => {
      render(<FlashcardReview {...mockProps} />);
      expect(screen.getByRole('button', { name: "Don't Know" })).toBeInTheDocument();
    });
  });

  describe('Navigation Dots', () => {
    it('should render navigation dots for each card', () => {
      render(<FlashcardReview {...mockProps} />);
      
      // Should have 2 dots for 2 cards
      const dots = screen.getAllByTitle(/Card \d/);
      expect(dots).toHaveLength(2);
    });

    it('should show correct card titles in dots', () => {
      render(<FlashcardReview {...mockProps} />);
      
      expect(screen.getByTitle('Card 1')).toBeInTheDocument();
      expect(screen.getByTitle('Card 2')).toBeInTheDocument();
    });
  });

  describe('Progress Legend', () => {
    it('should show progress legend', () => {
      render(<FlashcardReview {...mockProps} />);
      
      expect(screen.getAllByText('Known').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Review Later').length).toBeGreaterThan(0);
      expect(screen.getAllByText("Don't Know").length).toBeGreaterThan(0);
    });

    it('should show navigation instruction', () => {
      render(<FlashcardReview {...mockProps} />);
      expect(screen.getByText('Click on dots to navigate to specific cards')).toBeInTheDocument();
    });
  });
}); 