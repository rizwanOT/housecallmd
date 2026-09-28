'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { Calendar, Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../constants/navigation';
import Button from './ui/Button';
import AppointmentDialog from './AppointmentDialog';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAppointmentDialogOpen, setIsAppointmentDialogOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (href, itemName) => {
    if (itemName === 'Services') {
      if (pathname === '/') {
        // If already on home page, scroll to services section
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If on another page, navigate to home and then scroll
        router.push('/');
        // Use a longer timeout and retry mechanism
        const scrollToServices = () => {
          const servicesSection = document.getElementById('services');
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
          } else {
            // If not found, retry after a short delay
            setTimeout(scrollToServices, 50);
          }
        };
        setTimeout(scrollToServices, 300);
      }
    } else {
      // For other navigation items, use normal navigation
      router.push(href);
    }
    setIsMenuOpen(false);
  };

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0072BC]/90'
          : 'bg-[#0072BC]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <Image
                src="/assets/thumbs/hosuecall-md-logo-r0cas147j83zj6aaxmbp4fvbunkhpigumslsdjdnnk.png"
                alt="HouseCall MD Logo"
                width={243}
                height={49}
                className="w-28 h-10 sm:w-36 sm:h-12 lg:w-70 lg:h-14 group-hover:scale-105 transition-transform duration-200"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href, item.name)}
                className="text-white hover:text-green-400 transition-colors duration-200 font-medium text-sm lg:text-base relative group bg-transparent border-none cursor-pointer"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
           <div className="hidden lg:flex items-center ml-4">
             <Button
               onClick={() => setIsAppointmentDialogOpen(true)}
               variant="primary"
               size="md"
               icon={<Calendar className="w-4 h-4" />}
             >
               <span className="hidden xl:inline">Request An Appointment</span>
               <span className="xl:hidden">Book Now</span>
             </Button>
           </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-white rounded transition-colors duration-200 p-2"
              aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'max-h-96 opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        }`}>
            <div className="pb-3 sm:pb-4 space-y-2">
             {NAVIGATION_ITEMS.map((item) => (
               <button
                 key={item.name}
                 onClick={() => handleNavigation(item.href, item.name)}
                 className="block text-white hover:text-green-400 transition-colors duration-200 py-2 px-4 rounded-full hover:bg-blue-800 font-medium text-sm sm:text-base bg-transparent border-none cursor-pointer w-full text-left"
               >
                 {item.name}
               </button>
             ))}
            <div className="pt-3 sm:pt-4 border-t border-blue-700">
               <Button
                 onClick={() => {
                   setIsAppointmentDialogOpen(true);
                   setIsMenuOpen(false);
                 }}
                 variant="primary"
                 size="md"
                 icon={<Calendar className="w-4 h-4" />}
                 className="w-full"
               >
                 Request An Appointment
               </Button>
             </div>
          </div>
                 </div>
       </div>
       
       {/* Appointment Dialog */}
       <AppointmentDialog 
         isOpen={isAppointmentDialogOpen}
         onClose={() => setIsAppointmentDialogOpen(false)}
       />
     </nav>
   );
 };

export default Navbar;
