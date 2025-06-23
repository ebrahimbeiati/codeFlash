'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number | string;
}

interface QuizProps {
  questions: Question[];
  onComplete: (score: number) => void;
}

const triggerConfetti = () => {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const interval: any = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
    });
  }, 250);
};

export function Quiz({ questions, onComplete }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    if (questions.length === 0) {
      console.error('No questions provided to Quiz component');
      return;
    }
    // Shuffle questions on mount
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, [questions]);

  const currentQuestion = shuffledQuestions[currentIndex];
  const isLastQuestion = currentIndex === shuffledQuestions.length - 1;

  const handleAnswer = (index: number) => {
    if (showFeedback) return;
    setSelectedAnswer(index);
    setShowFeedback(true);
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: index
    }));

    // Convert correctAnswer to number if it's a string
    const correctAnswerIndex = typeof currentQuestion.correctAnswer === 'string' 
      ? parseInt(currentQuestion.correctAnswer) 
      : currentQuestion.correctAnswer;

    if (index === correctAnswerIndex) {
      setShowCelebration(true);
      triggerConfetti();
      setTimeout(() => setShowCelebration(false), 3000);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResults(true);
      onComplete(calculateScore());
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(answers[shuffledQuestions[currentIndex + 1].id] ?? null);
      setShowFeedback(!!answers[shuffledQuestions[currentIndex + 1].id]);
    }
  };

  const calculateScore = () => {
    const correctAnswers = Object.entries(answers).filter(
      ([questionId, answerIndex]) => {
        const question = shuffledQuestions.find(q => q.id === questionId);
        if (!question) return false;
        
        // Convert correctAnswer to number if it's a string
        const correctAnswerIndex = typeof question.correctAnswer === 'string' 
          ? parseInt(question.correctAnswer) 
          : question.correctAnswer;
        
        return correctAnswerIndex === answerIndex;
      }
    ).length;
    return (correctAnswers / shuffledQuestions.length) * 100;
  };

  if (questions.length === 0) {
    return (
      <div className="w-full max-w-2xl mx-auto p-4">
        <div className="rounded-lg p-6 bg-gradient-to-br from-red-50 to-red-100 border border-red-200 shadow-lg">
          <div className="text-center text-red-600 font-medium">
            No questions available for this quiz.
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="w-full max-w-2xl mx-auto p-4">
        <div className="rounded-lg p-6 bg-gradient-to-br from-red-50 to-red-100 border border-red-200 shadow-lg">
          <div className="text-center text-red-600 font-medium">
            Error loading quiz questions.
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="w-full max-w-2xl mx-auto p-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="rounded-lg p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 shadow-lg"
        >
          <div className="flex flex-col space-y-1.5 pb-4">
            <h3 className="text-2xl font-semibold leading-none tracking-tight text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Quiz Results
            </h3>
          </div>
          <div className="pt-0 space-y-6">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {score.toFixed(1)}%
              </div>
              <div className="text-muted-foreground text-lg">
                {score >= 70 ? '🎉 Amazing job! You crushed it! 🎉' : '💪 Keep practicing! You\'re getting better! 💪'}
              </div>
            </motion.div>
            
            <div className="space-y-4">
              {shuffledQuestions.map((question, index) => (
                <motion.div
                  key={question.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-lg border shadow-sm ${
                    (() => {
                      const correctAnswerIndex = typeof question.correctAnswer === 'string' 
                        ? parseInt(question.correctAnswer) 
                        : question.correctAnswer;
                      return answers[question.id] === correctAnswerIndex;
                    })()
                      ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200'
                      : 'bg-gradient-to-br from-red-50 to-rose-50 border-red-200'
                  }`}
                >
                  <div className="font-medium mb-2 text-gray-800 break-words">
                    {index + 1}. {question.question}
                  </div>
                  <div className="space-y-2">
                    {question.options.map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        className={`p-3 rounded-lg flex items-center gap-2 transition-all duration-200 ${
                          (() => {
                            const correctAnswerIndex = typeof question.correctAnswer === 'string' 
                              ? parseInt(question.correctAnswer) 
                              : question.correctAnswer;
                            return optionIndex === correctAnswerIndex;
                          })()
                            ? 'bg-gradient-to-r from-green-100 to-emerald-100'
                            : optionIndex === answers[question.id]
                            ? 'bg-gradient-to-r from-red-100 to-rose-100'
                            : 'bg-white hover:bg-gray-50'
                        }`}
                      >
                        {(() => {
                          const correctAnswerIndex = typeof question.correctAnswer === 'string' 
                            ? parseInt(question.correctAnswer) 
                            : question.correctAnswer;
                          return optionIndex === correctAnswerIndex;
                        })() && (
                          <span className="text-green-600 font-bold text-xl">✓</span>
                        )}
                        {optionIndex === answers[question.id] && (() => {
                          const correctAnswerIndex = typeof question.correctAnswer === 'string' 
                            ? parseInt(question.correctAnswer) 
                            : question.correctAnswer;
                          return optionIndex !== correctAnswerIndex;
                        })() && (
                          <span className="text-red-600 font-bold text-xl">✗</span>
                        )}
                        <span className="text-gray-700">{option}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex justify-center"
            >
              <button
                className="inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 h-12 px-6 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                onClick={() => {
                  setCurrentIndex(0);
                  setSelectedAnswer(null);
                  setAnswers({});
                  setShowResults(false);
                  setShowFeedback(false);
                }}
              >
                Try Again
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="rounded-lg p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 shadow-lg"
      >
        <div className="flex flex-col space-y-1.5 pb-4">
          <h3 className="text-2xl font-semibold leading-none tracking-tight text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Question {currentIndex + 1} of {shuffledQuestions.length}
          </h3>
        </div>
        <div className="pt-0 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="text-xl font-medium text-gray-800">{currentQuestion.question}</div>
              
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-indigo-200 bg-white hover:bg-indigo-50 focus-visible:ring-indigo-500 w-full justify-start text-left p-4 h-auto relative rounded-lg shadow-sm ${
                      selectedAnswer === index ? 'bg-gradient-to-r from-indigo-100 to-purple-100 border-indigo-300' : ''
                    } ${
                      (() => {
                        const correctAnswerIndex = typeof currentQuestion.correctAnswer === 'string' 
                          ? parseInt(currentQuestion.correctAnswer) 
                          : currentQuestion.correctAnswer;
                        return showFeedback && index === correctAnswerIndex;
                      })() ? 'bg-gradient-to-r from-green-100 to-emerald-100 border-green-300' : ''
                    } ${
                      showFeedback && selectedAnswer === index && (() => {
                        const correctAnswerIndex = typeof currentQuestion.correctAnswer === 'string' 
                          ? parseInt(currentQuestion.correctAnswer) 
                          : currentQuestion.correctAnswer;
                        return index !== correctAnswerIndex;
                      })() ? 'bg-gradient-to-r from-red-100 to-rose-100 border-red-300' : ''
                    }`}
                    onClick={() => handleAnswer(index)}
                    disabled={showFeedback}
                  >
                    <div className="flex items-center gap-3">
                      {(() => {
                        const correctAnswerIndex = typeof currentQuestion.correctAnswer === 'string' 
                          ? parseInt(currentQuestion.correctAnswer) 
                          : currentQuestion.correctAnswer;
                        return showFeedback && index === correctAnswerIndex;
                      })() && (
                        <span className="text-green-600 font-bold text-xl">✓</span>
                      )}
                      {showFeedback && selectedAnswer === index && (() => {
                        const correctAnswerIndex = typeof currentQuestion.correctAnswer === 'string' 
                          ? parseInt(currentQuestion.correctAnswer) 
                          : currentQuestion.correctAnswer;
                        return index !== correctAnswerIndex;
                      })() && (
                        <span className="text-red-600 font-bold text-xl">✗</span>
                      )}
                      <span className="text-gray-700">{option}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col sm:flex-row justify-between gap-4 p-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300 h-10 sm:h-12 px-4 sm:px-6 py-2 rounded-lg shadow-sm hover:shadow-md text-sm sm:text-base w-full sm:w-auto"
              onClick={() => {
                setCurrentIndex(prev => Math.max(prev - 1, 0));
                setSelectedAnswer(answers[shuffledQuestions[Math.max(currentIndex - 1, 0)].id] ?? null);
                setShowFeedback(!!answers[shuffledQuestions[Math.max(currentIndex - 1, 0)].id]);
              }}
              disabled={currentIndex === 0}
            >
              Previous
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 h-10 sm:h-12 px-4 sm:px-6 py-2 rounded-lg shadow-sm hover:shadow-md text-sm sm:text-base w-full sm:w-auto"
              onClick={handleNext}
              disabled={!showFeedback}
            >
              {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 