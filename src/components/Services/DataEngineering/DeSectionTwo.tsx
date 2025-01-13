import React from "react";
import Image from "next/image";
import { deTechItems } from "@/components/Common/Services/data/techPoints";
const DeSectionTwo = () => {
  return (
    <section id="de-section-two" className="py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-10">
              Making data-based decisions pays off
            </h2>
            <p className="mt-2 mb-12 text-xl font-semibold">
              Imagine predicting when sales spike or what content makes users
              act. What would you like to know ?
            </p>
            <p className="mb-8 text-lg font-light">
              One client with several pet marketplaces bumped their revenue by
              400% in two years — in part by using big data.
            </p>

            <p className="mb-8 text-lg font-light">
              Our engineering team can show you how to catch and turn data into
              game-changing insights. You’ll be able to analyze many sources by
              using the cloud — at an optimized cost.
            </p>

            <p className="mb-8 text-lg font-light">
              We use — but aren’t limited to — AWS Glue, AWS EMR, AWS
              QuickSight, Step Functions, and Kinensis. GDPR and data security
              compliance is our golden standard.
            </p>
          </div>
          <div className="md:w-1/2 p-4 flex justify-center items-center">
            <Image
              src="/images/services/tech-people.webp"
              alt="Data Engineering"
              loading="lazy"
              width="450"
              height="450"
              decoding="async"
              data-nimg="1"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {deTechItems.map((item, index) => (
            <div key={index} className="p-4">
              <div className="flex flex-wrap">
                <Image
                  src={item.imagePath}
                  alt="Data Engineering"
                  loading="lazy"
                  width="30"
                  height="30"
                  decoding="async"
                  data-nimg="1"
                />
                <h3 className="text-lg font-semibold pl-3">{item.heading}</h3>
              </div>
              <p className="mt-2 pl-11 font-light">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeSectionTwo;
