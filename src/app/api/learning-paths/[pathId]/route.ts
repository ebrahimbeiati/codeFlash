import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ pathId: string }> }
) {
  try {
    const { pathId } = await params;
    
    // Validate pathId to prevent path traversal
    if (!/^[a-z0-9-]+$/.test(pathId)) {
      return NextResponse.json(
        { error: 'Invalid path ID' },
        { status: 400 }
      );
    }
    
    const jsonDir = path.join(process.cwd(), 'src/lib/data/learning-paths/json');
    const filePath = path.join(jsonDir, `${pathId}.json`);
    
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const learningPath = JSON.parse(fileContent);
      return NextResponse.json(learningPath);
    } catch (fileError) {
      return NextResponse.json(
        { error: 'Learning path not found' },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 