'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Shield,
  ChevronRight,
  BarChart3,
  ArrowRight,
  Sparkles,
  Gauge,
  AlertCircle,
  FileBarChart,
  Truck,
  Timer,
  TrendingUp,
  Target,
} from 'lucide-react';
import { FeatureCard } from '@/components/FeatureCard';
import { StatsCard } from '@/components/StatsCard';
import { ProductCard } from '@/components/ProductCard';
import { CompetitiveAdvantage } from '@/components/CompetitiveAdvantage';
import { IndustrySolutions } from '@/components/IndustrySolutions';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { clarity } from 'clarity-js';
import Footer from '@/components/Footer';

function Home() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  // useEffect(() => {
  // 	const handleScroll = () => {
  // 		// setScrolled(window.scrollY > 20);
  // 	};
  // 	window.addEventListener("scroll", handleScroll);
  // 	return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const cardWidth = 300 + 24; // card width + gap
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    // if (
    //   typeof window !== 'undefined' &&
    //   process.env.NODE_ENV === 'production'
    // ) {
    //   clarity.init(process.env.NEXT_PUBLIC_CLARITY_ID!);
    // }
    const ref = containerRef.current;
    if (ref) ref.addEventListener('scroll', handleScroll);
    return () => ref?.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Gauge,
      title: 'Real-Time Fleet Intelligence',
      description:
        'Track every vehicle in your fleet with real-time GPS updates and instant alerts.',
      details: {
        stat: '98%',
        statLabel: 'Accuracy Rate',
        image: '/assets/homepage/test.jpeg',
        points: [
          'Instant GPS vehicle tracking',
          'Real-time vehicle monitoring',
          'Predictive maintenance alerts',
          'Simple reporting for fleet activity',
        ],
      },
    },
    {
      icon: AlertCircle,
      title: 'Smart Maintenance',
      description:
        'Prevent downtime and reduce repair costs with predictive fleet maintenance tools.',
      details: {
        stat: '45%',
        statLabel: 'Cost Reduction',
        image: '/assets/homepage/test2.png',
        points: [
          'Predictive maintenance scheduling',
          'Automated service reminders',
          'Maintenance history tracking',
          'Track service history across all vehicles',
        ],
      },
    },
    {
      icon: FileBarChart,
      title: 'Advanced Analytics',
      description:
        'Turn your fleet data into actionable insights to reduce costs and optimize performance.',
      details: {
        stat: '2.5x',
        statLabel: 'ROI Increase',
        image: '/assets/homepage/3.png',
        points: [
          'Custom report generation',
          'Exportable data for external analysis',
          'Analyze operational costs across fleet',
          'Forecast maintenance needs',
        ],
      },
    },
  ];

  const productsData = [
    {
      title: 'Hard-Wired Tracker',
      image: '/assets/homepage/2.png',
      features: [
        'Professionally installed and discreet',
        'Hidden from drivers for added control',
        'Notified if removed — pair with SVR',
        'Continuous power for uninterrupted tracking',
      ],
      link: '/solutions/hard-wired-trackers',
      index: 0,
    },
    {
      title: 'OBD Tracker',
      image: '/assets/homepage/3.png',
      features: [
        'Plug-and-play via vehicle’s OBD-II port',
        'Best for company fleets',
        'Tracks GPS location and diagnostics',
        'Swap easily between vehicles',
      ],
      link: '/solutions/obd-trackers',
      index: 1,
    },
    {
      title: 'Asset Tracker',
      image: '/assets/homepage/1.png',
      features: [
        'Long-life, battery-powered design',
        'Rugged, weather-resistant casing',
        'Tracks non-powered assets like trailers',
        'Hidden SVR backup if main tracker is removed',
      ],
      link: '/solutions/asset-trackers',
      index: 2,
    },
    {
      title: 'Asset Tracker',
      image: '/assets/homepage/1.png',
      features: [
        'Long-life, battery-powered design',
        'Rugged, weather-resistant casing',
        'Tracks non-powered assets like trailers',
        'Hidden SVR backup if main tracker is removed',
      ],
      link: '/solutions/asset-trackers',
      index: 2,
    },
    {
      title: 'Asset Tracker',
      image: '/assets/homepage/1.png',
      features: [
        'Long-life, battery-powered design',
        'Rugged, weather-resistant casing',
        'Tracks non-powered assets like trailers',
        'Hidden SVR backup if main tracker is removed',
      ],
      link: '/solutions/asset-trackers',
      index: 2,
    },
  ];

  const totalDots = Math.ceil(productsData.length / 3);

  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <Navigation />
      {/* Hero Section */}
      <section className='relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-white'>
        <div className='absolute inset-0 bg-[#678FCA]/[0.02] hero-pattern opacity-50'></div>
        <div className='absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/80'></div>

        <div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            {/* Left Content */}
            <div className='text-center lg:text-left max-w-2xl mx-auto lg:mx-0'>
              <div className='inline-flex items-center px-4 py-2 rounded-full bg-[#678FCA]/10 text-[#678FCA] text-sm font-medium mb-8 mx-auto lg:mx-0'>
                <Sparkles className='w-4 h-4 mr-2' />
                Advanced Fleet Telematics
              </div>

              <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6'>
                <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
                  Real-Time GPS Tracking for{' '}
                </span>
                <br className='hidden sm:block' />
                <span className='text-gray-900'>Smarter Fleet Management</span>
              </h1>

              <p className='text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0'>
                Track every vehicle in real-time, automate toll billing, and
                recover stolen rentals instantly—powered by RidesIQ’s
                plug-and-play GPS technology.
              </p>

              <div className='flex justify-center lg:justify-start mb-12'>
                <Link
                  href='/contact'
                  className='bg-[#678FCA] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#678FCA]/90 transition-all duration-300 transform hover:scale-105 flex items-center group shadow-xl shadow-[#678FCA]/10'
                >
                  Book a Free Demo
                  <ChevronRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </Link>
              </div>

              {/* Stats */}
              <div className='grid grid-cols-3 gap-8 max-w-lg mx-auto lg:mx-0'>
                <div className='text-center lg:text-left'>
                  <div className='text-3xl sm:text-4xl font-bold text-[#678FCA]'>
                    99%
                  </div>
                  <div className='text-sm sm:text-base text-gray-600 mt-1'>
                    Uptime
                  </div>
                </div>
                <div className='text-center lg:text-left'>
                  <div className='text-3xl sm:text-4xl font-bold text-[#678FCA]'>
                    5M+
                  </div>
                  <div className='text-sm sm:text-base text-gray-600 mt-1'>
                    Miles Tracked
                  </div>
                </div>
                <div className='text-center lg:text-left'>
                  <div className='text-3xl sm:text-4xl font-bold text-[#678FCA]'>
                    50K+
                  </div>
                  <div className='text-sm sm:text-base text-gray-600 mt-1'>
                    Connected Vehicles
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - 3D Product Render */}
            <div className='relative lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0'>
              <div className='relative w-full max-w-lg mx-auto'>
                {/* Main Product Image */}
                <div className='product-render relative z-20 transform hover:scale-105 transition-transform duration-500'>
                  <Image
                    src='/assets/IoTRides.png'
                    width={600}
                    height={600}
                    alt='Fleet vehicle GPS tracking dashboard – RidesIQe'
                    className='w-full h-auto rounded-2xl shadow-2xl'
                  />

                  {/* Floating Stats Card */}
                  <div className='absolute -right-2 sm:-right-8 -top-3 sm:top-1/4 bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300'>
                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 rounded-full bg-green-100 flex items-center justify-center'>
                        <BarChart3 className='w-5 h-5 text-green-600' />
                      </div>
                      <div>
                        <div className='text-sm font-medium text-gray-900'>
                          Live Tracking
                        </div>
                        <div className='text-xs text-gray-500'>
                          Real-time updates
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Analytics Card */}
                  <div className='absolute -left-2 sm:-left-8 bottom-[-10px] sm:bottom-1/4 bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300'>
                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center'>
                        <Shield className='w-5 h-5 text-blue-600' />
                      </div>
                      <div>
                        <div className='text-sm font-medium text-gray-900'>
                          Stolen Vehicle Recovery
                        </div>
                        <div className='text-xs text-gray-500'>
                          Instantly recover lost assets
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background Elements */}
                <div className='absolute inset-0 z-10'>
                  <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-gradient-to-r from-[#678FCA]/10 via-[#99D5C9]/10 to-[#678FCA]/10 rounded-full blur-3xl opacity-30 animate-spin-slow'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success & ROI Stats Section */}
      <section className='py-24 sm:py-32 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[#678FCA]/[0.02] hero-pattern opacity-50' />
        <div className='absolute inset-0 bg-gradient-to-b from-white via-transparent to-white' />

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16 sm:mb-24'
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='inline-flex items-center px-4 py-2 rounded-full bg-[#678FCA]/10 text-[#678FCA] text-sm font-medium mb-6'
            >
              <Sparkles className='w-4 h-4 mr-2' />
              Success Metrics
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-black'
            >
              Proven Results for
              <br />
              <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
                Modern Fleets
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-xl text-black max-w-2xl mx-auto'
            >
              Trusted by fleets worldwide, RidesIQ delivers measurable impact
            </motion.p>
          </motion.div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10'>
            <StatsCard
              icon={Truck}
              value={20}
              suffix='k+'
              label='Used by 500+ fleets across North America'
              index={0}
            />
            <StatsCard
              icon={Timer}
              value={98}
              suffix='%'
              label='Predictive alerts that reduce breakdowns and delays'
              index={1}
            />
            <StatsCard
              icon={TrendingUp}
              value={2.5}
              suffix='x'
              label='Real-time toll & misuse alerts help maximize your revenue'
              index={2}
            />
            <StatsCard
              icon={Target}
              value={99.9}
              suffix='%'
              label='Instantly track every vehicle—no delays, no blind spots'
              index={3}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 sm:py-32 relative overflow-hidden bg-gray-50/50'>
        <div className='absolute inset-0 bg-gradient-to-br from-white to-gray-50/80' />
        <div className='absolute inset-0 hero-pattern opacity-10' />

        <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16 sm:mb-20'
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='inline-flex items-center px-4 py-2 rounded-full bg-[#678FCA]/10 text-[#678FCA] text-sm font-medium mb-6 sm:mb-8'
            >
              <Sparkles className='w-4 h-4 mr-2' />
              Advanced Telematics Features
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight text-black'
            >
              Power Your Fleet with Intelligent,
              <br />
              <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
                Real-Time Telematics
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-lg sm:text-xl text-black max-w-2xl mx-auto leading-relaxed'
            >
              From real-time vehicle tracking to predictive maintenance and
              custom analytics—RidesIQ gives you full control over your fleet,
              anytime, anywhere.
            </motion.p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-2 max-w-full mx-auto'>
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
                details={feature.details}
                isActive={activeFeature === index}
                onMouseEnter={() => setActiveFeature(index)}
                onClick={() => setActiveFeature(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <IndustrySolutions />

      {/* Product Comparison Section */}
      <section className='py-24 sm:py-32 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[#678FCA]/[0.02] hero-pattern opacity-50' />
        <div className='absolute inset-0 bg-gradient-to-b from-white via-transparent to-white' />

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16 sm:mb-24'
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='inline-flex items-center px-4 py-2 rounded-full bg-[#678FCA]/10 text-[#678FCA] text-sm font-medium mb-6'
            >
              <Sparkles className='w-4 h-4 mr-2' />
              Compare Solutions
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight'
            >
              The Right GPS Tracker for
              <br />
              <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
                Every Vehicle in Your Fleet
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-xl text-black max-w-2xl mx-auto'
            >
              Avoid downtime, recover assets, and stay in control—no matter your
              setup.
            </motion.p>
          </motion.div>
          {/* Product Grid */}
          <div className='w-full px-4 py-6 overflow-hidden'>
            <div
              ref={containerRef}
              className='flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory custom-scrollbar-hide'
            >
              {productsData.map((product, index) => (
                <div
                  key={index}
                  className='w-full sm:w-[80%] md:w-[calc(100%/3-1.5rem)] flex-shrink-0 snap-start'
                >
                  <div className='h-full'>
                    <ProductCard
                      title={product.title}
                      image={product.image}
                      features={product.features}
                      link={product.link}
                      index={index}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator Dots */}
          <div className='flex justify-center mt-4 gap-2'>
            {Array.from({ length: totalDots }).map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  i === activeIndex ? 'bg-[#678FCA]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantage Section */}
      <CompetitiveAdvantage />

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
                  Ready to Transform Your Fleet?
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
                  className='space-y-8'
                >
                  <Link
                    href='/contact'
                    className='bg-white w-[80%] sm:w-[32%] text-[#678FCA] px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group'
                  >
                    Get Started Today
                    <ChevronRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                  </Link>

                  {/* Tag Buttons */}
                  <div className='flex flex-wrap justify-center gap-4'>
                    <div className='px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium'>
                      Fleet Tracking
                    </div>
                    <div className='px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium'>
                      Real time Insights
                    </div>
                    <div className='px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium'>
                      Compliance
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
          Get a Demo <ChevronRight className='ml-2 w-5 h-5' />
        </button>
      </div>
    </div>
  );
}

export default Home;
