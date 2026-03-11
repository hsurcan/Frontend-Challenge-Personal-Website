import React from 'react';
import { useSelector } from 'react-redux';
import Icons from './Icons';
import data from '../data/data';

const Skills = () => {

  const lang = useSelector((state) => state.home.lang);
  const { skills } = data[lang];

  return (
    <section className="py-20 bg-white dark:bg-custom-dark-bg2 transition-colors relative">
    
      <div className="max-w-6xl mx-auto px-14 items-center justify-center">

        <h2 className="text-4xl md:text-5xl font-light font-inter tracking-wide text-[#1F2937] dark:text-[#F4F4F4] mb-16 text-center items-center justify-center">
          {lang === 'tr' ? 'Yetenekler' : 'Skills'}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {skills.map((skill, index) => (

            <div key={index} className="flex flex-col items-center md:items-center gap-3 group">
            
              <div className="w-15 h-15 flex items-center justify-center rounded-xl bg-white dark:bg-[#252128] transition-transform group-hover:-translate-y-2">
                
                <img src={skill.icon} alt={skill.name} className="w-25 h-25 object-contain" />
              
              </div>
              <span className="text-[#777777] dark:text-[#D9D9D9] text-[22px] font-medium tracking-widest uppercase text-center md:text-left">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skills;