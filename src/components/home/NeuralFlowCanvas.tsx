'use client';

import React, { useEffect, useRef } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const RAINBOW_COLORS = [
  '#FF3D81', // Pink
  '#FF8A00', // Orange
  '#FFC700', // Yellow
  '#00C48C', // Green
  '#00B8D9', // Cyan
  '#3D5AFE', // Blue
  '#8B5CF6', // Violet
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  color: string;
}

export function NeuralFlowCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    let mouseX = -1000;
    let mouseY = -1000;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Number of particles proportional to screen size (lightweight & 60fps)
    const particleCount = Math.min(Math.floor((width * height) / 14000), 50);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const r = Math.random() * 2.2 + 1.4;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        baseRadius: r,
        radius: r,
        color: RAINBOW_COLORS[i % RAINBOW_COLORS.length],
      });
    }

    let frameCount = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      frameCount++;

      const isDarkMode = document.documentElement.classList.contains('dark');

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          // Bounce off bounds
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          // Cursor interaction: subtle repulsion
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 140;

          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * 1.6;
            p.x -= (dx / dist) * force;
            p.y -= (dy / dist) * force;
            p.radius = p.baseRadius * (1 + (1 - dist / maxDist) * 1.5);
          } else {
            p.radius = p.baseRadius;
          }
        }

        // Draw connections to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
          const connectDist = 130;

          if (cdist < connectDist) {
            const alpha = (1 - cdist / connectDist) * (isDarkMode ? 0.35 : 0.22);
            
            // Gradient wire between two particle colors
            const grad = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
            grad.addColorStop(0, p.color);
            grad.addColorStop(1, p2.color);

            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();

            // Periodic energetic rainbow pulse traveling across wires
            if ((i + j) % 6 === 0) {
              const progress = ((frameCount * 0.012 + i * 0.15) % 1);
              const tx = p.x + (p2.x - p.x) * progress;
              const ty = p.y + (p2.y - p.y) * progress;
              ctx.fillStyle = p.color;
              ctx.beginPath();
              ctx.arc(tx, ty, 2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }

        // Draw node
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = isDarkMode ? 8 : 4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none block h-full w-full ${className || ''}`}
      aria-hidden="true"
    />
  );
}
