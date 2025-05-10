'use client';
import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  useRef,
  useEffect,
  useState,
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
      id: 'obd',
      name: 'OBD Tracker',
      image: '/assets/devices/OBD_tracker.png',
      imageProps: {
        width: 250,
        height: 250,
        className: 'object-contain p-4',
      },
      specs: {
        installation: {
          icon: Wrench,
          value: 'Plug & Play',
          description:
            'Installs instantly via OBD-II port (no tools or wiring required)',
        },
        power: {
          icon: Zap,
          value: 'OBD-II Port',
          description:
            "Draws power directly from the vehicle's diagnostic port",
        },
        bestFor: {
          icon: Truck,
          value: 'Cars & Light Commercial Vehicles',
          description: 'Ideal for rentals, dealerships, and fleet cars',
        },
        battery: {
          icon: Battery,
          value: 'No Battery',
          description:
            'Continuous power from vehicle; includes low-power sleep mode',
        },
        connectivity: {
          icon: Wifi,
          value: 'LTE Cat M1/NB1',
          description:
            'Supports LTE-M/NB-IoT with fallback to EGPRS (2G) for wide coverage',
        },
        features: {
          icon: Shield,
          value: 'Motion Detection',
          description:
            'Engine Diagnostics, Driving Behavior Alerts, Tow Alarm, and Crash Detection',
        },
      },
    },
    {
      id: 'hardwired',
      name: 'Hard-Wired Tracker',
      image: '/assets/devices/hardware_tracker.svg',
      imageProps: {
        width: 450,
        height: 300,
        className: 'object-contain p-4',
      },
      specs: {
        installation: {
          icon: Wrench,
          value: 'Professional Installation',
          description: 'Requires certified technician',
        },
        power: {
          icon: Zap,
          value: '9–100V Direct Vehicle Power',
          description: 'Wide voltage range for trucks, buses, and EVs',
        },
        bestFor: {
          icon: Truck,
          value: 'Large Fleets',
          description: 'Ideal for commercial vehicles and trucks',
        },
        battery: {
          icon: Battery,
          value: 'Backup Battery',
          description:
            '120mAh backup ensures continued tracking if power is cut',
        },
        connectivity: {
          icon: Wifi,
          value: '4G LTE + GPS + GSM',
          description: 'Supports LTE-FDD & GSM bands',
        },
        features: {
          icon: Shield,
          value: 'Advanced Security',
          description:
            'Tamper detection, geo-fence, impact alerts, remote fuel cut-off, and FOTA',
        },
      },
    },
    {
      id: 'asset',
      name: 'Asset Tracker',
      image: '/assets/devices/asset_tracker.png',
      imageProps: {
        width: 250,
        height: 250,
        className: 'object-contain p-4',
      },
      specs: {
        installation: {
          icon: Wrench,
          value: 'Compact Design',
          description: '64.6 x 51 x 20.9mm form factor',
        },
        power: {
          icon: Zap,
          value: 'Battery Powered',
          description: '2400mAh lithium battery',
        },
        bestFor: {
          icon: Box,
          value: 'Asset Tracking',
          description: 'Vehicles & equipment monitoring',
        },
        battery: {
          icon: Battery,
          value: '3-Year Battery',
          description: 'With 1 report per day',
        },
        connectivity: {
          icon: Wifi,
          value: 'LTE Cat M1/NB2',
          description: 'With 2G/3G fallback',
        },
        features: {
          icon: Shield,
          value: 'Weather Resistant',
          description: 'IP67 rated protection',
        },
      },
    },
  ];

  const faqs = [
    {
      question: 'How easy is it to install the OBD GPS tracker?',
      answer:
        'Installation is plug-and-play. Simply insert the device into your vehicle’s OBD-II port—no tools, technicians, or downtime required.',
    },
    {
      question:
        'Does the tracker pull engine diagnostics or vehicle health data?',
      answer:
        'Yes, the RidesIQ OBD tracker reads data directly from the OBD-II port, allowing you to monitor engine status, battery voltage, and vehicle health alerts in real time.',
    },
    {
      question: 'How accurate is the GPS location tracking?',
      answer:
        'Our OBD tracker uses a high-sensitivity GNSS receiver with autonomous positioning accuracy of under 2.5 meters and tracking sensitivity down to -162 dBm.',
    },
    {
      question: 'What happens if the tracker is unplugged or loses power?',
      answer:
        'You’ll receive an immediate tamper or power disconnection alert. A built-in backup battery allows limited reporting even if the device is unplugged.',
    },
    {
      question: 'Can I track driving behavior with the OBD tracker?',
      answer:
        'Yes. The device can detect harsh acceleration, braking, and sharp turns using its built-in 3-axis accelerometer, helping you manage driver safety and compliance.',
    },
    {
      question: 'How often does the device update its location?',
      answer:
        'Location updates can be customized by time interval, movement, or status changes. This allows for real-time visibility without draining network or power resources.',
    },
    {
      question:
        'Does this tracker work across borders or in multiple countries?',
      answer:
        'Yes. With LTE Cat M1/NB1 and 2G fallback, the tracker ensures reliable multi-band connectivity across North America and many international regions.',
    },
    {
      question: 'Can I set up alerts for geofencing or unauthorized use?',
      answer:
        'Absolutely. Set custom geofences and receive instant alerts when a vehicle enters or exits a designated zone or is powered on outside working hours.',
    },
    {
      question: 'What kind of support and warranty is included?',
      answer:
        'RidesIQ provides 24/7 expert support and full onboarding assistance. All devices include a standard manufacturer warranty and options for extended coverage.',
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
                  Plug-and-Play GPS Tracking
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]'
                >
                  <span className='text-white'>Track Smarter with </span>
                  <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
                    Easy Plug-and-Play GPS
                  </span>
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className='text-xl text-white/90 leading-relaxed'
                >
                  Get instant visibility into your fleet with our OBD GPS
                  tracker—designed for fast, no-tools installation. Perfect for
                  rental, dealership, and light commercial vehicles, RidesIQ
                  delivers real-time tracking, driver behavior alerts, and
                  instant activation from the moment it’s plugged in.
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
                  src='/assets/fleet-management/5.png'
                  alt='RidesIQ OBD GPS Tracking Device'
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
                  Plug-and-Play GPS Tracking for
                  <br />
                  <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
                    Light-Duty Fleets
                  </span>
                </h2>

                <p className='text-lg text-black leading-relaxed'>
                  The RidesIQ OBD GPS Tracker delivers high-accuracy location
                  tracking, instant activation via OBD-II port, and powerful
                  telematics insights for dealerships, rental companies, and
                  light commercial fleets. With real-time data, driver behavior
                  alerts, and low-power operation, RidesIQ OBD makes GPS
                  tracking simple, scalable, and effective—right out of the box.
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  {[
                    {
                      icon: Navigation2,
                      title: 'Smart Reporting Engine',
                      description:
                        'Adaptive GPS updates based on ignition status, speed, or motion.',
                    },
                    {
                      icon: AlertCircle,
                      title: 'Access to Engine Diagnostics',
                      description:
                        'Access live engine data like RPM, fuel level, and fault codes via OBD-II.',
                    },
                    {
                      icon: FileText,
                      title: 'Reliable Multi-Network Connectivity',
                      description:
                        'Supports LTE-M/NB-IoT with 2G fallback and dual-server syncing.',
                    },
                    {
                      icon: Activity,
                      title: 'Driver Behavior Monitoring',
                      description:
                        'Detects harsh braking, acceleration, sharp turns, and impacts.',
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
              Advanced OBD GPS Features for
              <br />
              <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
                Connected Fleets
              </span>
            </motion.h2>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {[
              {
                icon: MapPin,
                title: 'Real-Time GNSS Tracking',
                description:
                  'High-sensitivity positioning with <2.5m accuracy for precise fleet location at all times.',
              },
              {
                icon: BarChart3,
                title: 'Adaptive Reporting',
                description:
                  'Automatically adjusts update frequency based on vehicle movement, ignition, and speed to reduce data usage and ensure tracking efficiency.',
              },
              {
                icon: Bell,
                title: 'Motion & Impact Alerts',
                description:
                  '3-axis accelerometer detects motion, harsh events, and unauthorized use while parked or in motion.',
              },
              {
                icon: Tool,
                title: 'Vehicle Data via OBD-II',
                description:
                  'Reads diagnostics like RPM, battery voltage, DTC codes, and fuel levels for smarter maintenance decisions.',
              },
              {
                icon: Lock,
                title: 'Multi-Channel Communication',
                description:
                  'Supports TCP, UDP, and SMS with fallback protocols to ensure uninterrupted GPS data transmission.',
              },
              {
                icon: Radio,
                title: 'LTE Cat M1/NB-IoT Connectivity',
                description:
                  'Connects reliably on LTE-M and NB-IoT networks with 2G fallback for global coverage and extended service life.',
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
                        <feature.icon className='w-6 h-6 text-[#678FCA]' />
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
                Learn More
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
              Choose the Right
              <br />
              <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
                Tracking Solution
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
              Device Specifications & Details
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-xl text-gray-600 max-w-3xl mx-auto'
            >
              Explore the technical specifications of RidesIQ Tracker and see
              how it fits into your fleet management needs. Engineered for
              accuracy, durability, and seamless integration with leading
              telematics platforms.
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
                        value: '1.95” x 1.91” x 0.86”',
                        description:
                          'Compact, low-profile design for direct OBD-II installation.',
                      },
                      {
                        icon: Wifi,
                        name: 'Connectivity',
                        value: 'LTE Cat M1/NB1 + EGPRS',
                        description:
                          'Supports LTE-FDD Bands B1–B5, B8, B12, B13, B18–B20, B25, B28 with 2G fallback (850/900/1800/1900 MHz).',
                      },
                      {
                        icon: Power,
                        name: 'Power Source',
                        value: '8V – 32V DC via OBD-II',
                        description:
                          'Directly powered by the vehicle’s diagnostic port.',
                      },
                      {
                        icon: Award,
                        name: 'Certifications',
                        value: 'Industry Compliant',
                        description:
                          'Compatible with legislated OBD-II protocols (ISO 15765)',
                      },
                      {
                        icon: Battery,
                        name: 'Data Storage',
                        value: 'Internal Flash Memory',
                        description:
                          'Stores position, event, and diagnostic data when offline.',
                      },
                      {
                        icon: Database,
                        name: 'Software Compatibility',
                        value: 'Universal Telematics Integration',
                        description:
                          'Works seamlessly with leading fleet management platforms.',
                      },
                      {
                        icon: Laptop,
                        name: 'Working Modes',
                        value: 'Dual Mode',
                        description:
                          'Power saving and continuous tracking modes',
                      },
                      {
                        icon: Shield,
                        name: 'Security',
                        value: 'Tamper & OBD Disconnection Alerts',
                        description:
                          'Triggers alerts for unauthorized device removal or power cut.',
                      },
                      {
                        icon: Wifi,
                        name: 'GPS Accuracy',
                        value: '< 2.5m CEP',
                        description:
                          'Autonomous positioning with u-blox GNSS; tracking sensitivity down to -162 dBm.',
                      },
                      {
                        icon: Battery,
                        name: 'Operating Temperature',
                        value: '-30°C to +80°C',
                        description:
                          'Built for performance in extreme driving conditions.',
                      },
                      {
                        icon: Shield,
                        name: 'Water Resistance',
                        value: 'IPX5 Rated',
                        description:
                          'Protected from limited water exposure inside the vehicle cabin.',
                      },
                      {
                        icon: Database,
                        name: 'Memory',
                        value: 'Internal Flash Storage',
                        description:
                          'Supports event buffering and power-on reporting.',
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
            <button className='bg-[#678FCA] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#678FCA]/90 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group'>
              Download Full Specifications
              <ChevronRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </button>
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
                  Ready to Transform Your Fleet?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className='text-xl text-white/90 mb-12'
                >
                  Plug into smarter operations with RidesIQ’s OBD
                  solution—real-time vehicle tracking, driver insights, and
                  instant setup in under a minute.
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
                      Plug & Play Tracking
                    </div>
                    <div className='px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium'>
                      Real-Time Insights
                    </div>
                    <div className='px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium'>
                      Engine Diagnostics
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
};

export default Tracking;
