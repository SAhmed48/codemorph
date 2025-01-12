import { Metadata } from "next";
import FaqSection from "@/components/Faq";
import ContactBanner from "@/components/ContactBanner/ContactBanner";
import MetricsSection from "@/components/Metrics";
import { softwareDevMetricData } from "@/components/Metrics/Metrics";
import CaseStudySection from "@/components/CaseStudies";
import { softwareDevCaseStudies } from "@/components/CaseStudies/softwareDevCaseStudies";
import { companyFaqs } from "@/components/Faq/faqs";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const SoftwareDevelopServices = () => {
  return (
    <>
      <section
        id="software-development-services"
        className="relative bg-gray-700"
      >
        <div className="container flex flex-col gap-40 pb-12 pt-24 md:pb-16 md:pt-40 lg:flex-row lg:pb-52 lg:pt-96">
          <div className="flex max-w-[500px] flex-col gap-8 lg:max-w-[679px]">
            <div>
              <h1 className="text-base">
                <span>
                  <span
                    style={{
                      color: "#F7F9FA",
                    }}
                  >
                    SOFTWARE DEVELOPMENT SERVICES
                  </span>
                </span>
              </h1>
            </div>
            <header>
              <h2 className="md:text-4xl lg:text-6xl">
                <span>
                  <span
                    style={{
                      color: "#FFFFFF",
                    }}
                  >
                    Take on any new development opportunity
                  </span>
                </span>
              </h2>
            </header>
          </div>
          <div className="max-w-[532px] lg:mt-14">
            <p className="font-light text-2xl">
              <span>
                <span
                  style={{
                    color: "#FFFFFF",
                  }}
                >
                  Deliver your project faster with additional developers or a
                  self-managed product team.{" "}
                </span>
              </span>
            </p>
            <p className="font-light text-2xl">
              <span>
                <span
                  style={{
                    color: "#FFFFFF",
                  }}
                >
                  Most partners rely on our support for 2-3 years.
                </span>
              </span>
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-0 h-full w-full bg-services-hero-blob bg-[length:616px_345px] bg-center bg-no-repeat sm:bg-[length:880px_493px] lg:bg-[length:1232px_690px] xl:bg-[length:1760px_985px]"></div>
        <div className="absolute inset-0 z-0 h-full w-full bg-services-hero-doors bg-[length:239px_393px] bg-bottom bg-no-repeat sm:bg-[length:350px_575px] lg:bg-[length:564px_667px]"></div>
      </section>
      <MetricsSection
        metricTitle="Your success metrics become ours"
        metrics={softwareDevMetricData}
      />
      <CaseStudySection
        caseStudyTitle="Judged by the results we deliver each sprint"
        caseStudies={softwareDevCaseStudies}
      />
      <ContactBanner
        mainText="Test a project idea quickly with minimal risk"
        shortText="Try our App Modernization Sprint™ to build a product
                    improvement roadmap in just 2 weeks."
        contactText="Interesting, let's see"
        contactUrl="/contact"
      />
      <FaqSection companyFaqs={companyFaqs} />
    </>
  );
};

export default SoftwareDevelopServices;
