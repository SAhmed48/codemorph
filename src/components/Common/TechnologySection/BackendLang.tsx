import React from "react";
import { SubService } from "@/types/services";

interface BackendTechnologiesProps {
  techs: SubService[];
  title: string;
}

const BackendTechnologies: React.FC<BackendTechnologiesProps> = ({
  title,
  techs,
}) => {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-normal text-gray-900 mb-10 mt-6">{title}</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-16">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 flex items-center justify-between w-96 shadow-sm hover:shadow-md transition-all"
          >
            <span className="text-lg font-semibold text-gray-900">
              {tech.name}
            </span>
            <img src={tech.url} alt={tech.name} width={25} height={25} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BackendTechnologies;
