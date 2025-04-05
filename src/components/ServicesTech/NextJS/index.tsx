"use client";
import React from "react";
import HeroSection from "@/components/Common/TechnologySection/HeaderSection";
import Entity from "@/components/Common/TechnologySection/Entity";
import FeatureGrid from "@/components/Common/TechnologySection/Features";
import ServicesSection from "@/components/Common/TechnologySection/TechService";
import TestimonialSection from "@/components/Common/TechnologySection/Testimonials";
import type { textParts } from "@/components/Common/TechnologySection/Testimonials";
import CTOs from "@/components/Common/TechnologySection/CTO";
import Modern from "@/components/Common/TechnologySection/ModernTect";
import CallToAction from "@/components/Common/TechnologySection/Developers";
import BlogSection from "@/components/Common/TechnologySection/Blogs";
import BackendTechnologies from "@/components/Common/TechnologySection/BackendLang";
import TeamSection from "@/components/Common/TechnologySection/BuildTech";
import { NextJsFeature } from "@/components/Common/Services/data/techFeature";
import { NextTeam } from "@/components/Common/Services/data/developTeam";
import { NextJsCTO } from "@/components/Common/Services/data/ctoBuild";
import { NextJsBlogs } from "@/components/Common/Services/data/blogs";
import { NextTech } from "@/components/Common/Services/data/LangTech";

const descriptions = {
  "Interactive web applications": `When companies want to create web applications that offer lots of interactions to the end-user, React js development services and the environment they provide is often their first choice.\n\nThis frontend framework solves many challenges related to developing efficient web apps of this kind. It does so by introducing the virtual DOM, which updates the real DOM in a smart and efficient way. Thanks to this, even complex web applications can offer great interactivity without sacrificing performance.`,
};

const textParts: textParts[] = [
  {
    text: "We made Next.js one of our priorities due",
    highlight: false,
  },
  {
    text: "to our commitment to Node.js, React",
    highlight: false,
  },
  {
    text: "and JavaScript.  Ever since, it has become a",
    highlight: false,
  },
  {
    text: "mainstay in our projects.",
    highlight: false,
  },
];

const NextJS = () => {
  return (
    <div className="bg-white text-gray-900 font-['Inter']">
      {/* Header */}
      <HeroSection
        title="Next.js development"
        titleBr="services"
        titleHr="recommended by"
        titleLast="98% of CTOs"
        description="Next.js is a framework that extends the capabilities of our favorite technologies – Node.js and React. You can use it alongside other tools, such as Express or GraphQL, to make your apps even more powerful and user-friendly."
        primaryButtonText="Describe the Project"
      />

      {/* Entity */}
      <Entity
        subtitle="Next.js development means:"
        title="Improved UX."
        title1="Enhanced SEO."
        title2="Peek performance."
        title3=""
        description="Next.js's primary feature is server-side rendering – the ability to render the JavaScript code entirely on the server and provide the user and bots with easy-to-read HTML. SSR and other Next.js features provide tons of benefits for your project. What kind of benefits exactly?"
        imageSrc="/Next.jpg"
      />

      {/* Features */}
      <FeatureGrid features={NextJsFeature} />

      {/* Services */}

      <ServicesSection
        title="What can you use Next.js development services for?"
        descriptions={descriptions}
      />

      {/* Build Tech */}

      <TeamSection team={NextTeam} imageUrl="/NextTeam.jpg"/>
      {/* Testimonials */}
      <TestimonialSection
        textParts={textParts}
        subtitle="According to Clutch.co research"
        rating={4.9}
        totalReviews={120}
      />

      {/* CTO */}

      <CTOs
        title="Why should Tech Managers choose Next.js development services from The Software House?"
        CTO={NextJsCTO}
      />

      {/* Modern Tech */}

      <Modern
        title="Learn from top experts like Tim Neutkens, Head of Next.js at Vercel"
        highlight=""
        description="The State of Frontend 2020 is TSH's research of trends and best practices in frontend development. It features data from 4,500 developers and experts from all over the world."
        additionalText="Tim Neutkens, lead developer of the project that led to the release of Next.js, talks about the latest Next.js trends, including the popularity of Jamstack."
        image="/NewProject.jpg"
      />

      {/* Client Testimonials */}

      <CallToAction
        title="Work with top-rated Next.js teams"
        description="Get a dedicated team or let us build your product from scratch"
        buttonText="Book Free Consultation"
        onButtonClick={() => console.log("Book Free Consultation")}
      />

      {/* Blogs */}

      <BlogSection
        title="Next.js trends & best practices"
        subtitle="Engineering blog"
        blogs={NextJsBlogs}
      />

      {/* Call to Action */}

      <CallToAction
        title="Do you also need backend development?"
        description="We can help you with Node.js, Symfony, Laravel and more"
        buttonText="Explore backend services"
        onButtonClick={() => console.log("Explore backend services")}
      />

      {/* Backend Development */}

      <BackendTechnologies
        title="What kind of Next.js-related technologies do you need?"
        techs={NextTech}
      />
    </div>
  );
};

export default NextJS;
