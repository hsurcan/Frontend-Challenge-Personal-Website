import React from 'react';
import { useSelector } from 'react-redux';

const ProjectCards = ({ project, index }) => {
  useSelector((state) => state.home);
  
  const bgColors = [
    'bg-[#DDEEFE] dark:bg-[#2D3235]', 
    'bg-[#D9F6F1] dark:bg-[#495351]'  
  ];

  return (
    <div className={`flex flex-col rounded-2xl p-12 md: pb-[280px] ${bgColors[index % 2]} transition-colors duration-300 shadow-sm hover:shadow-xl group`}>
     
      <h3 className="text-2xl md:text-3xl font-playfair font-bold tracking-wide text-[#000] dark:text-[#fff] mb-4">
        {project.title}
      </h3>
      
      <p className="text-sm md:text-base pr-12 text-[#000] font-light tracking-wide dark:text-white leading-relaxed flex-grow">
        {project.description}
      </p>

      {/* TAGLER */}
      <div className={`flex flex-wrap gap-2 pr-12 ${project.title === "Are you bored?" ? 'mt-8 mb-10'  : 'mb-20' }`}>
        {project.tags.map((tag, i) => (
          <span key={i} className="px-8 py-2 bg-white dark:bg-[#525252] rounded-full text-[12px] md:text-[16px] font-playfair font-bold text-[#000] dark:text-[#FFF] tracking-wider">
            {tag}
          </span>
        ))}
      </div>

      {/* LİNKLER */}
      <div className={`flex justify-between items-center font-medium text-lg md:text-lg tracking-wide ${project.title === "Are you bored?" ? 'mt-10 mb-10'  : 'mb-20' }`}>
        <a href="#" className="text-[#000] dark:text-[#fff] hover:underline underline-offset-4">
          {project.github}
        </a>
        <a href="#" className="text-[#000] dark:text-[#fff] hover:underline flex items-center gap-1">
          {project.app} <span>→</span>
        </a>
      </div>

      <div className="absolute mt-[475px] -translate-x-9 rounded-xl" >
        <img 
          src={project.img} 
          alt={project.title} 
          className="w-fit h-auto transform group-hover:scale-105 transition-transform duration-500" 
        />
      </div>
    </div>
  );
};

export default ProjectCards;