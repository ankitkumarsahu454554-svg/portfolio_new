import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'lime' | 'electric' | 'neutral' | 'outline';
  dot?: boolean;
  pulse?: boolean;
}

export function Badge({
  children,
  variant = 'neutral',
  dot = false,
  pulse = false,
  className,
  ...props
}: BadgeProps) {
  const variantClasses = {
    lime: 'bg-lime-muted text-lime border-lime/30',
    electric: 'bg-electric-muted text-electric border-electric/30',
    neutral: 'bg-surface-200/70 text-gray-300 border-white/10',
    outline: 'bg-transparent text-gray-400 border-white/10',
  };

  const dotClasses = {
    lime: 'bg-lime',
    electric: 'bg-electric',
    neutral: 'bg-gray-400',
    outline: 'bg-gray-400',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[11px] font-medium tracking-wider uppercase backdrop-blur-sm',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          {pulse && (
            <span
              className={cn(
                'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
                dotClasses[variant]
              )}
            />
          )}
          <span
            className={cn('relative inline-flex h-1.5 w-1.5 rounded-full', dotClasses[variant])}
          />
        </span>
      )}
      {children}
    </span>
  );
}

