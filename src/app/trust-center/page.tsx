'use client';
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { ContactCTA } from '@/components/shared/ContactCTA';
import { TrustCenter } from '@/components/trust-center/TrustCenter';
import Footer from '@/components/Footer';

export default function ResponsibleDisclosure() {
  return (
    <div className='min-h-screen bg-white'>
      <Navigation customColor='text-white' />
      <TrustCenter />
      <ContactCTA
        title='Have Security Concerns?'
        description='Contact our security team directly to report vulnerabilities'
        buttonText='Contact Security Team'
        buttonLink='/contact'
      />
      <Footer />
    </div>
  );
}
