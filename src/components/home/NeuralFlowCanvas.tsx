'use client';

import React, { useEffect, useRef } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  layer: number;
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
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create a structured neural network / computational graph layout
    const layers = 4;
    const nodesPerLayer = [3, 4, 4, 2];
    const nodes: Node[] = [];

    nodesPerLayer.forEach((count, layerIndex) => {
      const layerX = (width / (layers + 1)) * (layerIndex + 1);
      const spacing = height / (count + 1);

      for (let i = 0; i < count; i++) {
        nodes.push({
          x: layerX + (Math.random() - 0.5) * 20,
          y: spacing * (i + 1) + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          radius: 3 + Math.random() * 2,
          layer: layerIndex,
        });
      }
    });

    let pulseTime = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      pulseTime += 0.02;

      // Draw subtle grid dots
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      const step = 32;
      for (let x = step; x < width; x += step) {
        for (let y = step; y < height; y += step) {
          ctx.beginPath();
          ctx.arc(x, y, 0.75, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw network connections between adjacent layers
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];

          // Only connect if in adjacent layers or close
          if (Math.abs(a.layer - b.layer) === 1) {
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 180) {
              const alpha = (1 - dist / 180) * 0.35;
              ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();

              // Traveling data pulse
              const pulsePos = (Math.sin(pulseTime + i + j) + 1) / 2;
              const px = a.x + (b.x - a.x) * pulsePos;
              const py = a.y + (b.y - a.y) * pulsePos;
              ctx.fillStyle = 'rgba(199, 255, 85, 0.75)';
              ctx.beginPath();
              ctx.arc(px, py, 1.5, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // Draw neural nodes
      nodes.forEach((node) => {
        // Slow gentle drift within boundary if not reduced motion
        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 20 || node.x > width - 20) node.vx *= -1;
          if (node.y < 20 || node.y > height - 20) node.vy *= -1;
        }

        // Outer glow
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius * 3
        );
        gradient.addColorStop(0, 'rgba(0, 240, 255, 0.4)');
        gradient.addColorStop(1, 'rgba(0, 240, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core node
        ctx.fillStyle = node.layer === 0 ? '#C7FF55' : node.layer === 3 ? '#00F0FF' : '#E2E8F0';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none block h-full w-full opacity-60 ${className || ''}`}
      aria-hidden="true"
    />
  );
}

