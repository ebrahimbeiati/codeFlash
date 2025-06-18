'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Brain, Code, Sparkles, Laptop, Terminal, Database } from 'lucide-react';
import { learningPaths } from '@/lib/data/learning-paths';
import { ProgressTracker } from '@/components/ProgressTracker';
import { getUserProgress } from '@/lib/utils/progress';
import { useEffect, useState } from 'react';
import type { ComponentType } from 'react';

// Add type assertions for React 19 compatibility
const LinkComponent = Link as ComponentType<any>;
const LaptopIcon = Laptop as ComponentType<any>;
const CodeIcon = Code as ComponentType<any>;
const TerminalIcon = Terminal as ComponentType<any>;
const SparklesIcon = Sparkles as ComponentType<any>;
const DatabaseIcon = Database as ComponentType<any>;
const BookOpenIcon = BookOpen as ComponentType<any>;
const ArrowRightIcon = ArrowRight as ComponentType<any>;
const BrainIcon = Brain as ComponentType<any>;

const IconWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
);

const getIconForPath = (id: string) => {
  switch (id) {
    case 'intro-to-digital':
      return <LaptopIcon />;
    case 'javascript-fundamentals':
    case 'typescript-essentials':
      return <CodeIcon />;
    case 'nodejs-basics':
      return <TerminalIcon />;
    case 'express-basics':
      return <SparklesIcon />;
    case 'mongodb-basics':
    case 'sql-basics':
      return <DatabaseIcon />;
    default:
      return <BookOpenIcon />;
  }
};

const getGradientForPath = (id: string) => {
  switch (id) {
    case 'intro-to-digital':
      return 'from-green-500 to-emerald-500';
    case 'javascript-fundamentals':
      return 'from-yellow-500 to-orange-500';
    case 'typescript-essentials':
      return 'from-blue-600 to-indigo-600';
    case 'nodejs-basics':
      return 'from-green-600 to-emerald-600';
    case 'express-basics':
      return 'from-purple-500 to-pink-500';
    case 'mongodb-basics':
      return 'from-green-500 to-teal-500';
    case 'sql-basics':
      return 'from-blue-500 to-cyan-500';
    default:
      return 'from-gray-500 to-gray-700';
  }
};

const getTextColorForPath = (id: string) => {
  switch (id) {
    case 'intro-to-digital':
      return 'text-green-600';
    case 'javascript-fundamentals':
      return 'text-yellow-600';
    case 'typescript-essentials':
      return 'text-blue-600';
    case 'nodejs-basics':
      return 'text-green-600';
    case 'express-basics':
      return 'text-purple-600';
    case 'mongodb-basics':
      return 'text-green-600';
    case 'sql-basics':
      return 'text-blue-600';
    default:
      return 'text-gray-600';
  }
};

export default function Home() {
  const [userProgress, setUserProgress] = useState(getUserProgress());

  useEffect(() => {
    // Update progress when component mounts
    setUserProgress(getUserProgress());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-16">
        {/* Progress Tracker Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <ProgressTracker 
            streak={userProgress.streak}
            xp={userProgress.xp}
            level={userProgress.level}
            className="max-w-md mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Master Programming with CodeFlash
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
              <LinkComponent href={`/learning/${path.id}`} className="block">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100">
                  <div className={`h-12 w-12 bg-gradient-to-br ${getGradientForPath(path.id)} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconWrapper className="h-6 w-6 text-white">
                      {getIconForPath(path.id)}
                    </IconWrapper>
                  </div>
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">{path.title}</h2>
                  <p className="text-gray-600 mb-6">{path.description}</p>
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
          <div className="inline-block bg-white rounded-2xl p-8 shadow-lg border border-indigo-100">
            <div className="h-16 w-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <IconWrapper className="h-8 w-8 text-white">
                <BrainIcon />
              </IconWrapper>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Why CodeFlash?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our interactive learning platform combines the power of spaced repetition with engaging quizzes
              to help you master programming concepts faster and retain knowledge longer.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}