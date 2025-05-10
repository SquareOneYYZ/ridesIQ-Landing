import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState<string>('');
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed Email:', email);
    setEmail('');
  };
  return (
    <div>
      <footer className='bg-gray-900 text-white pt-16 pb-30 sm:pb-8 px-4 relative'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12'>
            {/* Email Signup Section */}
            <div className='lg:col-span-4'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className='text-2xl font-bold mb-4'>
                  Sign up for email updates
                </h3>
                <p className='text-gray-400 mb-6'>
                  Your one-stop shop for Telematics news you need to know each
                  month.
                </p>
                <form className='space-y-3'>
                  <div className='relative'>
                    <input
                      type='email'
                      placeholder='Enter email address...'
                      value={email}
                      onChange={handleEmailChange}
                      className='w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent transition-all'
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className='w-full bg-[#678FCA] text-white px-6 py-3 rounded-lg hover:bg-[#678FCA]/90 transition-all flex items-center justify-center group'
                  >
                    Subscribe
                    <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Navigation Links */}
            <div className='lg:col-span-8'>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* Industries */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <h4 className='text-lg font-semibold mb-4'>Industries</h4>
                  <ul className='space-y-3'>
                    <li>
                      <a
                        href='/industries/logistics-transportation'
                        className='text-gray-400 hover:text-white transition-colors'
                      >
                        Logistics & Transportation
                      </a>
                    </li>
                    <li>
                      <a
                        href='/industries/construction'
                        className='text-gray-400 hover:text-white transition-colors'
                      >
                        Construction
                      </a>
                    </li>
                    <li>
                      <a
                        href='/industries/food-delivery'
                        className='text-gray-400 hover:text-white transition-colors'
                      >
                        Food Delivery
                      </a>
                    </li>
                    <li>
                      <a
                        href='/industries/car-rental'
                        className='text-gray-400 hover:text-white transition-colors'
                      >
                        Car Rental
                      </a>
                    </li>
                  </ul>
                </motion.div>

                {/* Solutions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className='text-lg font-semibold mb-4'>Solutions</h4>
                  <ul className='space-y-3'>
                    <li>
                      <a
                        href='/solutions/hard-wired-trackers'
                        className='text-gray-400 hover:text-white transition-colors'
                      >
                        Hard-Wired Trackers
                      </a>
                    </li>
                    <li>
                      <a
                        href='/solutions/obd-trackers'
                        className='text-gray-400 hover:text-white transition-colors'
                      >
                        OBD Trackers
                      </a>
                    </li>
                    <li>
                      <a
                        href='/solutions/asset-trackers'
                        className='text-gray-400 hover:text-white transition-colors'
                      >
                        Asset Trackers
                      </a>
                    </li>
                  </ul>
                </motion.div>

                {/* Resources */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className='text-lg font-semibold mb-4'>Resources</h4>
                  <ul className='space-y-3'>
                    {/* <li className="flex items-center">
											<a
												href="#"
												className="text-gray-400 hover:text-white transition-colors"
											>
												Blog
											</a>
											<span className="ml-2 text-xs bg-[#678FCA]/20 text-[#678FCA] px-2 py-0.5 rounded-full">Soon</span>
										</li> */}
                    <li>
                      <a
                        href='/faq'
                        className='text-gray-400 hover:text-white transition-colors'
                      >
                        FAQs
                      </a>
                    </li>
                    {/* <li className="flex items-center">
											<a
												href="#"
												className="text-gray-400 hover:text-white transition-colors"
											>
												API Docs
											</a>
											<span className="ml-2 text-xs bg-[#678FCA]/20 text-[#678FCA] px-2 py-0.5 rounded-full">Soon</span>
										</li> */}
                    <li>
                      <a
                        href='/contact'
                        className='text-gray-400 hover:text-white transition-colors'
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className='pt-8 mt-8 border-t border-gray-800'>
            <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
              {/* Legal Links */}
              <div className='flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-400'>
                <Link
                  href='/privacy-policy'
                  className='hover:text-white transition-colors'
                >
                  Privacy Policy
                </Link>
                <Link
                  href='/responsible-disclosure'
                  className='hover:text-white transition-colors'
                >
                  Responsible Disclosure
                </Link>
                {/* <Link
                  href='terms-of-service'
                  className='hover:text-white transition-colors'
                >
                  Terms of Service
                </Link> */}
                <Link
                  href='/trust-center'
                  className='hover:text-white transition-colors'
                >
                  Trust Center
                </Link>
              </div>

              {/* Social Links */}
              {/* <div className='flex items-center space-x-4'>
                <Link
                  href='#'
                  className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#678FCA] transition-colors group'
                >
                  <svg
                    className='w-5 h-5 text-gray-400 group-hover:text-white transition-colors'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                  </svg>
                </Link>
                <Link
                  href='#'
                  className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#678FCA] transition-colors group'
                >
                  <svg
                    className='w-5 h-5 text-gray-400 group-hover:text-white transition-colors'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path d='M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .3 2.5.5.6.3 1 .7 1.4 1.4.2.5.4 1.3.5 2.5.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 2-.5 2.5-.3.6-.7 1-1.4 1.4-.5.2-1.3.4-2.5.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.3-2.5-.5-.6-.3-1-.7-1.4-1.4-.2-.5-.4-1.3-.5-2.5-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.3-2 .5-2.5.3-.6.7-1 1.4-1.4.5-.2 1.3-.4 2.5-.5 1.2-.1 1.6-.1 4.8-.1zm0-2.2C8.7 0 8.3 0 7.1.1 5.9.2 4.8.5 4 .9c-.9.4-1.6 1.1-2 2-.4.8-.7 1.9-.8 3.1C1 7.3 1 7.7 1 12s0 4.7.1 6c.1 1.2.4 2.3.8 3.1.4.9 1.1 1.6 2 2 .8.4 1.9.7 3.1.8 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c1.2-.1 2.3-.4 3.1-.8.9-.4 1.6-1.1 2-2 .4-.8.7-1.9.8-3.1.1-1.3.1-1.7.1-6s0-4.7-.1-6c-.1-1.2-.4-2.3-.8-3.1-.4-.9-1.1-1.6-2-2-.8-.4-1.9-.7-3.1-.8C15.7 0 15.3 0 12 0zM12 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-11.8a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z' />
                  </svg>
                </Link>

                <Link
                  href='#'
                  className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#678FCA] transition-colors group'
                >
                  <svg
                    className='w-5 h-5 text-gray-400 group-hover:text-white transition-colors'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path d='M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.005 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 17.005 22 12z' />
                  </svg>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
