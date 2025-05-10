'use client';
import React from 'react';
import { IndustryTemplate } from '@/components/IndustryTemplate';
import { IndustryKeyFeatures } from '@/components/IndustryKeyFeatures';
import {
  Truck,
  Shield,
  Timer,
  TrendingUp,
  Target,
  DollarSign,
  LineChart,
  LucideIcon,
  Bell,
  Globe,
  Receipt,
  MapPin,
  FileCheck,
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
const fleetKeyFeatures: KeyFeature[] = [
  {
    icon: DollarSign,
    title: 'Cut Fuel & Maintenance Costs',
    description:
      'Reduce fuel usage and prevent costly breakdowns with real-time GPS tracking and predictive maintenance alerts.',
    stat: '30%',
    statLabel: 'Average Cost Reduction',
  },
  {
    icon: Truck,
    title: 'Boost Fleet Efficiency',
    description:
      'Improve delivery speed and routing accuracy with live location tracking and smart dispatch tools.',
    stat: '40%',
    statLabel: 'Improved Efficiency',
  },
  {
    icon: Shield,
    title: 'Smarter Operational Decisions',
    description:
      'Get real-time alerts for unauthorized activity, delayed routes, or unexpected vehicle movement.',
    stat: '60%',
    statLabel: 'Risk Reduction',
  },
  {
    icon: LineChart,
    title: 'Automate Toll Tracking & Billing',
    description:
      'Track toll charges in real time and automatically log costs per vehicle — no more missed charges or manual reconciliations.',
    stat: '100%',
    statLabel: 'Toll Visibility',
  },
];

const fleetManagementData: IndustryData = {
  name: ' GPS Fleet Tracking for Logistics & Transportation',
  subtitle: 'Professional Vehicle Monitoring Systems',
  description:
    'Optimize routes, reduce fuel costs, and increase fleet productivity with real-time tracking designed for logistics and delivery operations.',
  heroImage: '/assets/fleet-management/RidesIQIQ120.jpg',
  challenges: [
    {
      icon: Shield,
      title: 'Vehicle Security',
      description:
        'Risk of cargo theft and vehicle misuse during long-haul operations.',
    },
    {
      icon: Globe,
      title: 'Live Fleet Tracking',
      description:
        'Dispatchers struggle to monitor driver locations, routes, and ETAs in real time.',
    },
    {
      icon: Receipt,
      title: 'Maintenance Oversight',
      description:
        'Unplanned breakdowns lead to missed deliveries and added costs.',
    },
  ],
  challengePara:
    'Track vehicles in real time, prevent theft, reduce costs, and boost delivery accuracy using GPS tracking, geofencing, and automated alerts—purpose-built for logistics and transportation companies. ',
  solutions: [
    {
      icon: MapPin,
      title: 'GPS Tracking Hardware',
      description:
        'Tamper-resistant GPS devices and instant theft alerts to secure high-value assets.',
    },
    {
      icon: FileCheck,
      title: 'Fleet Management Software',
      description:
        'Live GPS tracking with real-time updates for better route planning and delivery accuracy.',
    },
    {
      icon: Bell,
      title: 'Automated Alerts',
      description:
        'Automated alerts for vehicle diagnostics and service reminders to reduce downtime.',
    },
  ],
  stats: [
    {
      icon: Truck,
      value: 20,
      suffix: 'k+',
      label: 'Vehicles Tracked',
    },
    {
      icon: Timer,
      value: 98,
      suffix: '%',
      label: 'Fleet Uptime',
    },
    {
      icon: TrendingUp,
      value: 2.5,
      suffix: 'x',
      label: 'ROI Increase',
    },
    {
      icon: Target,
      value: 99.9,
      suffix: '%',
      label: 'Accuracy Rate',
    },
  ],
  testimonial: {
    quote:
      'RidesIQ has revolutionized our logistics operations. We’ve cut downtime and saved thousands on maintenance thanks to real-time alerts and predictive diagnostics.',
    author: 'Sarah Johnson',
    role: 'Fleet Operations Lead',
    company: 'National Freight Group',
    image: '/assets/fleet-management/1.png',
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
    heading: 'Take Control of Your Fleet in Real-Time ',
    description:
      'Discover how RidesIQ’s vehicle telematics platform helps businesses track, manage, and protect their fleets with precision. ',
    tag1: '#FleetManagement',
    tag2: '#GPSFleetTracking',
    tag3: ' #VehicleTelematics',
  },
};

const FleetManagement = () => {
  return (
    <IndustryTemplate
      industry={fleetManagementData}
      keyFeatures={
        <IndustryKeyFeatures
          industryName='Fleet Management'
          features={fleetKeyFeatures}
        />
      }
    />
  );
};

export default FleetManagement;
