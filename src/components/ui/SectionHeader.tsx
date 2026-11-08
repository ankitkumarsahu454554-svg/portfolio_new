import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from './Badge';

interface SectionHeaderProps {
  index: string;
  tag: string;
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  index,
  tag,
  title,
  subtitle,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('relative mb-12 md:mb-20', className)}>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-mc-border pb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-widest text-pink-800 dark:text-pink-400 font-bold">/{index}</span>
          <span className="h-3 w-[1px] bg-mc-border" aria-hidden="true" />
          <Badge variant="outline" className="text-[10px] border-mc-border text-mc-text font-bold uppercase tracking-wider">
            {tag}
          </Badge>
        </div>
        {subtitle && (
          <span className="font-mono text-xs tracking-wider text-mc-text-muted uppercase font-semibold">
            {subtitle}
          </span>
        )}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 items-baseline">
        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-mc-text md:text-5xl lg:col-span-8">
          {title}
        </h2>
        {description && (
          <p className="font-sans text-sm leading-relaxed text-mc-text-secondary md:text-base lg:col-span-4 lg:pt-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
