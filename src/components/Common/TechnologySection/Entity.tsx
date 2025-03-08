"use client";

import Image from "next/image";

interface FeatureSectionProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
}

const Entity: React.FC<FeatureSectionProps> = ({
  imageSrc,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="relative text-gray-900 font-['Inter'] p-5 md:p-16 flex flex-col md:flex-row items-center md:items-start gap-36 max-w-7xl mx-auto rounded-2xl overflow-visible">
      {/* Left Image Section */}
      <div className="relative w-[670px] h-[600px] md:h-[540px] rounded-xl overflow-hidden bottom-28">
        <Image
          src={imageSrc}
          alt="Feature Image"
          layout="fill"
          objectFit="cover"
          className="rounded-3xl border-4 border-black border-opacity-50"
          quality={100}
        />
      </div>
      {/* Right Content Section */}
      <div className="w-1/2 flex flex-col items-start relative bottom-8 gap-8">
        <h4 className="text-[#b9c0c9] text-xl font-semibold">{subtitle}</h4>
        <h2 className="text-5xl font-extrabold leading-tight w-96">
          <span className="block">{title}</span>
        </h2>
        <p className="text-gray-700 text-lg leading-loose font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Entity;
