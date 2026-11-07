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
    lime: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    electric: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
    neutral: 'bg-white/[0.04] text-slate-300 border-white/10',
    outline: 'bg-transparent text-slate-400 border-white/10',
  };

  const dotClasses = {
    lime: 'bg-emerald-400',
    electric: 'bg-sky-400',
    neutral: 'bg-slate-400',
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

