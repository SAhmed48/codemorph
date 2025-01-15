import React from "react";
import CompanyService from "@/components/CompanyService";
import CompanyTechnology from "@/components/CompanyService/technologies";

const MegaMenu = ({ megaMenuTitle }) => {
  return (
    <div className="absolute top-0 translate-x-[-42%] translate-y-[4%] left-2/4 transition group-hover:translate-y-8 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 lg:min-w-[600] xl:min-w-[800px] transform">
      <div className="relative top-6 p-6 bg-gray-700 rounded-xl shadow-xl w-full">
        <div className="w-10 h-10 transform bg-gray-700 rotate-45 absolute top-0 z-0 translate-x-0 transition-transform lg:group-hover:translate-x-[12rem] xl:group-hover:translate-x-[18rem] duration-500 ease-in-out rounded-sm"></div>
        <div className="relative z-10">
          {megaMenuTitle === "Services" && <CompanyService />}
          {megaMenuTitle === "Technologies" && <CompanyTechnology />}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
