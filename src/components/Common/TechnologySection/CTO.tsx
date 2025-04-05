import React from "react";
import { TechServiceOne } from "@/types/technology";
import Image from "next/image";

interface CTOSectionProps{
  CTO: TechServiceOne[];
  title: string;
}

const CTOs: React.FC<CTOSectionProps> = ({ title, CTO }) => {
  return (
    <div className="flex max-w-full mx-auto py-20 px-4 justify-center gap-20">
      <div className="flex max-w-sm">
        <h2 className="text-4xl font-normal text-gray-900 mb-10 text-left leading-snug">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
        {CTO.map((feature, index) => (
          <div
            key={index}
            className="w-80 h-[68] bg-[#f0fafe] p-6 rounded-3xl shadow-sm flex flex-col gap-4"
          >
            <Image alt= "" src={feature.imageUrl} width={25} height={25}/>
            <h3 className="font-bold text-lg mt-2 w-56">{feature.heading}</h3>
            <p className="text-black mt-1 font-light">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CTOs;
