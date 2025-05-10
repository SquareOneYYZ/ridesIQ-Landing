'use client';

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { PrivacyContent } from '@/components/privacy/PrivacyContent';
import { ContactCTA } from '@/components/shared/ContactCTA';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className='min-h-screen bg-white'>
      <Navigation customColor='text-white' />
      <PrivacyContent />
      <ContactCTA
        title='Have Questions About Your Privacy?'
        description='Our team is here to help you understand how we protect your data'
        buttonText='Contact Us'
        buttonLink='/contact'
      />
      <Footer />
    </div>
  );
}
