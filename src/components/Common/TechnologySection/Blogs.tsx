import React from "react";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  link: string;
  image?: string;
}

interface BlogSectionProps {
  title: string;
  subtitle: string;
}

const blogPosts = [
  {
    id: 1,
    title:
      "Adding cross-platform React/React Native chat to existing application – case study",
    image: "/react.PNG",
    link: "/blog/react-native-chat",
  },
  {
    id: 2,
    title: "React state management: React Hooks vs Redux",
    image: "/react1.PNG",
    link: "/blog/react-hooks-redux",
  },
  {
    id: 3,
    title: "Code splitting with React & Webpack: advanced app optimization",
    image: "/react3.PNG",
    link: "/blog/code-splitting",
  },
];

const BlogSection: React.FC<BlogSectionProps> = ({
  title,
  subtitle,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 mt-12">
      {/* Title */}
      <div className="text-center mb-10">
        <p className="text-sm text-gray-500 uppercase">{subtitle}</p>
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      </div>

      {/* Blog Cards */}
      <div className="flex flex-wrap justify-center gap-6 mt-20">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden h-[500px] w-[350px] flex flex-col"
          >
            <div className="relative w-full h-64 bg-gray-200 flex justify-center items-center">
              {post.image ? (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-105"
                />
              ) : (
                <span className="text-gray-400">No Image</span>
              )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {post.title}
              </h3>
              <div className="mt-auto">
                <Link
                  href={post.link}
                  className="text-[#1926e8] font-medium flex items-center mt-4 text-lg"
                >
                  Read article <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
