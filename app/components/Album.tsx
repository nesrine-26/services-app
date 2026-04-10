"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
    id: 5,
    title: "قمم الجبال",
    description: "رحلة إلى أعلى القمم الثلجية",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop",
    dot: "#40c88a",
  },
];

export default function ImageGallery() {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
    initial={{opacity:0}}
          whileInView={{opacity:"100%"}}
          transition={{duration:1, ease:"easeInOut"}}
      className="relative flex flex-col md:flex-row w-full min-h-screen overflow-hidden transition-colors duration-500"
      id="album"
    >
      {/* Background Divs: Professional Dark Mode Colors */}
      <div className="bg-[#f4c430] dark:bg-slate-900 h-screen  w-full  transition-all duration-700"></div>
      <div className="bg-[#1dd1a1] dark:bg-indigo-950 h-screen  w-full  transition-all duration-700"></div>

      {/* Top Header Controls */}
      <div
        className={`absolute top-6 md:top-10 left-1/2 -translate-x-1/2 w-[90%] md:w-[75%] flex justify-between items-center z-30 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
      >
        <h2 className="font-bold text-2xl md:text-4xl text-gray-900 dark:text-white drop-shadow-sm">
          ألبوم الصور
        </h2>
        <button className="bg-white/20 dark:bg-slate-800/40 backdrop-blur-md border border-white dark:border-slate-700 text-white px-4 py-1.5 rounded-xl font-bold text-sm md:text-base hover:bg-white hover:text-gray-900 dark:hover:bg-indigo-600 transition-all">
          المزيد من الصور
        </button>
      </div>

      {/* Center Gallery Card */}
      <motion.div
      initial={{width:0}}
          whileInView={{width:"75%"}}
          transition={{duration:0.8, ease:"easeInOut"}}
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[45%] md:-translate-y-1/2 w-[92%] md:w-[80%] lg:w-[75%] h-[65%] md:h-[70%] bg-white dark:bg-slate-800 p-4 md:p-8 rounded-3xl shadow-2xl z-20 transition-all duration-1000 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        {/* Accordion Container */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full h-full">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActive(index)}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`relative overflow-hidden transition-all duration-700 ease-in-out cursor-pointer group
                ${
                  active === index
                    ? "flex-[5] md:flex-[4] rounded-2xl md:rounded-[40px]"
                    : "flex-1 rounded-xl md:rounded-full opacity-70 md:opacity-100"
                }
                ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
                h-full w-full
              `}
            >
              {/* Image Layer */}
              <img
                src={slide.src}
                alt={slide.title}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${active === index ? "scale-105" : "scale-100 group-hover:scale-110"}`}
              />

              {/* Dark Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 
                ${active === index ? "opacity-100" : "opacity-0"}`}
              />

              {/* Number Badge */}
              <div
                className={`absolute transition-all duration-700
                ${
                  active === index
                    ? "bottom-4 right-4 md:bottom-8 md:right-8"
                    : "bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 md:bottom-10 md:translate-y-0"
                }`}
              >
                <div
                  className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full text-white font-bold shadow-lg text-sm md:text-xl transition-transform hover:scale-110"
                  style={{ backgroundColor: slide.dot }}
                >
                  {index + 1}
                </div>
              </div>

              {/* Content Panel (Active Only) */}
              {active === index && (
                <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-right pl-4 pr-2 animate-in fade-in slide-in-from-bottom-5 duration-700">
                  <h3 className="text-white font-bold text-lg md:text-2xl mb-1 drop-shadow-md">
                    {slide.title}
                  </h3>
                  <p className="text-white/90 dark:text-slate-200 text-xs md:text-base line-clamp-2 md:line-clamp-none max-w-xs">
                    {slide.description}
                  </p>
                </div>
              )}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
