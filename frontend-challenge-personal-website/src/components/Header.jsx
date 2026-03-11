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

//tema değiştirme
  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
    localStorage.setItem('theme', JSON.stringify(newTheme));

    toast.info(lang === 'tr' ? `Tema: ${newTheme === 'dark' ? 'Gece' : 'Gündüz'}` : `Theme: ${newTheme.toUpperCase()}`, {
      theme: newTheme //bildirim için
    });
  };

//dil değiştirme
  const handleLangChange = () => {
    const newLang = lang === 'en' ? 'tr' : 'en';
    dispatch(setLang(newLang));
    localStorage.setItem('lang', JSON.stringify(newLang));
    toast.success(newLang === 'tr' ? 'Dil Türkçe olarak ayarlandı' : 'Language set to English');
  };

//email'e tıklandığında istek gitsin
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
    <header className="relative w-full bg-custom-bg dark:bg-custom-dark-bg1 transition-colors duration-300 overflow-hidden z-10">
  
  <div className="absolute -top-11 left-[500px] w-28 h-28 bg-[#525252] rounded-full -z-10"></div>
  <div className="absolute -right-16 top-[580px] w-52 h-16 bg-[#D8216B] rounded-l-full -z-10 translate-y-12"></div>
      
      <div className="mx-24 px-28 pt-16 flex justify-end items-center gap-6 text-xs font-bold tracking-widest">

        {/*TEMA BUTONU*/}
        <div className="flex items-center gap-2 cursor-pointer group" onClick={handleThemeToggle}>
          <div className="relative w-14 h-6 bg-custom-pink dark:bg-[#000000] rounded-full transition-all">

            <div className= {`absolute top-1 right-1 w-4 h-4 bg-[#FFE86E] rounded-full transition-all duration-300 ${theme === 'dark' ? '-translate-x-8 bg-transparent shadow-[inset_5px_0_0_0_#FFE86E]' 
    : 'bg-[#FFE86E]'}`}></div>
          
          </div>
          <span className="text-[#777777] text-sm dark:text-[#D9D9D9] group-hover:text-custom-pink transition-colors">
            {theme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}
          </span>
        </div>

        <p className="text-[#777777] dark:text-[#D9D9D9]">|</p>

      {/*DİL BUTONU*/}
        <button onClick={handleLangChange} className="text-custom-pink text-sm hover:opacity-70 transition-opacity">
          {lang === 'en' ? (
            <span>TÜRKÇE<span className="text-[#777777]">'YE GEÇ</span></span>
          ) : (
            <span><span className="text-[#777777]">SWITCH TO </span><span>ENGLISH</span></span>
          )}
        </button>
      </div>

{/*İÇERİK*/}
      <div className="mx-20 px-28 py-10 md:pt-10 pb-28 flex flex-col md:flex-row items-center gap-10">
        
        <div className="relative flex-[1.5] text-center md:text-left order-2 md:order-1">    
          <div className="relative inline-block mb-8">
            <h2 className="relative text-[#000] dark:text-[#fff] text-3xl tracking-widest font-light font-inter pb-8">{content.hi}</h2>
          
            <div className="absolute -left-2 top-[120px] -translate-y-1/2 w-36 rounded-md h-[30px] bg-custom-pink hidden md:block -z-0">
            </div>
            <h1 className="relative text-[20px] md:text-[52px]/normal font-light font-inter text-[#1F2937] dark:text-[#FFF] mb-10 z-10">
            {content.title}
            </h1>
         </div>

{/*İLETİŞİM*/}
          <div className="flex flex-col flex-wrap md:text-lg">

             <div className="flex gap-3 mb-4">
                <a href="#" className="text-[#000] dark:text-[#D9D9D9] hover:text-custom-pink transition-colors">
                  <i class="fa-brands fa-linkedin-in text-4xl"></i>
                </a>

                <a href="#" className="text-[#000] dark:text-[#D9D9D9] hover:text-custom-pink transition-colors">
                  <i className="fab fa-github text-4xl"></i>
                </a>
             </div> 

             <p className="text-xl md:text-xl/loose font-inter tracking-wider text-[#000] dark:text-[#D9D9D9]">
    {content.currentRole.part1} <span className="text-custom-pink ">{content.currentRole.part2}</span> {content.currentRole.part3} <span className="text-custom-pink"> {content.currentRole.part4}</span> {content.currentRole.part5} 
    <br />
    {content.invite} <a onClick={handleInviteClick} href={`mailto:${content.email}`} className="text-custom-pink dark:text-custom-pink underline">{content.email}</a>
  </p>
      
          </div>
        </div>

        {/*PROFİL FOTOĞRAFI*/}
        <div className="flex-1 order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
             <div className="absolute -top-6 -left-6 w-full h-full bg-custom-pink rounded-[2rem]"></div>
             <img 
               src= "/images/profilepic.jpg" 
               alt="Almila" 
               className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] object-cover rounded-[2rem] shadow-2xl relative z-10"
             />
          </div>
        </div>
      </div>

 
    </header>
  );
};

export default Header;