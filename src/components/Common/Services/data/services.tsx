import { EndService } from "@/types/services";

export const frontendServices: string[] = [
  "React",
  "NextJS",
  "TypeScript",
  "Vue",
  "Angular",
];

export const backendServices: string[] = [
  "NodeJS",
  "Express",
  "Nest",
  "Python",
  "Django",
  "FastAPI",
  "Laravel",
];

export const cloudServices: string[] = ["AWS", "GCP", "DevOps"];

export const dataServices: string[] = [
  "Data Engineering",
  "ETL Pipelines",
  "Data Modeling",
  "Data Visualization",
  "Data Analytics",
];

export const endToEndWebServices: EndService[] = [
  {
    serviceName: (
      <div className="font-normal">
        <h2 className="text-3xl text-[#8dd4ff]">Frontend</h2>
        <div className="text-[##d5d7d8]">
          <p className="font-light text-lg">
            <span>
              <span style={{ color: "#D5D7D8" }}>26 developers</span>
            </span>
          </p>
        </div>
      </div>
    ),
    serviceTech: (
      <div className="text-white font-light">
        {frontendServices.map((item, index) => (
          <p
            key={`key-service-${index}`}
            className="text-xl flex cursor-pointer justify-between border-b border-gray-600 py-4 text-gray-100 hover:pl-4 hover:text-gray-800 focus:pl-4 focus:text-gray-800 hover:bg-sky-200 focus:bg-sky-200"
          >
            {item}
          </p>
        ))}
      </div>
    ),
  },
  {
    serviceName: (
      <div className="font-normal">
        <h2 className="text-3xl text-[#8dd4ff]">Backend</h2>
        <div className="text-[##d5d7d8]">
          <p className="font-light text-lg">
            <span>
              <span style={{ color: "#D5D7D8" }}>40 developers</span>
            </span>
          </p>
        </div>
      </div>
    ),
    serviceTech: (
      <div className="text-white font-light">
        {backendServices.map((item, index) => (
          <p
            key={`key-service-${index}`}
            className="text-xl flex cursor-pointer justify-between border-b border-gray-600 py-4 text-gray-100 hover:pl-4 hover:text-gray-800 focus:pl-4 focus:text-gray-800 hover:bg-sky-200 focus:bg-sky-200"
          >
            {item}
          </p>
        ))}
      </div>
    ),
  },
  {
    serviceName: (
      <div className="font-normal">
        <h2 className="text-3xl text-[#8dd4ff]">Cloud</h2>
        <div className="text-[##d5d7d8]">
          <p className="font-light text-lg">
            <span>
              <span style={{ color: "#D5D7D8" }}>16 developers</span>
            </span>
          </p>
        </div>
      </div>
    ),
    serviceTech: (
      <div className="text-white font-light">
        {cloudServices.map((item, index) => (
          <p
            key={`key-service-${index}`}
            className="text-xl flex cursor-pointer justify-between border-b border-gray-600 py-4 text-gray-100 hover:pl-4 hover:text-gray-800 focus:pl-4 focus:text-gray-800 hover:bg-sky-200 focus:bg-sky-200"
          >
            {item}
          </p>
        ))}
      </div>
    ),
  },
  {
    serviceName: (
      <div className="font-normal">
        <h2 className="text-3xl text-[#8dd4ff]">Data</h2>
        <div className="text-[##d5d7d8]">
          <p className="font-light text-lg">
            <span>
              <span style={{ color: "#D5D7D8" }}>20 developers</span>
            </span>
          </p>
        </div>
      </div>
    ),
    serviceTech: (
      <div className="text-white font-light">
        {dataServices.map((item, index) => (
          <p
            key={`key-service-${index}`}
            className="text-xl flex cursor-pointer justify-between border-b border-gray-600 py-4 text-gray-100 hover:pl-4 hover:text-gray-800 focus:pl-4 focus:text-gray-800 hover:bg-sky-200 focus:bg-sky-200"
          >
            {item}
          </p>
        ))}
      </div>
    ),
  },
];

export const endToEndMobileServices: EndService[] = [
  {
    serviceName: (
      <div className="font-normal">
        <h2 className="text-3xl text-[#8dd4ff]">
          Android /iOS React Native development
        </h2>
      </div>
    ),
    serviceTech: (
      <div className="text-white font-light">
        <span className="my-4 text-lg">
          Bring in the skillset needed to launch a competitive and practical app
          by design. Your mobile team will take full responsibility for the
          delivery and publishing.
        </span>
        {[
          "Faster development time",
          "High mobile app performance",
          "Maintenance time cut by half",
        ].map((item, index) => (
          <p key={`key-mobile-service-${index}`} className="text-lg my-4">
            -> {item}
          </p>
        ))}
      </div>
    ),
  },
  {
    serviceName: (
      <div className="font-normal">
        <h2 className="text-3xl text-[#8dd4ff]">MVP development</h2>
      </div>
    ),
    serviceTech: (
      <div className="text-white font-light">
                <span className="my-4 text-lg">
          Unsure of the app’s popularity? You can test your assumption with an Android and iOS MVP designed to support your goal at the lowest cost.
        </span>
        {[
          "Introduce app performance monitoring and its management",
          "Quick idea validation at a low risk and cost",
          "Streamlined mobile app development process",
        ].map((item, index) => (
          <p key={`key-mobile-service-${index}`} className="text-lg my-4">
            -> {item}
          </p>
        ))}

      </div>
    ),
  },
      {
    serviceName: (
      <div className="font-normal">
        <h2 className="text-3xl text-[#8dd4ff]">Mobile app modernization</h2>
      </div>
    ),
    serviceTech: (
      <div className="text-white font-light">
       <span className="my-4 text-lg">Rebuild your current mobile app in React Native to slash maintenance costs and make the project incomparably easier to code.</span>
        {[
          "Improved user engagement",
          "Comparable mobile app performance",
          "Single code base",
        ].map((item, index) => (
          <p key={`key-mobile-service-${index}`} className="text-lg my-4">
            -> {item}
          </p>
        ))}

      </div>
    ),
  },
];

export const endToEndCloudServices: EndService[] = [
  {
    serviceName: (
      <div className="font-normal">
        <h2 className="text-3xl text-[#8dd4ff]">
          Cloud re-architecting
        </h2>
      </div>
    ),
    serviceTech: (
      <div className="text-white font-light">
        <span className="my-4 text-lg">
          Prepare your architecture to offer maximum service availability and product performance for a new wave of users.
        </span>
        {[
          "Build faster using hundreds of production-ready services",
          "Auto-scale software based on demand",
          "Use the cloud’s global infrastructure at an affordable price",
        ].map((item, index) => (
          <p key={`key-cloud-service-${index}`} className="text-lg my-4">
            -> {item}
          </p>
        ))}
      </div>
    ),
  },
  {
    serviceName: (
      <div className="font-normal">
        <h2 className="text-3xl text-[#8dd4ff]">Cloud maintenance</h2>
      </div>
    ),
    serviceTech: (
      <div className="text-white font-light">
        <span className="my-4 text-lg">
          Keep your cloud infrastructure stable and operational so your IT can focus on innovation and delivery.
        </span>
        {[
          "Keep cost and resource usage down",
          "Reduce or eliminate production failures",
          "Act immediately when downtime strikes",
        ].map((item, index) => (
          <p key={`key-cloud-service-${index}`} className="text-lg my-4">
            -> {item}
          </p>
        ))}

      </div>
    ),
  },
  {
    serviceName: (
      <div className="font-normal">
        <h2 className="text-3xl text-[#8dd4ff]">Cloud migration</h2>
      </div>
    ),
    serviceTech: (
      <div className="text-white font-light">
       <span className="my-4 text-lg">
         Migrate from on-prem to the cloud while keeping the product live and the data untouched.
       </span>
        {[
          "Enable rapid development",
          "Lower operational effort through automation",
          "Reach beyond on-premise performance limits",
        ].map((item, index) => (
          <p key={`key-cloud-service-${index}`} className="text-lg my-4">
            -> {item}
          </p>
        ))}
      </div>
    ),
  },
  {
    serviceName: (
      <div className="font-normal">
        <h2 className="text-3xl text-[#8dd4ff]">Cloud engineers</h2>
      </div>
    ),
    serviceTech: (
      <div className="text-white font-light">
       <span className="my-4 text-lg">
         Consult your architecture, infrastructure, or service-level cloud challenges with our senior cloud engineers, who’ll help you speed up delivery.
       </span>
        {[
          "Access highly trained cloud engineers in weeks",
          "Get the strategic advice you need to work with the cloud",
          "Scale up or downsize your team on demand",
        ].map((item, index) => (
          <p key={`key-cloud-service-${index}`} className="text-lg my-4">
            -> {item}
          </p>
        ))}
      </div>
    ),
  },
];
