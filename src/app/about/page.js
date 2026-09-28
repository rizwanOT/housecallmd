'use client'

import Breadcrumbs from "../components/Breadcrumbs";
import { useEffect } from "react";
import { Eye, Handshake } from "lucide-react";

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.3 }
    );

    const animatedElement = document.querySelector('.animate-slide-up');
    if (animatedElement) {
      observer.observe(animatedElement);
    }

    return () => {
      if (animatedElement) {
        observer.unobserve(animatedElement);
      }
    };
  }, []);
  return (
    <>
      {/* Above Section */}
    <div className="pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs currentPage="About" />
        </div>

        {/* Full-width gray section */}
        <div className="w-full bg-gray-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] font-bold text-[#17224D]">About</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Above Subsection Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
                     {/* Left side - Image */}
           <div className="relative">
             <div className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-20 h-20 sm:w-32 sm:h-32 z-0 bg-blue-100 rounded-full opacity-50"></div>
             <img
               src="/assets/11/Pattern.png"
               alt=""
               className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-20 h-20 sm:w-32 sm:h-32 object-contain z-0"
             />
             <img
               src="/assets/11/Header-main-image-01-768x395.png"
               alt="HouseCall MD Header"
               className="w-full h-auto rounded-lg relative z-10"
             />
           </div>

          {/* Right side - Content */}
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg font-semibold text-green-700 uppercase tracking-wide">
              ABOUT HOUSECALL MD
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17224D] leading-tight">
              At HouseCall MD, we are dedicated
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              to delivering exceptional medical services with a focus on
              building strong relationships and providing personalized care. Our
              goal is to understand your unique medical history, lifestyle. and
              personal goals, enabling us to offer tailored and comprehensive
              care that meets your specific needs. Led by a team of
              compassionate healthcare professionals. we believe in the power of
              deep understanding and active listening. We take the time to get
              to know you, to truly comprehend your health concerns, and to
              develop a care plan that aligns with your goals and preferences.
              Our services encompass a wide range of primary care needs,
              ensuring that we can address all aspects of your health and
              well-being. We provide everything from preventive care and
              wellness exams to chronic disease management, acute illness
              treatment, and medication management, offering comprehensive,
              continuous support throughout your healthcare journey. What sets
              HouseCall MD apart is our commitment to innovation, compassion,
              and personalized care. We are at the forefront of modern
              healthcare, leveraging technology and best practices to enhance
              the quality and convenience of our services. By bringing primary
              care directly to your home. We eliminate the hassle of clinic
              visits, long waits, and transportation challenges, enabling you to
              focus on your health in the comfort of your own home. We take
              pride in serving individuals and families in the community,
              providing a seamless healthcare experience that promotes overall
              well-being and improves your quality of life. At HouseCall MD, you
              are not just a patient: you are a partner on your healthcare
              journey. We value your trust and strive to exceed your
              expectations by delivering exceptional care with empathy,
              compassion, and respect. We invite you to experience the HouseCall
              MD difference. Speak with an intake specialist to see how we can
              best serve you and/or your loved one.
            </p>
          </div>
        </div>
      </div>

             {/* Below Section */}
       <div className="bg-gray-50 py-12 sm:py-16">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                       {/* Main Image and Values Section Container */}
            <div className="relative">
              {/* Main Image */}
              <div className="flex justify-center">
                                 <img
                   src="/assets/11/Our-Values3.png"
                   alt="Our Values"
                   className="w-full max-w-6xl h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
                 />
              </div>

                             {/* Values Section - Overlapping from bottom */}
               <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 max-w-5xl mx-auto -mt-8 sm:-mt-12 lg:-mt-16 relative z-10 animate-slide-up">
                {/* Values Section */}
                <div className="mb-8 sm:mb-12 text-center">
                  <p className="text-base sm:text-lg font-semibold text-green-700 uppercase tracking-wide mb-2">
                    OUR VALUES
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#17224D] mb-4 sm:mb-6">
                    Our values are grounded in empathy,<br className="hidden sm:block" /> compassion, and personalized care.
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    We prioritize building meaningful relationships with our patients, their families, their doctors and anyone involved in their care. Taking the time to understand their unique medical history, lifestyle, and personal goals. Our commitment to active listening and deep understanding ensures that each patient receives a care plan tailored to their specific needs and preferences.
                  </p>
                </div>

                {/* Vision and Mission Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  {/* Vision */}
                  <div>
                                         <div className="flex items-center mb-3 sm:mb-4">
                       <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mr-2 sm:mr-3" aria-hidden="true" />
                       <h3 className="text-xl sm:text-2xl font-bold text-[#17224D]">Vision</h3>
                     </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Our vision is to transform primary healthcare by delivering personalized, compassionate, and innovative services directly to your home. We aim to enhance the quality of life for individuals and families through exceptional, convenient care. Our focus is on building trust and using modern technology to offer a seamless, comprehensive healthcare experience tailored to each patient's needs.
                    </p>
                  </div>

                  {/* Mission */}
                  <div>
                                         <div className="flex items-center mb-3 sm:mb-4">
                       <Handshake className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mr-2 sm:mr-3" aria-hidden="true" />
                       <h3 className="text-xl sm:text-2xl font-bold text-[#17224D]">Mission</h3>
                     </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Our mission is to provide high-quality, patient-centered care that prioritizes empathy, understanding, and trust. Our mission is to meet unique health needs through personalized services, leveraging advanced technology for a smooth experience. We strive to offer continuous, accessible care that empowers patients, enhances well-being, and promotes a healthier lifestyle with compassion and respect.
                    </p>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
    </>
  );
}
