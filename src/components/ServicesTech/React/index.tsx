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
import BackendTechnologies from "@/components/Common/TechnologySection/BackendLang";
import TeamSection from "@/components/Common/TechnologySection/BuildTech";
import { ReactFeature } from "@/components/Common/Services/data/techFeature";
import { ReactTeam } from "@/components/Common/Services/data/developTeam";
import { ReactCTO } from "@/components/Common/Services/data/ctoBuild";

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
        title="Enterprise"
        title1="Solutions"
        title2="Peek Performance"
        title3="Code Quality"
        description="Access only experienced React.js developers with a track record in large-scale web development. Quality standards defined by +200 projects."
        imageSrc="/reactabout.jpg"
      />

      {/* Features */}
      <FeatureGrid features={ReactFeature} />

      {/* Services */}

      <ServicesSection
        title="Where and when do React js development services excel?"
        descriptions={descriptions}
      />

      {/* Build Tech */}

      <TeamSection team={ReactTeam} />
      {/* Testimonials */}
      <TestimonialSection
        title="The Software House is one of the most-highly recommended web development companies in the world"
        subtitle="According to Clutch.co research"
        rating={4.9}
        totalReviews={120}
      />

      {/* CTO */}

      <CTOs
        title="Why CTOs build their React.js teams with us"
        CTO={ReactCTO}
      />

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

      {/* Backend Development */}

      <BackendTechnologies title="Do you also need backend development?" />
    </div>
  );
};

export default ReactServices;
