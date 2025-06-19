'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Search, ChevronRight } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { BlogCard } from '@/components/BlogCard';
import { BlogSidebar } from '@/components/BlogSidebar';

// Mock data - Replace with actual data from your CMS
const blogPosts = [
  {
    slug: 'maximizing-fleet-efficiency',
    title: 'Maximizing Fleet Efficiency with Real-Time Analytics',
    excerpt:
      'Discover how artificial intelligence is revolutionizing fleet management and driving operational excellence.',
    image: '/assets/fleet-management/3.png',
    author: {
      name: 'Sarah Johnson',
      avatar: '/assets/fleet-management/1.png',
    },
    publishedAt: new Date('2024-03-15'),
    category: 'Fleet Management',
  },
  {
    slug: 'ev-fleet-transition',
    title: 'The Complete Guide to EV Fleet Transition',
    excerpt:
      'Learn the essential steps and best practices for transitioning your fleet to electric vehicles.',
    image: '/assets/fleet-management/2.png',
    author: {
      name: 'Michael Chen',
      avatar: '/assets/fleet-management/2.png',
    },
    publishedAt: new Date('2024-03-14'),
    category: 'Sustainability',
  },
  {
    slug: 'compliance-management',
    title: 'Staying Compliant: Fleet Regulations in 2024',
    excerpt:
      'Navigate the complex landscape of fleet regulations with our comprehensive compliance guide.',
    image: '/assets/fleet-management/1.png',
    author: {
      name: 'Emily Rodriguez',
      avatar: '/assets/fleet-management/1.png',
    },
    publishedAt: new Date('2024-03-13'),
    category: 'Compliance',
  },
];

const categories = [
  'Fleet Management',
  'Compliance',
  'Safety',
  'Telematics',
  'Real time & Automation',
];

const tags = [
  { name: 'Fleet Management', count: 24 },
  { name: 'EV Transition', count: 18 },
  { name: 'Compliance', count: 15 },
  { name: 'Safety', count: 12 },
  { name: 'Telematics', count: 10 },
  { name: 'AI', count: 8 },
  { name: 'Automation', count: 7 },
  { name: 'Maintenance', count: 6 },
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background & Overlays */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/70" />
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white text-sm font-medium"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Fleet Management Insights
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
              >
                <span className="text-white">Stay Updated with the </span>
                <span className="bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent">
                  Latest in Fleet Management
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-white/90 leading-relaxed"
              >
                Expert insights, industry trends, and technology updates to keep
                your fleet ahead.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Hero Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() =>
                    setSelectedCategory(
                      selectedCategory === category ? null : category
                    )
                  }
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#678FCA] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-[#678FCA]/10 hover:text-[#678FCA]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {filteredPosts.map((post, index) => (
                  <BlogCard key={post.slug} {...post} index={index} />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <button className="bg-[#678FCA] text-white px-6 py-3 rounded-full hover:bg-[#678FCA]/90 transition-all flex items-center group">
                  Load More
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar
                popularPosts={blogPosts}
                recentPosts={blogPosts}
                tags={tags}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#678FCA] via-[#99D5C9] to-[#678FCA] shadow-2xl">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent" />
            </div>

            <div className="relative px-6 py-20 sm:px-12 sm:py-28">
              <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8"
                >
                  Ready to Transform Your Fleet?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-xl text-white/90 mb-12"
                >
                  Join thousands of fleet managers who trust RidesIQ
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <button className="bg-white text-[#678FCA] px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 flex items-center group">
                    Get Started Today
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
