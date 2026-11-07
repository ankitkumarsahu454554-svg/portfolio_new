import React from 'react';
import type { Metadata } from 'next';
import { WorkView } from './WorkView';

export const metadata: Metadata = {
  title: 'Portfolio & Deployments',
  description:
    'A documented archive of AI/ML systems, enterprise software, space telemetry, and real-time GPU applications by Ankit Kumar Sahu.',
};

export default function WorkPage() {
  return <WorkView />;
}
