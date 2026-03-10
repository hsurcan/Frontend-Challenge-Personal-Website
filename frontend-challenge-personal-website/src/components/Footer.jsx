import React from 'react';
import { useSelector } from 'react-redux';
import data from '../data/data';

const Footer = () => {
  const { lang } = useSelector((state) => state.home);
  const { footer } = data[lang];

  return (
    <footer className="py-20 bg-[#F9F9F9] dark:bg-[#252128] transition-colors">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
        
        {/* Sol Taraf: Büyük Çağrı Başlığı */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1F2937] dark:text-[#AEBCCF] leading-tight max-w-md">
            {footer.title}
          </h2>
          {/* Taslaktaki o mavi alt çizgi detayı */}
          <div className="w-40 h-1 bg-[#82BBFF] mt-2 hidden md:block opacity-50"></div>
        </div>

        {/* Sağ Taraf: Linkler */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 font-bold tracking-wider">
          {footer.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-lg transition-colors ${
                link.name === 'Email' || link.name === 'E-posta'
                  ? 'text-[#AF0C48] dark:text-[#EA2678]' // Taslaktaki vurgulu renk
                  : 'text-[#1769FF] dark:text-[#82BBFF] hover:text-[#0077B5]'
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