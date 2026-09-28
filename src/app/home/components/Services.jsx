'use client';

import React from 'react';
import Image from 'next/image';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "POST DISCHARGE MANAGEMENT",
      description: "Ensuring a smooth transition from hospital to home with personalized care and follow-up support.",
      logo: "/assets/11/discharge_management_icon.png"
    },
    {
      id: 2,
      title: "GERIATRIC CARE",
      description: "Specialized medical services focusing on the unique needs of elderly patients for an improved quality of life.",
      logo: "/assets/11/geriatric_care_icon-01.png"
    },
    {
      id: 3,
      title: "PRIMARY CARE",
      description: "Comprehensive health assessments and treatments tailored to meet individual patient needs at home.",
      logo: "/assets/11/primary_care_icon-01.png"
    },
    {
      id: 4,
      title: "INTERNAL MEDICINE",
      description: "Expert medical care for specific conditions and specialized treatment plans.",
      logo: "/assets/11/internal_medicine_ICON-01.png"
    },
    {
      id: 5,
      title: "HOSPITAL AT HOME",
      description: "Professional medical services delivered directly to your home for maximum comfort and convenience.",
      logo: "/assets/11/hospital_at_home_iCON-01.png"
    },
    {
      id: 6,
      title: "PALLIATIVE AND HOSPICE CARE",
      description: "Seamless coordination between healthcare providers to ensure comprehensive patient care.",
      logo: "/assets/11/palliative_and_hospice_care_icon-01.png"
    },
    {
      id: 7,
      title: "HOME DIAGNOSTICS & THERAPY",
      description: "Professional oversight of medication schedules and administration for optimal health outcomes.",
      logo: "/assets/11/home_diagnosis_and_therapy_icon-01.png"
    },
    {
      id: 8,
      title: "CAPACITY ASSESSMENT",
      description: "Proactive health screenings and preventive measures to maintain optimal health and wellness.",
      logo: "/assets/11/capacity_and_assessment_ICON-01.png"
    },
    {
      id: 9,
      title: "CONSULTING PHYSICIANS",
      description: "24/7 emergency medical response and immediate care when you need it most.",
      logo: "/assets/11/palliative_and_hospice_care_icon-01.png"
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Services We Provide
          </h2>
          <p className="text-lg sm:text-xl max-w-4xl mx-auto px-4">
            We provide high-quality, personalized mobile healthcare services, delivering exceptional care to patients in the comfort of their homes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-xl shadow-lg p-6 sm:p-8 cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl text-center min-h-[260px] sm:min-h-[280px]"
            >
              {/* Hover Background Overlay */}
              <div className="absolute inset-0 bg-[#0072BC] transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center h-full justify-center">
                {/* Logo */}
                <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-300 transition-colors duration-300 overflow-hidden">
                  <Image
                    src={service.logo}
                    alt=""
                    width={40}
                    height={40}
                    unoptimized
                    className="w-10 h-10 object-contain"
                  />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
