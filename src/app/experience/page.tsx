import React from 'react';
import type { Metadata } from 'next';
import { ExperienceView } from './ExperienceView';

export const metadata: Metadata = {
  title: 'Experience & Education | Ankit Kumar Sahu',
  description:
    'Academic record at NIST University (8.75 CGPA), Data Science internship at Unified Mentor, space technology training at India Space Lab, and technical honors.',
};

export default function ExperiencePage() {
  return <ExperienceView />;
}

