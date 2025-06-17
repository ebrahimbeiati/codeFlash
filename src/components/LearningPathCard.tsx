'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { cn } from '../lib/utils';
import Link from 'next/link';

// Add type assertions for components
const LinkComponent = Link as any;
const CardComponent = Card as any;
const CardHeaderComponent = CardHeader as any;
const CardTitleComponent = CardTitle as any;
const CardContentComponent = CardContent as any;

interface LearningPath {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  sets: Array<{
    id: string;
    title: string;
    description: string;
    cards: Array<{
      id: string;
      front: string;
      back: string;
    }>;
  }>;
}

interface LearningPathCardProps {
  path: LearningPath;
}

export function LearningPathCard({ path }: LearningPathCardProps) {
  return (
    <LinkComponent href={`/learning/${path.id}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <CardComponent className="h-full hover:shadow-lg transition-shadow">
          <CardHeaderComponent>
            <CardTitleComponent>{path.title}</CardTitleComponent>
            <div className="flex items-center gap-2">
              <span className={cn(
                'px-2 py-1 rounded-full text-xs font-medium',
                {
                  'bg-green-100 text-green-800': path.level === 'beginner',
                  'bg-yellow-100 text-yellow-800': path.level === 'intermediate',
                  'bg-red-100 text-red-800': path.level === 'advanced',
                }
              )}>
                {path.level}
              </span>
            </div>
          </CardHeaderComponent>
          <CardContentComponent>
            <p className="text-muted-foreground mb-4">{path.description}</p>
            <div className="text-sm text-muted-foreground">
              {path.sets.length} sets • {path.sets.reduce((total, set) => total + set.cards.length, 0)} cards
            </div>
          </CardContentComponent>
        </CardComponent>
      </motion.div>
    </LinkComponent>
  );
} 