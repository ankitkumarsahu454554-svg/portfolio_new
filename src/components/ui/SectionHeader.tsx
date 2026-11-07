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
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-widest text-lime">/{index}</span>
          <span className="h-3 w-[1px] bg-white/20" aria-hidden="true" />
          <Badge variant="outline" className="text-[10px]">
            {tag}
          </Badge>
        </div>
        {subtitle && (
          <span className="font-mono text-xs tracking-wider text-gray-500 uppercase">
            {subtitle}
          </span>
        )}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <h2 className="font-heading text-3xl font-light tracking-tight text-white md:text-5xl lg:col-span-8">
          {title}
        </h2>
        {description && (
          <p className="font-sans text-sm leading-relaxed text-gray-400 md:text-base lg:col-span-4 lg:pt-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

