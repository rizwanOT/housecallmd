'use client';

import React, { useState } from 'react';
import { ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Are you affiliated with a hospital?",
      answer: "We are not affiliated directly with hospitals. However, we do have covering physicians at many local hospitals, who follow and update us during the hospital stay."
    },
    {
      question: "My mom is dehydrated and needs IV fluids, can you help?",
      answer: "Yes, we can provide IV fluid therapy in the comfort of your home. Our providers are trained to administer IV fluids and monitor patients during treatment."
    },
    {
      question: "When Should I consider calling 911 rather then HouseCall MD?",
      answer: "Call 911 immediately for life-threatening emergencies such as chest pain, severe bleeding, difficulty breathing, loss of consciousness, or stroke symptoms. For non-emergency situations, HouseCall MD can provide timely care."
    },
    {
      question: "Am I eligible for physician home care?",
      answer: "Most patients are eligible for our services. We serve geriatric patients, disabled individuals, and those who have difficulty traveling to medical offices. Contact us to discuss your specific situation."
    },
    {
      question: "What insurances do you accept?",
      answer: "We accept most major insurance plans including Medicare, Medicaid, and private insurance. Please contact us to verify your specific insurance coverage."
    },
    {
      question: "Do you take Private Pay patients?",
      answer: "Yes, we accept private pay patients. We offer competitive rates for those without insurance or with high deductibles. Contact us for pricing information."
    },
    {
      question: "How quickly can a provider visit?",
      answer: "We typically provide same-day or next-day appointments for urgent care needs. Routine visits can be scheduled within 24-48 hours depending on availability."
    },
    {
      question: "How often does the provider come out to visit?",
      answer: "Visit frequency depends on your medical needs and care plan. Some patients require weekly visits, while others may need monthly check-ups. We'll work with you to determine the appropriate schedule."
    },
    {
      question: "What if I need an urgent appointment?",
      answer: "For urgent care needs, we offer same-day appointments when possible. Call us and we'll work to accommodate your schedule and medical needs."
    },
    {
      question: "What if I have to go to the hospital?",
      answer: "If hospitalization is necessary, we'll coordinate with the hospital staff and continue to follow your care. We can also provide post-hospitalization care to help with your recovery."
    },
    {
      question: "Will I have the same provider every visit?",
      answer: "We strive to provide continuity of care with the same provider whenever possible. However, there may be times when a different provider is available due to scheduling or coverage needs."
    },
    {
      question: "Can I still see my regular doctor?",
      answer: "Yes, you can continue seeing your regular doctor. We work collaboratively with your existing healthcare providers to ensure coordinated care."
    },
    {
      question: "What do I do if I need labs, X-rays, or diagnostic tests?",
      answer: "We can order and coordinate lab work, X-rays, and other diagnostic tests. Many tests can be performed in your home, while others may require a visit to a local facility."
    },
    {
      question: "Do you come out for emergency visits?",
      answer: "We provide urgent care services but are not a substitute for emergency medical services. For true emergencies, please call 911. We can provide follow-up care after emergency treatment."
    },
    {
      question: "How do I arrange to be treated in my home?",
      answer: "Simply call us to schedule an appointment. We'll discuss your medical needs, verify insurance coverage, and arrange a convenient time for a provider to visit your home."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-widest mb-4">
            F A Q
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#17224D] mb-4 sm:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Find answers to commonly asked questions about our services and how we can assist you.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-500 ease-in-out">
              {/* Question Bar */}
              <button
                onClick={() => toggleFAQ(index)}
                id={`faq-question-${index}`}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className={`w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-700 transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? 'bg-green-50 border-green-200'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <span className="font-medium text-gray-800 text-base sm:text-lg transition-all duration-500 ease-in-out">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 ml-4 transition-all duration-500 ease-in-out transform">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-green-700 transition-all duration-500 ease-in-out transform rotate-0" aria-hidden="true" />
                  ) : (
                    <HelpCircle className="w-5 h-5 text-gray-500 transition-all duration-500 ease-in-out transform rotate-0" aria-hidden="true" />
                  )}
                </div>
              </button>

              {/* Answer with smooth height animation */}
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                hidden={openIndex !== index}
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-6 py-3 sm:py-4 bg-white border-t border-gray-200">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed transition-all duration-700 ease-in-out">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
