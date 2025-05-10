'use client';
import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  useState,
  useRef,
  useEffect,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ChevronRight,
  Sparkles,
  Shield,
  Truck,
  Clock,
  MapPin,
  BarChart3,
  Bell,
  PenTool as Tool,
  Lock,
  Radio,
  Navigation2,
  AlertCircle,
  FileText,
  Activity,
  Ruler,
  Wifi,
  Battery,
  Award,
  Database,
  Laptop,
  Power,
  Wrench,
  Zap,
  Box,
  ChevronDown,
  X,
  Plus,
  Minus,
  HelpCircle,
  ArrowRight,
  LucideProps,
} from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import Image from 'next/image';
import Footer from '@/components/Footer';

interface Products {
  id: string;
  name: string;
  image: string;
  imageProps?: {
    width: number;
    height: number;
    className?: string;
  };
  specs: {
    [key: string]: {
      icon: ForwardRefExoticComponent<
        Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
      >;
      value: string;
      description: string;
    };
  };
}

const Tracking = () => {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return;

      const container = containerRef.current;
      const image = imageRef.current;
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only apply sticky behavior on desktop
      if (window.innerWidth >= 1024) {
        // Calculate the start and end points for the effect
        const startPoint = containerRect.top - windowHeight * 0.5;
        const endPoint = containerRect.bottom - windowHeight;

        // Calculate scroll progress (0 to 1)
        const scrollProgress = Math.max(
          0,
          Math.min(1, -startPoint / (endPoint - startPoint))
        );

        // Calculate maximum scroll distance
        const maxScroll = container.offsetHeight - image.offsetHeight - 100;

        // Apply the transform with easing
        const scrollAmount = Math.min(maxScroll, scrollProgress * maxScroll);

        // Only apply transform when container is in view
        if (containerRect.top <= windowHeight && containerRect.bottom >= 0) {
          image.style.transform = `translateY(${scrollAmount}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products: Products[] = [
    {
      id: 'hardwired',
      name: 'Hard-Wired GPS Fleet Tracker',
      image: '/assets/devices/hardware_tracker.svg',
      imageProps: {
        width: 450,
        height: 300,
        className: 'object-contain p-4',
      },
      specs: {
        installation: {
          icon: Wrench,
          value: 'Professional Hardwired Installation',
          description:
            'Installed by certified technicians for secure, permanent deployment in commercial vehicles.',
        },
        power: {
          icon: Zap,
          value: '9–100V Direct Vehicle Power',
          description:
            'Supports a wide voltage range for trucks, buses, and electric vehicles.',
        },
        bestFor: {
          icon: Truck,
          value: 'Heavy-Duty Fleet Tracking',
          description:
            'Ideal for large commercial fleets, trucking companies, and logistics operations.',
        },
        battery: {
          icon: Battery,
          value: 'Integrated Backup Battery',
          description:
            '120mAh battery ensures uninterrupted tracking even during power loss or tampering.',
        },
        connectivity: {
          icon: Wifi,
          value: '4G LTE + GPS + GSM Support',
          description:
            'Multi-band coverage ensures fast, reliable, and continuous GPS location tracking.',
        },
        features: {
          icon: Shield,
          value: 'Advanced Fleet Security',
          description:
            'Includes tamper detection, geofence alerts, crash detection, remote fuel cut-off, and over-the-air updates (FOTA).',
        },
      },
    },
    {
      id: 'obd',
      name: 'OBD Plug-and-Play GPS Tracker',
      image: '/assets/devices/OBD_tracker.png',
      imageProps: {
        width: 250,
        height: 250,
        className: 'object-contain p-4',
      },
      specs: {
        installation: {
          icon: Wrench,
          value: 'Plug & Play GPS Installation',
          description:
            'Easily connects to your vehicle’s OBD-II port with no tools required.',
        },
        power: {
          icon: Zap,
          value: 'Vehicle-Powered via OBD-II',
          description:
            'Continuously powered by the vehicle for maintenance-free operation.',
        },
        bestFor: {
          icon: Truck,
          value: 'Cars & Light Commercial Vehicles',
          description:
            'Perfect for small to mid-size business fleets and service vehicles.',
        },
        battery: {
          icon: Battery,
          value: 'No Internal Battery Required',
          description:
            'Draws power directly from the OBD port for uninterrupted tracking.',
        },
        connectivity: {
          icon: Wifi,
          value: 'LTE Cat M1/NB1 Connectivity',
          description:
            'Supports fast and secure real-time tracking over LTE networks.',
        },
        features: {
          icon: Shield,
          value: 'Motion & Impact Detection',
          description:
            'Built-in 3-axis accelerometer for detecting movement, harsh braking, and collisions.',
        },
      },
    },
    {
      id: 'asset',
      name: 'Battery-Powered Asset GPS Tracker',
      image: '/assets/devices/asset_tracker.png',
      imageProps: {
        width: 250,
        height: 250,
        className: 'object-contain p-4',
      },
      specs: {
        installation: {
          icon: Wrench,
          value: 'Compact & Portable Design',
          description:
            'Measures just 64.6 x 51 x 20.9mm—ideal for equipment, trailers, and containers.',
        },
        power: {
          icon: Zap,
          value: '2400mAh Battery Powered',
          description:
            'Long-life lithium battery for years of maintenance-free GPS asset tracking.',
        },
        bestFor: {
          icon: Box,
          value: 'Equipment & Asset Monitoring',
          description:
            'Ideal for non-powered assets and remote location tracking.',
        },
        battery: {
          icon: Battery,
          value: '3-Year Battery Life',
          description:
            'Delivers 3+ years of tracking at 1 report per day frequency.',
        },
        connectivity: {
          icon: Wifi,
          value: 'LTE Cat M1/NB2 + 2G/3G Fallback',
          description:
            'Ensures dependable signal in rural, urban, and cross-border areas.',
        },
        features: {
          icon: Shield,
          value: 'IP67 Weatherproof Rating',
          description:
            'Waterproof, dustproof, and built to withstand harsh outdoor conditions.',
        },
      },
    },
  ];

  const faqs = [
    {
      question: 'How accurate is the RidesIQ GPS tracking system?',
      answer:
        'RidesIQ GPS trackers offer ±2-meter accuracy in real-time, leveraging GPS, BDS, and Glonass satellite systems. This ensures precise tracking even in urban canyons and remote environments.',
    },
    {
      question: 'How often does RidesIQ update GPS location data?',
      answer:
        'Our system delivers real-time updates every few seconds, with multiple data points per minute for responsive fleet monitoring and driver behavior tracking.',
    },
    {
      question:
        'Does RidesIQ GPS tracking work across provinces or international borders?',
      answer:
        'Yes. Our dual-server infrastructure and multi-network SIMs support seamless cross-border GPS tracking throughout North America and beyond.',
    },
    {
      question: 'How long does installation take for the GPS trackers?',
      answer:
        'Hardwired devices take 10–15 minutes to install per vehicle by a professional. OBD GPS trackers can be installed by anyone in under 5 minutes—no tools or technical skills needed.',
    },
    {
      question: 'What if the vehicle loses power or cellular signal?',
      answer:
        'Each device includes backup power and flash memory to store GPS data offline. This ensures no loss of tracking during signal outages or intentional power cuts.',
    },
    {
      question:
        'Can I receive alerts for speeding, idling, and geofence breaches?',
      answer:
        'Yes. RidesIQ lets you set real-time alerts for speeding, harsh braking, unauthorized movement, idling, and custom geofence violations—all visible on your dashboard or via SMS/email.',
    },
    {
      question: 'Is the fleet tracking data secure?',
      answer:
        'Absolutely. RidesIQ uses encrypted communications and secure cloud hosting to protect all GPS data in transit and at rest, meeting strict data privacy standards.',
    },
    {
      question:
        'Can RidesIQ integrate with our current fleet management software?',
      answer:
        'Yes. Our API supports seamless integration with most leading fleet management platforms, including custom enterprise solutions.',
    },
    {
      question: 'What reports can I generate with RidesIQ?',
      answer:
        'Generate customizable reports for mileage, fuel consumption, engine diagnostics, idle time, driver behavior, and more—automated to your preferred schedule.',
    },
    {
      question: 'What support does RidesIQ offer after purchasing a tracker?',
      answer:
        'We provide 24/7 support via phone, chat, and email. Our onboarding specialists and dedicated customer success team ensure a smooth setup and long-term fleet optimization.',
    },
  ];

  return (
    <div className='min-h-screen bg-white'>
      <Navigation customColor='text-white' />

      {/* Hero Section */}
      <section className='relative min-h-[90vh] flex items-center justify-center overflow-hidden'>
        {/* Background Image & Overlays */}
        <div className='absolute inset-0'>
          <Image
            src='/assets/fleet-management/RidesIQIQ120.jpg'
            alt='GPS Tracking Device'
            className='w-full h-full object-cover'
            width={1920}
            height={1080}
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
                  Advanced GPS Tracking Solutions
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]'
                >
                  <span className='text-white'>Smarter Fleet Tracking </span>
                  <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
                    Starts Here
                  </span>
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className='text-xl text-white/90 leading-relaxed'
                >
                  Track vehicles in real time, get instant alerts, and automate
                  reporting—all in one seamless GPS solution built for modern
                  fleets.
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className='flex flex-col sm:flex-row gap-4 pt-4'
                >
                  <Link href='/contact'>
                    <button className='bg-[#678FCA] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#678FCA]/90 transition-all duration-300 transform hover:scale-105 flex items-center group shadow-xl shadow-[#678FCA]/20'>
                      Request a Demo
                      <ChevronRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                    </button>
                  </Link>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className='pt-8 border-t border-white/10'
                >
                  <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                    <div className='flex items-center gap-3'>
                      <div className='w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center'>
                        <Shield className='w-6 h-6 text-white' />
                      </div>
                      <div>
                        <div className='text-2xl font-bold text-white'>98%</div>
                        <div className='text-sm text-white/70'>
                          Customer Satisfaction
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center'>
                        <Truck className='w-6 h-6 text-white' />
                      </div>
                      <div>
                        <div className='text-2xl font-bold text-white'>
                          50K+
                        </div>
                        <div className='text-sm text-white/70'>
                          Active Vehicles
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center'>
                        <Clock className='w-6 h-6 text-white' />
                      </div>
                      <div>
                        <div className='text-2xl font-bold text-white'>
                          24/7
                        </div>
                        <div className='text-sm text-white/70'>
                          Expert Support
                        </div>
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
									src="/assets/homepage/3.png"
									alt="GPS Tracking Device"
									className="relative z-10 rounded-3xl shadow-2xl transform -rotate-3 transition-transform duration-500 hover:rotate-0"
									width={800}
									height={533}
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
										<Shield className="w-5 h-5 text-green-600" />
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
      {/* Overview Section */}
      <section className='py-24 relative overflow-hidden bg-gray-50/50'>
        <div className='absolute inset-0 bg-gradient-to-br from-white to-gray-50/80' />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23678FCA%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <div className='grid md:grid-cols-2 gap-12 lg:gap-16 items-center'>
            {/* Left Column - Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='relative'
            >
              <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-br from-[#678FCA]/20 to-[#99D5C9]/20 rounded-3xl transform rotate-6' />
                <Image
                  src='/assets/fleet-management/3.png'
                  alt='RidesIQ Hard-Wired GPS Tracking Device'
                  className='relative z-10 rounded-3xl shadow-2xl transform -rotate-3 transition-transform duration-500 hover:rotate-0 w-full'
                  width={600}
                  height={600}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className='absolute -right-4 top-1/4 bg-white p-4 rounded-xl shadow-lg'
              >
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-green-100 flex items-center justify-center'>
                    <Navigation2 className='w-5 h-5 text-green-600' />
                  </div>
                  <div>
                    <div className='text-sm font-medium text-gray-900'>
                      Live Tracking
                    </div>
                    <div className='text-xs text-gray-500'>
                      10-second updates
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='space-y-6'
              >
                <h2 className='text-3xl sm:text-4xl font-bold text-black'>
                  Advanced GPS Tracking Built for
                  <br />
                  <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
                    Modern Fleets
                  </span>
                </h2>

                <p className='text-lg text-black leading-relaxed'>
                  Whether you manage 5 vehicles or 5,000, our GPS tracking
                  solution delivers industry-leading accuracy, zero-delay
                  location updates, and real-time analytics to boost fleet
                  efficiency, reduce downtime, and improve decision-making.
                  Engineered for reliability and built for scale.
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  {[
                    {
                      icon: Navigation2,
                      title: 'Real-Time GPS Tracking',
                      description:
                        'Know your fleet’s location 24/7 with GPS updates by distance or time—no delays, ever.',
                    },
                    {
                      icon: AlertCircle,
                      title: 'Advanced Security Alerts',
                      description:
                        'Get instant notifications for geofence breaches, tampering, speeding, and impact events.',
                    },
                    {
                      icon: FileText,
                      title: 'Fleet Compliance & Reporting',
                      description:
                        'Automate mileage, fuel, and engine reports to simplify compliance and reduce manual work.',
                    },
                    {
                      icon: Activity,
                      title: 'Comprehensive Telematics Data',
                      description:
                        'Monitor driver behavior like braking, acceleration, idling, and fatigue in real time.',
                    },
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className='flex items-start gap-4'
                    >
                      <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-[#678FCA] to-[#99D5C9] p-0.5 flex-shrink-0'>
                        <div className='w-full h-full rounded-xl bg-white flex items-center justify-center'>
                          <benefit.icon className='w-6 h-6 text-[#678FCA]' />
                        </div>
                      </div>
                      <div>
                        <h3 className='text-lg font-semibold mb-1 text-gray-900'>
                          {benefit.title}
                        </h3>
                        <p className='text-sm text-gray-600'>
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Link href='/contact' className='pt-6'>
                  <button className='bg-[#678FCA] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#678FCA]/90 transition-all duration-300 transform hover:scale-105 flex items-center group'>
                    Learn More About Features
                    <ChevronRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
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
              Key Features
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-4xl font-bold mb-6'
            >
              Key Features That Power
              <br />
              <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
                Smarter Fleet Operations
              </span>
            </motion.h2>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {[
              {
                icon: MapPin,
                title: 'Real-Time Location Tracking',
                description:
                  'Track your fleet’s precise location with live GPS updates based on distance or time. Instantly know where every vehicle is—no lag, no guesswork.',
              },
              {
                icon: BarChart3,
                title: 'Real-Time Telematics',
                description:
                  'Monitor fuel usage, driver behavior, and vehicle performance using actionable telematics data to improve efficiency and safety.',
              },
              {
                icon: Bell,
                title: 'Geofencing & Alerts',
                description:
                  'Set virtual zones and receive instant alerts for unauthorized movement, harsh driving, or boundary breaches.',
              },
              {
                icon: Tool,
                title: 'Advanced Maintenance Alerts',
                description:
                  'Reduce costly breakdowns with proactive alerts for engine health, battery levels, and harsh braking or acceleration.',
              },
              {
                icon: Lock,
                title: 'Secure Data Transmission',
                description:
                  'End-to-end encrypted GPS tracking with multi-server failover ensures secure and reliable data flow—no matter the conditions.',
              },
              {
                icon: Radio,
                title: 'Multi-Network Connectivity',
                description:
                  'Track across regions with LTE-FDD & GSM network support, keeping your fleet connected even in remote or high-traffic zones.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='relative group h-full'
              >
                <div className='absolute inset-0 bg-gradient-to-br from-[#678FCA]/5 to-[#99D5C9]/5 rounded-2xl transform transition-all duration-300 group-hover:scale-[1.02]' />

                <div className='relative h-full bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 group-hover:shadow-xl border border-gray-100/50 flex flex-col'>
                  <div className='flex items-center gap-6 mb-4'>
                    <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-[#678FCA] to-[#99D5C9] p-0.5 flex-shrink-0'>
                      <div className='w-full h-full rounded-xl bg-white flex items-center justify-center'>
                        <feature.icon className='w-7 h-7 text-[#678FCA]' />
                      </div>
                    </div>

                    <h3 className='text-xl font-semibold text-gray-900 flex-1'>
                      {feature.title}
                    </h3>
                  </div>

                  <p className='text-gray-600 leading-relaxed flex-1'>
                    {feature.description}
                  </p>

                  {/* <div className='mt-6 pt-6 border-t border-gray-100'>
                    <button className='text-[#678FCA] font-medium flex items-center text-sm group/btn'>
                      Learn more
                      <ChevronRight className='ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-1' />
                    </button>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='mt-16 text-center'
          >
            <Link href='/contact'>
              <button className='bg-[#678FCA] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#678FCA]/90 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group'>
                Explore Fleet Capabilities
                <ChevronRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Product Comparison Section */}
      <section className='py-24 relative overflow-hidden bg-gray-50'>
        <div className='absolute inset-0 bg-gradient-to-br from-white to-gray-50/80' />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23678FCA%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

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
              Compare Products
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-4xl font-bold mb-6'
            >
              Choose the Right Tracking Solution for
              <br />
              <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
                Your Fleet
              </span>
            </motion.h2>
          </motion.div>

          {/* Desktop Comparison Table */}
          <div className='hidden lg:block'>
            <div className='bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden'>
              {/* Header Row */}
              <div className='grid grid-cols-4 gap-0.5 bg-gray-100 p-0.5'>
                <div className='bg-white p-6'>
                  <div className='font-semibold text-gray-500'>Features</div>
                </div>
                {products.map((product) => (
                  <div key={product.id} className='bg-white p-6'>
                    <div className='text-center'>
                      <Image
                        src={product.image}
                        alt={product.name}
                        {...product.imageProps}
                        width={180}
                        height={180}
                        className='object-contain mx-auto'
                        priority
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Comparison Rows */}
              {Object.entries(products[0].specs).map(([key, spec]) => (
                <div
                  key={key}
                  className='grid grid-cols-4 gap-0.5 bg-gray-100 p-0.5'
                >
                  <div className='bg-white p-6'>
                    <div className='flex items-center gap-3'>
                      <spec.icon className='w-5 h-5 text-[#678FCA]' />
                      <span className='font-medium text-gray-900 capitalize'>
                        {key}
                      </span>
                    </div>
                  </div>
                  {products.map((product) => (
                    <div key={`${product.id}-${key}`} className='bg-white p-6'>
                      <div className='text-center'>
                        <div className='font-medium text-gray-900'>
                          {product.specs[key].value}
                        </div>
                        <div className='text-sm text-gray-500 mt-1'>
                          {product.specs[key].description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Accordion */}
          <div className='lg:hidden space-y-4'>
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={false}
                animate={{
                  height: activeProduct === product.id ? 'auto' : 'auto',
                }}
                className='bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden'
              >
                <button
                  onClick={() =>
                    setActiveProduct(
                      activeProduct === product.id ? null : product.id
                    )
                  }
                  className='w-full p-6 flex items-center justify-between'
                >
                  <div className='flex items-center gap-4'>
                    <img
                      src={product.image}
                      alt={product.name}
                      className='w-16 h-16 object-cover rounded-lg'
                    />
                    <h3 className='text-lg font-semibold text-gray-900'>
                      {product.name}
                    </h3>
                  </div>
                  {activeProduct === product.id ? (
                    <X className='w-5 h-5 text-gray-500' />
                  ) : (
                    <ChevronDown className='w-5 h-5 text-gray-500' />
                  )}
                </button>

                {activeProduct === product.id && (
                  <div className='px-6 pb-6 space-y-4'>
                    {Object.entries(product.specs).map(([key, spec]) => (
                      <div key={key} className='flex items-start gap-3'>
                        <div className='w-8 h-8 rounded-lg bg-[#678FCA]/10 flex items-center justify-center flex-shrink-0'>
                          <spec.icon className='w-4 h-4 text-[#678FCA]' />
                        </div>
                        <div>
                          <div className='font-medium text-gray-900 capitalize'>
                            {key}
                          </div>
                          <div className='text-sm text-gray-500'>
                            {spec.value}
                          </div>
                          <div className='text-xs text-gray-400'>
                            {spec.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='mt-12 text-center'
          >
            <Link href='/contact'>
              <button className='bg-[#678FCA] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#678FCA]/90 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group'>
                Request Custom Quote
                <ChevronRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Device Specifications Section */}
      <section className='py-24 bg-gray-50/50 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-white to-gray-50/80' />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23678FCA%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

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
              Technical Details
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-4xl font-bold mb-6'
            >
              Technical Specifications & Details
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-xl text-gray-600 max-w-3xl mx-auto'
            >
              Built for demanding fleet operations, this GPS tracker combines
              rugged durability, precision positioning, and multi-network
              compatibility. Engineered for seamless integration with leading
              telematics platforms and extreme on-road conditions.
            </motion.p>
          </motion.div>

          {/* Product specs section with sticky image */}
          <div className='py-24 bg-white' ref={containerRef}>
            <div className='container mx-auto px-4'>
              <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-start'>
                {/* Specifications Table */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className='bg-white rounded-2xl shadow-lg border border-gray-100 order-2 lg:order-1'
                >
                  <div className='divide-y divide-gray-100'>
                    {[
                      {
                        icon: Ruler,
                        name: 'Dimensions',
                        value: '3.5in x 1.3in x 0.5in',
                        description:
                          'Compact, waterproof housing with built-in status LEDs.',
                      },
                      {
                        icon: Wifi,
                        name: 'Connectivity',
                        value: '4G LTE + GSM',
                        description:
                          'Supports LTE-FDD bands B1–B8/B20/B28/B66 and GSM fallback for global coverage.',
                      },
                      {
                        icon: Power,
                        name: 'Power Source',
                        value: 'DC 9V - 100V / 1.5A',
                        description:
                          'Wide input range compatible with light and heavy-duty vehicles.',
                      },
                      {
                        icon: Award,
                        name: 'Certifications',
                        value: 'Industry Compliant',
                        description:
                          'Meets global standards for fleet tracking and telematics',
                      },
                      {
                        icon: Battery,
                        name: 'Battery Life',
                        value: '120mAh Backup',
                        description:
                          'Supports emergency tracking in case of power loss',
                      },
                      {
                        icon: Database,
                        name: 'Data Storage',
                        value: '16Mb Flash Memory',
                        description:
                          'Stores critical GPS and vehicle data locally',
                      },
                      {
                        icon: Laptop,
                        name: 'Weight',
                        value: '~45g',
                        description:
                          'Lightweight for easy installation and mounting flexibility.',
                      },
                      {
                        icon: Shield,
                        name: 'Security',
                        value: 'Tamper Alerts & Encryption',
                        description:
                          'Detects unauthorized disconnection and protects data',
                      },
                      {
                        icon: Wifi,
                        name: 'GPS Accuracy',
                        value: '±2 meters',
                        description:
                          'High-precision tracking with L76K GPS module',
                      },
                      {
                        icon: Battery,
                        name: 'Operating Temperature',
                        value: '-20°C to 60°C',
                        description:
                          'Reliable performance in extreme conditions',
                      },
                      {
                        icon: Shield,
                        name: 'Water Resistance',
                        value: 'IP66 Rated',
                        description:
                          'Dustproof and resistant to heavy water exposure',
                      },
                      {
                        icon: Database,
                        name: 'Memory',
                        value: '16Mb Flash Storage',
                        description: 'Ensures reliable offline data logging',
                      },
                    ].map((spec, index) => (
                      <motion.div
                        key={`${spec.name}-${index}`}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className='p-6 hover:bg-gray-50 transition-colors'
                      >
                        <div className='flex items-start gap-4'>
                          <div className='w-10 h-10 rounded-lg bg-[#678FCA]/10 flex items-center justify-center flex-shrink-0'>
                            <spec.icon className='w-5 h-5 text-[#678FCA]' />
                          </div>
                          <div className='flex-1'>
                            <div className='text-sm font-medium text-gray-500'>
                              {spec.name}
                            </div>
                            <div className='text-lg font-semibold text-gray-900 mt-1'>
                              {spec.value}
                            </div>
                            <div className='text-sm text-gray-600 mt-1'>
                              {spec.description}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Product Image - Sticky Container */}
                <div className='relative order-1 lg:order-2 lg:-mt-12'>
                  <div
                    className='lg:sticky lg:top-1/2 lg:transform lg:-translate-y-1/2'
                    ref={imageRef}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className='relative'
                    >
                      <div className='relative mt-20 max-w-md mx-auto lg:max-w-none'>
                        <div className='absolute inset-0 bg-gradient-to-br from-[#678FCA]/20 to-[#99D5C9]/20 rounded-3xl transform rotate-6' />
                        <Image
                          src={`/assets/fleet-management/5.png`}
                          alt={products[0].name}
                          className='relative z-10 rounded-3xl shadow-2xl transform -rotate-3 transition-transform duration-500 hover:rotate-0 w-full'
                          width={800}
                          height={800}
                          priority
                        />
                      </div>

                      {/* Certification Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className='absolute -right-4 top-1/4 bg-white p-4 rounded-xl shadow-lg'
                      >
                        <div className='flex items-center gap-3'>
                          <div className='w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center'>
                            <Award className='w-5 h-5 text-blue-600' />
                          </div>
                          <div>
                            <div className='text-sm font-medium text-gray-900'>
                              Certified Device
                            </div>
                            <div className='text-xs text-gray-500'>
                              FCC, CE, PTCRB
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='mt-16 text-center'
          >
            <Link href='/contact'>
              <button className='bg-[#678FCA] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#678FCA]/90 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group'>
                Contact a Specialist
                <ChevronRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-24 bg-gray-50/50 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-white to-gray-50/80' />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23678FCA%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
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
              <HelpCircle className='w-4 h-4 mr-2' />
              Frequently Asked Questions
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-4xl font-bold mb-6'
            >
              Common Questions About
              <br />
              <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
                Our GPS Tracking Solutions
              </span>
            </motion.h2>
          </motion.div>

          <div className='space-y-4'>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className='bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden'
              >
                <button
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                  className='w-full px-6 py-4 text-left flex items-center justify-between'
                >
                  <span className='text-lg font-medium text-gray-900'>
                    {faq.question}
                  </span>
                  {activeFaq === index ? (
                    <Minus className='w-5 h-5 text-[#678FCA]' />
                  ) : (
                    <Plus className='w-5 h-5 text-[#678FCA]' />
                  )}
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className='overflow-hidden'
                    >
                      <div className='px-6 pb-4 text-gray-600'>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='mt-12 text-center'
          >
            <p className='text-gray-600 mb-6'>
              Still have questions? We are here to help.
            </p>
            <Link href='/contact'>
              <button className='bg-[#678FCA] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#678FCA]/90 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group'>
                Contact Support
                <ChevronRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </button>
            </Link>
          </motion.div>
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
                  Ready to Track Smarter, Safer, and in Real Time?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className='text-xl text-white/90 mb-12'
                >
                  Join thousands of fleet managers using our GPS platform to
                  reduce downtime, recover vehicles faster, and automate
                  compliance—all with zero-delay tracking.
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
                      Cross-Border Coverage
                    </div>
                    <div className='px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium'>
                      Real-Time Alerts
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
        <Link href='/contact'>
          <button className='w-full bg-[#678FCA] text-white py-3 rounded-full flex items-center justify-center'>
            Get a Demo <ChevronRight className='ml-2 w-5 h-5' />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Tracking;
