import React from "react";
import Link from "next/link";
import { BlogSectionProps } from "@/types/blog";

interface BlogingsProps {
  blogs: BlogSectionProps[];
  subtitle: string;
  title: string;
}

const BlogSection: React.FC<BlogingsProps> = ({ blogs, subtitle, title }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 mt-12">
      {/* Title */}
      <div className="text-center mb-10">
        <p className="text-sm text-gray-500 uppercase">{subtitle}</p>
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      </div>

      {/* Blog Cards */}
      <div className="flex flex-wrap justify-center gap-6 mt-20">
        {blogs.map((post, index) => (
          <div className="bg-white shadow-lg rounded-xl overflow-hidden h-[500px] w-[350px] flex flex-col">
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
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