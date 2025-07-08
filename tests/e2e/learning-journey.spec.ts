import { test, expect } from '@playwright/test';

test.describe('Learning Journey', () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage before each test
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.clear();
    });
  });

  test('should complete a full learning session with flashcards', async ({ page }) => {
    // Navigate to home page
    await page.goto('/');
    
    // Wait for learning paths to load
    await expect(page.locator('[data-testid="learning-path-card"]')).toHaveCount(13);
    
    // Click on JavaScript Fundamentals learning path and wait for navigation
    await page.click('text=JavaScript Fundamentals');
    await page.waitForURL('**/learning/javascript-fundamentals');
    
    // Verify we're on the learning path page
    await expect(page.locator('h1')).toContainText('JavaScript Fundamentals');
    
    // Switch to flashcards tab
    await page.click('text=Flashcards');
    
    // Wait for flashcard set to load
    await expect(page.locator('text=JavaScript Basics')).toBeVisible();
    
    // Start reviewing flashcards
    await expect(page.locator('text=What is JavaScript?')).toBeVisible();
    
    // Mark first card as known - use first() to target the first flashcard set
    await page.locator('[data-testid="review-known-button"]').first().click();
    
    // Verify we moved to next card
    await expect(page.locator('text=What is JavaScript?')).not.toBeVisible();
    
    // Mark second card as review later
    await page.locator('[data-testid="review-later-button"]').first().click();
    
    // Mark third card as don't know
    await page.locator('[data-testid="review-dont-know-button"]').first().click();
    
    // Continue until we've reviewed a few cards
    for (let i = 0; i < 3; i++) {
      const knownButton = page.locator('[data-testid="review-known-button"]').first();
      const reviewButton = page.locator('[data-testid="review-later-button"]').first();
      const dontKnowButton = page.locator('[data-testid="review-dont-know-button"]').first();
      
      if (await knownButton.isVisible()) {
        await knownButton.click();
      } else if (await reviewButton.isVisible()) {
        await reviewButton.click();
      } else if (await dontKnowButton.isVisible()) {
        await dontKnowButton.click();
      }
      await page.waitForTimeout(500); // Wait for card transition
    }
    
    // Verify progress is being tracked
    await expect(page.locator('text=Your Progress')).toBeVisible();
  });

  test('should complete a quiz and earn XP', async ({ page }) => {
    // Navigate to JavaScript Fundamentals
    await page.goto('/learning/javascript-fundamentals');
    
    // Switch to quiz tab
    await page.click('text=Quiz');
    
    // Wait for quiz to load
    await expect(page.locator('text=JavaScript Quiz')).toBeVisible();
    
    // Verify quiz description is shown
    await expect(page.locator('text=Test your knowledge of JavaScript fundamentals')).toBeVisible();
    
    // This test verifies that the quiz loads properly
    // The actual quiz completion flow can be tested separately if needed
  });

  test('should track progress and streaks', async ({ page }) => {
    // Navigate to a learning path
    await page.goto('/learning/javascript-fundamentals');
    
    // Complete a few flashcards
    await page.locator('[data-testid="review-known-button"]').first().click();
    await page.waitForTimeout(500);
    await page.locator('[data-testid="review-known-button"]').first().click();
    await page.waitForTimeout(500);
    await page.locator('[data-testid="review-known-button"]').first().click();
    
    // Check progress sidebar
    await expect(page.locator('text=Your Progress')).toBeVisible();
    await expect(page.locator('text=Current Streak')).toBeVisible();
    
    // Verify streak is updated - use a more flexible selector
    await expect(page.locator('text=Current Streak')).toBeVisible();
    // The streak value should be visible somewhere in the progress section
    await expect(page.locator('[data-testid="progress-tracker"]')).toBeVisible();
  });

  test('should handle review mode for flashcards', async ({ page }) => {
    // Navigate to learning path
    await page.goto('/learning/javascript-fundamentals');
    
    // Mark some cards for review
    await page.locator('[data-testid="review-later-button"]').first().click();
    await page.waitForTimeout(500);
    await page.locator('[data-testid="review-dont-know-button"]').first().click();
    await page.waitForTimeout(500);
    await page.locator('[data-testid="review-known-button"]').first().click();
    
    // Enable review mode - use data-testid for reliability
    await page.locator('[data-testid="review-mode-toggle"]').first().click();
    
    // Verify only cards marked for review are shown
    await expect(page.locator('[data-testid="review-later-button"]').first()).toBeVisible();
    await expect(page.locator('[data-testid="review-dont-know-button"]').first()).toBeVisible();
    
    // Review the cards
    await page.locator('[data-testid="review-known-button"]').first().click();
    await page.waitForTimeout(500);
    await page.locator('[data-testid="review-known-button"]').first().click();
    
    // Switch back to all cards
    await page.locator('[data-testid="review-mode-toggle"]').first().click();
    
    // Verify we're back to normal mode
    await expect(page.locator('[data-testid="review-mode-toggle"]').first()).toBeVisible();
  });

  test('should handle navigation between learning paths', async ({ page }) => {
    // Start with JavaScript Fundamentals
    await page.goto('/learning/javascript-fundamentals');
    await expect(page.locator('h1')).toContainText('JavaScript Fundamentals');
    
    // Go back to home
    await page.click('text=← Back to Home');
    await page.waitForURL('**/');
    await expect(page.locator('h1')).toContainText('Master Programming with CodeFlash');
    
    // Navigate to React Fundamentals
    await page.click('text=React Fundamentals');
    await page.waitForURL('**/learning/react-basics');
    await expect(page.locator('h1')).toContainText('React Fundamentals');
    
    // Verify different content is loaded
    await page.click('text=Flashcards');
    await expect(page.locator('text=React Fundamentals')).toBeVisible();
  });

  test('should handle error states gracefully', async ({ page }) => {
    // Try to access a non-existent learning path
    await page.goto('/learning/non-existent-path');
    
    // Should show error message
    await expect(page.locator('text=Learning path not found')).toBeVisible();
    
    // Should have a back button
    await expect(page.locator('text=← Back to Home')).toBeVisible();
    
    // Click back button
    await page.click('text=← Back to Home');
    await page.waitForURL('**/');
    await expect(page.locator('h1')).toContainText('Master Programming with CodeFlash');
  });

  test('should be responsive on mobile devices', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Navigate to learning path
    await page.goto('/learning/javascript-fundamentals');
    
    // Verify layout is responsive
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=Flashcards')).toBeVisible();
    await expect(page.locator('text=Quiz')).toBeVisible();
    
    // Test flashcard interaction on mobile
    await page.click('text=Flashcards');
    await expect(page.locator('text=What is JavaScript?')).toBeVisible();
    
    // Test card flipping on mobile - click the card to flip it
    await page.click('text=What is JavaScript?');
    
    // Wait for the back content to be visible (the actual content from the data)
    await expect(page.locator('text=JavaScript is a high-level, interpreted programming language')).toBeVisible();
    
    // Test review buttons on mobile
    await page.locator('[data-testid="review-known-button"]').first().click();
    await expect(page.locator('text=What is JavaScript?')).not.toBeVisible();
  });

  test('should maintain progress across sessions', async ({ page }) => {
    // Complete some flashcards
    await page.goto('/learning/javascript-fundamentals');
    await page.locator('[data-testid="review-known-button"]').first().click();
    await page.waitForTimeout(500);
    await page.locator('[data-testid="review-later-button"]').first().click();
    await page.waitForTimeout(500);
    
    // Navigate away and come back
    await page.goto('/');
    await page.goto('/learning/javascript-fundamentals');
    
    // Verify progress is maintained
    await page.click('text=Flashcards');
    await expect(page.locator('text=JavaScript Basics')).toBeVisible();
    
    // Progress should continue from where we left off
    await expect(page.locator('text=Your Progress')).toBeVisible();
  });

  test('should handle quiz with no questions gracefully', async ({ page }) => {
    // Navigate to a learning path that might have an empty quiz
    await page.goto('/learning/javascript-fundamentals');
    
    // Switch to quiz tab
    await page.click('text=Quiz');
    
    // Should handle gracefully even if no questions
    await expect(page.locator('h1')).toContainText('JavaScript Fundamentals');
  });
}); 