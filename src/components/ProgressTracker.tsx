'use client';

import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { cn } from '@/lib/utils';

interface ProgressTrackerProps {
  streak: number;
  xp: number;
  level: number;
  className?: string;
}

export function ProgressTracker({ streak, xp, level, className }: ProgressTrackerProps) {
  const xpToNextLevel = Math.pow(level + 1, 2) * 100;
  const progress = (xp / xpToNextLevel) * 100;

  return (
    <Card className={cn('w-full max-w-md mx-auto', className)}>
      <CardHeader>
        <CardTitle className="text-center">Your Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Streak */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🔥</div>
              <div>
                <div className="font-medium">Current Streak</div>
                <div className="text-sm text-muted-foreground">Keep it up!</div>
              </div>
            </div>
            <div className="text-2xl font-bold">{streak} days</div>
          </div>

          {/* Level Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Level {level}</span>
              <span>{xp} / {xpToNextLevel} XP</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-secondary rounded-lg">
              <div className="text-sm text-muted-foreground">Cards Mastered</div>
              <div className="text-2xl font-bold">{Math.floor(xp / 10)}</div>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <div className="text-sm text-muted-foreground">Best Streak</div>
              <div className="text-2xl font-bold">{Math.max(streak, 7)}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 