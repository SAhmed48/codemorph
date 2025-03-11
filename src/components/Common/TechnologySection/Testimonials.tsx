"use client";

import { useState } from "react";

export type textParts = {
  text: string;
  highlight?: boolean;
};

interface TestimonialSectionProps {
  textParts: textParts[];
  subtitle: string;
  rating: number;
  totalReviews: number;
}

const testimonials = [
  {
    // image: userImage,
    name: "John Doe",
    role: "CTO, TechCorp",
    rating: 5,
    company: "TechCorp",
    message:
      "Working with this React team was an absolute pleasure! The performance and quality were top-notch.",
  },
  {
    // image: userImage,
    name: "Jane Smith",
    role: "Product Manager, Startup Inc.",
    rating: 4,
    company: "Startup Inc.",
    message:
      "Highly professional and delivered exactly what we needed. Our project scalability improved significantly.",
  },
];

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  textParts,
  subtitle,
  rating,
  totalReviews,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto text-center py-20 px-4 relative">
      {/* Large Quote Background */}
      <div className="absolute inset-0 flex items-center justify-center top-56">
        <span className="text-blue-100 text-[20rem] font-bold opacity-20">
          “
        </span>
      </div>

      <p className="text-[#626873] font-medium text-lg relative z-10">
        {subtitle}
      </p>
      <h2 className="text-[35px] tracking-wide font-normal leading-normal mt-2 relative z-10 w-[800px] text-center mx-auto">
        {textParts.map((part, index) =>
          part.highlight ? (
            <span key={index} className="bg-blue-100 px-2">
              {part.text}
            </span>
          ) : (
            <>{part.text}</>
          )
        )}
      </h2>

      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-56 relative z-10">
        {/* Clutch Rating Section */}
        <div className="text-center">
          <div className="flex items-center mt-2 space-x-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-6 h-6 ${
                  i < rating ? "text-blue-600" : "text-gray-300"
                }`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
            <p className="text-lg font-bold mt-2">{rating}/5</p>
          </div>
          <p className="text-black text-lg font-light">
            {totalReviews} VERIFIED REVIEWS
          </p>
        </div>

        {/* Testimonial Box */}
        <div className="relative p-6 rounded-lg text-justify w-full md:w-1/2">
          <p className="text-xl font-semibold mt-6">
            {testimonials[currentIndex].message}
          </p>
          <p className="mt-4 text-gray-700 font-medium">
            {testimonials[currentIndex].name}
          </p>
          <p className="text-gray-500 text-sm">
            {testimonials[currentIndex].role} at{" "}
            {testimonials[currentIndex].company}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex flex-row-reverse mt-6 gap-4 relative z-10">
        <button
          className="p-3 border border-gray-300 rounded-full hover:bg-gray-200 flex items-center justify-center w-10 h-10"
          onClick={prevTestimonial}
        >
          ▶
        </button>
        <button
          className="p-3 border border-gray-300 rounded-full hover:bg-gray-200 flex items-center justify-center w-10 h-10"
          onClick={nextTestimonial}
        >
          ◀
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;
