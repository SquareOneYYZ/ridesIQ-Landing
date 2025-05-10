import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, DivideIcon as LucideIcon } from 'lucide-react';

interface Feature {
  icon: typeof LucideIcon;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
}

interface IndustryKeyFeaturesProps {
  industryName: string;
  features: Feature[];
}

export const IndustryKeyFeatures: React.FC<IndustryKeyFeaturesProps> = ({
  industryName,
  features,
}) => {
  return (
    <section className='py-24 relative overflow-hidden bg-gray-50/50'>
      <div className='absolute inset-0 bg-gradient-to-br from-white to-gray-50/80' />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23678FCA' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

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
            Industry-Leading Solutions
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-4xl sm:text-5xl font-bold mb-6 text-black'
          >
            Why {industryName} Operators
            <br />
            <span className='bg-gradient-to-r from-[#678FCA] to-[#99D5C9] bg-clip-text text-transparent'>
              Choose RidesIQ
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-xl text-gray-600 max-w-2xl mx-auto'
          >
            Advanced fleet tracking solutions built to streamline logistics
            operations, reduce downtime, cut fuel costs, and boost delivery
            efficiency.
          </motion.p>
        </motion.div>

        <div className='grid grid-cols md:grid-cols-2 gap-6 sm:gap-8'>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='relative group'
            >
              {/* Hover background effect */}
              <div className='absolute inset-0 bg-gradient-to-br from-[#678FCA]/5 to-[#99D5C9]/5 rounded-2xl transform transition-all duration-300 group-hover:scale-[1.02]' />

              {/* Main Card */}
              <div className='relative bg-white rounded-2xl p-6 md:p-8 shadow-lg transition-all duration-300 group-hover:shadow-xl border border-gray-100/50'>
                {/* FLEX CHANGE */}
                <div className='flex flex-row md:flex-row items-start md:items-start gap-6 md:gap-8'>
                  {/* Icon Section */}
                  <div className=' mt-3 md:mt-0 md:w-17 md:h-17 w-12 h-12 rounded-xl bg-gradient-to-br from-[#678FCA] to-[#99D5C9] flex items-center justify-center flex-shrink-0'>
                    <div className='md:w-16 md:h-16 w-11 h-11 rounded-xl bg-white flex items-center justify-center'>
                      <feature.icon className='w-8 h-8 text-[#678FCA]' />
                    </div>
                  </div>

                  {/* Text Section */}
                  <div className='flex-1 text-start md:text-left'>
                    <h3 className='md:text-2xl font-semibold mb-2 text-gray-900'>
                      {feature.title}
                    </h3>
                    <p className='text-gray-600 text-[13px] md:text-md text-start md:leading-relaxed mb-4'>
                      {feature.description}
                    </p>

                    {feature.stat && (
                      <div className='flex flex-row items-center md:items-start gap-2 mt-4 pt-4 border-t border-gray-100'>
                        <div className='text-3xl font-bold text-[#678FCA]'>
                          {feature.stat}
                        </div>
                        {feature.statLabel && (
                          <div className='text-sm text-gray-600'>
                            {feature.statLabel}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
