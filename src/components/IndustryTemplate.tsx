'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Sparkles,
  ArrowRight,
  DivideIcon as LucideIcon,
} from 'lucide-react';
import { Navigation } from './Navigation';
import { ChallengesSolutions } from './ChallengesSolutions';
import { StatsCard } from './StatsCard';
import { ProductCard } from './ProductCard';
import Image from 'next/image';
import Link from 'next/link';
import Footer from './Footer';

interface IndustryTemplateProps {
  industry: {
    name: string;
    subtitle: string;
    description: string;
    heroImage: string;
    challenges: Challenge[];
    solutions: Solution[];
    challengePara: string;
    stats: Stat[];
    testimonial?: Testimonial;
    products: Product[];
    ctaData: {
      heading: string;
      description: string;
      tag1: string;
      tag2: string;
      tag3: string;
    };
  };
  keyFeatures?: React.ReactNode;
}

interface Challenge {
  icon: typeof LucideIcon;
  title: string;
  description: string;
}

interface Solution {
  icon: typeof LucideIcon;
  title: string;
  description: string;
}

interface Stat {
  icon: typeof LucideIcon;
  value: number;
  suffix: string;
  label: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

interface Product {
  title: string;
  image: string;
  features: string[];
  link: string;
}

export const IndustryTemplate: React.FC<IndustryTemplateProps> = ({
  industry,
  keyFeatures,
}) => {
  const [email, setEmail] = useState('');
  const handleSubmit = () => {
    console.log(email);
    setEmail('');
  };

  return (
    <div className='min-h-screen bg-white'>
      <Navigation customColor='text-white' />

      {/* Hero Section */}
      <section className='relative min-h-[90vh] flex items-center justify-center overflow-hidden'>
        {/* Background Image & Overlays */}
        <div className='absolute inset-0'>
          <Image
            src={industry.heroImage}
            alt={industry.name}
            className='w-full h-full object-cover'
            width={1280}
            height={720}
          />
          <div className='absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/70' />
          <div className='absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px] opacity-10' />
        </div>

        <div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            {/* Left Content */}
            <div className='text-center lg:text-left'>
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
                  {industry.subtitle}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]'
                >
                  <span className='text-white'>Smarter</span>
                  <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
                    {industry.name}
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className='text-xl text-white/90 leading-relaxed'
                >
                  {industry.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className='flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center sm:justify-start sm:items-start'
                >
                  <Link href='/contact'>
                    <button className='bg-[#678FCA] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#678FCA]/90 transition-all duration-300 transform hover:scale-105 flex items-center group shadow-xl shadow-[#678FCA]/20'>
                      Talk to an Expert
                      <ChevronRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                    </button>
                  </Link>
                </motion.div>

                {/* Trust Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className='pt-8 border-t border-white/10'
                >
                  <div className='flex items-center gap-2 text-white/80'>
                    <Sparkles className='w-4 h-4' />
                    <span className='text-sm font-medium'>
                      Trusted by leading fleet operators worldwide
                    </span>
                  </div>
                  <div className='mt-4 grid grid-cols-3 gap-8'>
                    <div>
                      <div className='text-3xl font-bold text-white'>98%</div>
                      <div className='text-sm text-white/70'>
                        Customer Satisfaction
                      </div>
                    </div>
                    <div>
                      <div className='text-3xl font-bold text-white'>50k+</div>
                      <div className='text-sm text-white/70'>
                        Active Vehicles
                      </div>
                    </div>
                    <div>
                      <div className='text-3xl font-bold text-white'>24/7</div>
                      <div className='text-sm text-white/70'>
                        Expert Support
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Content - Product Image */}
            {/* <motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="hidden lg:block relative"
						>
							<div className="relative">
								<div className="absolute inset-0 bg-gradient-to-br from-[#678FCA]/20 to-[#99D5C9]/20 rounded-3xl transform rotate-6" />
								<Image
									src="/assets/homepage/2.png"
									alt="Fleet Management Solution"
									className="relative z-10 rounded-3xl shadow-2xl transform -rotate-3 transition-transform duration-500 hover:rotate-0"
									width={800}
									height={800}
								/>
							</div> */}

            {/* Floating Stats */}
            {/* <motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.8 }}
								className="absolute -right-4 top-1/4 bg-white p-4 rounded-xl shadow-lg"
							>
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
										<ChevronRight className="w-5 h-5 text-green-600" />
									</div>
									<div>
										<div className="text-sm font-medium text-gray-900">Real-time Tracking</div>
										<div className="text-xs text-gray-500">Live updates every 10s</div>
									</div>
								</div>
							</motion.div>
						</motion.div> */}
          </div>
        </div>

        {/* Hero Bottom Gradient */}
        <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent' />
      </section>

      {/* Challenges & Solutions Section */}
      <ChallengesSolutions
        challenges={industry.challenges.map((challenge) => ({
          ...challenge,
          icon: challenge.icon as typeof LucideIcon,
        }))}
        solutions={industry.solutions.map((solution) => ({
          ...solution,
          icon: solution.icon as typeof LucideIcon,
        }))}
        challengePara={industry.challengePara}
      />

      {keyFeatures}

      {/* Stats Section */}
      <section className='py-24 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl font-bold mb-4'>Proven Results</h2>
            <p className='text-xl text-gray-600'>
              Real impact for your business
            </p>
          </motion.div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {industry.stats.map((stat, index) => (
              <StatsCard
                key={stat.label}
                icon={stat.icon}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {industry.testimonial && (
        <section className='py-24'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='bg-gradient-to-br from-[#678FCA] to-[#99D5C9] rounded-3xl overflow-hidden shadow-xl'
            >
              <div className='md:flex items-center'>
                <div className='md:w-1/2 p-12 md:p-16'>
                  <blockquote className='text-white text-xl md:text-2xl font-medium mb-8'>{`${industry.testimonial.quote}`}</blockquote>
                  <div className='flex items-center'>
                    <Image
                      src={industry.testimonial.image}
                      alt={industry.testimonial.author}
                      className='w-12 h-12 rounded-full mr-4'
                      width={48}
                      height={48}
                    />
                    <div>
                      <div className='text-white font-semibold'>
                        {industry.testimonial.author}
                      </div>
                      <div className='text-white/80 text-sm'>
                        {industry.testimonial.role},{' '}
                        {industry.testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='md:w-1/2 bg-white/10 backdrop-blur-sm p-12 md:p-16'>
                  <div className='space-y-6'>
                    {industry.stats.slice(0, 3).map((stat, index) => (
                      <div key={index} className='flex items-center gap-4'>
                        <div className='w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center'>
                          <stat.icon className='w-6 h-6 text-white' />
                        </div>
                        <div>
                          <div className='text-2xl font-bold text-white'>
                            {stat.value}
                            {stat.suffix}
                          </div>
                          <div className='text-white/80'>{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section className='py-24 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl font-bold mb-4 text-black'>
              Recommended Products
            </h2>
            <p className='text-xl text-gray-600'>
              Tailored solutions for your needs
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {industry.products.map((product, index) => (
              <ProductCard
                key={product.title}
                title={product.title}
                image={product.image}
                features={product.features}
                index={index}
                link={product.link}
              />
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
                  {industry.ctaData.heading}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className='text-xl text-white/90 mb-12'
                >
                  {industry.ctaData.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className='space-y-8'
                >
                  <Link
                    href='/contact'
                    className='bg-white w-[95%] sm:w-[40%] text-[#678FCA] px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group'
                  >
                    Get Started with RidesIQ
                    <ChevronRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                  </Link>

                  {/* Tag Buttons */}
                  <div className='flex flex-wrap justify-center gap-4'>
                    <div className='px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium'>
                      {industry.ctaData.tag1}
                    </div>
                    <div className='px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium'>
                      {industry.ctaData.tag2}
                    </div>
                    <div className='px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium'>
                      {industry.ctaData.tag3}
                    </div>
                  </div>
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
          Talk to an Expert <ChevronRight className='ml-2 w-5 h-5' />
        </button>
      </div>
    </div>
  );
};
