import React from 'react';
import type { Metadata } from 'next';
import { AboutView } from './AboutView';

export const metadata: Metadata = {
  title: 'About Ankit Kumar Sahu // Studio Practice & Research',
  description:
    'Background, education at NIST University, data science research, capabilities, and philosophy of Ankit Kumar Sahu.',
};

export default function AboutPage() {
  return <AboutView />;
}
