"use client";

import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "عنوان الصورة",
    description: "بعض التفاصيل عن الصورة",
    src: "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=800&h=500&fit=crop",
    dot: "#f4c430",
  },
  {
    id: 2,
    title: "لحظات الطفولة",
    description: "ذكريات لا تُنسى من أيام الطفولة",
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=500&fit=crop",
    dot: "#e8403a",
  },
  {
    id: 3,
    title: "غروب الشمس",
    description: "جمال الطبيعة في وقت الغروب",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
    dot: "#f4a030",
  },
  {
    id: 4,
    title: "البحيرة الهادئة",
    description: "مناظر طبيعية خلابة من حول العالم",
    src: "https://images.unsplash.com/photo-1439853949212-36589f8f8458?w=800&h=500&fit=crop",
    dot: "#30b0e8",
  },
  {
    id: 5,
    title: "قمم الجبال",
    description: "رحلة إلى أعلى القمم الثلجية",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop",
    dot: "#40c88a",
  },
];

export default function ImageGallery() {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-[#0f1b2d] min-h-screen flex flex-col font-['Cairo',_sans-serif] selection:bg-[#1dd1a1]/30">
      
      {/* Header */}
      <header className="flex justify-between items-center px-7 py-4 border-b border-white/10">
        <button className="bg-[#1dd1a1] hover:bg-[#1abc8f] text-[#0f1b2d] px-[18px] py-2 rounded-lg font-bold text-[13px] transition-colors duration-200">
          المزيد من الصور
        </button>
        <h2 className="text-[#f4c430] font-bold text-[1.3rem] m-0">
          البوم الصور
        </h2>
      </header>

      {/* Gallery Body */}
      <main className="flex flex-1 items-stretch gap-3 p-5 px-7 pb-6">
        
        {/* Thumbnail Pills (Inactive) */}
        <div className="flex gap-[10px] items-center">
          {slides.map((slide, i) => {
            if (i === active) return null;
            return (
              <div
                key={slide.id}
                onClick={() => setActive(i)}
                className="group relative cursor-pointer rounded-[50px] overflow-hidden w-[52px] h-[200px] flex-shrink-0 opacity-75 brightness-[0.6] hover:opacity-95 hover:brightness-[0.85] hover:scale-[1.04] transition-all duration-[450ms] cubic-bezier(0.34, 1.56, 0.64, 1)"
              >
                <img 
                  src={slide.src} 
                  alt={slide.title} 
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div
                  className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold text-white z-[2] shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
                  style={{ backgroundColor: slide.dot }}
                >
                  {slide.id}
                </div>
              </div>
            );
          })}
        </div>

        {/* Active/Main Image Container */}
        <div className="relative flex-1 min-h-[260px] rounded-[18px] overflow-hidden group">
          <img
            key={active}
            src={slides[active].src}
            alt={slides[active].title}
            className="w-full h-full object-cover transition-opacity duration-400"
          />
          
          {/* Bottom Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100" />
          
          {/* Caption */}
          <div className="absolute bottom-[22px] right-6 text-right">
            <p className="text-white font-bold text-[1.05rem] mb-1 drop-shadow-md">
              {slides[active].title}
            </p>
            <p className="text-white/80 text-[0.85rem] m-0">
              {slides[active].description}
            </p>
          </div>

          {/* Active Dot Badge */}
          <div
            className="absolute bottom-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold text-white z-[2] shadow-[0_2px_8px_rgba(0,0,0,0.5)] border-2 border-white/40"
            style={{ backgroundColor: slides[active].dot }}
          >
            {slides[active].id}
          </div>
        </div>
      </main>
    </div>
  );
}