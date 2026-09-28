'use client';

import React, { useState } from 'react';

const ContactAppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consent: false
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your full name.';
    }
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address, e.g. name@example.com.';
    }
    if (!formData.phone.trim()) {
      nextErrors.phone = 'Please enter a phone number we can reach you at.';
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
      const order = ['name', 'email', 'phone', 'consent'];
      const firstErrorField = order.find((field) => nextErrors[field]);
      const el = document.querySelector(`#contact-${firstErrorField}`);
      el?.focus();
      return;
    }
    // Handle form submission here (e.g. send to an API route)
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
  };

  const inputClasses =
    'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent';

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-[#17224D] mb-6">Book an Appointment</h2>

      {submitted ? (
        <p role="status" className="text-green-800 font-medium">
          Thank you — your request has been received. Our team will contact you shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <p className="text-sm text-gray-600">All fields are required.</p>

          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-[#17224D] mb-1">
              Name <span aria-hidden="true">*</span>
              <span className="sr-only">(required)</span>
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              placeholder="Jane Doe"
              value={formData.name}
              onChange={handleInputChange}
              className={inputClasses}
              required
              aria-required="true"
              aria-invalid={errors.name ? 'true' : undefined}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
            />
            {errors.name && (
              <p id="contact-name-error" role="alert" className="mt-1 text-sm text-red-700 font-medium">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-[#17224D] mb-1">
              Email <span aria-hidden="true">*</span>
              <span className="sr-only">(required)</span>
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleInputChange}
              className={inputClasses}
              required
              aria-required="true"
              aria-invalid={errors.email ? 'true' : undefined}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
            />
            {errors.email && (
              <p id="contact-email-error" role="alert" className="mt-1 text-sm text-red-700 font-medium">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact-phone" className="block text-sm font-medium text-[#17224D] mb-1">
              Phone <span aria-hidden="true">*</span>
              <span className="sr-only">(required)</span>
            </label>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              placeholder="(626) 765-4321"
              value={formData.phone}
              onChange={handleInputChange}
              className={inputClasses}
              required
              aria-required="true"
              aria-invalid={errors.phone ? 'true' : undefined}
              aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
            />
            {errors.phone && (
              <p id="contact-phone-error" role="alert" className="mt-1 text-sm text-red-700 font-medium">
                {errors.phone}
              </p>
            )}
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="contact-consent"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
              className="mt-1 h-4 w-4 text-green-700 focus:ring-2 focus:ring-green-700 border-gray-300 rounded"
              required
              aria-required="true"
              aria-invalid={errors.consent ? 'true' : undefined}
              aria-describedby={errors.consent ? 'contact-consent-error' : undefined}
            />
            <div>
              <label htmlFor="contact-consent" className="text-sm text-gray-700 leading-relaxed">
                By checking this box, you agree to receive text messages from HouseCall MD related to medical appointments and services at the phone number provided above. You may reply STOP to opt-out at any time. For assistance reply HELP. Message and data rates may apply. Message frequency may vary. Learn more on our{' '}
                <a href="/privacy-policy" className="text-green-800 underline hover:text-green-900">Privacy Policy</a> page.
              </label>
              {errors.consent && (
                <p id="contact-consent-error" role="alert" className="mt-1 text-sm text-red-700 font-medium">
                  {errors.consent}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactAppointmentForm;
