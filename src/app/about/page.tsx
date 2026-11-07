import React from 'react';
import type { Metadata } from 'next';
import { AboutView } from './AboutView';

export const metadata: Metadata = {
  title: 'About Me | Ankit Kumar Sahu — CSE (Data Science) Student',
  description:
    'Academic background, technical competencies, engineering philosophy, and research interests of Ankit Kumar Sahu, B-Tech CSE (Data Science) undergraduate at NIST University.',
};

export default function AboutPage() {
  return <AboutView />;
}
