'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface FeatureCardProps {
  icon: typeof LucideIcon;
  title: string;
  description: string;
  index: number;
  isActive?: boolean;
  onMouseEnter?: () => void;
  onClick?: () => void;
  details?: {
    stat?: string;
    statLabel?: string;
    image?: string;
    points?: string[];
  };
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  index,
  details,
  isActive = false,
  onMouseEnter,
  onClick,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative group rounded-2xl p-6 bg-white hover:bg-gray-50 transition-colors ${
        isActive ? '' : ''
      }`}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      <motion.div
        className='h-full bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300'
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 25,
          mass: 0.5,
        }}
        style={{
          transformOrigin: 'center',
          willChange: 'transform, opacity',
        }}
      >
        <div className='relative h-full p-6 sm:p-8'>
          <div className='flex flex-col h-full'>
            <motion.div className='transition-all' layout>
              <div className='w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#678FCA] to-[#99D5C9] p-0.5 mb-6'>
                <div className='w-full h-full rounded-2xl bg-white flex items-center justify-center'>
                  <Icon className='w-6 h-6 sm:w-7 sm:h-7 text-[#678FCA]' />
                </div>
              </div>

              <motion.h3
                className='text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900'
                layout='position'
              >
                {title}
              </motion.h3>

              <motion.p
                className='text-sm sm:text-base text-gray-600 leading-relaxed mb-6'
                layout='position'
              >
                {description}
              </motion.p>
            </motion.div>

            {details && (
              <div className='space-y-6'>
                {details.image && (
                  <div className='relative'>
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        delay: 0.1,
                        type: 'spring',
                        stiffness: 200,
                        damping: 25,
                      }}
                      className='relative rounded-xl overflow-hidden shadow-lg'
                    >
                      <Image
                        src={details.image}
                        alt='Feature illustration'
                        className='w-full h-48 object-cover'
                        loading='lazy'
                        width={400}
                        height={400}
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
                    </motion.div>

                    {details.stat && (
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.2,
                          type: 'spring',
                          stiffness: 200,
                          damping: 25,
                        }}
                        className='absolute -bottom-4 -right-4 bg-white p-3 sm:p-4 rounded-xl shadow-lg'
                      >
                        <div className='text-xl sm:text-2xl font-bold text-[#678FCA]'>
                          {details.stat}
                        </div>
                        <div className='text-xs sm:text-sm text-gray-600'>
                          {details.statLabel}
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}

                {details.points && (
                  <ul className='space-y-3 sm:space-y-4'>
                    {details.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.2 + i * 0.1,
                          type: 'spring',
                          stiffness: 200,
                          damping: 25,
                        }}
                        className='flex items-center text-sm sm:text-base text-gray-600'
                      >
                        <div className='w-2 h-2 rounded-full bg-[#678FCA] mr-3 flex-shrink-0' />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
