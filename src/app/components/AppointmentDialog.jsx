'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const AppointmentDialog = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    consent: false
  });
  const [errors, setErrors] = useState({});

  const dialogRef = useRef(null);
  const firstFieldRef = useRef(null);
  const previouslyFocused = useRef(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your full name.';
    }
    if (!formData.phone.trim()) {
      nextErrors.phone = 'Please enter a phone number we can reach you at.';
    }
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address, e.g. name@example.com.';
    }
    if (!formData.consent) {
      nextErrors.consent = 'Please check the box to agree to be contacted before submitting.';
    }
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const order = ['name', 'phone', 'email', 'consent'];
      const firstErrorField = order.find((field) => nextErrors[field]);
      const el = dialogRef.current?.querySelector(`[name="${firstErrorField}"]`);
      el?.focus();
      return;
    }
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
  };

  // Move focus into the dialog when it opens, restore it when it closes,
  // lock background scroll, and handle Escape + focus trapping.
  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement;
    const focusTimer = setTimeout(() => {
      firstFieldRef.current?.focus();
    }, 0);

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = overflow;
      if (previouslyFocused.current instanceof HTMLElement) {
        previouslyFocused.current.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const inputClasses =
    'w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-sm sm:text-base';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="appointment-dialog-title"
        className="relative bg-green-800 rounded-lg p-6 sm:p-8 max-w-md w-full mx-4 shadow-2xl border-2 border-green-500"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close appointment form"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white rounded transition-colors"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
        </button>

        {/* Title */}
        <h2 id="appointment-dialog-title" className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
          Book an Appointment
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate className="space-y-3 sm:space-y-4">
          <p className="text-xs text-white/90">All fields are required.</p>

          {/* Name and Phone Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label htmlFor="ad-name" className="block text-sm font-medium text-white mb-1">
                Name <span aria-hidden="true">*</span>
                <span className="sr-only">(required)</span>
              </label>
              <input
                ref={firstFieldRef}
                type="text"
                name="name"
                id="ad-name"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={handleInputChange}
                className={inputClasses}
                required
                aria-required="true"
                aria-invalid={errors.name ? 'true' : undefined}
                aria-describedby={errors.name ? 'ad-name-error' : undefined}
              />
              {errors.name && (
                <p id="ad-name-error" role="alert" className="mt-1 text-xs text-white font-medium">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="ad-phone" className="block text-sm font-medium text-white mb-1">
                Phone <span aria-hidden="true">*</span>
                <span className="sr-only">(required)</span>
              </label>
              <input
                type="tel"
                name="phone"
                id="ad-phone"
                placeholder="(626) 765-4321"
                value={formData.phone}
                onChange={handleInputChange}
                className={inputClasses}
                required
                aria-required="true"
                aria-invalid={errors.phone ? 'true' : undefined}
                aria-describedby={errors.phone ? 'ad-phone-error' : undefined}
              />
              {errors.phone && (
                <p id="ad-phone-error" role="alert" className="mt-1 text-xs text-white font-medium">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="ad-email" className="block text-sm font-medium text-white mb-1">
              Email <span aria-hidden="true">*</span>
              <span className="sr-only">(required)</span>
            </label>
            <input
              type="email"
              name="email"
              id="ad-email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleInputChange}
              className={inputClasses}
              required
              aria-required="true"
              aria-invalid={errors.email ? 'true' : undefined}
              aria-describedby={errors.email ? 'ad-email-error' : undefined}
            />
            {errors.email && (
              <p id="ad-email-error" role="alert" className="mt-1 text-xs text-white font-medium">
                {errors.email}
              </p>
            )}
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start space-x-2 sm:space-x-3">
            <input
              type="checkbox"
              name="consent"
              id="ad-consent"
              checked={formData.consent}
              onChange={handleInputChange}
              className="mt-1 h-4 w-4 text-green-600 focus:ring-2 focus:ring-white border-gray-300 rounded"
              required
              aria-required="true"
              aria-invalid={errors.consent ? 'true' : undefined}
              aria-describedby={errors.consent ? 'ad-consent-error' : undefined}
            />
            <div>
              <label htmlFor="ad-consent" className="text-xs sm:text-sm text-white leading-relaxed">
                By checking this box, you agree to receive text messages from HouseCall MD related to medical appointments and services at the phone number provided above. You may reply STOP to opt-out at any time. For assistance reply HELP. Message and data rates may apply. Message frequency may vary. Learn more on our{' '}
                <a href="/privacy-policy" className="text-blue-100 hover:text-white underline">
                  Privacy Policy
                </a>{' '}
                page.
              </label>
              {errors.consent && (
                <p id="ad-consent-error" role="alert" className="mt-1 text-xs text-white font-medium">
                  {errors.consent}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white hover:bg-green-50 text-green-900 py-3 px-6 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-800 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentDialog;
