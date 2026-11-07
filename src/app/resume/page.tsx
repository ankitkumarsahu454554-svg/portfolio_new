import React from 'react';
import type { Metadata } from 'next';
import { ResumeView } from './ResumeView';

export const metadata: Metadata = {
  title: 'Resume & Curriculum Vitae // Ankit Kumar Sahu',
  description:
    'Curriculum vitae and academic record of Ankit Kumar Sahu, B-Tech in Computer Science Engineering (Data Science) at NIST University. Download verified original PDF.',
};

export default function ResumePage() {
  return <ResumeView />;
}
