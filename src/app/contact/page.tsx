import React from 'react';
import type { Metadata } from 'next';
import { ContactView } from './ContactView';

export const metadata: Metadata = {
  title: 'Contact | Ankit Kumar Sahu — Technical Opportunities & Inquiries',
  description:
    'Contact Ankit Kumar Sahu regarding Software Engineering, AI/ML, and Data Science internship opportunities. Email: ankitkumarsahu488526@gmail.com.',
};

export default function ContactPage() {
  return <ContactView />;
}
