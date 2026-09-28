'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';

const Hero = () => {
  return (
    <section className="relative w-full pt-20 lg:pt-24">
      {/* Background Image with Grayed/Tinted Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/assets/11/Header-main-image-01.png')`,
          }}
        >
          {/* Additional overlay for better text readability */}
          <div className="w-full h-full bg-gradient-to-r from-blue-900/30 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Content Box Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-12 sm:py-16 lg:py-20">
          {/* Main Content - Centered */}
          <div className="text-white space-y-6 sm:space-y-8 max-w-4xl">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg md:text-xl font-medium tracking-wide">
                Welcome to HouseCall MD
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                We Put the{' '}
                <span className="text-green-400">Care</span>
                {' '}in{' '} <br className="hidden sm:block" />
                <span className="text-green-400">HealthCare</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
                Mobile primary care and consulting services for geriatrics and disabled individuals,
                serving the Greater Los Angeles, CA area with compassionate, professional healthcare
                delivered right to your door.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pb-4 sm:pb-8">
              <Button
                href="/about"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />}
              >
                About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
