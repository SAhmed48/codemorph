import ServiceSectionOne from "src/components/Common/Services/SectionOne";
import ServiceSectionTwo from "@/components/Common/Services/SectionTwo";
import ServiceSectionThree from "@/components/Common/Services/SectionThree";
import ServiceSectionFour from "@/components/Common/Services/SectionFour";
import { endToEndWebServices } from "@/components/Common/Services/data/services";
import FaqSection from "@/components/Faq";
import { webFaqs } from "@/components/Common/Services/data/faqs";
import Metrics from "@/components/Metrics";
import { WebMetricData } from "@/components/Metrics/Metrics";
import ContactBanner from "@/components/ContactBanner/ContactBanner";
import { webTechPoints } from "@/components/Common/Services/data/techPoints";

const NextJS = () => {
  return (
    <>
      <ServiceSectionOne
        heading="NEXT JS DEVELOPMENT SERVICES"
        title="Deliver web solutions with a team CTOs praise"
        description="Complete the project on time with a web development team that mastered technologies
      like React, Python, Node.js, TypeScript, and AWS. Kickoff work on your web app in just 2-4 weeks"
        actionButton
        actionPath="/contact"
      />
      <ServiceSectionTwo
        headingFirstWord="Keep"
        headingHighlight="projects moving"
        headingWords="even when the core team is busy"
        techPoints={webTechPoints}
      />
      <ServiceSectionThree
        sectionOne={{
          imageUrl: "/images/services/web-dev.webp",
          heading: "Stay focused as our self-managed team delivers the project",
          description:
            "Build a new app, refactor, or rearchitect the product for\n" +
            "scalability. Your web development team will include\n" +
            "mid/senior developers, a PM, and backup talent often rated\n" +
            "5 ★ for quality and speed.",
        }}
        sectionTwo={{
          sectionNow: {
            text: "You have a highly skilled team that handles a heavy workload. A new project comes up, requiring the latest technologies and extra talent. Giving your developers new work can create multiple delays and increase technical debt.",
            text1:
              "Your company also needs more expertise in specific technologies.",
          },
          sectionSoon: [
            {
              text: "You partner with a self-managed web development team that takes full responsibility for the project’s delivery.",
            },
            {
              text: "They consult your business requirements to find a best-fit solution and deliver it exactly as promised in the project roadmap.",
            },
            {
              text: "Your in-house software development team works uninterrupted.",
            },
          ],
        }}
        sectionThree={{
          sectionTop: [
            {
              title: "Guarantee the project’s delivery",
              text: "Rely on a web development team experienced in building web apps, Progressive Web Apps, APIs, content management systems, or cloud apps for millions of end users.",
            },
            {
              title: "Find everyone needed",
              text: "You decide what the setup is for your web development project. Your team can include full-stack developers, designers, PMs, QA engineers, DevOps, or Business Analysts.",
            },
            {
              title: "Control the team’s involvement",
              text: "Upscale or downscale the team and swap members as needed on a monthly basis.",
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
        heading="End-to-end web development support"
        description="Note that one developer can specialize in many technologies"
        imagePath="/images/services/web-dev.webp"
        endToEndServices={endToEndWebServices}
      />
      <Metrics
        metricTitle="The team you need is here"
        metrics={WebMetricData}
      />
      <ContactBanner
        mainText="They deliver great quality."
        shortText="As said by Overview CTO in a ★ 5 review. Let’s discuss your web development project."
        contactText="Get in Touch"
        contactUrl="/contact"
      />
      <FaqSection faqs={webFaqs} />
    </>
  );
};

export default NextJS;
