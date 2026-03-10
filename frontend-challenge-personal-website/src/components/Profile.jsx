import React from 'react';
import { useSelector } from 'react-redux';
import data from '../data/data';

const Profile = () => {
  const lang = useSelector((state) => state.home.lang);
  const { profile } = data[lang];

  return (
    <section className="py-16 bg-white dark:bg-[#252128] transition-colors border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-10 text-center md:text-left">
          {profile.title}
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sol Kolon: Basic Information */}
          <div className="flex-1 bg-white dark:bg-[#2A262E] p-8 rounded-xl shadow-lg dark:shadow-none">
            <h3 className="text-custom-pink text-2xl font-bold mb-6">
              {profile.basicInfo.title}
            </h3>
            <div className="space-y-4">
              {profile.basicInfo.items.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <span className="font-bold w-32 dark:text-white">{item.label}</span>
                  <span className="flex-1 dark:text-gray-300">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ Kolon: About Me */}
          <div className="flex-1 flex flex-col justify-center">
             <div className="relative mb-4">
                <h3 className="text-2xl font-bold dark:text-white relative z-10">
                  {profile.aboutMe.title}
                </h3>
                {/* Başlığın altındaki o meşhur mavi çizgi dekoru */}
                <div className="absolute -bottom-1 left-0 w-24 h-4 bg-custom-blue/30 -z-0 rounded-full"></div>
             </div>
             <div className="space-y-4 text-slate-600 dark:text-gray-300 leading-relaxed">
               {profile.aboutMe.content.map((paragraph, index) => (
                 <p key={index}>{paragraph}</p>
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;