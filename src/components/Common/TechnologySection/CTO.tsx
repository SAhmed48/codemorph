import React from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
}

const features = [
  {
    icon: "🌐",
    title: "Micro frontends with React",
    description:
      "Keep development flexible by building apps feature by feature with independent React components.",
  },
  {
    icon: "⚡",
    title: "Performance",
    description:
      "React services are optimized for fast component loading at a scale - Facebook uses it.",
  },
  {
    icon: "🔄",
    title: "SEO-optimized",
    description:
      "Reach higher page indexing speed by using Next.js for server-side rendering.",
  },
  {
    icon: "🔁",
    title: "Reusable components",
    description:
      "Reduce project deployment time thanks to a design   components across applications.",
  },
  {
    icon: "🛠",
    title: "Higher quality, cheaper maintenance",
    description:
      "Ensure your web application is easy to maintain with a top dev kit and unit/integration testing libraries.",
  },
  {
    icon: "👥",
    title: "A supportive community",
    description:
      "Tap into knowledge and libraries from +43,000 loyal React developers",
  },
];

const CTOs: React.FC<FeatureSectionProps> = ({ title }) => {
  return (
    <div className="flex max-w-full mx-auto py-20 px-4 justify-center gap-20">
      <div className="flex max-w-sm">
        <h2 className="text-4xl font-normal text-gray-900 mb-10 text-left">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-80 h-[68] bg-[#f0fafe] p-6 rounded-3xl shadow-sm flex flex-col gap-6"
          >
            <div className="text-blue-600 text-3xl">{feature.icon}</div>
            <h3 className="font-bold text-lg mt-2">{feature.title}</h3>
            <p className="text-black mt-1 font-light">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CTOs;
