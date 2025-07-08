import { NextRequest } from 'next/server';
import { GET as getLearningPaths } from '@/app/api/learning-paths/route';
import { GET as getLearningPath } from '@/app/api/learning-paths/[pathId]/route';

// Mock fs/promises
jest.mock('fs/promises', () => ({
  readdir: jest.fn(),
  readFile: jest.fn(),
}));

const mockReaddir = require('fs/promises').readdir;
const mockReadFile = require('fs/promises').readFile;

describe('API Routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /api/learning-paths', () => {
    it('should return all learning paths', async () => {
      const mockFiles = [
        'javascript-fundamentals.json',
        'react-basics.json',
        'typescript-essentials.json',
      ];

      const mockFileContents = [
        {
          id: 'javascript-fundamentals',
          title: 'JavaScript Fundamentals',
          description: 'Learn the basics of JavaScript programming',
          level: 'beginner',
          difficulty: 'easy',
          estimatedTime: '2 hours',
          topics: ['variables', 'functions', 'objects'],
        },
        {
          id: 'react-basics',
          title: 'React Basics',
          description: 'Learn React fundamentals',
          level: 'intermediate',
          difficulty: 'medium',
          estimatedTime: '3 hours',
          topics: ['components', 'props', 'state'],
        },
        {
          id: 'typescript-essentials',
          title: 'TypeScript Essentials',
          description: 'Master TypeScript',
          level: 'intermediate',
          difficulty: 'medium',
          estimatedTime: '4 hours',
          topics: ['types', 'interfaces', 'generics'],
        },
      ];

      mockReaddir.mockResolvedValue(mockFiles);
      mockReadFile
        .mockResolvedValueOnce(JSON.stringify(mockFileContents[0]))
        .mockResolvedValueOnce(JSON.stringify(mockFileContents[1]))
        .mockResolvedValueOnce(JSON.stringify(mockFileContents[2]));

      const request = new NextRequest('http://localhost:3000/api/learning-paths');
      const response = await getLearningPaths(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data).toHaveLength(3);
      expect(data[0]).toEqual({
        id: 'javascript-fundamentals',
        title: 'JavaScript Fundamentals',
        description: 'Learn the basics of JavaScript programming',
        level: 'beginner',
        difficulty: 'easy',
        estimatedTime: '2 hours',
        topics: ['variables', 'functions', 'objects'],
      });
    });

    it('should handle empty directory', async () => {
      mockReaddir.mockResolvedValue([]);

      const request = new NextRequest('http://localhost:3000/api/learning-paths');
      const response = await getLearningPaths(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data).toHaveLength(0);
    });

    it('should handle file system errors', async () => {
      mockReaddir.mockRejectedValue(new Error('File system error'));

      const request = new NextRequest('http://localhost:3000/api/learning-paths');
      const response = await getLearningPaths(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data).toEqual({ error: 'Failed to load learning paths' });
    });

    it('should handle invalid JSON files', async () => {
      const mockFiles = ['invalid.json'];
      mockReaddir.mockResolvedValue(mockFiles);
      mockReadFile.mockResolvedValue('invalid json');

      const request = new NextRequest('http://localhost:3000/api/learning-paths');
      const response = await getLearningPaths(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data).toEqual({ error: 'Failed to load learning paths' });
    });

    it('should sort learning paths by predefined order', async () => {
      const mockFiles = [
        'typescript-essentials.json',
        'javascript-fundamentals.json',
        'intro-to-digital.json',
      ];

      const mockFileContents = [
        {
          id: 'typescript-essentials',
          title: 'TypeScript Essentials',
          description: 'Master TypeScript',
          level: 'intermediate',
        },
        {
          id: 'javascript-fundamentals',
          title: 'JavaScript Fundamentals',
          description: 'Learn JavaScript',
          level: 'beginner',
        },
        {
          id: 'intro-to-digital',
          title: 'Introduction to Digital',
          description: 'Digital basics',
          level: 'beginner',
        },
      ];

      mockReaddir.mockResolvedValue(mockFiles);
      mockReadFile
        .mockResolvedValueOnce(JSON.stringify(mockFileContents[0]))
        .mockResolvedValueOnce(JSON.stringify(mockFileContents[1]))
        .mockResolvedValueOnce(JSON.stringify(mockFileContents[2]));

      const request = new NextRequest('http://localhost:3000/api/learning-paths');
      const response = await getLearningPaths(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      // Should be sorted with intro-to-digital first, then javascript-fundamentals, then typescript-essentials
      expect(data[0].id).toBe('intro-to-digital');
      expect(data[1].id).toBe('javascript-fundamentals');
      expect(data[2].id).toBe('typescript-essentials');
    });
  });

  describe('GET /api/learning-paths/[pathId]', () => {
    it('should return specific learning path', async () => {
      const mockLearningPath = {
        id: 'javascript-fundamentals',
        title: 'JavaScript Fundamentals',
        description: 'Learn the basics of JavaScript programming',
        level: 'beginner',
        sets: [
          {
            id: 'js-basics',
            title: 'JavaScript Basics',
            description: 'Core JavaScript concepts',
            cards: [
              {
                id: 'js-1',
                front: 'What is JavaScript?',
                back: 'A programming language',
              },
            ],
          },
        ],
        quizzes: [
          {
            id: 'js-quiz',
            title: 'JavaScript Quiz',
            description: 'Test your knowledge',
            questions: [
              {
                id: '1',
                question: 'What is JavaScript?',
                options: ['A programming language', 'A markup language', 'A styling language'],
                correctAnswer: 'A programming language',
              },
            ],
          },
        ],
      };

      mockReadFile.mockResolvedValue(JSON.stringify(mockLearningPath));

      const request = new NextRequest('http://localhost:3000/api/learning-paths/javascript-fundamentals');
      const response = await getLearningPath(request, { params: { pathId: 'javascript-fundamentals' } });
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data).toEqual(mockLearningPath);
    });

    it('should handle non-existent learning path', async () => {
      mockReadFile.mockRejectedValue(new Error('File not found'));

      const request = new NextRequest('http://localhost:3000/api/learning-paths/non-existent');
      const response = await getLearningPath(request, { params: { pathId: 'non-existent' } });
      const data = await response.json();

      expect(response.status).toBe(404);
      expect(data).toEqual({ error: 'Learning path not found' });
    });

    it('should handle invalid JSON in learning path file', async () => {
      mockReadFile.mockResolvedValue('invalid json');

      const request = new NextRequest('http://localhost:3000/api/learning-paths/javascript-fundamentals');
      const response = await getLearningPath(request, { params: { pathId: 'javascript-fundamentals' } });
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data).toEqual({ error: 'Failed to load learning path' });
    });

    it('should handle file system errors', async () => {
      mockReadFile.mockRejectedValue(new Error('Permission denied'));

      const request = new NextRequest('http://localhost:3000/api/learning-paths/javascript-fundamentals');
      const response = await getLearningPath(request, { params: { pathId: 'javascript-fundamentals' } });
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data).toEqual({ error: 'Failed to load learning path' });
    });

    it('should validate pathId parameter', async () => {
      const request = new NextRequest('http://localhost:3000/api/learning-paths/invalid@path');
      const response = await getLearningPath(request, { params: { pathId: 'invalid@path' } });
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data).toEqual({ error: 'Invalid path ID' });
    });
  });
}); 