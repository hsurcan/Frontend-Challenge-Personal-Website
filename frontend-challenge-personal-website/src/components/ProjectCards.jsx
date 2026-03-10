import React from 'react';
import { useSelector } from 'react-redux';

const ProjectCards = ({ project, index }) => {
  const { lang } = useSelector((state) => state.home);
  
  // Taslaktaki gibi her iki kartın farklı arka plan renkleri olması için (Mavi ve Yeşil tonları)
  const bgColors = [
    'bg-[#DDEEFE] dark:bg-[#2D3235]', // 1. Kart (Mavi tonu)
    'bg-[#D9F6F1] dark:bg-[#495351]'  // 2. Kart (Yeşil tonu)
  ];

  return (
    <div className={`flex flex-col rounded-3xl p-8 md:p-12 ${bgColors[index % 2]} transition-colors duration-300 shadow-sm hover:shadow-xl group`}>
      <h3 className="text-2xl md:text-3xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-4">
        {project.title}
      </h3>
      
      <p className="text-sm md:text-base text-[#6B7280] dark:text-white mb-6 leading-relaxed flex-grow">
        {project.description}
      </p>

      {/* Etiketler (Tags) */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag, i) => (
          <span key={i} className="px-4 py-1 bg-white dark:bg-[#252128] rounded-full text-[10px] md:text-xs font-bold text-[#1F2937] dark:text-[#8F88FF] uppercase tracking-wider">
            {tag}
          </span>
        ))}
      </div>

      {/* Linkler */}
      <div className="flex justify-between items-center font-bold text-sm md:text-base mb-8">
        <a href="#" className="text-[#1F2937] dark:text-[#CBF281] hover:underline underline-offset-4">
          {project.github}
        </a>
        <a href="#" className="text-[#1F2937] dark:text-[#CBF281] hover:underline flex items-center gap-1">
          {project.app} <span>→</span>
        </a>
      </div>

      {/* Proje Görseli (Laptop İçinde) */}
      <div className="mt-auto overflow-hidden rounded-xl">
        <img 
          src={project.img} 
          alt={project.title} 
          className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500" 
        />
      </div>
    </div>
  );
};

export default ProjectCards;