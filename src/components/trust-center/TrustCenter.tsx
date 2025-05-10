import { motion } from 'framer-motion';
import { ChevronRight, Shield } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { Navigation } from '../Navigation';

export const TrustCenter = () => {
  const sections = [
    {
      id: 'security',
      title: 'Security',
      content: `We take a proactive and multi-layered approach to security:

• Encryption in Transit & at Rest: All data is encrypted using industry-standard SSL/TLS and AES-256 encryption.
• Access Controls: Internal access to customer data is limited based on the principle of least privilege.
• Infrastructure Security: Our systems are hosted with enterprise-grade cloud providers with SOC 2, ISO 27001, and PCI DSS certifications.
• Monitoring & Alerts: Real-time monitoring, logging, and intrusion detection help us respond quickly to any unusual activity.
• Penetration Testing: Regular vulnerability assessments and third-party penetration tests are conducted to strengthen our defenses.
        
See our Responsible Disclosure Policy if you're a security researcher.`,
    },
    {
      id: 'privacy',
      title: 'Privacy',
      content: `We are committed to data transparency and user control. Our Privacy Policy outlines exactly how we collect, use, and safeguard your information:

• Global Compliance: We comply with GDPR, CCPA, and PIPEDA.
• Consent-Based Tracking: Cookie consent is required for data collection across our website.
• No Selling of Data: We do not sell or share user data with third parties for marketing purposes.
• Data Minimization: We only collect data necessary for providing services and improving your experience.`,
    },
  ];

  const renderContent = (content: string) => {
    return content.split('\n\n').map((block, i) => {
      if (block.includes('•')) {
        const [intro, ...items] = block.split('\n');
        return (
          <div key={i} className='mb-4'>
            {intro && (
              <p className='text-gray-600 leading-relaxed mb-2'>{intro}</p>
            )}
            <ul className='list-disc pl-4 space-y-2'>
              {items.map((item, j) => (
                <li key={j} className='text-gray-600'>
                  {item.replace('• ', '')}
                </li>
              ))}
            </ul>
          </div>
        );
      }
      return (
        <p key={i} className='mb-4 text-gray-600 leading-relaxed'>
          {block}
        </p>
      );
    });
  };

  return (
    <div className='min-h-screen bg-white'>
      <Navigation />

      {/* Hero Section */}
      <section className='relative min-h-[40vh] flex items-center justify-center overflow-hidden'>
        {/* Background & Overlays */}
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/70' />
          <div className='absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px] opacity-10' />
        </div>

        <div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
          <div className='max-w-3xl mx-auto text-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='space-y-8'
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white text-sm font-medium'
              >
                <Shield className='w-4 h-4 mr-2' />
                Updated: March 2024
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]'
              >
                <span className='text-white'>Trust</span>{' '}
                <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
                  Center
                </span>
              </motion.h1>
            </motion.div>
          </div>
        </div>

        <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent' />
      </section>

      {/* Table of Contents */}
      <section className='py-12 relative'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto'>
            <div className='bg-gray-50 rounded-2xl p-6 mb-12'>
              <h2 className='text-2xl font-bold mb-4'>Table of Contents</h2>
              <ul className='space-y-2'>
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className='text-[#678FCA] hover:text-[#678FCA]/80 transition-colors flex items-center group'
                    >
                      <ChevronRight className='w-4 h-4 mr-2 transition-transform group-hover:translate-x-1' />
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className='py-12 relative'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto'>
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className='mb-12 scroll-mt-32'
              >
                <h2 className='text-2xl font-bold mb-4'>{section.title}</h2>
                <div className='prose prose-lg'>
                  {renderContent(section.content)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#678FCA] via-[#99D5C9] to-[#678FCA] shadow-2xl'>
            <div className='absolute inset-0'>
              <div className='absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10' />
              <div className='absolute inset-0 bg-gradient-to-br from-black/5 to-transparent' />
            </div>

            <div className='relative px-6 py-20 sm:px-12 sm:py-28'>
              <div className='max-w-3xl mx-auto text-center'>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8'
                >
                  Have Questions About Your Privacy?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className='text-xl text-white/90 mb-12'
                >
                  Our team is here to help you understand how we protect your
                  data
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className='flex flex-col sm:flex-row gap-4 justify-center'
                >
                  <Link
                    href='/contact'
                    className='bg-white text-[#678FCA] px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group'
                  >
                    Contact Us
                    <ChevronRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
