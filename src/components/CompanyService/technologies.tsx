import { companyTechnologies } from "@/utils/services";
import Link from "next/link";

const CompanyTechnology = () => {
  return (
    <div className="flex flex-wrap justify-between">
      <hr className="w-full border-0 mb-6 h-0.5 bg-[radial-gradient(circle_at_top_left,#ffc269,#8dd4ff,#b4b4ff,#8dd4ff)]" />
      {companyTechnologies.map((tech) => (
        <div key={tech.name} className="w-full md:w-1/3 p-4">
          <Link href={tech.url} className="hover:underline">
            <h2 className="text-lg font-bold text-[#f7f9fa] mb-3">
              {tech.name}
            </h2>
          </Link>
          <ul className="text-[#f7f9fa]">
            {tech.technologies.map((subService) => (
              <li
                className="py-2 text-[#f7f9fa] font-light"
                key={subService.name}
              >
                <Link
                  href={subService.url} // This will point to /web-development/react
                  className="hover:text-[#b5b4ff]"
                >
                  {subService.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CompanyTechnology;