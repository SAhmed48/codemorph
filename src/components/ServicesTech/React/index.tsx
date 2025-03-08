"use client";
import React from "react";

import HeroSection from "@/components/Common/TechnologySection/HeaderSection";
import Entity from "@/components/Common/TechnologySection/Entity";
import FeatureGrid from "@/components/Common/TechnologySection/Features";
import ServicesSection from "@/components/Common/TechnologySection/TechService";
import TestimonialSection from "@/components/Common/TechnologySection/Testimonials";
import CTOs from "@/components/Common/TechnologySection/CTO";
import Modern from "@/components/Common/TechnologySection/ModernTect";
import CallToAction from "@/components/Common/TechnologySection/Developers";
import BlogSection from "@/components/Common/TechnologySection/Blogs";

const descriptions = {
  "Interactive web applications": `When companies want to create web applications that offer lots of interactions to the end-user, React js development services and the environment they provide is often their first choice.\n\nThis frontend framework solves many challenges related to developing efficient web apps of this kind. It does so by introducing the virtual DOM, which updates the real DOM in a smart and efficient way. Thanks to this, even complex web applications can offer great interactivity without sacrificing performance.`,
};

const ReactServices = () => {
  return (
    <div className="bg-white text-gray-900 font-['Inter']">
      {/* Header */}
      <HeroSection
        description="Build or rescale your project with programming minds rated 4.9 on Clutch. Using React.js, React Native, TypeScript & Next.js."
        primaryButtonText="Describe the Project"
      />

      {/* Entity */}
      <Entity
        subtitle="React software development means:"
        title="Enterprise solutions. Peak performance. Code quality."
        description="Access only experienced React.js developers with a track record in large-scale web development. Quality standards defined by +200 projects."
        imageSrc="/reactabout.jpg"
      />

      {/* Features */}
      <FeatureGrid />

      {/* Services */}

      <ServicesSection
        title="Where and when do React js development services excel?"
        descriptions={descriptions}
      />
      {/* Testimonials */}
      <TestimonialSection
        title="The Software House is one of the most-highly recommended web development companies in the world"
        subtitle="According to Clutch.co research"
        rating={4.9}
        totalReviews={120}
      />

      {/* CTO */}

      <CTOs title="Why CTOs build their React.js teams with us" />

      {/* Modern Tech */}

      <Modern
        title="Modern frontend for any backend"
        highlight=""
        description="Thanks to the  we're API-first approach able to work efficiently with your backend developers, no matter what your core technology is - Node.js, Java, .Net, Python, Ruby or others."
        additionalText="It means you can build a modern frontend without any changes in the core of your app."
        image="/modern.PNG"
      />

      {/* Client Testimonials */}

      <CallToAction
        title="Work with leading React.js developers"
        description="Hire a dedicated team or let us build your product from scratch"
        buttonText="Book Free Consultation"
        onButtonClick={() => console.log("Book Free Consultation")}
      />

      {/* Blogs */}

      <BlogSection
        title="React.js trends & best practices"
        subtitle="Engineering blog"
      />

      {/* Call to Action */}

      <CallToAction
        title="Do you also need backend development?"
        description="We can help you with Node.js, Symfony, Laravel and more"
        buttonText="Explore backend services"
        onButtonClick={() => console.log("Explore backend services")}
      />
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Do you also need backend development?
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {[
            { name: "Node.js", icon: "/nodejs.svg" },
            { name: "Symfony", icon: "/symfony.svg" },
            { name: "Laravel", icon: "/laravel.svg" },
          ].map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 flex items-center justify-between w-96 shadow-sm hover:shadow-md transition-all"
            >
              <span className="text-lg font-semibold text-gray-900">
                {item.name}
              </span>
              {/* <Image src={item.icon} alt={item.name} width={30} height={30} /> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ReactServices;
