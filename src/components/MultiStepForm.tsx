'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Select from 'react-select';
import {
  Truck,
  Camera,
  Briefcase,
  Clock,
  Car,
  Construction,
  Box,
  MapPin,
  BarChart3,
  DollarSign,
  Video,
  HelpCircle,
} from 'lucide-react';
import { z } from 'zod';
import { Country, State } from 'country-state-city';

const countryOptions = Country.getAllCountries().map((country) => ({
  value: country.isoCode,
  label: country.name,
}));

const formSchema = z.object({
  interest: z.string().min(1),
  vehicleCount: z.string().min(1),
  trackingType: z.array(z.string()).min(1),
  features: z.array(z.string()).min(1),
  country: z.string().min(1),
  region: z.string().min(1),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  companyName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  existingCustomer: z.string().min(1),
});

type FormData = z.infer<typeof formSchema>;

const initialFormData: FormData = {
  interest: '',
  vehicleCount: '',
  trackingType: [],
  features: [],
  country: '',
  region: '',
  firstName: '',
  lastName: '',
  companyName: '',
  email: '',
  phone: '',
  existingCustomer: '',
};

const interestOptions = [
  { icon: Truck, title: 'Vehicle Tracking', value: 'vehicle-tracking' },
  { icon: Camera, title: 'Commercial Dash Cams', value: 'dash-cams' },
  // { icon: Briefcase, title: "Job Management Software", value: "job-management" },
  // { icon: Clock, title: "Electronic Logging Devices (ELDs)", value: "elds" },
];

const vehicleCountOptions = [
  '1 - 50',
  '51 - 100',
  '101 - 250',
  '251 - 500',
  '501 +',
];

const trackingTypeOptions = [
  { icon: Truck, title: 'Vans / Trucks', value: 'vans-trucks' },
  { icon: Truck, title: 'Heavy Duty Trucks / Semis', value: 'heavy-duty' },
  { icon: Car, title: 'Cars / Automobiles', value: 'cars' },
  { icon: Car, title: 'Motorcycles', value: 'motorcycles' },
  {
    icon: Construction,
    title: 'Construction Machinery',
    value: 'construction',
  },
  { icon: Box, title: 'Trailers', value: 'trailers' },
  { icon: Box, title: 'Non-Powered Assets', value: 'non-powered' },
];

const featureOptions = [
  {
    icon: MapPin,
    title: 'Real-time location tracking',
    value: 'location-tracking',
  },
  { icon: BarChart3, title: 'Reporting', value: 'reporting' },
  {
    icon: Truck,
    title: 'Driver behavior analytics',
    value: 'driver-analytics',
  },
  { icon: MapPin, title: 'Proof of attendance', value: 'attendance' },
  // { icon: DollarSign, title: "Expense monitoring", value: "expenses" },
  { icon: Video, title: 'Dash cams', value: 'dash-cams' },
  { icon: HelpCircle, title: "I don't know", value: 'unknown' },
];

export const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const updateFormData = (
    field: keyof FormData,
    value: FormData[keyof FormData]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formSchema.safeParse(formData).success) {
      // console.log(formData);
      try {
        const res = await fetch('/api/mail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          setFormData(initialFormData);
          setStep(1);
        } else {
          console.error('Failed to send quote request');
        }
      } catch (error) {
        console.error('Error sending quote request:', error);
      }
    } else {
      console.log(
        'Form validation failed:',
        formSchema.safeParse(formData).error
      );
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className='space-y-6'
          >
            <h3 className='text-xl font-semibold mb-4'>
              What are you interested in today?
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {interestOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    updateFormData('interest', option.value);
                    setStep(2);
                  }}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 flex items-center gap-4 hover:border-[#678FCA] hover:shadow-lg ${
                    formData.interest === option.value
                      ? 'border-[#678FCA] bg-[#678FCA]/5'
                      : 'border-gray-200'
                  }`}
                >
                  <option.icon className='w-8 h-8 text-[#678FCA]' />
                  <span className='text-lg font-medium'>{option.title}</span>
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className='space-y-6'
          >
            <h3 className='text-xl font-semibold mb-4'>
              How many vehicles do you need to track?
            </h3>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
              {vehicleCountOptions.map((count) => (
                <button
                  key={count}
                  onClick={() => {
                    updateFormData('vehicleCount', count);
                    setStep(3);
                  }}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 hover:border-[#678FCA] hover:shadow-lg ${
                    formData.vehicleCount === count
                      ? 'border-[#678FCA] bg-[#678FCA]/5'
                      : 'border-gray-200'
                  }`}
                >
                  <span className='text-lg font-medium'>{count}</span>
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className='space-y-6'
          >
            <h3 className='text-xl font-semibold mb-4'>
              What do you need to track?
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {trackingTypeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    const newTypes = formData.trackingType.includes(
                      option.value
                    )
                      ? formData.trackingType.filter((t) => t !== option.value)
                      : [...formData.trackingType, option.value];
                    updateFormData('trackingType', newTypes);
                  }}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 flex items-center gap-4 hover:border-[#678FCA] hover:shadow-lg ${
                    formData.trackingType.includes(option.value)
                      ? 'border-[#678FCA] bg-[#678FCA]/5'
                      : 'border-gray-200'
                  }`}
                >
                  <option.icon className='w-8 h-8 text-[#678FCA]' />
                  <span className='text-lg font-medium'>{option.title}</span>
                </button>
              ))}
            </div>
            <div className='flex justify-end'>
              <button
                onClick={() => setStep(4)}
                className='bg-[#678FCA] text-white px-6 py-3 rounded-full hover:bg-[#678FCA]/90 transition-all'
              >
                Next Step
              </button>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className='space-y-6'
          >
            <h3 className='text-xl font-semibold mb-4'>
              What features do you need?
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {featureOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    const newFeatures = formData.features.includes(option.value)
                      ? formData.features.filter((f) => f !== option.value)
                      : [...formData.features, option.value];
                    updateFormData('features', newFeatures);
                  }}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 flex items-center gap-4 hover:border-[#678FCA] hover:shadow-lg ${
                    formData.features.includes(option.value)
                      ? 'border-[#678FCA] bg-[#678FCA]/5'
                      : 'border-gray-200'
                  }`}
                >
                  <option.icon className='w-8 h-8 text-[#678FCA]' />
                  <span className='text-lg font-medium'>{option.title}</span>
                </button>
              ))}
            </div>
            <div className='flex justify-end'>
              <button
                onClick={() => setStep(5)}
                className='bg-[#678FCA] text-white px-6 py-3 rounded-full hover:bg-[#678FCA]/90 transition-all'
              >
                Next Step
              </button>
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className='space-y-6'
          >
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Country
              </label>
              <Select
                options={countryOptions}
                value={
                  countryOptions.find((c) => c.value === formData.country) ||
                  null
                }
                onChange={(option) => {
                  updateFormData('country', option?.value || '');
                  updateFormData('region', '');
                }}
                className='text-base'
                placeholder='Select a country...'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                State / Region
              </label>
              <Select
                options={State.getStatesOfCountry(formData.country).map(
                  (s) => ({ label: s.name, value: s.isoCode })
                )}
                value={
                  State.getStatesOfCountry(formData.country)
                    .map((s) => ({ label: s.name, value: s.isoCode }))
                    .find((r) => r.value === formData.region) || null
                }
                onChange={(option) =>
                  updateFormData('region', option?.value || '')
                }
                className='text-base'
                placeholder='Select a region...'
                isDisabled={!formData.country}
              />
            </div>
            <div className='flex justify-end'>
              <button
                onClick={() => setStep(6)}
                className='bg-[#678FCA] text-white px-6 py-3 rounded-full hover:bg-[#678FCA]/90 transition-all'
                disabled={!formData.region}
              >
                Next Step
              </button>
            </div>
          </motion.div>
        );

      case 6:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className='space-y-6'
          >
            <h3 className='text-xl font-semibold mb-4'>Contact Information</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  First Name
                </label>
                <input
                  type='text'
                  placeholder='First Name'
                  value={formData.firstName}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Last Name
                </label>
                <input
                  type='text'
                  placeholder='Last Name'
                  value={formData.lastName}
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent'
                />
              </div>
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Company Name
              </label>
              <input
                type='text'
                placeholder='Company Name'
                value={formData.companyName}
                onChange={(e) => updateFormData('companyName', e.target.value)}
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Email Address
              </label>
              <input
                type='email'
                placeholder='Email Address'
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Phone Number
              </label>
              <input
                type='tel'
                placeholder='Phone Number'
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#678FCA] focus:border-transparent'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Are you an existing customer?
              </label>
              <Select
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' },
                ]}
                value={
                  formData.existingCustomer
                    ? {
                        value: formData.existingCustomer,
                        label:
                          formData.existingCustomer === 'yes' ? 'Yes' : 'No',
                      }
                    : null
                }
                onChange={(option) =>
                  updateFormData('existingCustomer', option?.value || '')
                }
                className='text-base'
                placeholder='Select an option...'
              />
            </div>
            <div className='flex justify-end'>
              <button
                onClick={handleSubmit}
                className='bg-[#678FCA] text-white px-6 py-3 rounded-full hover:bg-[#678FCA]/90 transition-all'
              >
                Submit Inquiry
              </button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
      <div className='mb-8'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-2xl font-bold'>Get a Quote</h2>
          <div className='text-sm text-gray-600'>Step {step} of 6</div>
        </div>
        <div className='h-2 bg-gray-100 rounded-full overflow-hidden'>
          <div
            className='h-full bg-[#678FCA] transition-all duration-300'
            style={{ width: `${(step / 6) * 100}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode='wait'>{renderStep()}</AnimatePresence>
    </div>
  );
};
