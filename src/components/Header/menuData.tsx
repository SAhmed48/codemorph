import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Our Work",
    path: "/portfolio",
    newTab: false,
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    nestedSubMenu: {
      "Efficient Development": [
        {
          id: 41,
          title: "Web Development",
          path: "/web-development",
          newTab: false,
        },
        {
          id: 42,
          title: "Mobile Development",
          path: "/mobile-development",
          newTab: false,
        },
        {
          id: 43,
          title: "Cloud Engineering",
          path: "/cloud-engineering",
          newTab: false,
        },
        {
          id: 44,
          title: "Data Engineering",
          path: "/data-engineering",
          newTab: false,
        },
        {
          id: 45,
          title: "DevOps",
          path: "/dev-ops",
          newTab: false,
        },
      ],
      "Specialist on Demand": [
        {
          id: 46,
          title: "Team Augmentation",
          path: "/team-augmentation",
          newTab: false,
        },
      ],
    },
  },
  {
    id: 3,
    title: "Technologies",
    newTab: false,
    nestedSubMenu: {
      "Web Development": [
        {
          id: 47,
          title: "React",
          path: "/react",
          newTab: false,
        },
        {
          id: 48,
          title: "NextJS",
          path: "/nextjs",
          newTab: false,
        },
        {
          id: 49,
          title: "Node",
          path: "/nodejs",
          newTab: false,
        },
        {
          id: 50,
          title: "TypeScript",
          path: "/typescript",
          newTab: false,
        },
        {
          id: 51,
          title: "Python",
          path: "/python",
          newTab: false,
        },
        {
          id: 52,
          title: "Python/Django",
          path: "/django",
          newTab: false,
        },
        {
          id: 53,
          title: "FastAPI",
          path: "/fast-api",
          newTab: false,
        },
      ],
      "Cloud & DevOps": [
        {
          id: 54,
          title: "AWS",
          path: "/aws",
          newTab: false,
        },
        {
          id: 55,
          title: "Serverless",
          path: "/serverless",
          newTab: false,
        },
        {
          id: 56,
          title: "Microservices",
          path: "/microservices",
          newTab: false,
        },
      ],
    },
  },
  // {
  //   id: 3,
  //   title: "Industries",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "About Page",
  //       path: "/about",
  //       newTab: false,
  //     },
  //     {
  //       id: 42,
  //       title: "Contact Page",
  //       path: "/contact",
  //       newTab: false,
  //     },
  //   ],
  // },
  {
    id: 4,
    title: "Company",
    newTab: false,
    submenu: [
      {
        id: 57,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 58,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Content Hub",
    path: "/blog",
    newTab: false,
  },
];
export default menuData;
