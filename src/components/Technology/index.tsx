"use client"
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import technologiesData from "./technologiesData";
import { Feature } from '@/types/feature'
import SingleTechnology from "./singleTechnology";



const TechnologyProficiency = () => {
  const [activeTab, setActiveTab] = useState('Front End')
  const [activeTechnologies, setActiveTechnologies] = useState<Feature[]>([])


  const handleActiveTechnology = (technology) => {
    setActiveTab(technology)
    const technologies = technologiesData[technology]
    setActiveTechnologies(technologies);
  }

  useEffect(() => {
    handleActiveTechnology(activeTab)
  }, [activeTab])


  return (
      <section id="technologies" className="bg-white py-20 md:py-18 lg:py-18 justify-center">
        <div className="container">
          <SectionTitle
            title="Technology Proficiency"
            paragraph="Leverage the expertise of a dependable software development team. We utilize various tech stacks and leverage frameworks like React, Next, Python and much more. The developers in our team are well-versed in choosing the right CMS, database, and server to help you achieve remarkable results."
            center
            mb='40px'
            width="1500px"
          />
        </div>
        <div className="container my-16">
          <ul className="flex list-none justify-evenly text-lg items-center text-2xl border-b-[4px] border-gray-200 dark:border-white-300">
            {Object.keys(technologiesData).map((technologyName, index) => <span key={`${index}-container`} className={`py-2 ${technologyName === activeTab ? 'border-b-[2px] border-primary' : ''} hover:border-b-[2px] hover:border-primary`}>
                <li key={index} className={`cursor-pointer hover:text-primary ${technologyName === activeTab ? 'text-primary' : ''}`} onClick={() => {setActiveTab(technologyName)}}>{technologyName}</li> 
              </span>
            )}
          </ul>
          <ul className="flex list-none justify-evenly text-base items-center my-2">
          {activeTechnologies.map(technology => <SingleTechnology key={technology.id} technology={technology} />)}
          </ul>
        </div>
      </section>
  );
};

export default TechnologyProficiency;
