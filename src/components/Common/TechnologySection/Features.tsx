"use client";

import Image from "next/image";
import React from "react";
import { TechServiceOne } from "@/types/technology";

interface FeatureGridProps {
  features: TechServiceOne[]; // Define prop type
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
  return (
    <div className="max-w-7xl mx-auto p-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {features.map((feature, index) => (
        <div
          key={index}
          className="relative p-6 transition-all duration-300 ease-in-out hover:bg-slate-200 rounded-lg group"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-lg" />
          <div className="flex-1 flex flex-col space-y-5">
            <div className="flex items-center justify-center w-12 h-12 bg-slate-100 text-slate-900 rounded-xl">
              <Image alt="" src={feature.imageUrl} width={25} height={25} />
            </div>
            <h3 className="text-xl font-bold">{feature.heading}</h3>
            <p className="text-black text-lg leading-loose">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
