'use client';
import React from 'react';
import { IndustryTemplate } from '@/components/IndustryTemplate';
import { IndustryKeyFeatures } from '@/components/IndustryKeyFeatures';
import {
  Construction as ConstructionIcon,
  Shield,
  BarChart3,
  Clock,
  AlertCircle,
  Settings2,
  Timer,
  TrendingUp,
  Target,
  DollarSign,
  LineChart,
  PenTool as Tool,
  LucideIcon,
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

const constructionKeyFeatures: KeyFeature[] = [
  {
    icon: Tool,
    title: 'Equipment Optimization',
    description:
      'Boost utilization and reduce idle time with smart GPS tracking and intelligent usage scheduling.',
    stat: '35%',
    statLabel: 'Improved Utilization',
  },
  {
    icon: Shield,
    title: 'Site Safety & Security',
    description:
      'Prevent unauthorized use and theft with 24/7 GPS monitoring, geofencing, and real-time alerts.',
    stat: '75%',
    statLabel: 'Theft Prevention',
  },
  {
    icon: DollarSign,
    title: 'Cost Control',
    description:
      'Lower fuel and maintenance expenses with optimized routes and predictive equipment upkeep.',
    stat: '25%',
    statLabel: 'Cost Savings',
  },
  {
    icon: LineChart,
    title: 'Project Analytics',
    description:
      'Gain operational clarity with real-time equipment data, job site performance metrics, and custom reports.',
    stat: '3x',
    statLabel: 'Productivity Gain',
  },
];

const constructionData: IndustryData = {
  name: ' GPS Tracking for Construction Fleets',
  subtitle: 'Construction Fleet GPS Tracking',
  description:
    'Track heavy machinery, vehicles, and on-site equipment in real-time with RidesIQ’s rugged GPS tracking solutions built for the construction industry.',
  heroImage: '/assets/fleet-management/RidesIQIQ120.jpg',
  challenges: [
    {
      icon: Clock,
      title: 'Equipment Location',
      description:
        'Difficulty tracking equipment across multiple job sites leads to inefficiencies and delays.',
    },
    {
      icon: AlertCircle,
      title: 'Asset Security',
      description:
        'Unattended machines are at high risk of theft, misuse, or unauthorized movement.',
    },
    {
      icon: Settings2,
      title: 'Unplanned Downtime',
      description:
        'Breakdowns and missed maintenance windows result in costly project delays.',
    },
  ],
  challengePara:
    'Monitor heavy equipment, reduce downtime, and optimize logistics across multiple job sites using rugged vehicle telematics built for the construction industry. ',
  solutions: [
    {
      icon: ConstructionIcon,
      title: 'Heavy-Duty GPS Trackers',
      description:
        'Rugged, construction-grade GPS devices provide real-time location tracking in any terrain.',
    },
    {
      icon: Shield,
      title: 'Security Monitoring',
      description:
        '24/7 asset protection with tamper alerts, geofencing, and unauthorized movement detection.',
    },
    {
      icon: BarChart3,
      title: 'Equipment Maintenance',
      description:
        'Schedule preventive maintenance with automated alerts and minimize unscheduled outages.',
    },
  ],
  stats: [
    {
      icon: ConstructionIcon,
      value: 15,
      suffix: 'k+',
      label: 'Equipment Tracked',
    },
    {
      icon: Timer,
      value: 95,
      suffix: '%',
      label: 'Equipment Uptime',
    },
    {
      icon: TrendingUp,
      value: 3,
      suffix: 'x',
      label: 'Efficiency Increase',
    },
    {
      icon: Target,
      value: 99.5,
      suffix: '%',
      label: 'Location Accuracy',
    },
  ],
  testimonial: {
    quote:
      'RidesIQ’s fleet tracking platform has completely transformed how we manage our construction equipment. Real-time insights and maintenance alerts have made our operations significantly more efficient — and the ROI speaks for itself.',
    author: 'Michael Chen',
    role: 'Operations Director',
    company: 'BuildTech Construction',
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
    heading: 'Smarter Construction Fleet Tracking with RidesIQ ',
    description:
      'Boost job site efficiency, reduce equipment downtime, and ensure real-time visibility across your construction vehicles and heavy machinery. ',
    tag1: '#Equipment Monitoring',
    tag2: '#Fuel & Idle Reports',
    tag3: '#Job Site Geofencing',
  },
};

const Construction = () => {
  return (
    <IndustryTemplate
      industry={constructionData}
      keyFeatures={
        <IndustryKeyFeatures
          industryName='Construction'
          features={constructionKeyFeatures}
        />
      }
    />
  );
};

export default Construction;
