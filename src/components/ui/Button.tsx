'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { theme } from '@/lib/constants/theme';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    isLoading, 
    fullWidth,
    children, 
    ...props 
  }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          {
            // Variants
            'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500': 
              variant === 'primary',
            'bg-secondary-100 text-secondary-900 hover:bg-secondary-200 focus-visible:ring-secondary-500': 
              variant === 'secondary',
            'border border-secondary-200 bg-white hover:bg-secondary-50 focus-visible:ring-secondary-500': 
              variant === 'outline',
            'hover:bg-secondary-100 focus-visible:ring-secondary-500': 
              variant === 'ghost',
            
            // Sizes
            'h-8 px-3 text-sm rounded-md': size === 'sm',
            'h-10 px-4 py-2 rounded-md': size === 'md',
            'h-12 px-6 text-lg rounded-lg': size === 'lg',
            
            // Full width
            'w-full': fullWidth,
          },
          className
        )}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button }; 