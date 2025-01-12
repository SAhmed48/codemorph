import { notFound } from "next/navigation";
import WebDevelopment from "@/components/Services/WebDevelopment";

const ServicePage = ({ params }) => {
  const { service } = params;

  switch (service) {
    case "web-development":
      return <WebDevelopment />;
    case "mobile-development":
      return <>Mobile Development</>;
    default:
      notFound(); // Redirect to 404 page
  }
};

export async function generateStaticParams() {
  return [{ service: "web-development" }, { service: "mobile-development" }];
}

export default ServicePage;
