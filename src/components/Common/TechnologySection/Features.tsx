"use client";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {}

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
const FeatureGrid: React.FC<FeatureGridProps> = ({ }) => {
  return (
    <div className="max-w-6xl mx-auto p-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
      {features.map((feature, index) => (
        <div
          key={index}
          className="relative p-6 transition-all duration-300 ease-in-out hover:bg-slate-200 rounded-lg group"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-lg" />
          <div className="relative z-10">
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="text-black mt-3 text-lg leading-loose">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
