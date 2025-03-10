"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface ServicesSectionProps {
  title: string;
  descriptions: Record<string, string>;
  marginTop?: string;
}

const services = [
  "Interactive web applications",
  "Lightning-fast user interfaces",
  "Highly-productive frontend teams",
  "Web and mobile apps that share code",
  "Scalable web applications",
  "Innovative projects and companies",
];

const ServicesSection: React.FC<ServicesSectionProps> = ({
  title,
  descriptions,
  marginTop = "5rem",
}) => {
  // Initialize AOS only once
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const defaultService = services.find((s) => descriptions[s]) || services[0];
  const [selectedService, setSelectedService] = useState(defaultService);

  return (
    <div
      className="bg-white text-gray-900 font-['Inter'] px-6 md:px-20 py-16"
      style={{ marginTop }}
      data-aos="fade-up"
    >
      {/* Heading */}
      <h2 className="text-[42px] font-light text-center tracking-wider max-w-7xl mx-auto mb-12">
        {title}
      </h2>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-20 max-w-5xl mx-auto">
        {/* Sidebar (Service Buttons) */}
        <div className="flex flex-col space-y-6 w-full md:w-2/3">
          {services.map((service, index) => (
            <button
              key={service}
              className={`text-left w-96 px-4 py-3 rounded-xl transition-all duration-200 ${
                selectedService === service
                  ? "bg-[#f0fafe] text-[#1926e8] font-bold text-lg"
                  : "text-[#1926e8] font-bold text-lg"
              }`}
              onClick={() => setSelectedService(service)}
            >
              {service}
            </button>
          ))}
        </div>

        {/* Description Section (No AOS to prevent re-triggering) */}
        <div className="w-3/4 transition-opacity duration-500 ease-in-out">
          <h3 className="text-2xl font-bold mb-5">{selectedService}</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            {descriptions[selectedService] || "More details coming soon..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
