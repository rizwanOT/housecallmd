'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Pause, Play } from 'lucide-react';

// This component displays a patient review section with a carousel-like layout.
// It is designed to be fully responsive using Tailwind CSS.
// The component includes a header, review cards, and navigation arrows.

const PatientReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Create individual reviews for mobile (1 per slide) and sets for desktop (3 per slide)
  const allReviews = [
    {
      id: 1,
      name: "Emilia L.",
      role: "Patient",
      review: "Doctor Jarchi was attentive to everything that was being communicated to him regarding my 90 year old mother's needs. I mother appreciated his gentle and kind demeanor. Thank you"
    },
    {
      id: 2,
      name: "Talia Liel",
      role: "Patient",
      review: "I have been using HouseCall MD for 1.5 years now for one of my clients. HouseCall MD is a fantastic way to receive primary care at home. Dr. Jarchi is a wonderful and patient physician."
    },
    {
      id: 3,
      name: "Celia Reynoso",
      role: "Patient",
      review: "We have our ups and downs but over all this office is great! I hear a lot of terrible stories about doctor's office especially, mobile physicians. This office I highly recommend to anyone!"
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Patient",
      review: "The convenience of having medical care come to our home has been incredible. Dr. Jarchi is professional, caring, and always takes the time to listen to our concerns."
    },
    {
      id: 5,
      name: "Michael Chen",
      role: "Patient",
      review: "As someone with mobility issues, HouseCall MD has been a lifesaver. The quality of care is exceptional and the staff is always friendly and professional."
    },
    {
      id: 6,
      name: "Maria Rodriguez",
      role: "Patient",
      review: "I've been using HouseCall MD for my elderly father and the level of care and attention to detail is outstanding. Highly recommend their services!"
    },
    {
      id: 7,
      name: "David Thompson",
      role: "Patient",
      review: "The doctors at HouseCall MD are not only skilled but also compassionate. They truly care about their patients' well-being and comfort."
    },
    {
      id: 8,
      name: "Lisa Park",
      role: "Patient",
      review: "Excellent service! The doctors are knowledgeable and the convenience of home visits makes managing chronic conditions much easier."
    },
    {
      id: 9,
      name: "Robert Wilson",
      role: "Patient",
      review: "HouseCall MD has transformed how we receive medical care. The personalized attention and professional service are unmatched."
    }
  ];

  // Create sets of 3 for desktop
  const reviewSets = [];
  for (let i = 0; i < allReviews.length; i += 3) {
    reviewSets.push(allReviews.slice(i, i + 3));
  }

  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const nextSlide = () => {
    const maxSlides = isMobile ? allReviews.length : reviewSets.length;
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    const maxSlides = isMobile ? allReviews.length : reviewSets.length;
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides every 5 seconds, unless paused or the user prefers reduced motion
  useEffect(() => {
    if (isPaused) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isMobile, isPaused]);

  const totalSlides = isMobile ? allReviews.length : reviewSets.length;

  return (
    <div className="bg-white py-12 sm:py-16 relative">
      {/* Memphis Background Image */}
      <div className="absolute inset-0 z-0 h-full">
        <Image
          src="/assets/11/Memphis_bg.png"
          alt=""
          fill
          className="object-contain w-full"
          sizes="100vw"
        />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Section Header */}
        <p className="text-sm font-semibold text-green-700 uppercase tracking-widest mb-2">PATIENT REVIEWS</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#17224D] mb-8 sm:mb-12">What They Say</h2>

        {/* Reviews Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Previous Button - Hidden on Mobile */}
          <button 
            onClick={prevSlide}
            className="hidden lg:block absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            aria-label="Previous review"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18L9 12L15 6"/>
            </svg>
          </button>
          
          {/* Review Cards Container */}
          <div className={`overflow-hidden ${isMobile ? 'px-4' : 'px-16'}`}>
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {isMobile ? (
                // Mobile: Show one review per slide
                allReviews.map((reviewItem, slideIndex) => (
                  <div 
                    key={slideIndex}
                    className="w-full flex-shrink-0"
                  >
                    <div className="max-w-md mx-auto">
                      <div className="text-center">
                        {/* Profile Circle */}
                        <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4"></div>
                        
                        {/* Name and Role */}
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          {reviewItem.name}
                        </h3>
                        <p className="text-gray-500 text-sm mb-6">
                          {reviewItem.role}
                        </p>
                        
                        {/* Review Card */}
                        <div className="bg-white rounded-lg shadow-lg p-6 relative">
                          {/* Pointer/Tip pointing to profile */}
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>
                          
                          {/* Review Text */}
                          <p className="text-gray-700 text-sm leading-relaxed">
                            "{reviewItem.review}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                // Desktop: Show three reviews per slide
                reviewSets.map((reviewSet, slideIndex) => (
                  <div 
                    key={slideIndex}
                    className="w-full flex-shrink-0"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
                      {reviewSet.map((reviewItem, reviewIndex) => (
                        <div key={reviewIndex} className="text-center">
                          {/* Profile Circle */}
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full mx-auto mb-3 sm:mb-4"></div>
                          
                          {/* Name and Role */}
                          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
                            {reviewItem.name}
                          </h3>
                          <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">
                            {reviewItem.role}
                          </p>
                          
                          {/* Review Card */}
                          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 relative">
                            {/* Pointer/Tip pointing to profile */}
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>
                            
                            {/* Review Text */}
                            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                              "{reviewItem.review}"
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Next Button - Hidden on Mobile */}
          <button 
            onClick={nextSlide}
            className="hidden lg:block absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            aria-label="Next review"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18L15 12L9 6"/>
            </svg>
          </button>
        </div>

        {/* Pagination Dots + pause control */}
        <div className="flex justify-center items-center mt-8 space-x-3">
          <button
            onClick={() => setIsPaused((prev) => !prev)}
            className="mr-1 p-1.5 rounded-full text-[#17224D] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-700"
            aria-label={isPaused ? 'Play automatic review rotation' : 'Pause automatic review rotation'}
          >
            {isPaused ? <Play className="w-4 h-4" aria-hidden="true" /> : <Pause className="w-4 h-4" aria-hidden="true" />}
          </button>
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-1 ${
                index === currentSlide
                  ? 'bg-[#17224D] scale-125 rounded-full'
                  : 'bg-gray-400 hover:bg-gray-600 rounded-full'
              }`}
              aria-label={`Go to review ${index + 1}`}
              aria-current={index === currentSlide ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientReviews;
