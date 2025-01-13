import { companyServices } from "@/utils/services";

const CompanyService = () => {
  return (
    <div className="flex flex-wrap justify-between">
      <hr className="w-full border-0 mb-6 h-0.5 bg-[radial-gradient(circle_at_top_left,#ffc269,#8dd4ff,#b4b4ff,#8dd4ff)]" />
      {companyServices.map((service) => (
        <div key={service.name} className="w-full md:w-1/3 p-4">
          <h2 className="text-lg font-bold text-[#f7f9fa] mb-3">
            {service.name}
          </h2>
          <ul className="text-[#f7f9fa]">
            {service.subServices.map((subService) => (
              <li
                className="py-2 text-[#f7f9fa] font-light"
                key={subService.name}
              >
                <a href={subService.url} className="hover:text-[#b5b4ff]">
                  {subService.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CompanyService;
