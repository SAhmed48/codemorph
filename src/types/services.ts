import React from "react";

export type EndService = {
  serviceName: React.ReactNode;
  serviceTech: React.ReactNode;
};

export type ServiceSection = {
  heading: string;
  description: string;
  imagePath: string;
  endToEndServices: EndService[];
};

export type SubService = {
  name: string;
  url: string;
};

export type CompanyService = {
  name: string;
  url: string;
  subServices: SubService[];
};

export type CompanyTechnologies = {
  name: string;
  url: string;
  technologies: SubService[];
};
