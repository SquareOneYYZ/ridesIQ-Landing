'use client';
import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Sparkles,
  MapPin,
  Mail,
  Clock,
  Building2,
  ChevronDown,
  X,
  ArrowRight,
  Check,
} from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { MultiStepForm } from '@/components/MultiStepForm';
import Link from 'next/link';
import { Country, State } from 'country-state-city';
import Select, { SingleValue } from 'react-select';
import Footer from '@/components/Footer';

interface FAQItem {
  question: string;
  answer: string;
}

const Contact = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: '',
    country: '',
  });
  const [formErrors, setFormErrors] = useState({
    fullName: false,
    email: false,
    message: false,
  });

  const faqItems: FAQItem[] = [
    {
      question:
        'How can I reach your team for general questions or technical support?',
      answer:
        'You can email us at support@ridesiq.com. We typically respond within 24 hours during business hours.',
    },
    {
      question: 'What are your customer support hours?',
      answer:
        'Our standard support is available Monday–Friday from 9 AM to 5 PM EST. Emergency support is available 24/7 for active clients.',
    },
    {
      question: 'Can I schedule a product demo or consultation?',
      answer:
        'Absolutely. You can book a live demo with one of our fleet specialists to see how RidesIQ works for your needs.',
    },
    {
      question: 'Where are your offices located?',
      answer:
        'We operate out of Toronto (ON), Buffalo (NY), and Lewes (DE), with support available across North America.',
    },
    {
      question: 'Do you offer onboarding or training for new clients?',
      answer:
        'Yes — every new customer receives personalized onboarding support to ensure smooth installation and system adoption.',
    },
    {
      question:
        'How quickly will I receive a response after submitting an inquiry?',
      answer:
        'We aim to reply within one business day. High-priority or active support tickets may be responded to faster.',
    },
    {
      question: 'What information should I include when contacting support?',
      answer:
        'To help us assist you faster, please include your name, company name, contact info, and a brief description of your question or issue.',
    },
    {
      question: 'Do you offer technical support for installation or setup?',
      answer:
        'Yes — our support team can guide you through plug-and-play or hardwired setup and ensure your system is working correctly.',
    },
  ];

  type CountryOption = {
    value: string;
    label: string;
    data: any;
  };

  const countryOptions: CountryOption[] = useMemo(() => {
    return Country.getAllCountries().map((c) => ({
      value: c.isoCode,
      label: c.name,
      data: c,
    }));
  }, []);
  const [selectedCountry, setSelectedCountry] =
    useState<SingleValue<CountryOption>>(null);
  const [stateOptions, setStateOptions] = useState<CountryOption[]>([]);
  const [selectedState, setSelectedState] =
    useState<SingleValue<CountryOption>>(null);

  const handleChange = (select: SingleValue<CountryOption>) => {
    if (select) {
      setSelectedCountry(select);

      const states = State.getStatesOfCountry(select.value).map((s) => ({
        value: s.isoCode,
        label: s.name,
        data: s,
      }));
      setStateOptions(states);
      setSelectedState(null); // reset state
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors = {
      fullName: !formData.fullName,
      email:
        !formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      message: !formData.message,
      country: !selectedCountry?.label,
    };

    setFormErrors(errors);

    if (!Object.values(errors).some((error) => error)) {
      // Aggregate all page data
      const pageData = {
        contactForm: {
          ...formData,
          country: selectedCountry?.label || '',
          state: selectedState?.label || '',
          submittedAt: new Date().toISOString(),
        },
        activeAccordion:
          activeAccordion !== null
            ? {
                question: faqItems[activeAccordion].question,
                answer: faqItems[activeAccordion].answer,
              }
            : null,
        location: {
          offices: ['Toronto, ON', 'Buffalo, NY', 'Lewes, DE'],
          supportEmail: 'support@ridesiq.com',
          businessHours: '9 AM - 5 PM EST',
        },
      };

      console.log('Page Data:', pageData);

      setFormSubmitted(true);
      console.log(FormData);
      setFormData({
        fullName: '',
        email: '',
        company: '',
        message: '',
        country: '',
      });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  // Add handlers for CTA buttons
  const handleDemoRequest = () => {
    const pageData = {
      action: 'demo_request',
      timestamp: new Date().toISOString(),
      contactForm: formData,
      activeAccordion:
        activeAccordion !== null
          ? {
              question: faqItems[activeAccordion].question,
              answer: faqItems[activeAccordion].answer,
            }
          : null,
    };
    console.log('Demo Request Data:', pageData);
  };

  const handleExpertTalk = () => {
    const pageData = {
      action: 'expert_talk',
      timestamp: new Date().toISOString(),
      contactForm: formData,
      activeAccordion:
        activeAccordion !== null
          ? {
              question: faqItems[activeAccordion].question,
              answer: faqItems[activeAccordion].answer,
            }
          : null,
    };
    console.log('Expert Talk Data:', pageData);
  };

  return (
    <div className='min-h-screen bg-white'>
      <Navigation customColor='text-white' />

      {/* Hero Section */}
      <section className='relative min-h-[60vh] flex items-center justify-center overflow-hidden'>
        {/* Background & Overlays */}
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/70' />
          <div className='absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px] opacity-10' />
        </div>

        <div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32'>
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
                <Sparkles className='w-4 h-4 mr-2' />
                24/7 Support Available
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]'
              >
                <span className='text-white'>Get in Touch with </span>
                <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
                  RidesIQ
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-xl text-white/90 leading-relaxed'
              >
                Have questions? Need a demo? Our team is here to help you with
                all your fleet tracking needs.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Hero Bottom Gradient */}
        <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent' />
      </section>

      {/* Quick Contact Information */}
      <section className='py-24 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[#678FCA]/[0.02] hero-pattern opacity-50' />
        <div className='absolute inset-0 bg-gradient-to-b from-white via-transparent to-white' />

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='relative group h-full'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-[#678FCA]/5 to-[#99D5C9]/5 rounded-2xl transform transition-all duration-300 group-hover:scale-[1.02]' />

              <div className='relative h-full bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 group-hover:shadow-xl border border-gray-100/50'>
                <div className='flex items-start gap-6'>
                  <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-[#678FCA] to-[#99D5C9] p-0.5 flex-shrink-0'>
                    <div className='w-full h-full rounded-xl bg-white flex items-center justify-center'>
                      <Building2 className='w-7 h-7 text-[#678FCA]' />
                    </div>
                  </div>

                  <div>
                    <h3 className='text-xl font-semibold mb-4 text-gray-900'>
                      Office Locations
                    </h3>
                    <ul className='space-y-3'>
                      <li className='flex items-center text-gray-600'>
                        <MapPin className='w-4 h-4 mr-2 text-[#678FCA]' />
                        Toronto, ON
                      </li>
                      <li className='flex items-center text-gray-600'>
                        <MapPin className='w-4 h-4 mr-2 text-[#678FCA]' />
                        Buffalo, NY
                      </li>
                      <li className='flex items-center text-gray-600'>
                        <MapPin className='w-4 h-4 mr-2 text-[#678FCA]' />
                        Lewes, DE
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Email Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className='relative group h-full'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-[#678FCA]/5 to-[#99D5C9]/5 rounded-2xl transform transition-all duration-300 group-hover:scale-[1.02]' />

              <div className='relative bg-white h-full rounded-2xl p-8 shadow-lg transition-all duration-300 group-hover:shadow-xl border border-gray-100/50'>
                <div className='flex items-start gap-6'>
                  <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-[#678FCA] to-[#99D5C9] p-0.5 flex-shrink-0'>
                    <div className='w-full h-full rounded-xl bg-white flex items-center justify-center'>
                      <Mail className='w-7 h-7 text-[#678FCA]' />
                    </div>
                  </div>

                  <div>
                    <h3 className='text-xl font-semibold mb-4 text-gray-900'>
                      Email Support
                    </h3>
                    <div className='space-y-2'>
                      <a
                        href='mailto:support@ridesiq.com'
                        className='text-[#678FCA] hover:underline flex items-center'
                      >
                        <Mail className='w-4 h-4 mr-2' />
                        support@ridesiq.com
                      </a>
                      <p className='text-sm text-gray-600'>
                        We respond within 24 hours!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className='relative group h-full'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-[#678FCA]/5 to-[#99D5C9]/5 rounded-2xl transform transition-all duration-300 group-hover:scale-[1.02]' />

              <div className='relative bg-white h-full rounded-2xl p-8 shadow-lg transition-all duration-300 group-hover:shadow-xl border border-gray-100/50'>
                <div className='flex items-start gap-6'>
                  <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-[#678FCA] to-[#99D5C9] p-0.5 flex-shrink-0'>
                    <div className='w-full h-full rounded-xl bg-white flex items-center justify-center'>
                      <Clock className='w-7 h-7 text-[#678FCA]' />
                    </div>
                  </div>

                  <div>
                    <h3 className='text-xl font-semibold mb-4 text-gray-900'>
                      Business Hours
                    </h3>
                    <div className='space-y-2'>
                      <p className='text-gray-600'>Monday - Friday</p>
                      <p className='text-gray-600'>9 AM - 5 PM EST</p>
                      <p className='text-sm text-gray-500 mt-2'></p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Multi-Step Form Section */}
      <section className='py-24 bg-gray-50/50 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-white to-gray-50/80' />
        <div className='absolute inset-0 hero-pattern opacity-10' />

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <div className='max-w-3xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-center mb-12'
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='inline-flex items-center px-4 py-2 rounded-full bg-[#678FCA]/10 text-[#678FCA] text-sm font-medium mb-6'
              >
                <Sparkles className='w-4 h-4 mr-2' />
                Get Started
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='text-3xl sm:text-4xl font-bold mb-4'
              >
                Get a Quote
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='text-lg text-gray-600'
              >
                Tell us about your fleet tracking needs
              </motion.p>
            </motion.div>

            <MultiStepForm />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      {/* <section className='py-24 bg-gray-50/50 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-white to-gray-50/80' />
        <div className='absolute inset-0 hero-pattern opacity-10' />

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <div className='max-w-3xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-center mb-12'
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='inline-flex items-center px-4 py-2 rounded-full bg-[#678FCA]/10 text-[#678FCA] text-sm font-medium mb-6'
              >
                <Sparkles className='w-4 h-4 mr-2' />
                Get in Touch
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='text-3xl sm:text-4xl font-bold mb-4'
              >
                Send Us a Message
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='text-lg text-gray-600'
              >
                {"We're here to help with your fleet management needs"}
              </motion.p>
            </motion.div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className='bg-green-50 p-8 rounded-2xl text-center'
              >
                <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Check className='w-8 h-8 text-green-600' />
                </div>
                <h3 className='text-2xl font-semibold text-green-900 mb-2'>
                  Thank You!
                </h3>
                <p className='text-green-700'>
                  {
                    "We've received your message and will get back to you within 24 hours."
                  }
                </p>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'
              >
                <div className='space-y-6'>
                  <div>
                    <label
                      htmlFor='fullName'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Full Name *
                    </label>
                    <input
                      type='text'
                      id='fullName'
                      name='fullName'
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${
                        formErrors.fullName
                          ? 'border-red-500'
                          : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent`}
                      placeholder='John Doe'
                    />
                    {formErrors.fullName && (
                      <p className='mt-1 text-sm text-red-600'>
                        Please enter your name
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Email Address *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${
                        formErrors.email ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent`}
                      placeholder='john@company.com'
                    />
                    {formErrors.email && (
                      <p className='mt-1 text-sm text-red-600'>
                        Please enter a valid email address
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor='company'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Company Name
                    </label>
                    <input
                      type='text'
                      id='company'
                      name='company'
                      value={formData.company}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent'
                      placeholder='Company Ltd.'
                      required
                    />
                  </div>
                  <label
                    htmlFor='country'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Country Name
                  </label>
                  <Select
                    options={countryOptions}
                    value={selectedCountry}
                    onChange={handleChange}
                    className='text-sm'
                    required
                  />
                  <label
                    htmlFor='state'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    State / Region
                  </label>
                  <Select
                    options={stateOptions}
                    value={selectedState}
                    onChange={(selected) => setSelectedState(selected)}
                    isDisabled={!stateOptions.length}
                    className='text-sm'
                  />
                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Message *
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        formErrors.message
                          ? 'border-red-500'
                          : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent`}
                      placeholder='How can we help you?'
                    />
                    {formErrors.message && (
                      <p className='mt-1 text-sm text-red-600'>
                        Please enter your message
                      </p>
                    )}
                  </div>

                  <button
                    type='submit'
                    className='w-full bg-[#678FCA] text-white px-6 py-3 rounded-lg hover:bg-[#678FCA]/90 transition-all flex items-center justify-center group'
                  >
                    Send Message
                    <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
                  </button>
                </div>
              </motion.form>
            )}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className='py-24 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[#678FCA]/[0.02] hero-pattern opacity-50' />
        <div className='absolute inset-0 bg-gradient-to-b from-white via-transparent to-white' />

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='inline-flex items-center px-4 py-2 rounded-full bg-[#678FCA]/10 text-[#678FCA] text-sm font-medium mb-6'
            >
              <Sparkles className='w-4 h-4 mr-2' />
              FAQ
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-3xl sm:text-4xl font-bold mb-4'
            >
              Frequently Asked Questions
            </motion.h2>
          </motion.div>

          <div className='max-w-3xl mx-auto space-y-4'>
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden'
              >
                <button
                  onClick={() =>
                    setActiveAccordion(activeAccordion === index ? null : index)
                  }
                  className='w-full px-6 py-4 text-left flex items-center justify-between'
                >
                  <h3 className='text-lg font-semibold text-gray-900'>
                    {item.question}
                  </h3>
                  {activeAccordion === index ? (
                    <X className='w-5 h-5 text-gray-500' />
                  ) : (
                    <ChevronDown className='w-5 h-5 text-gray-500' />
                  )}
                </button>

                {activeAccordion === index && (
                  <div className='px-6 pb-4'>
                    <p className='text-gray-600'>{item.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#678FCA] via-[#99D5C9] to-[#678FCA] shadow-2xl'>
            {/* Background Pattern */}
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
                  Upgrade Your Fleet Tracking Today
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className='text-xl text-white/90 mb-12'
                >
                  Join thousands of fleet managers who trust RidesIQ
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className='flex flex-col sm:flex-row gap-4 justify-center'
                >
                  <button
                    onClick={handleDemoRequest}
                    className='bg-white text-[#678FCA] px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 flex items-center group'
                  >
                    Request a Demo
                    <ChevronRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                  </button>

                  <button
                    onClick={handleExpertTalk}
                    className='bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center group'
                  >
                    Talk to an Expert
                    <ChevronRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Mobile CTA */}
      <div className='fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg md:hidden'>
        <button className='w-full bg-[#678FCA] text-white py-3 rounded-full flex items-center justify-center'>
          Contact Us <ChevronRight className='ml-2 w-5 h-5' />
        </button>
      </div>
    </div>
  );
};

export default Contact;
