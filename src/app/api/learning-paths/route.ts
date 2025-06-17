import { NextResponse } from 'next/server';
import { learningPaths } from '@/lib/data/learning-paths';

export async function GET() {
  return NextResponse.json(learningPaths);
} 