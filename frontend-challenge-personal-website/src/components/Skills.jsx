import React from 'react';
import { useSelector } from 'react-redux';
import Icons from './Icons';
import data from '../data/data';

const Skills = () => {
  // Redux'tan aktif dili çekiyoruz
  const lang = useSelector((state) => state.home.lang);
  const { skills } = data[lang];

  return (
    <section className="py-20 bg-white dark:bg-[#252128] transition-colors relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-16 text-center md:text-left">
          {lang === 'tr' ? 'Yetenekler' : 'Skills'}
        </h2>

        {/* Yetenekler Listesi */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center md:items-start gap-4 group">
              {/* İkon Kutusu */}
              <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-white dark:bg-[#252128] transition-transform group-hover:-translate-y-2">
                <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain" />
              </div>
              <span className="text-[#777777] dark:text-[#D9D9D9] font-medium tracking-widest uppercase text-center md:text-left">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tasarımdaki dekoratif sol gri halka */}
      <div className="hidden lg:block absolute left-0 bottom-0 -translate-x-1/2 w-40 h-40 border-[20px] border-[#D9D9D9] dark:border-[#52555E] rounded-full opacity-50"></div>
    </section>
  );
};

export default Skills;