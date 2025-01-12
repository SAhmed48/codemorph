"use client";

import React, { useState } from "react";

const FaqSection = ({
  companyFaqs,
}: {
  companyFaqs: { question: string; answer: React.ReactNode }[];
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-10 md:py-32 bg-gray-morph">
      <div className="container grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
        <h6 className="text-white md:text-4xl lg:text-6xl col-span-1 mb-7 font-light text-brand-greyscale-000 xl:mb-14">
          Good to know
        </h6>
        <div className="col-span-2 w-full" data-sentry-element="Accordion">
          {companyFaqs.map((faq, index) => (
            <div
              key={index}
              className="border-b first:pt-0 lg:py-8 !p-0 text-brand-greyscale-000"
            >
              <h3 className="flex">
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="text-white group flex flex-1 cursor-pointer items-center justify-between text-left font-medium transition-all py-8"
                >
                  <div className="font-light group-hover:underline">
                    <h2 className="font-light text-xl">{faq.question}</h2>
                  </div>
                  <span className="pl-4 text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
              </h3>
              {openIndex === index && (
                <div className="overflow-hidden text-sm transition-all">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
