import React from "react";

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section className="bg-[#f0fafe] py-20 px-6 text-center mt-32">
      <h2 className="text-1xl font-medium text-gray-500">{title}</h2>
      <p className="mt-4 text-black text-[40px] tracking-wider max-w-3xl mx-auto leading-snug">
        {description}
      </p>
      <div className="mt-10 flex justify-center">
        <button
          className="bg-[#1926e8] text-white font-medium py-3 px-10 rounded-full shadow-lg hover:bg-blue-950"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
