import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme, setLang } from '../store/homeSlice';
import { toast } from 'react-toastify';
import axios from 'axios';  
import data from '../data/data';

const Header = () => {
  const dispatch = useDispatch();
  const { theme, lang } = useSelector((state) => state.home);
  const content = data[lang].header;

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
    localStorage.setItem('theme', JSON.stringify(newTheme));

    toast.info(lang === 'tr' ? `Tema: ${newTheme === 'dark' ? 'Gece' : 'Gündüz'}` : `Theme: ${newTheme.toUpperCase()}`, {
      theme: newTheme //bildirim için
    });
  };

  const handleLangChange = () => {
    const newLang = lang === 'en' ? 'tr' : 'en';
    dispatch(setLang(newLang));
    localStorage.setItem('lang', JSON.stringify(newLang));
    toast.success(newLang === 'tr' ? 'Dil Türkçe olarak ayarlandı' : 'Language set to English');
  };

  const handleInviteClick = async (e) => {
  e.preventDefault();
  
  const user = {
    name: "Amila",
    role: "Full-stack Developer",
    action: "Invitation Sent"
  };

  try {
    const response = await axios.post('https://reqres.in/api/workintech', user);
    
    if (response.status === 201) {
      toast.success(lang === 'tr' ? "Davet başarıyla gönderildi!" : "Invitation sent successfully!", {
        position: "bottom-right",
        theme: theme
      });
      console.log("Reqres Response:", response.data);
    }
  } catch (error) {
    toast.error(lang === 'tr' ? "Bir hata oluştu." : "Something went wrong.");
    console.error("Post Error:", error);
  }
};

  return (
<header className="w-full bg-white dark:bg-[#252128] transition-colors duration-300 overflow-hidden">
      {/* Üst Bar: Navigasyon & Kontroller */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-end items-center gap-8 text-xs font-bold tracking-widest">
        {/* Dil Seçici */}
        <button onClick={handleLangChange} className="text-custom-pink hover:opacity-70 transition-opacity">
          {lang === 'en' ? (
            <span><span className="text-[#777777]">TÜRKÇE</span>'YE GEÇ</span>
          ) : (
            <span>SWITCH TO <span className="text-[#777777]">ENGLISH</span></span>
          )}
        </button>

        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={handleThemeToggle}>
          <div className="relative w-14 h-6 bg-custom-pink rounded-full transition-all">
            <div className={`absolute top-1 left-1 w-4 h-4 bg-[#FFE86E] rounded-full transition-transform duration-300 ${theme === 'dark' ? 'translate-x-8' : ''}`}></div>
          </div>
          <span className="text-[#777777] dark:text-[#D9D9D9] group-hover:text-custom-pink transition-colors">
            {theme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}
          </span>
        </div>
      </div>

      {/* Hero İçeriği */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-[1.5] text-center md:text-left order-2 md:order-1">
          {/* İsim Vurgusu */}
          <div className="relative inline-block mb-6">
            <h2 className="text-custom-pink text-2xl font-medium relative z-10">{content.hi}</h2>
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-[2px] bg-custom-pink hidden md:block"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-[#1F2937] dark:text-[#AEBCCF] leading-[1.1] mb-10">
            {content.title}
          </h1>

          {/* Sosyal Medya & İletişim */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-lg">
             <div className="flex gap-3 mr-4">
                <a href="#" className="text-[#1F2937] dark:text-[#AEBCCF] hover:text-custom-pink transition-colors">
                  <i className="fab fa-linkedin text-3xl"></i>
                </a>
                <a href="#" className="text-[#1F2937] dark:text-[#AEBCCF] hover:text-custom-pink transition-colors">
                  <i className="fab fa-github text-3xl"></i>
                </a>
             </div>
             <p className="text-sm md:text-base text-[#6B7280] dark:text-white leading-relaxed">
               {content.currentRole} <br />
               <span className="text-[#AF0C48] dark:text-custom-pink font-medium">{content.invite}</span>{" "}
               <a onClick={handleInviteClick} href={`mailto:${content.email}`} className="text-[#AF0C48] dark:text-custom-pink underline">{content.email}</a>
             </p>
          </div>
        </div>

        {/* Profil Resmi (Tasarımdaki Pembe Dekorlu Yapı) */}
        <div className="flex-1 order-1 md:order-2 flex justify-center">
          <div className="relative">
             {/* Kırmızımsı/Pembe Dikdörtgen Dekor */}
             <div className="absolute -top-4 -right-4 w-full h-full bg-[#EA2678] rounded-2xl -z-10"></div>
             <img 
               src="https://picsum.photos/400/400" 
               alt="Almila" 
               className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl border-2 border-transparent"
             />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;