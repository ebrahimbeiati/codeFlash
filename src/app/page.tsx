'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Brain, Code, Sparkles, Laptop, GitBranch, Terminal } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

const IconWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-16">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <Link href="/learning/intro-to-digital" className="block">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100">
                <div className="h-12 w-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconWrapper className="h-6 w-6 text-white">
                    <Laptop />
                  </IconWrapper>
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Introduction to Digital</h2>
                <p className="text-gray-600 mb-6">Master the fundamentals of digital technology and computer basics.</p>
                <div className="flex items-center text-green-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Start Learning <IconWrapper className="ml-2 h-5 w-5"><ArrowRight /></IconWrapper>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <Link href="/learning/intro-to-programming" className="block">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100">
                <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconWrapper className="h-6 w-6 text-white">
                    <Terminal />
                  </IconWrapper>
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Introduction to Programming</h2>
                <p className="text-gray-600 mb-6">Learn the basics of programming and computational thinking.</p>
                <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Start Learning <IconWrapper className="ml-2 h-5 w-5"><ArrowRight /></IconWrapper>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <Link href="/learning/html-css-basics" className="block">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100">
                <div className="h-12 w-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconWrapper className="h-6 w-6 text-white">
                    <Code />
                  </IconWrapper>
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">HTML & CSS Fundamentals</h2>
                <p className="text-gray-600 mb-6">Master the building blocks of web development with interactive learning.</p>
                <div className="flex items-center text-orange-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Start Learning <IconWrapper className="ml-2 h-5 w-5"><ArrowRight /></IconWrapper>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <Link href="/learning/javascript-fundamentals" className="block">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100">
                <div className="h-12 w-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconWrapper className="h-6 w-6 text-white">
                    <Code />
                  </IconWrapper>
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">JavaScript Fundamentals</h2>
                <p className="text-gray-600 mb-6">Master the basics of JavaScript with interactive flashcards and quizzes.</p>
                <div className="flex items-center text-indigo-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Start Learning <IconWrapper className="ml-2 h-5 w-5"><ArrowRight /></IconWrapper>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <Link href="/learning/react-basics" className="block">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100">
                <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconWrapper className="h-6 w-6 text-white">
                    <Sparkles />
                  </IconWrapper>
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">React Basics</h2>
                <p className="text-gray-600 mb-6">Learn React fundamentals through engaging flashcards and practice quizzes.</p>
                <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Start Learning <IconWrapper className="ml-2 h-5 w-5"><ArrowRight /></IconWrapper>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <Link href="/learning/typescript-essentials" className="block">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100">
                <div className="h-12 w-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconWrapper className="h-6 w-6 text-white">
                    <BookOpen />
                  </IconWrapper>
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">TypeScript Essentials</h2>
                <p className="text-gray-600 mb-6">Master TypeScript with comprehensive flashcards and interactive quizzes.</p>
                <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Start Learning <IconWrapper className="ml-2 h-5 w-5"><ArrowRight /></IconWrapper>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <Link href="/learning/git-github" className="block">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100">
                <div className="h-12 w-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconWrapper className="h-6 w-6 text-white">
                    <GitBranch />
                  </IconWrapper>
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Git & GitHub</h2>
                <p className="text-gray-600 mb-6">Learn version control and collaboration with Git and GitHub.</p>
                <div className="flex items-center text-gray-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Start Learning <IconWrapper className="ml-2 h-5 w-5"><ArrowRight /></IconWrapper>
                </div>
              </div>
            </Link>
          </motion.div>
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
                <Brain />
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
