import React from 'react';

// Bu bileşen hem Skills içindeki teknoloji ikonlarını 
// hem de genel sosyal medya ikonlarını temsil edebilir.
const Icons = ({ name, iconPath, className }) => {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      {/* İkonun kendisi - Tasarımdaki renkli kutular için Tailwind sınıfları */}
      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-lg shadow-md bg-white dark:bg-slate-800 transition-all hover:scale-110">
        {/* İkonlar için şimdilik placeholder veya SVG kullanabilirsin */}
        <img 
          src={iconPath} 
          alt={name} 
          className="w-10 h-10 md:w-12 md:h-12 object-contain"
        />
      </div>
      {/* İkonun altındaki metin */}
      <span className="text-sm md:text-base font-medium text-gray-500 dark:text-gray-400 tracking-widest uppercase">
        {name}
      </span>
    </div>
  );
};

export default Icons;