'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Pause, Play } from 'lucide-react';

const PartnersAndSocial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const insuranceCompanies = [
    {
      id: 1,
      name: "Cigna",
      logo: "/assets/11/Cigna-Logo-500x281-1.png"
    },
    {
      id: 2,
      name: "Aetna",
      logo: "/assets/11/Aetna-Logo-700x394-1.png"
    },
    {
      id: 3,
      name: "DentaCare",
      logo: "/assets/11/Logo_DentaCare_w.png"
    },
    {
      id: 4,
      name: "Medicare Health Insurance",
      logo: "/assets/11/medicare-card.jpg"
    },
    {
      id: 5,
      name: "Humana",
      logo: "/assets/11/Humana-logo-768x432-1.png"
    },
    {
      id: 6,
      name: "United Healthcare",
      logo: "/assets/11/United-Healthcare-Logo-640x343-1.png"
    }
  ];

  // Create a continuous chain by duplicating the array
  const continuousChain = [...insuranceCompanies, ...insuranceCompanies];

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      if (prev >= insuranceCompanies.length) {
        return 0; // Reset to beginning for seamless loop
      }
      return prev + 1;
    });
  };

  // Get current slide offset based on screen size
  const getSlideOffset = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 640 ? 100 : 20;
    }
    return 20; // Default for SSR
  };

  // Auto-advance slides every 4 seconds, unless paused or the user prefers reduced motion
  useEffect(() => {
    if (isPaused) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, isPaused]);

  return (
    <section className="bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Insurance Partners Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#17224D] mb-4">
            Proudly Partnered with Leading Healthcare Providers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We accept most insurance plans. If you have specific questions regarding your coverage, please contact the office for more information.
          </p>
          
          {/* Insurance Logos Carousel */}
          <div className="relative max-w-6xl mx-auto overflow-hidden">
            <div className="flex justify-center mb-2">
              <button
                onClick={() => setIsPaused((prev) => !prev)}
                className="p-1.5 rounded-full text-[#17224D] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-700"
                aria-label={isPaused ? 'Play automatic partner logo rotation' : 'Pause automatic partner logo rotation'}
              >
                {isPaused ? <Play className="w-4 h-4" aria-hidden="true" /> : <Pause className="w-4 h-4" aria-hidden="true" />}
              </button>
            </div>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * getSlideOffset()}%)` }}
            >
              {continuousChain.map((company, index) => (
                <div 
                  key={`${company.id}-${index}`}
                  className="flex-shrink-0 w-full sm:w-1/5 px-4"
                >
                  <div className="flex justify-center items-center h-32 sm:h-40">
                    <div className="relative w-64 h-32 sm:w-48 sm:h-24">
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 256px, (max-width: 768px) 192px, 192px"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Section with Memphis Background */}
        <div className="relative text-center py-16">
          {/* Memphis Background Image */}
          <div className="absolute inset-0 z-0 mx-auto max-w-4xl h-full">
            <Image
              src="/assets/11/Memphis_bg.png"
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <p className="text-sm font-semibold text-green-700 uppercase tracking-widest mb-2">
              GET CONNECTED
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#17224D] mb-8">
              Follow our Social Media
            </h2>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6">
              {/* Facebook */}
              <a
                href="https://facebook.com/housecallmd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 transition-colors duration-200"
                aria-label="Follow HouseCall MD on Facebook (opens in a new tab)"
              >
                <Facebook className="w-6 h-6 text-white" aria-hidden="true" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/housecallmd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 transition-colors duration-200"
                aria-label="Follow HouseCall MD on Instagram (opens in a new tab)"
              >
                <Instagram className="w-6 h-6 text-white" aria-hidden="true" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/housecallmd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 transition-colors duration-200"
                aria-label="Follow HouseCall MD on LinkedIn (opens in a new tab)"
              >
                <Linkedin className="w-6 h-6 text-white" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersAndSocial;
