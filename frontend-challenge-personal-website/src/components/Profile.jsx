import React from 'react';
import { useSelector } from 'react-redux';
import data from '../data/data';

const Profile = () => {
  const lang = useSelector((state) => state.home.lang);
  const { profile } = data[lang];

  return (
    <section className="py-16 bg-custom-bg dark:bg-custom-dark-bg1 transition-colors border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
 
  <div className="absolute -right-[310px] -top-[95px] w-[121px] h-[121px] border-[21px] border-[#D8216B] rounded-full -z-10 opacity-90"></div>

        <h2 className="text-3xl md:text-4xl font-inter font-light tracking-wide text-slate-900 dark:text-white mb-10 text-center md:text-center">
          {profile.title}
        </h2>

        <div className="flex flex-col md:flex-row gap-14">
    {/*INFO*/}
          <div className="flex-1 ml-8 max-w-[500px] bg-white dark:bg-[#525252] p-8 rounded-xl shadow-[8px_8px_0_0_#52525280]">
            <h3 className="text-custom-pink font-playfair text-2xl font-medium mb-8">
              {profile.basicInfo.title}
            </h3>
            <div className="space-y-5">
              {profile.basicInfo.items.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <span className="font-bold font-inter w-32 dark:text-white">{item.label}</span>
                  <span className="flex-1 font-inter dark:text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
   {/*ABOUT ME*/}
          <div className="flex-1 flex flex-col justify-center ml-6">
             <div className="relative mb-5">
                <h3 className="font-playfair text-2xl font-medium dark:text-white relative z-10">
                  {profile.aboutMe.title}
                </h3>
                <div className="absolute -bottom-1 -left-2 w-24 h-4 bg-custom-blue -z-0 rounded-md"></div>
             </div>
             <div className="space-y-6 pr-16 font-inter font-light text-lg text-[#000] dark:text-[#fff] leading-normal">
               {profile.aboutMe.content.map((paragraph, index) => (
                 <p key={index}>{paragraph}</p>
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;