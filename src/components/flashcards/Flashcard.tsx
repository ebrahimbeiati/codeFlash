import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, RotateCcw, Sparkles } from 'lucide-react';

// Add type assertions for icons
const ChevronLeftIcon = ChevronLeft as any;
const ChevronRightIcon = ChevronRight as any;
const RotateCcwIcon = RotateCcw as any;
const SparklesIcon = Sparkles as any;

interface FlashcardProps {
  front: string;
  back: string;
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
  totalCards: number;
  currentIndex: number;
}

const GlowingBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
    </div>
  );
};

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-indigo-400 rounded-full"
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -100 + '%'],
            opacity: [null, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export function Flashcard({
  front,
  back,
  onNext,
  onPrevious,
  isFirst,
  isLast,
  totalCards,
  currentIndex
}: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' && !isLast && !isAnimating) {
        handleReset();
        onNext();
      } else if (event.key === 'ArrowLeft' && !isFirst && !isAnimating) {
        handleReset();
        onPrevious();
      } else if ((event.key === ' ' || event.key === 'Enter') && !isAnimating) {
        handleFlip();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isFirst, isLast, onNext, onPrevious, isAnimating]);

  const handleFlip = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsFlipped(!isFlipped);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleReset = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsFlipped(false);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-2 sm:p-4">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4 sm:mb-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-2">
            <div className="text-xs sm:text-sm text-gray-500">
              Card {currentIndex + 1} of {totalCards}
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1 text-amber-500"
            >
              <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">Learning Mode</span>
            </motion.div>
          </div>
          <div className="h-1 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / totalCards) * 100}%` }}
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            />
          </div>
        </motion.div>

        <div className="relative w-full min-h-[200px] sm:min-h-[300px] md:aspect-[4/3]">
          <AnimatePresence mode="wait">
            {!isFlipped ? (
              <motion.div
                key="front"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className={`absolute w-full h-full rounded-lg sm:rounded-2xl p-4 sm:p-6 md:p-8 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 flex items-center justify-center cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${isAnimating ? 'pointer-events-none' : ''}`}
                onClick={handleFlip}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <GlowingBackground />
                <FloatingParticles />
                <div className="relative z-10 text-sm sm:text-xl md:text-2xl font-medium text-gray-800 text-center leading-relaxed">
                  {front}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  className="absolute bottom-2 sm:bottom-4 text-xs sm:text-sm text-gray-500"
                >
                  Click to reveal answer
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="back"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className={`absolute w-full h-full rounded-lg sm:rounded-2xl p-4 sm:p-6 md:p-8 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 flex items-center justify-center cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${isAnimating ? 'pointer-events-none' : ''}`}
                onClick={handleFlip}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <GlowingBackground />
                <FloatingParticles />
                <div className="relative z-10 text-xs sm:text-lg md:text-xl text-gray-700 text-center leading-relaxed">
                  {back}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  className="absolute bottom-2 sm:bottom-4 text-xs sm:text-sm text-gray-500"
                >
                  Click to flip back
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4 mt-4 sm:mt-8">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300 h-10 sm:h-12 px-3 sm:px-6 py-2 rounded-lg shadow-sm hover:shadow-md text-sm sm:text-base ${isFirst || isAnimating ? 'opacity-50 pointer-events-none' : ''}`}
            onClick={() => {
              if (!isAnimating) {
                handleReset();
                onPrevious();
              }
            }}
            disabled={isFirst || isAnimating}
            aria-label="Previous card"
          >
            <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Previous</span>
            <span className="sm:hidden">Prev</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 h-10 sm:h-12 px-3 sm:px-6 py-2 rounded-lg shadow-sm hover:shadow-md text-sm sm:text-base ${isLast || isAnimating ? 'opacity-50 pointer-events-none' : ''}`}
            onClick={() => {
              if (!isAnimating) {
                handleReset();
                onNext();
              }
            }}
            disabled={isLast || isAnimating}
            aria-label="Next card"
          >
            <span className="hidden sm:inline text-xs sm:text-sm">Next</span>
            <span className="sm:hidden">Next</span>
            <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" />
          </motion.button>
        </div>

        <div className="mt-3 sm:mt-4 text-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 text-gray-500 hover:text-gray-700 h-8 sm:h-10 px-3 sm:px-4 py-2 rounded-lg text-sm"
            onClick={handleReset}
            disabled={isAnimating}
            aria-label="Reset card"
          >
            <RotateCcwIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Reset Card</span>
            <span className="sm:hidden">Reset</span>
          </motion.button>
        </div>

        <div className="mt-3 sm:mt-4 text-center text-xs sm:text-sm text-gray-500">
          <p className="hidden sm:block">Use arrow keys to navigate • Space to flip • Enter to flip</p>
          <p className="sm:hidden">Tap to flip • Swipe to navigate</p>
        </div>
      </div>
    </div>
  );
} 