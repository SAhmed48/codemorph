"use client";

import { useState } from "react";
import { EndService } from "@/types/services";

const softwareServices = ({
  endToEndServices,
}: {
  endToEndServices: EndService[];
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-md:no-scrollbar flex w-full flex-col overflow-scroll py-10 md:flex-1 md:overflow-hidden md:py-24 lg:gap-18 lg:py-30">
      {endToEndServices.map((service, index) => (
        <div
          key={index}
          className="first:pt-0 lg:py-8 !p-0 text-brand-greyscale-000"
        >
          <h3 className="flex">
            <button
              type="button"
              onClick={() => toggleItem(index)}
              className="text-white group flex flex-1 cursor-pointer items-center justify-between text-left font-medium transition-all py-8"
            >
              {service.serviceName}
              <span className="pl-4 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
          </h3>
          {openIndex === index && (
            <div className="overflow-hidden transition-all">
              {service.serviceTech}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default softwareServices;
