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
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const slideData = [
  {
    id: 1,
    bgImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
    gradient: "from-slate-900 via-blue-900 to-cyan-900",
    darkGradient: "from-black via-slate-900 to-slate-950",
    mainText: "الابتكار الرقمي",
    subText: "نصنع مستقبلاً ذكياً لأعمالكم",
  },
  {
    id: 2,
    bgImage: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80",
    gradient: "from-cyan-900 via-indigo-900 to-slate-900",
    darkGradient: "from-slate-950 via-gray-900 to-black",
    mainText: "حلول تقنية",
    subText: "بنية تحتية برمجية متكاملة",
  },
  {
    id: 3,
    bgImage: "https://images.unsplash.com/photo-1542744095-2918828445a1?auto=format&fit=crop&q=80",
    gradient: "from-blue-900 via-slate-900 to-cyan-800",
    darkGradient: "from-black via-slate-950 to-blue-950",
    mainText: "تسويق ذكي",
    subText: "وصول أوسع لجمهورك المستهدف",
  },
];

const Hero = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % slideData.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slideData[activeSlideIndex];
  const isDark = mounted && theme === "dark";

  return (
    <section className="relative flex-1 flex flex-col w-full overflow-hidden text-white font-sans min-h-[calc(100vh-70px)] transition-colors duration-1000">
      {/* Dynamic Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlideIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.3, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={currentSlide.bgImage}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div
        className={`absolute inset-0 -z-20 transition-all duration-1000 ease-in-out 
        bg-gradient-to-br ${isDark ? currentSlide.darkGradient : currentSlide.gradient}`}
      />

      {/* Main Layout Container */}
      <div className="relative z-10 flex flex-col flex-1 h-full mx-auto w-full">
        
        {/* Navigation Dots (Right Side) */}
        <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 items-center z-30">
          {slideData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlideIndex(index)}
              className="group relative p-2"
            >
              <div className={`w-1.5 transition-all duration-500 rounded-full
                ${activeSlideIndex === index ? "h-8 bg-cyan-400" : "h-3 bg-white/30 group-hover:bg-white/60"}`} 
              />
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center px-8 md:px-20 flex-grow pt-20">
          
          {/* Text Content */}
          <motion.div 
            key={activeSlideIndex + "text"}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-right order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-6">
               <div className="h-[2px] w-12 bg-cyan-400 hidden lg:block" />
               <Sparkles className="text-cyan-400" size={24} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight leading-tight">
              {currentSlide.mainText}
            </h1>
            <p className="text-cyan-400 text-xl md:text-2xl font-light tracking-wide max-w-xl">
              {currentSlide.subText}
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="my-8 px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full font-bold transition-all shadow-lg shadow-cyan-500/20"
            >
              اكتشف المزيد
            </motion.button>
          </motion.div>

          {/* Interactive Diamond Grid */}
          <div className="relative flex items-center justify-center p-10 lg:p-20 order-1 lg:order-2 mb-12 lg:mb-0">
            <div className="grid grid-cols-2 gap-4 rotate-45 scale-90 md:scale-110">
              {[Globe, Contact2, Briefcase].map((Icon, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  className={`w-24 h-24 md:w-32 md:h-32 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-400 transition-all cursor-pointer group ${isDark ? "bg-slate-900/40" : "bg-white/10"}`}
                >
                  <Icon size={32} className="-rotate-45 group-hover:scale-110 group-hover:text-cyan-400 transition-all" />
                </motion.div>
              ))}

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
                className="w-24 h-24 md:w-32 md:h-32 bg-cyan-500 text-white shadow-2xl shadow-cyan-500/40 flex items-center justify-center"
              >
                <div className="-rotate-45 flex flex-col items-center">
                  <MapPin size={24} className="mb-1" />
                  <span className="text-[10px] font-bold uppercase tracking-tighter">Crystal</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Utility Nav */}
        <div
          className={`w-full grid grid-cols-2 lg:grid-cols-4 mt-auto border-t border-white/10 transition-all duration-500
          ${isDark ? "bg-black/60" : "bg-slate-900/60"} backdrop-blur-md`}
        >
          <NavItem icon={<Network size={20} />} label="الهيكل التنظيمي" />
          <NavItem icon={<Calendar size={20} />} label="أجندة الفعاليات" />
          <NavItem icon={<Building2 size={20} />} label="شركاء النجاح" />
          <NavItem icon={<PhoneCall size={20} />} label="تواصل معنا" />
        </div>
      </div>
    </section>
  );
};

const NavItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="group flex flex-col items-center justify-center py-8 cursor-pointer border-l border-white/5 last:border-l-0 relative overflow-hidden transition-all">
    <div className="relative z-10 p-3 rounded-lg bg-white/5 border border-white/10 mb-2 group-hover:border-cyan-400/50 group-hover:text-cyan-400 transition-all duration-300">
      {icon}
    </div>
    <span className="relative z-10 text-xs md:text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
      {label}
    </span>
    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
  </div>
);

export default Hero;