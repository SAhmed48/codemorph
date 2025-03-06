import NextJS from "@/components/ServicesTech/NextJS";
import Python from "@/components/ServicesTech/Python";
import ReactJS from "@/components/ServicesTech/React";
import React from "react";

export default function TechnologyPage({ params }) {
  const { technology } = params;
  switch (technology) {
    case "react":
      return <ReactJS />;
    case "nextjs":
      return <NextJS />;
    case "python":
      return <Python />;
    default:
      break;
  }
}

export async function generateStaticParams() {
  return [
    { technology: "react" }, // technology must be a string
    { technology: "nextjs" },
    { technology: "python" },
  ];
}
