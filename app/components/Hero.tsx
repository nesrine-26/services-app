"use client";
import React, { useState, useEffect } from "react";
import {
  Network,
  Calendar,
  Building2,
  PhoneCall,
  Globe,
  Briefcase,
  Contact2,
  MapPin,
  Rose,
} from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
const slideData = [
  {
    id: 1,
    bgImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
    gradient: "from-purple-900 via-blue-900 to-teal-800",
    darkGradient: "from-slate-950 via-slate-900 to-indigo-950",
    mainText: "خدمات الموقع",
  },
  {
    id: 2,
    bgImage:
      "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80",
    gradient: "from-yellow-700 via-purple-900 to-blue-950",
    darkGradient: "from-slate-950 via-gray-900 to-slate-900",
    mainText: "حلول تقنية",
  },
  {
    id: 3,
    bgImage:
      "https://images.unsplash.com/photo-1542744095-2918828445a1?auto=format&fit=crop&q=80",
    gradient: "from-rose-900 via-blue-950 to-indigo-900",
    darkGradient: "from-black via-slate-950 to-blue-950",
    mainText: "تسويق رقمي",
  },
  {
    id: 4,
    bgImage:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80",
    gradient: "from-amber-600 via-teal-900 to-indigo-950",
    darkGradient: "from-slate-950 via-emerald-950 to-slate-950",
    mainText: "برمجة شاملة",
  },
];

const Hero = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentSlide = slideData[activeSlideIndex];
  const isDark = mounted && theme === "dark";

  const handleDotClick = (index: number) => {
    if (index === activeSlideIndex || isAnimating) return;
    setIsAnimating(true);

    // Smooth transition: fade out, change index, fade in
    setTimeout(() => {
      setActiveSlideIndex(index);
      setIsAnimating(false);
    }, 400);
  };

  return (
    <section className="relative flex-1 flex flex-col w-full overflow-hidden text-white font-sans min-h-[calc(100vh-70px)] transition-colors duration-1000">
      {/* BACKGROUNDS */}
      <div className="absolute inset-0 z-0">
        <Image
          src={currentSlide.bgImage}
          alt="BG"
          fill
          className={`object-cover transition-all duration-700 ease-in-out ${isAnimating ? "scale-110 opacity-0" : "scale-100 opacity-20"}`}
          priority
        />
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-br -z-20 transition-all duration-1000 ease-in-out 
        ${isDark ? currentSlide.darkGradient : currentSlide.gradient}`}
      />

      <div className="relative z-10 flex flex-col flex-1 h-full">
        {/* Circular Glow Effect */}
        <div
          className={`absolute inset-0 z-50 transition-opacity duration-1000 `}
        />
        {/* --- INTERACTIVE DOTS NAVIGATION --- */}
        <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-8 items-center z-30">
          {slideData.map((slide, index) => (
            <div key={slide.id} className="relative flex items-center group">
              {/* Tooltip Label */}
              <span
                className={`absolute right-12 whitespace-nowrap px-3 py-1 rounded-lg text-xs font-bold transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 backdrop-blur-md border border-white/20
                ${isDark ? "bg-slate-800/80 text-white" : "bg-white/20 text-white"}`}
              >
                {slide.mainText}
              </span>

              {/* The Dot */}
              <button
                onClick={() => handleDotClick(index)}
                className={`relative flex items-center justify-center transition-all duration-500 rounded-full
                  ${activeSlideIndex === index ? "scale-125" : "hover:scale-110"}`}
                aria-label={`Switch to ${slide.mainText}`}
              >
                {/* Active Outer Ring Pulse */}
                {activeSlideIndex === index && (
                  <span className="absolute inset-0 rounded-full bg-pink-500 animate-ping opacity-40"></span>
                )}

                {/* Main Dot Body */}
                <div
                  className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300
                  ${
                    activeSlideIndex === index
                      ? "bg-pink-500 border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.8)]"
                      : "bg-transparent border-white/40 group-hover:border-white"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        {/* HERO CONTENT AREA */}
        <div
          className={`flex flex-col w-full bg lg:flex-row justify-between items-center p-10 flex-grow mt-20 transition-all duration-500 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
        >
          {/* LOGO AREA */}
          <div className=" lg:text-right px-10 flex flex-col items-center lg:items-end">
            <div className="w-16 h-16 border-2 border-yellow-500 -rotate-45 flex items-center justify-center mb-6 hover:rotate-0 transition-all duration-500 cursor-pointer">
              <Rose className="rotate-45" />
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-2 tracking-tighter italic">
              قالب
            </h1>
            <p className="text-yellow-400 text-lg md:text-xl tracking-[0.4em] font-bold">
              آية من الجمال
            </p>
          </div>

          {/* DIAMOND GRID */}
          <div className="relative flex items-center justify-center p-20 scale-90 md:scale-100">
            <div className="grid grid-cols-2 gap-4 rotate-45">
              {[Globe, Contact2, Briefcase].map((Icon, i) => (
                <motion.div
                initial={{width:0}}
                whileInView={{width:"100%"}}
                transition={{duration:0.7,  ease: "easeInOut" }}
                  key={i}
                  className={`w-28  h-28 md:w-36 md:h-36 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-pink-600/20 hover:border-pink-500/50 transition-all cursor-pointer group ${isDark ? "bg-slate-900/40" : "bg-white/5"}`}
                >
                  <Icon
                    size={36}
                    className="-rotate-45 group-hover:scale-110 transition-transform"
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:"1"}}
                transition={{duration:3}}
                 className="w-28 h-28 md:w-36 md:h-36 ease-in-out bg-white text-slate-900 shadow-[0_0_50px_rgba(255,255,255,0.2)] flex items-center justify-center">
                <div className="-rotate-45 flex flex-col items-center">
                  <MapPin size={28} className="text-pink-600 " />
                  <p className="text-center text-[10px] md:text-xs font-black mt-1 text-pink-600">
                    {currentSlide.mainText}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* BOTTOM NAVIGATION */}
        <div
          className={`w-full grid grid-cols-2 lg:grid-cols-4 mt-auto border-t border-white/10 transition-all duration-500
          ${isDark ? "bg-slate-950/95" : "bg-[#1e293b]/95"}`}
        >
          <NavItem icon={<Network size={22} />} label="الهيكل التنظيمي" />
          <NavItem icon={<Calendar size={22} />} label="أهم الأحداث" />
          <NavItem icon={<Building2 size={22} />} label="الهيكل الإداري" />
          <NavItem icon={<PhoneCall size={22} />} label="اتصل بنا" />
        </div>
      </div>
    </section>
  );
};

const NavItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="group flex flex-col items-center justify-center py-10 cursor-pointer transition-all relative border-l border-white/5 last:border-l-0 overflow-hidden">
    <div className="relative z-10 p-4 rounded-xl bg-white/5 border border-white/10 mb-3 group-hover:bg-pink-600 group-hover:text-white group-hover:scale-110 transition-all duration-500">
      {icon}
    </div>
    <span className="relative z-10 text-sm font-bold opacity-70 group-hover:opacity-100 transition-opacity">
      {label}
    </span>
    {/* Hover highlight background */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-600/5 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>
);

export default Hero;
