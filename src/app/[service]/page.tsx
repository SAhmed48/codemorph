import { notFound } from "next/navigation";
import WebDevelopment from "@/components/Services/WebDevelopment";
import MobileDevelopment from "@/components/Services/MobileDevelopment";
import CloudDevelopment from "@/components/Services/CloudDevelopment";
import DataEngineering from "@/components/Services/DataEngineering";

const ServicePage = ({ params }) => {
  const { service } = params;

  switch (service) {
    case "web-development":
      return <WebDevelopment />;
    case "mobile-development":
      return <MobileDevelopment />;
    case "cloud-engineering":
      return <CloudDevelopment />;
    case "data-engineering":
      return <DataEngineering />;
    default:
      notFound();
  }
};

export async function generateStaticParams() {
  return [
    { service: "web-development" },
    { service: "mobile-development" },
    { service: "cloud-development" },
    { service: "data-engineering" },
  ];
}

export default ServicePage;
