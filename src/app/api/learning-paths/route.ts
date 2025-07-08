import { NextResponse } from 'next/server';
import path from 'path';
import { loadAndSortLearningPaths } from '@/lib/utils/learningPaths';

export async function GET() {
  try {
    const jsonDir = path.join(process.cwd(), 'src/lib/data/learning-paths/json');
    const learningPaths = await loadAndSortLearningPaths(jsonDir);
    return NextResponse.json(learningPaths);
  } catch (error) {
    console.error('Error loading learning paths:', error);
    return NextResponse.json({ error: 'Failed to load learning paths' }, { status: 500 });
  }
} 