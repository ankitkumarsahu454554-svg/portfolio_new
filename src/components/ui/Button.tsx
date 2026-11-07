import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'terminal';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  download?: string | boolean;
  withArrow?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      external = false,
      download,
      withArrow = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'group relative inline-flex items-center justify-center font-mono font-medium uppercase tracking-wider transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none select-none rounded-xl';

    const sizeClasses = {
      sm: 'text-xs px-3.5 py-1.5 gap-2',
      md: 'text-xs md:text-sm px-5 py-2.5 gap-2.5',
      lg: 'text-sm md:text-base px-6 py-3 gap-3',
    };

    const variantClasses = {
      primary:
        'bg-lime text-black font-semibold hover:bg-lime-hover shadow-[0_0_18px_rgba(199,255,85,0.25)] hover:shadow-[0_0_28px_rgba(199,255,85,0.4)] border border-lime hover:-translate-y-0.5 active:translate-y-0',
      secondary:
        'bg-[#0D0D0D] text-electric border border-electric/30 hover:border-electric hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:text-white hover:-translate-y-0.5 active:translate-y-0',
      ghost:
        'bg-[#0D0D0D] text-gray-300 border border-white/10 hover:border-white/30 hover:text-white hover:bg-[#141414] hover:-translate-y-0.5 active:translate-y-0',
      terminal:
        'bg-transparent text-gray-300 hover:text-lime hover:tracking-widest font-mono border-b border-white/20 hover:border-lime px-1 py-1',
    };

    const content = (
      <>
        <span>{children}</span>
        {withArrow && (
          <ArrowUpRight
            className={cn(
              'h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
              variant === 'primary' ? 'text-background' : 'text-current'
            )}
            aria-hidden="true"
          />
        )}
      </>
    );

    if (href) {
      if (external || download) {
        return (
          <a
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            download={typeof download === 'string' ? download : download ? '' : undefined}
            className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
            data-cursor="pointer"
          >
            {content}
          </a>
        );
      }

      return (
        <Link
          href={href}
          className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
          data-cursor="pointer"
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
        data-cursor="pointer"
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

