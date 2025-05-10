import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  image: string;
  features: string[];
  index: number;
  link: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  features,
  index,
  link,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className='group relative h-full'
    >
      <div className='absolute inset-0 bg-gradient-to-br from-[#678FCA]/5 to-[#99D5C9]/5 rounded-3xl transform transition-all duration-300 group-hover:scale-105' />

      <div className='relative h-full bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 flex flex-col transition-all duration-300 group-hover:shadow-xl'>
        <div className='aspect-[4/3] mb-6 overflow-hidden rounded-2xl bg-gray-50'>
          <motion.img
            src={image}
            alt={title}
            className='w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110'
            loading='lazy'
          />
        </div>

        <h3 className='text-2xl font-semibold mb-4 text-gray-900'>{title}</h3>

        <ul className='space-y-3 mb-8 flex-1'>
          {features.map((feature, i) => (
            <li key={i} className='flex items-start text-gray-600'>
              <div className='w-1.5 h-1.5 rounded-full bg-[#678FCA] mt-2 mr-3 flex-shrink-0' />
              <span className='text-sm sm:text-base'>{feature}</span>
            </li>
          ))}
        </ul>
        {link ? (
          <Link href={link} className='mt-auto w-full'>
            <button className='w-full bg-white border-2 border-[#678FCA] text-[#678FCA] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#678FCA] hover:text-white transition-colors flex items-center justify-center group/btn'>
              Learn More
              <ChevronRight className='ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1' />
            </button>
          </Link>
        ) : null}
      </div>
    </motion.div>
  );
};
