import { NextResponse } from 'next/server';
import { readdir, readFile } from 'fs/promises';
import path from 'path';

// Define the specific order of learning paths as requested
const learningPathOrder = [
  'intro-to-digital',
  'intro-to-programming',
  'html-css-basics',
  'javascript-fundamentals',
  'react-basics',
  'typescript-essentials',
  'git-github-basics',
  'nodejs-basics',
  'express-basics',
  'mongodb-basics',
  'sql-basics',
  'linux-commands',
  'algorithms-data-structures'
];

export async function GET() {
  try {
    const jsonDir = path.join(process.cwd(), 'src/lib/data/learning-paths/json');
    const files = (await readdir(jsonDir)).filter(file => file.endsWith('.json'));
    
    const learningPaths = await Promise.all(files.map(async file => {
      const filePath = path.join(jsonDir, file);
      const content = await readFile(filePath, 'utf-8');
      const data = JSON.parse(content);
      return {
        id: data.id,
        title: data.title,
        description: data.description,
        level: data.level,
        difficulty: data.difficulty || null,
        estimatedTime: data.estimatedTime || null,
        topics: data.topics || []
      };
    }));

    // Sort by the specific order defined above
    learningPaths.sort((a, b) => {
      const orderA = learningPathOrder.indexOf(a.id);
      const orderB = learningPathOrder.indexOf(b.id);
      
      // If both are in the order list, sort by their position
      if (orderA !== -1 && orderB !== -1) {
        return orderA - orderB;
      }
      
      // If only one is in the order list, prioritize it
      if (orderA !== -1) return -1;
      if (orderB !== -1) return 1;
      
      // If neither is in the order list, sort alphabetically
      return a.id.localeCompare(b.id);
    });

    return NextResponse.json(learningPaths);
  } catch (error) {
    console.error('Error loading learning paths:', error);
    return NextResponse.json({ error: 'Failed to load learning paths' }, { status: 500 });
  }
} 