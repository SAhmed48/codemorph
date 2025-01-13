"use client";
import React, { useState } from "react";
import { dataServices } from "@/components/Common/Services/data/techPoints";

const DeSectionThree = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="de-section-three" className="py-20">
      <div className="container">
        <div className="mb-6 flex justify-center items-center flex-col text-center md:max-w-[36.5rem] md:max-w-[51.5rem] md:mx-auto md:my-0 pb-[6.5rem]">
          <h2 className="text-4xl font-bold mb-12">
            Reach full readiness for big data analytics
          </h2>
          <p className="font-light text-xl">
            Want to analyze and visualize data at a speed? Move it? Or integrate
            a new data source with your pipeline? You need an engineering team
            that has done all of that — sometimes for products servicing 1M
            users per month.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 mb-10">
          {dataServices.map((item, index) => (
            <div
              key={index}
              className={`py-12 flex justify-center items-center text-center rounded-lg cursor-pointer hover:bg-gray-100 ${activeIndex === index ? "bg-blue-600 text-white border-r-1 hover:bg-blue-600" : ""}`}
              onClick={() => handleClick(index)}
            >
              {item.iconSvg}
              <h2 className="ml-4 font-semibold">{item.title}</h2>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 mt-6">
          <div className="p-4">{dataServices[activeIndex].description}</div>
          <div className="p-4 bg-gray-800 text-white shadow p-10 rounded-lg">
            <h3 className="text-lg font-semibold">Key Benefits</h3>
            <ul className="list-disc pl-5">
              {dataServices[activeIndex].benefits.map((benefit, idx) => (
                <li key={idx} className="mt-1">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeSectionThree;
