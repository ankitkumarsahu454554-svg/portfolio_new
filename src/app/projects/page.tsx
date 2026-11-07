import React from 'react';
import type { Metadata } from 'next';
import { ProjectsView } from './ProjectsView';

export const metadata: Metadata = {
  title: 'Projects | Ankit Kumar Sahu — AI/ML & Software Engineering',
  description:
    'Technical projects by Ankit Kumar Sahu: Rare Disease Prediction AI (PyTorch), MediKiosk Medical OCR (FastAPI/React), SecureWipe Enterprise (NIST SP 800-88), and CanSat Telemetry.',
};

export default function ProjectsPage() {
  return <ProjectsView />;
}

