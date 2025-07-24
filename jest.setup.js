// Jest setup for pure Node.js unit tests and React component tests
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// React testing library setup
const React = require('react');
require('@testing-library/jest-dom');

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    };
  },
  useSearchParams() {
    return new URLSearchParams();
  },
  usePathname() {
    return '/';
  },
}));

// Mock Next.js Link component
jest.mock('next/link', () => {
  return ({ children, href, ...props }) => {
    const React = require('react');
    return React.createElement('a', { href, ...props }, children);
  };
});

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock framer-motion
jest.mock('framer-motion', () => {
  const React = require('react');
  
  // Filter out Framer Motion specific props
  const filterMotionProps = (props) => {
    const {
      initial,
      animate,
      exit,
      transition,
      variants,
      whileHover,
      whileTap,
      whileFocus,
      whileDrag,
      drag,
      dragConstraints,
      dragElastic,
      dragMomentum,
      dragPropagation,
      dragSnapToOrigin,
      dragTransition,
      layout,
      layoutId,
      layoutDependency,
      layoutScroll,
      layoutRoot,
      onAnimationStart,
      onAnimationComplete,
      onUpdate,
      onDragStart,
      onDragEnd,
      onDrag,
      onHoverStart,
      onHoverEnd,
      onTap,
      onTapStart,
      onTapCancel,
      onFocus,
      onBlur,
      ...filteredProps
    } = props;
    
    return filteredProps;
  };
  
  // Dynamically mock any motion.* element as a React element
  const handler = (tag) => ({ children, ...props }) => {
    const filteredProps = filterMotionProps(props);
    return React.createElement(tag, filteredProps, children);
  };
  
  return {
    motion: new Proxy({}, {
      get: (_, tag) => handler(tag),
    }),
    AnimatePresence: ({ children }) => children,
  };
});

// Mock canvas-confetti
jest.mock('canvas-confetti', () => ({
  __esModule: true,
  default: jest.fn(),
})); 