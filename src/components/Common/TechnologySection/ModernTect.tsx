import React from "react";

interface FeatureProps {
  title: string;
  description: string;
  highlight: string;
  additionalText: string;
  image?: string;
}

const Modern: React.FC<FeatureProps> = ({
  title,
  description,
  highlight,
  additionalText,
  image,
}) => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 flex flex-col md:flex-row items-center">
      {/* Left Side - Image Centered */}
      {image && (
        <div className="flex-1 flex justify-center">
          <img src={image} alt="Illustration" className="w-3/4 h-auto" />
        </div>
      )}

      {/* Right Side - Text Content */}
      <div className="flex-1 text-justify flex-col gap-4">
        <h2 className="text-4xl font-normal text-gray-900 mb-4">{title}</h2>
        <p className="text-black mb-4">
          {description} <strong className="font-bold">{highlight}</strong>
        </p>
        <p className="text-gray-900 font-bold">{additionalText}</p>
      </div>
    </div>
  );
};

export default Modern;
