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

export const endToEndServices: EndService[] = [
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
