'use client';
import React from 'react';
import { IndustryTemplate } from '@/components/IndustryTemplate';
import { IndustryKeyFeatures } from '@/components/IndustryKeyFeatures';
import {
  Bike,
  Shield,
  Clock,
  AlertCircle,
  Settings2,
  Timer,
  TrendingUp,
  Target,
  LucideIcon,
  LineChart,
  Thermometer,
  MapPin,
} from 'lucide-react';
type KeyFeature = {
  icon: LucideIcon; // From lucide-react
  title: string;
  description: string;
  stat: string;
  statLabel: string;
};

type IndustryData = {
  name: string;
  subtitle: string;
  description: string;
  heroImage: string;
  challenges: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  challengePara: string;
  solutions: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  stats: {
    icon: LucideIcon;
    value: number;
    suffix: string;
    label: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
    image: string;
  };
  products: {
    title: string;
    image: string;
    features: string[];
    link: string;
  }[];
  ctaData: {
    heading: string;
    description: string;
    tag1: string;
    tag2: string;
    tag3: string;
  };
};

const foodDeliveryKeyFeatures: KeyFeature[] = [
  {
    icon: Thermometer,
    title: 'Smart Fleet Tracking',
    description:
      'Monitor every vehicle in real-time to reduce idle time, improve delivery accuracy, and boost customer satisfaction.',
    stat: '98%',
    statLabel: 'On-Time Delivery Rate',
  },
  {
    icon: Clock,
    title: 'Driver Accountability',
    description:
      'Enhance performance with driver behavior monitoring, helping reduce risky driving, fuel waste, and late deliveries.',
    stat: '70%',
    statLabel: 'Increased Safer Driving Scores',
  },
  {
    icon: Shield,
    title: 'Optimized Route Planning',
    description:
      'Minimize delivery times and maximize efficiency with GPS-based route optimization and real-time traffic data.',
    stat: '45%',
    statLabel: 'Faster Deliveries',
  },
  {
    icon: LineChart,
    title: 'Performance Analytics',
    description:
      'Get actionable insights into delivery performance and operations with real-time analytics dashboards.',
    stat: '3x',
    statLabel: 'Operational Efficiency',
  },
];

const foodDeliveryData: IndustryData = {
  name: ' GPS Tracking for Food Delivery',
  subtitle: 'Food Delivery GPS Tracking & Temperature Monitoring',
  description:
    'Real-time vehicle tracking and temperature monitoring for food delivery fleets. Ensure on-time arrivals, route visibility, and compliance with cold chain standards.',
  heroImage: '/assets/fleet-management/RidesIQIQ120.jpg',
  challenges: [
    {
      icon: Clock,
      title: 'Delivery Delays During Peak Hours',
      description:
        'High traffic and unpredictable road conditions during lunch and dinner rush can cause late deliveries and lost revenue.',
    },
    {
      icon: AlertCircle,
      title: 'Inconsistent Driver Performance',
      description:
        'Lack of visibility into driving behavior can lead to safety risks, vehicle wear, and poor customer experience.',
    },
    {
      icon: Settings2,
      title: 'Lack of Delivery Insights for Operations',
      description:
        'Without visibility into delivery metrics, it’s difficult to identify performance gaps or optimize for efficiency.',
    },
  ],
  challengePara:
    'RidesIQ helps food delivery businesses reduce delays, reroute drivers instantly, and ensure fresh, on-time deliveries using GPS tracking and advanced telematics solutions. ',
  solutions: [
    {
      icon: Bike,
      title: 'Real-Time Traffic Rerouting',
      description:
        'Automatically reroutes drivers using real-time traffic data, ensuring faster deliveries even during peak congestion.',
    },
    {
      icon: Thermometer,
      title: 'Driver Behavior Monitoring',
      description:
        'Track speeding, harsh braking, and idling with behavior insights that improve safety, efficiency, and driver accountability.',
    },
    {
      icon: MapPin,
      title: 'Delivery Analytics Dashboard',
      description:
        'Access delivery times, idle durations, and route history in one centralized platform to make data-driven operational decisions.',
    },
  ],
  stats: [
    {
      icon: Bike,
      value: 50,
      suffix: 'k+',
      label: 'Daily Deliveries',
    },
    {
      icon: Timer,
      value: 96,
      suffix: '%',
      label: 'On-Time Rate',
    },
    {
      icon: TrendingUp,
      value: 3,
      suffix: 'x',
      label: 'Efficiency Gain',
    },
    {
      icon: Target,
      value: 99.8,
      suffix: '%',
      label: 'Customer Satisfaction',
    },
  ],
  testimonial: {
    quote:
      'RidesIQ’s delivery tracking system has completely streamlined how we manage our fleet. We’ve seen faster turnaround times, fewer missed deliveries, and significantly higher customer satisfaction.',
    author: 'David Kim',
    role: 'Operations Director',
    company: 'FastFood Express',
    image: '/assets/food-delivery/testimonial.png',
  },
  products: [
    {
      title: 'Hardwired GPS Tracker',
      image: '/assets/devices/IQ120.png',
      features: [
        'Installed & hidden from drivers',
        'Real-time GPS via direct power',
        'Real-time GPS via direct power',
        'Ideal for long-term use',
      ],
      link: '/solutions/hard-wired-trackers',
    },
    {
      title: 'OBD Plug & Play Tracker',
      image: '/assets/fleet-management/3.png',
      features: [
        'Installs in seconds (OBD-II)',
        'Tracks GPS, speed & diagnostics',
        'Best for short-term rentals',
        'Swaps easily between vehicles',
      ],
      link: '/solutions/obd-trackers',
    },
    {
      title: 'Asset Tracker (SVR)',
      image: '/assets/fleet-management/4.png',
      features: [
        'Battery-powered with long life',
        'Auto-activates if main tracker is removed',
        'Weatherproof & discreet',
        'Acts as backup theft recovery',
      ],
      link: '/solutions/asset-trackers',
    },
  ],
  ctaData: {
    heading:
      'Optimize Every Delivery With RidesIQ,Track drivers, reroute faster, and deliver on time—every time. ',
    description:
      'Get real-time insights and smarter routes with RidesIQ’s vehicle telematics tailored for food delivery businesses. ',
    tag1: '#DeliveryTracking',
    tag2: '#Real-TimeGPS',
    tag3: '#FoodDeliveryInsights',
  },
};

const FoodDelivery = () => {
  return (
    <IndustryTemplate
      industry={foodDeliveryData}
      keyFeatures={
        <IndustryKeyFeatures
          industryName='Food Delivery'
          features={foodDeliveryKeyFeatures}
        />
      }
    />
  );
};

export default FoodDelivery;
