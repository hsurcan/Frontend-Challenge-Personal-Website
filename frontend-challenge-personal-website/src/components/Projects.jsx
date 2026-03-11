import React from 'react';
import { useSelector } from 'react-redux';
import data from '../data/data';
import ProjectCards from './ProjectCards';

const Projects = () => {
  const { lang } = useSelector((state) => state.home);
  const { projects } = data[lang];

  return (
    <section className="py-20 bg-white dark:bg-custom-dark-bg2 transition-colors border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-4xl font-light font-inter text-[#000] tracking-wide dark:text-[#fff] mb-12 text-center md:text-center">
          {projects.title}
        </h2>

        {/* Proje Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-36 lg:gap-16 ">
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