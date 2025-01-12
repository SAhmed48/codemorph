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
