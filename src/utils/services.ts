import { CompanyService, CompanyTechnologies } from "@/types/services";

export const companyServices: CompanyService[] = [
  {
    name: "Specialists On Demand",
    url: "/services/specialists-on-demand",
    subServices: [
      {
        name: "Team Augmentation",
        url: "/services/specialists-on-demand/consultation",
      },
      {
        name: "Dedicated Product Teams",
        url: "/services/specialists-on-demand/project-management",
      },
    ],
  },
  {
    name: "Efficient Development",
    url: "software-development-services",
    subServices: [
      {
        name: "Web Development",
        url: "web-development",
      },
      {
        name: "Mobile Development",
        url: "mobile-development",
      },
      {
        name: "Cloud Engineering",
        url: "cloud-engineering",
      },
      {
        name: "Data Engineering",
        url: "data-engineering",
      },
      {
        name: "Modern Frontend",
        url: "web-development",
      },
      {
        name: "App Modernization",
        url: "web-development",
      },
    ],
  },
  {
    name: "Acceleration Sprints™",
    url: "/services/acceleration-sprints",
    subServices: [
      {
        name: "AWS Cost Cut",
        url: "/services/acceleration-sprints/rapid-prototyping",
      },
      {
        name: "GenAI Rapid Prototyping",
        url: "/services/acceleration-sprints/feedback-loops",
      },
      {
        name: "React Performance",
        url: "/services/acceleration-sprints/feedback-loops",
      },
    ],
  },
];

export const companyTechnologies: CompanyTechnologies[] = [
  {
    name: "Web Development",
    url: "/web-development",
    technologies: [
      {
        name: "React",
        url: "/web-development/react",
      },
      {
        name: "NextJS",
        url: "/web-development/nextjs",
      },
      {
        name: "Python",
        url: "/web-development/python",
      },
      {
        name: "NodeJS",
        url: "/web-development/nodejs",
      },
      {
        name: "JavaScript",
        url: "/web-development/javascript",
      },
      {
        name: "TypeScript",
        url: "/web-development/typescript",
      },
    ],
  },
  {
    name: "Cloud & DevOps",
    url: "/cloud-engineering",
    technologies: [
      {
        name: "React",
        url: "/react",
      },
      {
        name: "AWS",
        url: "/aws",
      },
      {
        name: "Serverless",
        url: "/serverless",
      },
      {
        name: "Microservices",
        url: "/microservices",
      },
    ],
  },
  {
    name: "Mobile Development",
    url: "/mobile-development",
    technologies: [
      {
        name: "React Native",
        url: "/react-native",
      },
      {
        name: "Ionic",
        url: "/ionic",
      },
      {
        name: "Android",
        url: "/android",
      },
    ],
  },
];
