import ServiceSectionOne from "src/components/Common/Services/SectionOne";
import ServiceSectionTwo from "@/components/Common/Services/SectionTwo";
import ServiceSectionThree from "@/components/Common/Services/SectionThree";
import ServiceSectionFour from "@/components/Common/Services/SectionFour";
import { endToEndMobileServices } from "@/components/Common/Services/data/services";
import FaqSection from "@/components/Faq";
import { mobileFaqs } from "@/components/Common/Services/data/faqs";
import Metrics from "@/components/Metrics";
import { WebMetricData } from "@/components/Metrics/Metrics";
import ContactBanner from "@/components/ContactBanner/ContactBanner";
import { MobileTechPoints } from "@/components/Common/Services/data/techPoints";
const MobileDevelopment = () => {
  return (
    <>
      <ServiceSectionOne
        heading="MOBILE APP DEVELOPMENT SERVICES"
        title="Release 1 React Native app for Android/iOS months faster"
        description="In just 2-4 weeks, you could partner with a mobile development team that built and published React Native apps that received thousands of positive scores."
        actionButton
        actionPath="/contact"
      />
      <ServiceSectionTwo
        headingFirstWord="Native"
        headingHighlight="Android and iOS "
        headingWords="apps double the work"
        techPoints={MobileTechPoints}
      />
      <ServiceSectionThree
        sectionOne={{
          imageUrl: "/images/services/mobile-dev.webp",
          heading: "Be sure your mobile project succeeds",
          description:
            "Rely on a mobile development team that actively saves time, secures performance, " +
            "and delivers an experience users appreciate. Expect dozens of positive app reviews from your user base.\n" +
            "\n",
        }}
        sectionTwo={{
          sectionNow: {
            text: "Your IT needs to release a mobile app for Android and iOS, but the core team has enough work to do with the main product.",
            text1:
              "They’d need the extra time and technical expertise in native mobile technologies to deliver one soon enough, and managing two separate mobile applications would also be an unwanted burden.",
          },
          sectionSoon: [
            {
              text: "Your new mobile team starts work in just 2-4 weeks. They suggest building a cross-platform mobile app in React Native.",
            },
            {
              text: "The app development roadmap predicts a faster release by months.",
            },
            {
              text: "The team delivers a product with a native-like user experience and publishes it to Google Play and Apple Stores for you.",
            },
          ],
        }}
        sectionThree={{
          sectionTop: [
            {
              title: "One app for Android and iOS",
              text: "Widen your market reach and provide excellent UX for users of both platforms with a single code base that even one mobile app developer could handle.",
            },
            {
              title: "Faster release time",
              text: "Deliver a React Native mobile app in half the time it would take to create two native apps with comparable functions.",
            },
            {
              title: "Simplified product maintenance",
              text: "You’d need just one person or one mobile development team to manage the mobile app post-launch, making future work cost-effective.",
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
        heading="Full support in mobile development"
        description=""
        imagePath="/images/services/web-dev.webp"
        endToEndServices={endToEndMobileServices}
      />
      <Metrics
        metricTitle="The team you need is here"
        metrics={WebMetricData}
      />
      <ContactBanner
        mainText="Publish your mobile app 70% faster"
        shortText="Should you build with native technology or React Native? Consult your case for free."
        contactText="Get in Touch"
        contactUrl="/contact"
      />
      <FaqSection faqs={mobileFaqs} />
    </>
  );
};

export default MobileDevelopment;
