'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Brain, Code, Sparkles, Laptop, Terminal, Database, Zap, Target } from 'lucide-react';
import { learningPaths } from '@/lib/data/learning-paths';
import { useEffect, useState } from 'react';
import { ModeToggle } from "@/components/ui/mode-toggle";
import type { ComponentType } from 'react';

// --- Type Assertions for React 19 ---
const LinkComponent = Link as any;
const IconWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => (<div className={className}>{children}</div>);
const LaptopIcon = Laptop as any;
const CodeIcon = Code as any;
const TerminalIcon = Terminal as any;
const SparklesIcon = Sparkles as any;
const DatabaseIcon = Database as any;
const BookOpenIcon = BookOpen as any;
const ArrowRightIcon = ArrowRight as any;
const BrainIcon = Brain as any;
const ZapIcon = Zap as any;

// --- Helper Functions for Dynamic Styling ---
const getIconForPath = (id: string) => {
  switch (id) {
    case 'intro-to-digital': return <LaptopIcon />;
    case 'javascript-fundamentals':
    case 'typescript-essentials': return <CodeIcon />;
    case 'nodejs-basics': return <TerminalIcon />;
    case 'express-basics': return <SparklesIcon />;
    case 'mongodb-basics':
    case 'sql-basics': return <DatabaseIcon />;
    default: return <BookOpenIcon />;
  }
};

const getGradientForPath = (id: string) => {
  switch (id) {
    case 'intro-to-digital': return 'from-green-500 to-emerald-500';
    case 'javascript-fundamentals': return 'from-yellow-500 to-orange-500';
    case 'typescript-essentials': return 'from-blue-600 to-indigo-600';
    case 'nodejs-basics': return 'from-green-600 to-emerald-600';
    case 'express-basics': return 'from-purple-500 to-pink-500';
    case 'mongodb-basics': return 'from-green-500 to-teal-500';
    case 'sql-basics': return 'from-blue-500 to-cyan-500';
    default: return 'from-gray-500 to-gray-700';
  }
};

const getTextColorForPath = (id: string) => {
  switch (id) {
    case 'intro-to-digital': return 'text-green-600 dark:text-green-400';
    case 'javascript-fundamentals': return 'text-yellow-600 dark:text-yellow-400';
    case 'typescript-essentials': return 'text-blue-600 dark:text-blue-400';
    case 'nodejs-basics': return 'text-green-600 dark:text-green-400';
    case 'express-basics': return 'text-purple-600 dark:text-purple-400';
    case 'mongodb-basics': return 'text-green-600 dark:text-green-400';
    case 'sql-basics': return 'text-blue-600 dark:text-blue-400';
    default: return 'text-gray-600 dark:text-gray-400';
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <LinkComponent href="/" className="mr-6 flex items-center space-x-2">
            <ZapIcon className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              CodeFlash
            </span>
          </LinkComponent>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Master Programming with CodeFlash
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interactive flashcards and quizzes to help you learn programming concepts faster and more effectively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {learningPaths.map((path, index) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <LinkComponent href={`/learning/${path.id}`} className="block h-full">
                <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border h-full flex flex-col">
                  <div className="flex-grow">
                    <div className={`h-12 w-12 bg-gradient-to-br ${getGradientForPath(path.id)} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconWrapper className="h-6 w-6 text-white">
                        {getIconForPath(path.id)}
                      </IconWrapper>
                    </div>
                    <h2 className="text-2xl font-semibold mb-4 text-card-foreground">{path.title}</h2>
                    <p className="text-muted-foreground mb-6">{path.description}</p>
                  </div>
                  <div className={`flex items-center ${getTextColorForPath(path.id)} font-medium group-hover:translate-x-2 transition-transform duration-300`}>
                    Start Learning <IconWrapper className="ml-2 h-5 w-5"><ArrowRightIcon /></IconWrapper>
                  </div>
                </div>
              </LinkComponent>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-card rounded-2xl p-8 shadow-lg border">
            <div className="h-16 w-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <IconWrapper className="h-8 w-8 text-white">
                <BrainIcon />
              </IconWrapper>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-card-foreground">Why CodeFlash?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our interactive learning platform combines the power of spaced repetition with engaging quizzes
              to help you master programming concepts faster and retain knowledge longer.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}