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
    lime: 'bg-emerald-50 text-emerald-700 border-emerald-200/90',
    electric: 'bg-sky-50 text-sky-700 border-sky-200/90',
    neutral: 'bg-slate-100 text-slate-700 border-slate-200',
    outline: 'bg-white/80 text-slate-600 border-slate-200',
  };

  const dotClasses = {
    lime: 'bg-emerald-500',
    electric: 'bg-sky-600',
    neutral: 'bg-slate-500',
    outline: 'bg-slate-400',
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

