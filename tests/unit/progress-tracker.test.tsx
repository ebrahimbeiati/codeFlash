import { render, screen } from '@testing-library/react';
import { ProgressTracker } from '@/components/ProgressTracker';

describe('ProgressTracker Component', () => {
  const defaultProps = {
    streak: 5,
    xp: 150,
    level: 2,
  };

  describe('Component Rendering', () => {
    it('should render progress tracker with title', () => {
      render(<ProgressTracker {...defaultProps} />);
      
      expect(screen.getByText('Your Progress')).toBeInTheDocument();
    });

    it('should display current streak', () => {
      render(<ProgressTracker {...defaultProps} />);
      
      expect(screen.getByText('Current Streak')).toBeInTheDocument();
      expect(screen.getByText('5 days')).toBeInTheDocument();
    });

    it('should display level and XP', () => {
      render(<ProgressTracker {...defaultProps} />);
      
      expect(screen.getByText('Level 2')).toBeInTheDocument();
      // Level 2 to 3 requires 900 XP (3^2 * 100)
      expect(screen.getByText('150 / 900 XP')).toBeInTheDocument();
    });

    it('should display progress bar', () => {
      render(<ProgressTracker {...defaultProps} />);
      
      const progressBar = screen.getByRole('progressbar');
      expect(progressBar).toBeInTheDocument();
    });

    it('should display stats cards', () => {
      render(<ProgressTracker {...defaultProps} />);
      
      expect(screen.getByText('Cards Mastered')).toBeInTheDocument();
      expect(screen.getByText('Best Streak')).toBeInTheDocument();
    });
  });

  describe('Progress Calculations', () => {
    it('should calculate correct XP to next level', () => {
      render(<ProgressTracker streak={0} xp={100} level={1} />);
      
      // Level 1 to 2 requires 400 XP (2^2 * 100)
      expect(screen.getByText('100 / 400 XP')).toBeInTheDocument();
    });

    it('should calculate correct progress percentage', () => {
      render(<ProgressTracker streak={0} xp={200} level={1} />);
      
      // 200/400 = 50%
      const progressBar = screen.getByRole('progressbar');
      const progressFill = progressBar.querySelector('div');
      expect(progressFill).toHaveStyle({ width: '50%' });
    });

    it('should handle level 2 progress', () => {
      render(<ProgressTracker streak={0} xp={500} level={2} />);
      
      // Level 2 to 3 requires 900 XP (3^2 * 100)
      expect(screen.getByText('500 / 900 XP')).toBeInTheDocument();
    });

    it('should handle level 3 progress', () => {
      render(<ProgressTracker streak={0} xp={1000} level={3} />);
      
      // Level 3 to 4 requires 1600 XP (4^2 * 100)
      expect(screen.getByText('1000 / 1600 XP')).toBeInTheDocument();
    });
  });

  describe('Stats Display', () => {
    it('should calculate cards mastered correctly', () => {
      render(<ProgressTracker streak={0} xp={150} level={2} />);
      
      // 150 XP / 10 = 15 cards mastered
      expect(screen.getByText('15')).toBeInTheDocument();
    });

    it('should display best streak', () => {
      render(<ProgressTracker streak={3} bestStreak={7} xp={100} level={1} />);
      
      // Should show the higher of current streak or 7
      expect(screen.getByText('7')).toBeInTheDocument();
    });

    it('should display current streak when higher than 7', () => {
      render(<ProgressTracker streak={10} xp={100} level={1} />);
      
      // Use getAllByText since there are multiple "10" elements
      const tens = screen.getAllByText('10');
      expect(tens.length).toBeGreaterThan(0);
    });
  });

  describe('Edge Cases', () => {
    it('should handle zero XP', () => {
      render(<ProgressTracker streak={0} xp={0} level={1} />);
      
      expect(screen.getByText('0 / 400 XP')).toBeInTheDocument();
      // The component doesn't display percentage text, so we test the progress bar width
      const progressBar = screen.getByRole('progressbar');
      const progressFill = progressBar.querySelector('div');
      expect(progressFill).toHaveStyle({ width: '0%' });
    });

    it('should handle zero streak', () => {
      render(<ProgressTracker streak={0} xp={100} level={1} />);
      
      expect(screen.getByText('0 days')).toBeInTheDocument();
    });

    it('should handle very high XP values', () => {
      render(<ProgressTracker streak={0} xp={10000} level={10} />);
      
      // Level 10 to 11 requires 12100 XP (11^2 * 100)
      expect(screen.getByText('10000 / 12100 XP')).toBeInTheDocument();
    });

    it('should handle very high streak values', () => {
      render(<ProgressTracker streak={365} xp={100} level={1} />);
      
      expect(screen.getByText('365 days')).toBeInTheDocument();
    });
  });

  describe('Styling and Layout', () => {
    it('should apply custom className', () => {
      render(<ProgressTracker {...defaultProps} className="custom-class" />);
      
      const card = screen.getByText('Your Progress').closest('.custom-class');
      expect(card).toBeInTheDocument();
    });

    it('should have proper card structure', () => {
      render(<ProgressTracker {...defaultProps} />);
      
      // Should have card header and content
      expect(screen.getByText('Your Progress')).toBeInTheDocument();
      expect(screen.getByText('Current Streak')).toBeInTheDocument();
    });

    it('should display fire emoji for streak', () => {
      render(<ProgressTracker {...defaultProps} />);
      
      expect(screen.getByText('🔥')).toBeInTheDocument();
    });

    it('should have proper grid layout for stats', () => {
      render(<ProgressTracker {...defaultProps} />);
      
      // Find the grid container by looking for the parent of Cards Mastered
      const cardsMastered = screen.getByText('Cards Mastered');
      const gridContainer = cardsMastered.closest('.grid');
      expect(gridContainer).toHaveClass('grid-cols-2');
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA labels', () => {
      render(<ProgressTracker {...defaultProps} />);
      
      const progressBar = screen.getByRole('progressbar');
      expect(progressBar).toBeInTheDocument();
      expect(progressBar).toHaveAttribute('aria-label');
      expect(progressBar).toHaveAttribute('aria-valuenow');
      expect(progressBar).toHaveAttribute('aria-valuemin');
      expect(progressBar).toHaveAttribute('aria-valuemax');
    });

    it('should have semantic HTML structure', () => {
      render(<ProgressTracker {...defaultProps} />);
      
      // Should have proper heading structure
      expect(screen.getByText('Your Progress')).toBeInTheDocument();
      
      // Should have proper text content
      expect(screen.getByText('Keep it up!')).toBeInTheDocument();
    });
  });

  describe('Responsive Design', () => {
    it('should be responsive with max width', () => {
      render(<ProgressTracker {...defaultProps} />);
      
      const card = screen.getByText('Your Progress').closest('.max-w-md');
      expect(card).toBeInTheDocument();
    });

    it('should center content', () => {
      render(<ProgressTracker {...defaultProps} />);
      
      const card = screen.getByText('Your Progress').closest('.mx-auto');
      expect(card).toBeInTheDocument();
    });
  });
}); 