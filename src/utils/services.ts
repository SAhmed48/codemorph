import { CompanyService } from "@/types/services";

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
    url: "/services/efficient-development",
    subServices: [
      {
        name: "Web Development",
        url: "/services/efficient-development/agile",
      },
      {
        name: "Mobile Development",
        url: "/services/efficient-development/quality-assurance",
      },
      {
        name: "Cloud Engineering",
        url: "/services/efficient-development/quality-assurance",
      },
      {
        name: "Data Engineering",
        url: "/services/efficient-development/quality-assurance",
      },
      {
        name: "Modern Frontend",
        url: "/services/efficient-development/quality-assurance",
      },
      {
        name: "App Modernization",
        url: "/services/efficient-development/quality-assurance",
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
