"use client";

import Image from "next/image";

interface HeroSectionProps {
  title: string;
  titleBr?: string;
  titleHr?: string;
  titleLast?: string;
  description: string;
  primaryButtonText?: string;
  bgImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  primaryButtonText,
  bgImage,
}) => {
  return (
    <div className="bg-[#313435] text-white flex justify-center items-center py-40 px-6">
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Text Content */}
        <div className="text-left">
          <h1 className="text-5xl font-light tracking-tight text-gray-50 leading-tight">
            {title}
          </h1>
          <div className="mt-6">
            <p
              className=""
              style={{
                fontSize: "1.1rem",
              }}
            >
              {description}
            </p>
          </div>
          {primaryButtonText && (
            <button className="mt-12 inline-block bg-white text-black text-lg font-semibold px-8 py-2 rounded-3xl shadow-md hover:bg-indigo-600 transition">
              {primaryButtonText}
            </button>
          )}
        </div>
        {/* Right Side: Image */}
        {bgImage && (
          <div className="flex justify-center">
            <Image
              src={bgImage}
              alt="Hero Image"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
