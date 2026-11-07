import React from 'react';
import type { Metadata } from 'next';
import { ContactView } from './ContactView';

export const metadata: Metadata = {
  title: 'Contact | Ankit Kumar Sahu — Technical Collaborations & Inquiries',
  description:
    'Contact Ankit Kumar Sahu regarding Software Engineering, AI/ML, and Data Science technical collaborations. Email: ankitkumarsahu488526@gmail.com.',
};

export default function ContactPage() {
  return <ContactView />;
}
