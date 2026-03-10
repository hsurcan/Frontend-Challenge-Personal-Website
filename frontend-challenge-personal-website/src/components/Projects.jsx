import React from 'react';
import { useSelector } from 'react-redux';
import data from '../data/data';
import ProjectCards from './ProjectCards';

const Projects = () => {
  const { lang } = useSelector((state) => state.home);
  const { projects } = data[lang];

  return (
    <section className="py-20 bg-white dark:bg-[#252128] transition-colors border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-12 text-center md:text-left">
          {projects.title}
        </h2>

        {/* Proje Kartları Izgarası */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.list.map((project, index) => (
            <ProjectCards 
              key={index} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;