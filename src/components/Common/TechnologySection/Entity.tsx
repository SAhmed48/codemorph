"use client";

import Image from "next/image";

interface FeatureSectionProps {
  imageSrc: string;
  title: string;
  title1: string;
  title2: string;
  title3: string;
  subtitle: string;
  description: string;
}

const Entity: React.FC<FeatureSectionProps> = ({
  imageSrc,
  title,
  title1,
  title2,
  title3,
  subtitle,
  description,
}) => {
  return (
    <div className="relative text-gray-900 font-['Inter'] p-5 md:p-16 flex flex-col md:flex-row items-center md:items-start gap-36 max-w-7xl mx-auto rounded-2xl overflow-visible">
      {/* Left Image Section */}
      <div className="relative w-[670px] h-[600px] md:h-[540px] rounded-3xl overflow-hidden bottom-28 border-[9px] border-white">
        <Image
          src={imageSrc}
          alt="Feature Image"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
          quality={100}
        />
      </div>
      {/* Right Content Section */}
      <div className="w-1/2 flex flex-col items-start relative bottom-8 gap-4">
        <h4 className="text-[#b9c0c9] text-xl font-semibold">{subtitle}</h4>
        <h2 className="text-5xl font-extrabold leading-tight w-[500px]">
          <span className="block">
            {title} <br /> <span>{title1}</span>
            <br />
            <span>{title2}</span>
            <br/>
            <span>{title3}</span>
          </span>
        </h2>
        <p className="text-gray-700 text-lg leading-loose font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Entity;
