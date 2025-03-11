import NextJS from "@/components/ServicesTech/NextJS";
import ReactJS from "@/components/ServicesTech/React";
import Node from "@/components/ServicesTech/NodeJS";
import React from "react";
import TypeScript from "@/components/ServicesTech/Typescript";

export default function TechnologyPage({ params }) {
  const { technology } = params;
  switch (technology) {
    case "react":
      return <ReactJS />;
    case "nextjs":
      return <NextJS />;
    case "nodejs":
      return <Node />;
    case "typescript":
      return <TypeScript />;
    default:
      break;
  }
}

export async function generateStaticParams() {
  return [
    { technology: "react" }, // technology must be a string
    { technology: "nextjs" },
    { technology: "nodejs" },
  ];
}
