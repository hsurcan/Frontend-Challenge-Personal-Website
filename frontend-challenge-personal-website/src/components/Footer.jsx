import React from 'react';
import { useSelector } from 'react-redux';
import data from '../data/data';

const Footer = () => {
  const { lang } = useSelector((state) => state.home);
  const { footer } = data[lang];

  return (
    <footer className="py-20 bg-[#F9F9F9] dark:bg-custom-dark-bg2 transition-colors">
      <div className="max-w-2xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-2">
        
        <div className="relative flex-1 text-center md:text-right ">
          <h2 className="relative z-10 text-2xl md:text-4xl font-light font-inter text-[#000] dark:text-[#fff] leading-tight max-w-md">
            {footer.title}</h2>
     
          <div className="absolute w-56 h-4 bg-[#82BBFF] dark:text-[#3968A0] -mt-14 mx-44 hidden md:block rounded-sm"></div>
        </div>

        {/* LINKLER*/}
        <div className="flex flex-col md:flex-col items-start gap-4 md:gap-1 font-medium tracking-wider">
          {footer.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg transition-colors ${
    link.name === 'Email'
      ? 'text-custom-pink'
      : link.name === 'Personal Blog'
        ? 'text-[#000] dark:text-[#FFF]'
        : link.name === 'LinkedIn'
          ? 'text-[#0077B5] dark:text-[#3968A0]'
          : 'text-[#1769FF] dark:text-custom-blue'
  }`}
              >
                {link.name}
              </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;