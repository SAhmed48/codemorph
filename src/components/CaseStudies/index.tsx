import Link from "next/link";
import Image from "next/image";
import { CaseStudy } from "@/types/caseStudy";

const CaseStudySection = ({
  caseStudyTitle,
  caseStudies = [],
}: {
  caseStudyTitle: string;
  caseStudies: CaseStudy[];
}) => {
  return (
    <section
      id="case-study-section"
      className="relative overflow-hidden bg-gray-50"
    >
      <div className="container py-10 md:py-24 lg:py-34">
        <header>
          <h2 className="font-light text-6xl">{caseStudyTitle}</h2>
        </header>
        <div className="overflow-x-auto flex space-x-4 overflow-hidden pt-24">
          {caseStudies.map((item, index) => (
            <>
              <Link key={index} href={item.link} className="group h-full">
                <div className="flex h-full w-60 flex-col sm:w-[300px] md:w-[400px] lg:w-[600px]">
                  <div className="relative flex h-40 items-end overflow-hidden sm:h-[200px] md:h-[250px] lg:h-[400px]">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={192}
                      height={128}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col-reverse justify-between md:flex-1 md:flex-col">
                    <div className="flex-1 group-hover:underline mt-4 lg:mt-6">
                      <h3 className="text-4xl font-light">
                        <span>
                          <span>{item.title}</span>
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>

        <div className="paragraph-xl mt-2 flex w-full items-center justify-between sm:mt-10 sm:gap-10 md:justify-end">
          <Link
            href="/"
            className="group inline-block outline-offset-0 transition-all duration-200 max-md:w-full xs:max-w-[320px] py-4 text-base font-medium swipe-effect bg-gray-700 text-white focus-within:outline-[3px] focus:outline focus:outline-[3px] hover:text-sky-400 focus:outline-text-sky-400 px-2 xs:w-[320px] sm:py-5 md:w-auto md:px-10"
          >
            <div className="flex w-full justify-center">
              <span className="relative p-1 before:absolute before:-left-4 before:top-[1px] before:font-light before:transition-transform before:duration-200 before:content-['→']"></span>
              <span className="relative z-10">Browse case studies</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
