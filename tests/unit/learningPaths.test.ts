import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { loadAndSortLearningPaths } from '../../src/lib/utils/learningPaths';

describe('loadAndSortLearningPaths', () => {
  let tempDir: string;

  beforeEach(async () => {
    tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'learning-paths-test-'));
  });

  afterEach(async () => {
    await fs.rm(tempDir, { recursive: true, force: true });
  });

  it('loads and sorts learning paths according to the defined order', async () => {
    // Create mock JSON files
    const paths = [
      {
        id: 'react-basics',
        title: 'React Basics',
        description: 'Learn React',
        level: 'beginner',
      },
      {
        id: 'intro-to-programming',
        title: 'Intro to Programming',
        description: 'Start programming',
        level: 'beginner',
      },
      {
        id: 'sql-basics',
        title: 'SQL Basics',
        description: 'Learn SQL',
        level: 'intermediate',
      },
      {
        id: 'zzz-custom',
        title: 'Custom Path',
        description: 'Custom',
        level: 'advanced',
      },
    ];
    for (const p of paths) {
      await fs.writeFile(path.join(tempDir, `${p.id}.json`), JSON.stringify(p));
    }

    const result = await loadAndSortLearningPaths(tempDir);
    // Should be sorted by the order in the utility, then alphabetically for unknowns
    expect(result.map(p => p.id)).toEqual([
      'intro-to-programming',
      'react-basics',
      'sql-basics',
      'zzz-custom',
    ]);
  });

  it('handles missing optional fields gracefully', async () => {
    const p = {
      id: 'html-css-basics',
      title: 'HTML & CSS',
      description: 'Web basics',
      level: 'beginner',
    };
    await fs.writeFile(path.join(tempDir, `${p.id}.json`), JSON.stringify(p));
    const result = await loadAndSortLearningPaths(tempDir);
    expect(result[0]).toMatchObject({
      id: 'html-css-basics',
      difficulty: null,
      estimatedTime: null,
      topics: [],
    });
  });
}); 