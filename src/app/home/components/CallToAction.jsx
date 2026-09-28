'use client';

import React from 'react';
import { Phone } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20">
      {/* Background Image with Gray/Tint Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('/assets/11/CallToAction.png')`,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start min-h-[400px] sm:min-h-[500px]">
          {/* Overlay Box - Aligned to Left */}
          <div className="bg-white/95 rounded-2xl p-4 sm:p-6 md:p-8 max-w-xl shadow-2xl">
            <div className="text-left space-y-3 sm:space-y-4">
              {/* Main Headline */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#17224D] leading-tight">
                Choose Your House Call Doctor Confidently
              </h2>

              {/* Sub-headline */}
              <h3 className="text-sm sm:text-base font-bold text-[#17224D] tracking-wide uppercase">
                A GREAT PLACE TO RECEIVE CARE
              </h3>

              {/* Body Text */}
              <p className="text-sm sm:text-base text-[#17224D] leading-relaxed">
                We go the extra mile, to offer medical services at home, with the same high-quality care provided at the hospital. Receive personalized and affordable care provided by highly qualified physicians and nurses.
              </p>

              {/* Separator Line */}
              <div className="w-12 h-1 bg-[#17224D]"></div>

              {/* Call to Action Button */}
              <div className="pt-2">
                <a
                  href="tel:+16267654321"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-bold text-base rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                  Call Us Today: 626-765-4321
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
