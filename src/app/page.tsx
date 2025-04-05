import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import TechnologyProficiency from "@/components/Technology";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import Insights from "@/components/Insights";

export const metadata: Metadata = {
  title: "Custom Software Development & IT Services | ",
  description:
    "Partner with Codemorph Technologies, a leading software development company with 22+ years of experience, offering tailored IT services for businesses in the USA.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Brands />
      <Features />
      <TechnologyProficiency />
      {/* <Insights /> */}
      <Video />
      {/* <AboutSectionOne /> */}
      {/*<AboutSectionTwo />*/}
      <Testimonials />
      {/* <Pricing /> */}
      <Blog />
      <Contact />
    </>
  );
}
