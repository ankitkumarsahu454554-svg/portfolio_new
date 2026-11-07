'use client';

import React, { Component, ReactNode } from 'react';
import dynamic from 'next/dynamic';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class WebGLErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.warn('WebGL Rendering Encountered Context / Initialization Warning:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Stylized Static Fallback for when WebGL is unavailable or fails
function StaticMetallicFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#0A0C0F]">
      <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-lime/10 blur-3xl" />
      <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-electric/10 blur-3xl -translate-y-6" />

      <div className="relative flex items-center justify-center">
        {/* Orbiting Ring Visuals */}
        <div className="absolute h-64 w-64 rounded-full border border-electric/30 animate-spin-slow [border-dasharray:4_4]" />
        <div className="absolute h-52 w-52 rounded-full border border-lime/25 rotate-45" />

        {/* Liquid Metallic Core Representation */}
        <div className="relative h-36 w-36 rounded-full bg-gradient-to-tr from-[#1E293B] via-[#94A3B8] to-[#FFFFFF] shadow-[0_0_40px_rgba(199,255,85,0.25)] flex items-center justify-center">
          <div className="h-28 w-28 rounded-full bg-gradient-to-br from-white/40 via-transparent to-black/60 backdrop-blur-sm flex items-center justify-center">
            <span className="font-mono text-[9px] tracking-widest text-[#08090B] font-bold">
              LIQUID / FORM
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[9px] text-gray-500">
        <span>FALLBACK: CSS_CANVAS</span>
        <span className="text-lime">STATIC PREVIEW</span>
      </div>
    </div>
  );
}

const Scene = dynamic(() => import('./Scene'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-[#08090B]">
      <div className="flex flex-col items-center gap-3">
        <div className="relative h-12 w-12 animate-spin-slow">
          <div className="absolute inset-0 rounded-full border border-lime/20 border-t-lime" />
          <div className="absolute inset-2 rounded-full border border-electric/20 border-b-electric animate-spin" />
        </div>
        <span className="font-mono text-[10px] tracking-widest text-gray-500 uppercase">
          INIT REAL-TIME WEBGL MESH...
        </span>
      </div>
    </div>
  ),
});

interface SceneContainerProps {
  className?: string;
}

export function SceneContainer({ className }: SceneContainerProps) {
  return (
    <div className={className}>
      <WebGLErrorBoundary fallback={<StaticMetallicFallback />}>
        <Scene />
      </WebGLErrorBoundary>
    </div>
  );
}
