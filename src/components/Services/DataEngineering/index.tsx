import ServiceSectionOne from "src/components/Common/Services/SectionOne";
import Metrics from "@/components/Metrics";
import { WebMetricData } from "@/components/Metrics/Metrics";
import ContactBanner from "@/components/ContactBanner/ContactBanner";
import DeSectionTwo from "@/components/Services/DataEngineering/DeSectionTwo";
import DeSectionThree from "@/components/Services/DataEngineering/DeSectionThree";
const DataEngineering = () => {
  return (
    <>
      <ServiceSectionOne
        heading="DATA ENGINEERING SERVICES"
        title="Dig up strategic insights even from millions of data points"
        description="Give your stakeholders the facts they need. Set up an AWS system that catches data from your databases, API, Excels, or SaaS tools in real-time. We’ve already helped European banks or e-commerce platforms, delivering 160+ projects to date."
        actionButton
        actionPath="/contact"
      />
      <DeSectionTwo />
      <DeSectionThree />
      <Metrics
        metricTitle="The team you need is here"
        metrics={WebMetricData}
      />
      <ContactBanner
        mainText="Know how to deliver qualified & readable data."
        shortText="
        “Each person we dealt with was extremely smart and skilled.”
        Said by an engineer of a US energy company in a ★5 review. Give your data a job with us.
        "
        contactText="Get in Touch"
        contactUrl="/contact"
      />
    </>
  );
};

export default DataEngineering;
