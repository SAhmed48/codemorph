import ServiceSectionOne from "src/components/Common/Services/SectionOne";
import ServiceSectionTwo from "@/components/Common/Services/SectionTwo";
import ServiceSectionThree from "@/components/Common/Services/SectionThree";
import ServiceSectionFour from "@/components/Common/Services/SectionFour";
import { endToEndCloudServices } from "@/components/Common/Services/data/services";
import FaqSection from "@/components/Faq";
import { cloudFaqs } from "@/components/Common/Services/data/faqs";
import Metrics from "@/components/Metrics";
import { WebMetricData } from "@/components/Metrics/Metrics";
import ContactBanner from "@/components/ContactBanner/ContactBanner";
import { CloudTechPoints } from "@/components/Common/Services/data/techPoints";
const CloudDevelopment = () => {
  return (
    <>
      <ServiceSectionOne
        heading="CLOUD ENGINEERING SERVICES"
        title="Build reliable and cost-effective cloud solutions"
        description="Complete your project with a certified AWS Partner that will show you how to master cloud development. Build faster, at a lower cost, and integrate the cloud with your product."
        actionButton
        actionPath="/contact"
      />
      <ServiceSectionTwo
        headingFirstWord="Most companies use"
        headingHighlight="the cloud"
        headingWords="but can't seem to master it"
        techPoints={CloudTechPoints}
      />
      <ServiceSectionThree
        sectionOne={{
          imageUrl: "/images/services/cloud-dev.webp",
          heading: "Use the cloud’s full potential in your projects",
          description:
            "Your IT can use their cloud as an unfair advantage. Get the guidance needed to power up your product, cloud operations, and to automate DevOps in just 2-4 weeks. ",
        }}
        sectionTwo={{
          sectionNow: {
            text: "Cloud engineering is complex. It’s hard to choose cloud services right for the job. Some workflows are still server-based because cloud migration or integration is challenging. IT is worried about service reliability or sudden overspending.",
            text1: "",
          },
          sectionSoon: [
            {
              text: "You bring in a certified cloud app development team that fixes the weak spots in IT's delivery.",
            },
            {
              text: "Building cloud solutions becomes easier as they speed up the project and coach the in-house team.",
            },
            {
              text: "Your cloud infrastructure performs better at a lower cost.",
            },
          ],
        }}
        sectionThree={{
          sectionTop: [
            {
              title: "Speed up deployment",
              text: "Automate repetitive processes with ready-made tools and workflows",
            },
            {
              title: "Secure service availability",
              text: "Redesign cloud architecture to auto-balance resource use within the budget",
            },
            {
              title: "Cut down resource costs and usage",
              text: "Fix hidden costs generators and see the bill shrink by thousands of dollars",
            },
          ],
          sectionBottom: {
            title: "Improve these metrics",
            points: [
              "Time to market",
              "Deployment frequency",
              "Deployment velocity",
              "Conversion rate",
            ],
          },
        }}
      />
      <ServiceSectionFour
        heading="Get the guidance your cloud project needs in 2-4 weeks"
        description=""
        imagePath="/images/services/cloud-dev.webp"
        endToEndServices={endToEndCloudServices}
      />
      <Metrics
        metricTitle="The team you need is here"
        metrics={WebMetricData}
      />
      <ContactBanner
        mainText="Can your IT cut that AWS bill?"
        shortText="Some partners slashed 70-99% of their monthly bills. Review yours in 2 weeks max."
        contactText="Get in Touch"
        contactUrl="/contact"
      />
      <FaqSection faqs={cloudFaqs} />
    </>
  );
};

export default CloudDevelopment;
