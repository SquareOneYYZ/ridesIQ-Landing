'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronDown,
  X,
  Car,
  Globe,
  BarChart3,
  CreditCard,
  Wrench,
  Search,
  ArrowRight,
  HelpCircle,
  Contact,
  PcCase,
} from 'lucide-react';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';

interface FAQCategory {
  id: string;
  icon: typeof Car;
  title: string;
  questions: {
    id: string;
    question: string;
    answer: string;
  }[];
}

const faqCategories: FAQCategory[] = [
  {
    id: 'getting-started',
    icon: Car,
    title: 'Getting Started',
    questions: [
      {
        id: 'install',
        question: 'How is the RidesIQ OBD tracker installed?',
        answer:
          'The RidesIQ OBD tracker is a plug-and-play device. Simply insert it into your vehicle’s OBD-II port—no tools or professional installation required.',
      },
      {
        id: 'compatibility',
        question: 'Is the tracker compatible with all vehicles?',
        answer:
          'The OBD is compatible with most vehicles manufactured that have a standard OBD-II port. For vehicles without an OBD-II port, alternative solutions are available.',
      },
      {
        id: '',
        question: 'Can the tracker be used in electric or hybrid vehicles?',
        answer:
          'Yes, the tracker is compatible with most electric and hybrid vehicles equipped with an OBD-II port.',
      },
      {
        id: '',
        question: 'What happens if the tracker is unplugged?',
        answer:
          "If the tracker is disconnected, you'll receive an immediate tamper alert. Additionally, depending on the device, certain ones have backup battery that allows it to continue transmitting data for a limited time.",
      },
      {
        id: '',
        question: 'Can I transfer the tracker between vehicles?',
        answer:
          'Yes, the plug-and-play nature of the tracker allows for easy transfer between vehicles. However, ensure that the new vehicle is compatible and update the vehicle information in your fleet management system.',
      },
      {
        id: '',
        question: 'What is a hardwired GPS tracker?',
        answer:
          "A hardwired GPS tracker is a device permanently installed into a vehicle's electrical system, providing continuous power and real-time tracking without relying on batteries.​",
      },
      {
        id: '',
        question: 'How is a hardwired GPS tracker installed?',
        answer:
          "Installation involves connecting the device directly to the vehicle's power source, typically by wiring it to the ignition and battery. It's recommended to have a professional technician perform the installation to ensure accuracy and safety.",
      },
      {
        id: '',
        question: 'Where is the best place to install the tracker?',
        answer:
          'The optimal location is under the dashboard, away from metal obstructions, to ensure strong GPS signal reception and to keep the device concealed.​',
      },
      {
        id: '',
        question: 'Can I install the tracker myself?',
        answer:
          'While self-installation is possible for those with automotive electrical knowledge, professional installation is advised to guarantee proper functionality and to avoid potential vehicle system interference.',
      },
    ],
  },
  {
    id: 'coverage',
    icon: Globe,
    title: 'Coverage & Compatibility',
    questions: [
      {
        id: 'international',
        question: 'Does RidesIQ work internationally?',
        answer:
          'Yes, RidesIQ works globally through our multi-network connectivity solution. Our devices support 4G LTE with automatic fallback to 3G/2G networks where needed. We maintain partnerships with leading telecom providers worldwide to ensure consistent coverage across international borders.',
      },
      {
        id: 'multiple-fleets',
        question: 'Can I track multiple fleets in different locations?',
        answer:
          "Absolutely! RidesIQ's platform is designed to handle multiple fleets across different locations. You can organize vehicles into groups, assign different administrators, and manage permissions for each fleet separately. Our multi-fleet management features make it easy to oversee operations across various locations from a single dashboard.",
      },
    ],
  },
  {
    id: 'features',
    icon: BarChart3,
    title: 'Features & Benefits',
    questions: [
      {
        id: 'data-collection',
        question: 'What data does RidesIQ collect?',
        answer:
          'RidesIQ collects comprehensive vehicle data including: real-time location, speed, fuel consumption, engine diagnostics, driver behavior metrics, route history, and maintenance alerts. All data is encrypted and securely stored in compliance with industry standards.',
      },
      {
        id: 'Real time analytics',
        question: 'Does RidesIQ provide Real-Time analytics?',
        answer:
          "Yes, RidesIQ leverages advanced Real time algorithms to provide predictive maintenance alerts, optimize routes, analyze driver behavior, and forecast fleet performance. Our Real time system continuously learns from your fleet's data to deliver increasingly accurate insights and recommendations.",
      },
    ],
  },
  {
    id: 'pricing',
    icon: CreditCard,
    title: 'Pricing & Billing',
    questions: [
      {
        id: 'cost',
        question: 'How much does RidesIQ cost?',
        answer:
          'RidesIQ offers flexible pricing plans based on fleet size and feature requirements. Our basic plan starts at $19.99 per vehicle per month, with volume discounts available for larger fleets. Contact our sales team for a customized quote tailored to your specific needs.',
      },
      {
        id: 'discounts',
        question: 'Are there volume discounts for large fleets?',
        answer:
          'Yes, we offer significant volume discounts for fleets with 10 or more vehicles. The discount percentage increases with fleet size, and we can create custom enterprise packages for fleets with specific requirements. Contact our sales team to discuss volume pricing options.',
      },
    ],
  },
  {
    id: 'troubleshooting',
    icon: Wrench,
    title: 'Troubleshooting',
    questions: [
      {
        id: 'not-updating',
        question: 'My tracker is not updating, what should I do?',
        answer:
          "If your tracker isn't updating, try these steps: 1) Check your vehicle's power supply, 2) Ensure the device is properly connected, 3) Verify cellular coverage in your area, 4) Restart the device. If issues persist, contact our 24/7 support team for immediate assistance.",
      },
      {
        id: 'reset-device',
        question: 'How do I reset my device?',
        answer:
          'To reset your RidesIQ device: 1) Locate the reset button on the device, 2) Press and hold for 10 seconds until the LED indicator flashes, 3) Wait for the device to restart (approximately 2 minutes), 4) Verify connection in your dashboard. For OBD devices, simply unplug and reconnect after 30 seconds.',
      },
    ],
  },
  {
    id: 'asset-tracker',
    icon: PcCase,
    title: 'Assest Tracker',
    questions: [
      {
        id: 'how-accurate-is-the-gps-tracking',
        question: 'How accurate is the GPS tracking?',
        answer:
          'Our GPS tracking provides accuracy within 2-3 meters in optimal conditions. The system updates every 10 seconds to ensure real-time location data.',
      },
      {
        id: 'what-is-the-battery-life-of-the-tracking-devices',
        question: 'What is the battery life of the tracking devices?',
        answer:
          'Battery life varies by model. Hard-wired devices use vehicle power, OBD trackers are port-powered, and asset trackers can last up to 5 years on a single charge.',
      },
      {
        id: 'is-the-tracking-data-secure',
        question: 'Is the tracking data secure?',
        answer:
          'Yes, all data is encrypted end-to-end and stored in secure cloud servers. We comply with industry standards for data protection and privacy.',
      },
      {
        id: 'can-i-integrate-the-tracking-system-with-my-existing-fleet-management-software',
        question:
          'Can I integrate the tracking system with my existing fleet management software?',
        answer:
          'Yes, our API allows integration with most major fleet management platforms. Our team can assist with custom integration solutions.',
      },
      {
        id: 'what-kind-of-support-do-you-offer',
        question: 'What kind of support do you offer?',
        answer:
          'We provide 24/7 technical support via phone, email, and chat. Our team of experts is always available to help with any issues or questions.',
      },
    ],
  },
  {
    id: 'faqs-hardwired',
    icon: PcCase,
    title: 'Hard Wired Trackers',
    questions: [
      {
        id: 'how-accurate-is-the-gps-tracking',
        question: 'How accurate is the GPS tracking?',
        answer:
          'Our GPS provides real-time location tracking with ±2-meter accuracy, using GPS, BDS, and Glonass satellites for high precision—even in dense urban or remote areas.',
      },
      {
        id: 'how-often-does-the-tracking-system-update-location-data',
        question: 'How often does the tracking system update location data?',
        answer:
          'Location data is updated multiple times within a minute, for real-time data.',
      },
      {
        id: 'will-this-work-across-regions-or-international-borders',
        question: 'Will this work across regions or international borders?',
        answer:
          'Yes. Our multi-network SIMs and dual-server architecture ensure uninterrupted tracking across cities, provinces, and borders.',
      },
      {
        id: 'how-long-does-it-take-to-install-the-tracker',
        question: 'How long does it take to install the tracker?',
        answer:
          'Professional hardwired installation takes approximately 10-15 minutes per vehicle. Plug-and-play options install in under 5 minutes via OBD-II port.',
      },
      {
        id: 'what-happens-if-the-vehicle-loses-power-or-signal',
        question: 'What happens if the vehicle loses power or signal?',
        answer:
          'The built-in battery backup and 16MB flash memory ensure tracking continues and data is logged, even during power loss or in no-signal zones.',
      },
      {
        id: 'can-i-set-up-alerts-for-speeding-idling-or-geofencing',
        question: 'Can I set up alerts for speeding, idling, or geofencing?',
        answer:
          'Absolutely. You can configure real-time alerts for speeding, harsh braking, long idling, geofence breaches, and more—all from the dashboard.',
      },
      {
        id: 'how-secure-is-the-data-collected-by-the-tracking-system',
        question: 'How secure is the data collected by the tracking system?',
        answer:
          "Data security is paramount. Our system uses encrypted connections and secure servers to protect your fleet's information. ",
      },
      {
        id: 'can-i-integrate-this-with-my-current-fleet-management-software',
        question:
          'Can I integrate this with my current fleet management software?',
        answer:
          'Yes. Our system offers universal compatibility with major fleet platforms and APIs for easy integration.',
      },
      {
        id: 'what-kind-of-reports-can-i-generate',
        question: 'What kind of reports can I generate?',
        answer:
          'You can generate automated reports for mileage, fuel usage, engine health, driving behavior, and more—customizable to your operations.',
      },
      {
        id: 'what-support-is-available-after-purchase',
        question: 'What support is available after purchase?',
        answer:
          'We offer 24/7 expert support, onboarding assistance, and dedicated customer success teams to ensure your fleet is fully optimized from day one.',
      },
    ],
  },
  {
    id: 'faqs-obd',
    icon: PcCase,
    title: 'OBD Trackers',
    questions: [
      {
        id: 'how-easy-is-it-to-install-the-obd-gps-tracker',
        question: 'How easy is it to install the OBD GPS tracker?',
        answer:
          'Installation is plug-and-play. Simply insert the device into your vehicle’s OBD-II port—no tools, technicians, or downtime required.',
      },
      {
        id: 'does-the-tracker-pull-engine-diagnostics-or-vehicle-health-data',
        question:
          'Does the tracker pull engine diagnostics or vehicle health data?',
        answer:
          'Yes, the RidesIQ OBD tracker reads data directly from the OBD-II port, allowing you to monitor engine status, battery voltage, and vehicle health alerts in real time.',
      },
      {
        id: 'how-accurate-is-the-gps-location-tracking',
        question: 'How accurate is the GPS location tracking?',
        answer:
          'Our OBD tracker uses a high-sensitivity GNSS receiver with autonomous positioning accuracy of under 2.5 meters and tracking sensitivity down to -162 dBm.',
      },
      {
        id: 'what-happens-if-the-tracker-is-unplugged-or-loses-power',
        question: 'What happens if the tracker is unplugged or loses power?',
        answer:
          'You’ll receive an immediate tamper or power disconnection alert. A built-in backup battery allows limited reporting even if the device is unplugged.',
      },
      {
        id: 'can-i-track-driving-behavior-with-the-obd-tracker',
        question: 'Can I track driving behavior with the OBD tracker?',
        answer:
          'Yes. The device can detect harsh acceleration, braking, and sharp turns using its built-in 3-axis accelerometer, helping you manage driver safety and compliance.',
      },
      {
        id: 'how-often-does-the-device-update-its-location',
        question: 'How often does the device update its location?',
        answer:
          'Location updates can be customized by time interval, movement, or status changes. This allows for real-time visibility without draining network or power resources.',
      },
      {
        id: 'does-this-tracker-work-across-borders-or-in-multiple-countries',
        question:
          'Does this tracker work across borders or in multiple countries?',
        answer:
          'Yes. With LTE Cat M1/NB1 and 2G fallback, the tracker ensures reliable multi-band connectivity across North America and many international regions.',
      },
      {
        id: 'can-i-set-up-alerts-for-geofencing-or-unauthorized-use',
        question: 'Can I set up alerts for geofencing or unauthorized use?',
        answer:
          'Absolutely. Set custom geofences and receive instant alerts when a vehicle enters or exits a designated zone or is powered on outside working hours.',
      },
      {
        id: 'what-kind-of-support-and-warranty-is-included',
        question: 'What kind of support and warranty is included?',
        answer:
          'RidesIQ provides 24/7 expert support and full onboarding assistance. All devices include a standard manufacturer warranty and options for extended coverage.',
      },
    ],
  },
  {
    id: 'contact',
    icon: Contact,
    title: 'Contact',
    questions: [
      {
        id: 'how-can-i-reach-your-team-for-general-questions-or-technical-support',
        question:
          'How can I reach your team for general questions or technical support?',
        answer:
          'You can email us at support@ridesiq.com. We typically respond within 24 hours during business hours.',
      },
      {
        id: 'what-are-your-customer-support-hours',
        question: 'What are your customer support hours?',
        answer:
          'Our standard support is available Monday–Friday from 9 AM to 5 PM EST. Emergency support is available 24/7 for active clients.',
      },
      {
        id: 'can-i-schedule-a-product-demo-or-consultation',
        question: 'Can I schedule a product demo or consultation?',
        answer:
          'Absolutely. You can book a live demo with one of our fleet specialists to see how RidesIQ works for your needs.',
      },
      {
        id: 'where-are-your-offices-located',
        question: 'Where are your offices located?',
        answer:
          'We operate out of Toronto (ON), Buffalo (NY), and Lewes (DE), with support available across North America.',
      },
      {
        id: 'do-you-offer-onboarding-or-training-for-new-clients',
        question: 'Do you offer onboarding or training for new clients?',
        answer:
          'Yes — every new customer receives personalized onboarding support to ensure smooth installation and system adoption.',
      },
      {
        id: 'how-quickly-will-i-receive-a-response-after-submitting-an-inquiry',
        question:
          'How quickly will I receive a response after submitting an inquiry?',
        answer:
          'We aim to reply within one business day. High-priority or active support tickets may be responded to faster.',
      },
      {
        id: 'what-information-should-i-include-when-contacting-support',
        question: 'What information should I include when contacting support?',
        answer:
          'To help us assist you faster, please include your name, company name, contact info, and a brief description of your question or issue.',
      },
      {
        id: 'do-you-offer-technical-support-for-installation-or-setup',
        question: 'Do you offer technical support for installation or setup?',
        answer:
          'Yes — our support team can guide you through plug-and-play or hardwired setup and ensure your system is working correctly.',
      },
    ],
  },
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeQuestions, setActiveQuestions] = useState<string[]>([]);

  const toggleQuestion = (questionId: string) => {
    setActiveQuestions((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId]
    );
  };

  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

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
                <HelpCircle className='w-4 h-4 mr-2' />
                Help Center
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]'
              >
                <span className='text-white'>Frequently Asked </span>
                <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
                  Questions
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-xl text-white/90 leading-relaxed'
              >
                {
                  "	Find answers to common questions about RidesIQ's fleet tracking solutions"
                }
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Hero Bottom Gradient */}
        <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent' />
      </section>

      {/* Search Section */}
      <section className='py-12 relative'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto'>
            <div className='relative'>
              <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
              <input
                type='text'
                placeholder='Search questions...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent'
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className='py-12 relative'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto'>
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='mb-8'
              >
                <button
                  onClick={() =>
                    setActiveCategory(
                      activeCategory === category.id ? null : category.id
                    )
                  }
                  className='w-full flex items-center justify-between bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors'
                >
                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 rounded-xl bg-[#678FCA]/10 flex items-center justify-center'>
                      <category.icon className='w-6 h-6 text-[#678FCA]' />
                    </div>
                    <h2 className='text-xl font-semibold text-gray-900'>
                      {category.title}
                    </h2>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      activeCategory === category.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Questions */}
                {category.questions.map((question) => (
                  <motion.div
                    key={question.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: 1,
                      height: 'auto',
                      transition: { duration: 0.3 },
                    }}
                    className='mt-4'
                  >
                    <button
                      onClick={() => toggleQuestion(question.id)}
                      className='w-full bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100'
                    >
                      <div className='flex items-center justify-between'>
                        <h3 className='text-lg font-semibold text-gray-900 text-left'>
                          {question.question}
                        </h3>
                        {activeQuestions.includes(question.id) ? (
                          <X className='w-5 h-5 text-gray-500' />
                        ) : (
                          <ChevronDown className='w-5 h-5 text-gray-500' />
                        )}
                      </div>

                      {activeQuestions.includes(question.id) && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          className='mt-4 text-left'
                        >
                          <p className='text-gray-600'>{question.answer}</p>
                        </motion.div>
                      )}
                    </button>
                  </motion.div>
                ))}
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
                  Still Have Questions?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className='text-xl text-white/90 mb-12'
                >
                  Our support team is here to help you 24/7
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
                    Contact Support
                    <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default FAQ;
