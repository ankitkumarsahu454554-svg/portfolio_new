import React from 'react';
import type { Metadata } from 'next';
import { ContactView } from './ContactView';

export const metadata: Metadata = {
  title: 'Contact // Initiate Collaboration',
  description:
    'Direct dispatch transmission to collaborate with Ankit Kumar Sahu on AI/ML engineering, real-time WebGL, and full-stack software development.',
};

export default function ContactPage() {
  return <ContactView />;
}
