"use client";
import React from "react";
import HeroSection from "@/components/Common/TechnologySection/HeaderSection";
import Entity from "@/components/Common/TechnologySection/Entity";
import FeatureGrid from "@/components/Common/TechnologySection/Features";
import ServicesSection from "@/components/Common/TechnologySection/TechService";
import type { textParts } from "@/components/Common/TechnologySection/Testimonials";
import CTOs from "@/components/Common/TechnologySection/CTO";
import Modern from "@/components/Common/TechnologySection/ModernTect";
import CallToAction from "@/components/Common/TechnologySection/Developers";
import BlogSection from "@/components/Common/TechnologySection/Blogs";
import BackendTechnologies from "@/components/Common/TechnologySection/BackendLang";
import TeamSection from "@/components/Common/TechnologySection/BuildTech";
import { NodeTeam } from "@/components/Common/Services/data/developTeam";
import { NodeFeature } from "@/components/Common/Services/data/techFeature";
import { NodeCTO } from "@/components/Common/Services/data/ctoBuild";
import { NodeBlogs } from "@/components/Common/Services/data/blogs";
import { NodeTech } from "@/components/Common/Services/data/LangTech";
import TestimonialSection from "@/components/Common/TechnologySection/Testimonials";

const descriptions = {
  "Interactive web applications": `When companies want to create web applications that offer lots of interactions to the end-user, React js development services and the environment they provide is often their first choice.\n\nThis frontend framework solves many challenges related to developing efficient web apps of this kind. It does so by introducing the virtual DOM, which updates the real DOM in a smart and efficient way. Thanks to this, even complex web applications can offer great interactivity without sacrificing performance.`,
};

const content: textParts[] = [
  {
    text: "The Software House has been recognized",
    highlight: false,
  },
  {
    text: " as one of the leading Node.js development",
    highlight: false,
  },
  {
    text: "agencies in the world",
    highlight: true,
  },
];

const TypeScript = () => {
  return (
    <div className="bg-white text-gray-900 font-['Inter']">
      {/* Header */}
      <HeroSection
        title="TypeScript"
        titleBr="development"
        titleHr="services trusted by"
        titleLast="98% of CTOs"
        description="Poland’s biggest team of Node.js developers with a 4.9 Clutch score. Ready to build or rescale your project with Node.js, TypeScript, GraphQL & AWS."
        primaryButtonText="Describe the Project"
      />

      {/* Entity */}
      <Entity
        subtitle="Node.js development means:"
        title="Scalabilty."
        title1="Peak performance."
        title2="Optimized costs."
        title3=""
        description="Get that cloud project done with Node js development company which follows fail-safe development Node.js development standards shaped by +200 builds."
        imageSrc="/NodeTech.jpeg"
      />

      {/* Features */}
      <FeatureGrid features={NodeFeature} />

      {/* Services */}

      <ServicesSection
        title="What can you build with Node js?"
        descriptions={descriptions}
      />

      {/* Build Tech */}

      <TeamSection team={NodeTeam} imageUrl="/NodeTeam.png" />
      {/* Testimonials */}
      <TestimonialSection
        textParts={content}
        subtitle="According to Clutch.co research"
        rating={4.9}
        totalReviews={120}
      />

      {/* CTO */}

      <CTOs
        title="Why Tech Managers build their Node.js software development teams with us?"
        CTO={NodeCTO}
      />

      {/* Modern Tech */}

      <Modern
        title={`Save weeks of Node.js development  with our RAD Modules`}
        highlight=""
        description="With reusable components our development teams save hundreds of hours on setting up the most common features in node.js applications."
        additionalText="For now, you can take advantage of components, such as Node Boilerplate, Security & ACL Systems, Mailer Integrations, Task Schedulers, Notifications, PDF Generator, etc."
        image="/Node.png"
      />

      {/* Client Testimonials */}

      <CallToAction
        title="Work with leading Node.js developers"
        description="Get a dedicated team or let us build your product from scratch"
        buttonText="Book Free Consultation"
        onButtonClick={() => console.log("Book Free Consultation")}
      />

      {/* Blogs */}

      <BlogSection
        title="Node.js trends & best practices"
        subtitle="Engineering blog"
        blogs={NodeBlogs}
      />

      {/* Call to Action */}

      <CallToAction
        title="Drop us a line"
        description="Build or extend your Node.js team"
        buttonText="Book Free Consultation"
        onButtonClick={() => console.log("Explore backend services")}
      />

      {/* Backend Development */}

      <BackendTechnologies
        title="Do you also need frontend development?"
        techs={NodeTech}
      />
    </div>
  );
};

export default TypeScript;
