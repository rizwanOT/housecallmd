import React from 'react';
import Image from 'next/image';
import { MapPin, Mail, Phone } from 'lucide-react';

// This component replicates the footer layout and styling from the provided image.
// It uses Tailwind CSS for styling and incorporates lucide-react icons for general
// icons. For social media icons, which are not available in lucide-react,
// inline SVGs are used to ensure the component is self-contained and works out of the box.

const Footer = () => {
  return (
    <footer className="bg-[#0072BC] text-white pt-10">
      {/* Top section with TCPA terms and conditions */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">TCPA (Telephone Consumer Protection Act) SMS Text Message Communications Terms & Conditions</h2>
          <p className="text-sm md:text-base leading-relaxed px-4 md:px-24">
            By providing your phone number and opting in, you consent to receive updates, promotions, marketing, other relevant information and communications via SMS text messages from HouseCall MD at the phone number provided. You are not required to consent to receive text messages to purchase goods or services. Message frequency may vary. Message and data rates may apply. You may opt-out at any time by texting "STOP" to (626) 765-4321 any SMS message received. For more information, text "HELP" or contact us at (626) 765-4321.
          </p>
          <p className="text-sm md:text-base leading-relaxed mt-4 px-4 md:px-24">
            <span className="font-semibold">Privacy Policy:</span> Your phone number will be stored and used solely for the purpose of sending SMS communications. We do not share your information with third parties, except as required by law. Please refer to our full <a href="/privacy-policy" className="underline font-semibold text-white hover:text-blue-100">[Privacy Policy]</a> for more details on how we protect your personal data.
          </p>
          <p className="text-sm md:text-base leading-relaxed mt-2">
            <span className="font-semibold">Terms & Conditions:</span> By providing your phone number, you agree to our <a href="/privacy-policy" className="underline font-semibold text-white hover:text-blue-100">[Terms & Conditions]</a>.
          </p>
        </div>
      </div>

      {/* Main footer section with columns */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-b border-gray-700">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center lg:text-left">
          {/* HouseCall MD brand and description */}
          <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
            <div className="flex items-center space-x-2">
              <Image
                src="/assets/thumbs/Image-5-1-qwr1rig4oxkrodr71539kmr46bqhw59dols7ppxgqo.png"
                alt="HouseCall MD Logo"
                width={60}
                height={60}
                // className="w-40 h-8 sm:w-50 sm:h-10"
              />
              <p className="text-2xl font-semibold pt-3">HouseCall MD</p>
            </div>
            <p className="text-sm mt-2 max-w-xs text-center lg:text-left">
              Mobile medical care for geriatrics and disabled individuals, serving the Greater Los Angeles, CA area.
            </p>
          </div>

          {/* Company links */}
          <div className="lg:mt-0">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-2">Company</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/#services" className="hover:underline">Services</a></li>
            </ul>
          </div>

          {/* Support links */}
          <div className="lg:mt-0">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-2">Support</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/faqs" className="hover:underline">FAQs</a></li>
              <li><a href="/contact" className="hover:underline">Request an Appointment</a></li>
              <li><a href="/patient-benefits" className="hover:underline">Patient Benefits</a></li>
            </ul>
          </div>

          {/* Location and contact info */}
          <div className="lg:mt-0">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-2">Location</h3>
            <div className="text-sm space-y-2">
              <div className="flex items-center justify-center lg:justify-start">
                <MapPin size={16} className="mr-2 flex-shrink-0" aria-hidden="true" />
                <span className="break-words">1171 S. Robertson Blvd, Suite 242, Los Angeles, CA 90035</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Mail size={16} className="mr-2 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:info@housecallmd.com" className="hover:underline break-words">info@housecallmd.com</a>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Phone size={16} className="mr-2 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+16267654321" className="hover:underline">626-765-4321</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with copyright and social links */}
      <div className="container mx-auto px-4 py-4 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row justify-between items-center text-xs space-y-4 lg:space-y-0">
          {/* Privacy and other links */}
          <div className="flex flex-wrap justify-center lg:justify-start space-x-4 mb-2 lg:mb-0">
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <a href="/privacy-policy" className="hover:underline">Terms & Conditions</a>
            <a href="/privacy-policy" className="hover:underline">Patient Right and Advocacy</a>
          </div>

          {/* Social icons */}
          <div className="flex space-x-4 mb-2 lg:mb-0">
            <a
              href="https://facebook.com/housecallmd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow HouseCall MD on Facebook (opens in a new tab)"
              className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 5.011 3.662 9.176 8.442 9.878v-6.985h-2.54V12h2.54V9.799c0-2.518 1.536-3.89 3.774-3.89 1.076 0 2.004.08 2.272.116v2.548h-1.55c-1.22 0-1.46.58-1.46 1.436V12h2.89l-.47 2.893h-2.42V21.878C18.338 21.176 22 17.011 22 12 22 6.477 17.523 2 12 2z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/housecallmd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow HouseCall MD on Instagram (opens in a new tab)"
              className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                <path d="M7 6.43c.895-.895 2.23-1.43 3.615-1.43h.75c3.55 0 6.435 2.885 6.435 6.435v.75c0 1.385-.535 2.72-1.43 3.615-.895.895-2.23 1.43-3.615 1.43h-.75c-3.55 0-6.435-2.885-6.435-6.435v-.75c0-1.385.535-2.72 1.43-3.615zM12 9c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"/>
                <circle cx="18" cy="6" r="1.5"/>
                <path d="M17.5 0h-11C2.9 0 0 2.9 0 6.5v11C0 21.1 2.9 24 6.5 24h11c3.6 0 6.5-2.9 6.5-6.5v-11C24 2.9 21.1 0 17.5 0zm4.5 17.5c0 2.5-2 4.5-4.5 4.5h-11c-2.5 0-4.5-2-4.5-4.5v-11c0-2.5 2-4.5 4.5-4.5h11c2.5 0 4.5 2 4.5 4.5v11z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/housecallmd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow HouseCall MD on LinkedIn (opens in a new tab)"
              className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.761s.784-1.761 1.75-1.761 1.75.79 1.75 1.761-.784 1.761-1.75 1.761zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.673 7 2.765v6.47z"/>
              </svg>
            </a>
          </div>

          {/* Copyright and developer info */}
          <div className="text-center lg:text-right">
            <p className="mb-1">Copyright © 2026 HouseCall MD, All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
