"use client";
import React, { useState } from "react";
import {
  Network,
  Calendar,
  Building2,
  PhoneCall,
  Globe,
  Briefcase,
  Contact2,
  Clock,
  MapPin,
  Search,
  Rose,
} from "lucide-react";
import Image from "next/image";

// Data Structure to handle the changing content
const slideData = [
  {
    id: 1,
    bgImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
    gradient: "from-purple-900 via-blue-900 to-teal-800",
    patternOpacity: "opacity-30",
    mainText: "خدمات الموقع",
    logoColor: "text-blue-400",
  },
  {
    id: 2,
    bgImage:
      "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80",
    gradient: "from-yellow-700 via-purple-900 to-blue-950",
    patternOpacity: "opacity-40",
    mainText: "حلول تقنية",
    logoColor: "text-cyan-400",
  },
  {
    id: 3,
    bgImage:
      "https://images.unsplash.com/photo-1542744095-2918828445a1?auto=format&fit=crop&q=80",
    gradient: "from-rose-900 via-blue-950 to-indigo-900",
    patternOpacity: "opacity-25",
    mainText: "تسويق رقمي",
    logoColor: "text-pink-400",
  },
  {
    id: 4,
    bgImage:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80",
    gradient: "from-amber-600 via-teal-900 to-indigo-950",
    patternOpacity: "opacity-20",
    mainText: "برمجة شاملة",
    logoColor: "text-amber-400",
  },
];

const Hero = () => {
  // 1. STATE: Keeps track of which slide is active (0 to 3)
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // 2. HELPER: Get the current slide's data
  const currentSlide = slideData[activeSlideIndex];

  // 3. EVENT HANDLER: Updates the state when a dot is clicked
  const handleDotClick = (index: number) => {
    setActiveSlideIndex(index);
  };

  return (
    <section className=" relative flex-1 flex flex-col w-full overflow-hidden text-white font-sans min-h-[calc(100vh-70px)] lg:h-[calc(100vh-70px)] transition-all duration-700">
      {/* 4. BACKGROUND IMAGE: Use Next.js Image with 'fill' and transition */}
      <div className=" absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out">
        <Image
          src={currentSlide.bgImage}
          alt="Background Image"
          fill
          className="object-cover object-center transition-opacity duration-1000"
          style={{ opacity: 0.2 }}
          priority
        />
      </div>

      {/* 5. BACKGROUND GRADIENT: Transitions color on click */}
      <div
        className={`absolute inset-0 bg-gradient-to-br -z-20 transition-all duration-1000 ease-in-out ${currentSlide.gradient}`}
      />

      {/* 6. BACKGROUND PATTERN: Opacity transitions */}
      <div
        className={`absolute inset-0 bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] bg-[size:20px_20px] -z-10 transition-opacity duration-700 ${currentSlide.patternOpacity}`}
      />

      <div className=" relative z-10 flex flex-col flex-1 h-full">
        {/* --- VERTICAL PAGINATION (Right side in RTL) --- */}
        <div className="absolute right-8 cursor-pointer top-1/2 -translate-y-1/2 flex flex-col gap-6 items-center z-20">
          {slideData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-4 h-4 rounded-full border-2 border-white/80 transition-all duration-300 relative group
                ${
                  activeSlideIndex === index
                    ? "bg-pink-500 ring-4 ring-pink-500/30 scale-125 border-pink-500"
                    : "bg-transparent hover:bg-white/20"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {/* Tooltip on hover */}
              <span className="absolute right-8 top-1/2 -translate-y-1/2 whitespace-nowrap bg-indigo-900/90 text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                {`شريحة ${index + 1}`}
              </span>
            </button>
          ))}
        </div>

        {/* --- TOP CONTENT (Logo & Diamond Grid) --- */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start p-6 md:p-10 flex-grow gap-12 lg:gap-0 mt-16 md:mt-24">
          {/* Right Area: Logo (Transitional Text) */}
          <div className="text-center lg:text-right flex flex-col items-center lg:items-end">
            <div className="w-16 h-16 border-2 border-yellow-500 -rotate-45 flex items-center justify-center mb-6 transition-transform hover:scale-110">
              <Rose />
            </div>
            {/* 7. TEXT & GRADIENT (Matching Image 1) */}
            <h1 className="text-4xl md:text-5xl font-bold mb-1 tracking-tight text-white transition-opacity duration-300">
              قالب 
            </h1>
            <p className="text-yellow-400 text-sm tracking-widest font-bold">
              آية من الجمال
            </p>
          </div>

          {/* Left Area: Diamond Grid (Matching Image 1) */}
          <div className="relative flex items-center justify-center scale-90 md:scale-110 p-28">
            <div className="grid grid-cols-2 gap-2 rotate-45 shrink-0">
              <div className="w-20 h-20 md:w-28 md:h-28 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer group">
                <Globe
                  size={32}
                  className="-rotate-45 group-hover:text-cyan-400 transition-colors"
                />
              </div>
              <div className="w-20 h-20 md:w-28 md:h-28 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer group">
                <Contact2
                  size={32}
                  className="-rotate-45 group-hover:text-cyan-400 transition-colors"
                />
              </div>
              <div className="w-20 h-20 md:w-28 md:h-28 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer group">
                <Briefcase
                  size={32}
                  className="-rotate-45 group-hover:text-cyan-400 transition-colors"
                />
              </div>
              {/* Active Item - Matching Image 1 */}
              <div className="w-20 h-20 md:w-28 md:h-28 bg-white text-pink-600 shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center cursor-pointer transition-transform duration-500">
                <div className="-rotate-45 flex flex-col items-center gap-1">
                  <MapPin size={24} />
                  {/* 8. ACTIVE TEXT (Changes with dot click) */}
                  <p className="text-center text-[11px] md:text-sm font-bold leading-tight px-1 transition-all duration-300">
                    {currentSlide.mainText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION (Matching Image 2 Tabs) --- */}
        <div className="w-full bg-[#1e293b]/90 backdrop-blur-xl border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 mt-auto">
          <NavItem icon={<Network size={20} />} label="الهيكل التنظيمي" />
          <NavItem icon={<Calendar size={20} />} label="أهم الأحداث" />
          <NavItem icon={<Building2 size={20} />} label="الهيكل الإداري" />
          <NavItem icon={<PhoneCall size={20} />} label="اتصل بنا" />
        </div>
      </div>
    </section>
  );
};

// Bottom NavItem Definition (Matching Image 2 Tabs)
const NavItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="group flex flex-col items-center justify-center py-6 lg:py-8 cursor-pointer hover:bg-white/5 transition-all relative border-l border-white/5 last:border-l-0">
    <div className="hidden lg:block absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-3 z-10 bg-[#1e293b] rounded-t-full opacity- group-hover:opacity-100 transition-opacity" />
    <div className="hidden lg:block rounded-t-[100px] w-64 h-32 absolute bottom-0 border-t border-x border-dashed border-white/20 opacity- group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0" />
    <div className="relative z-10 p-3 rounded-full bg-white/10 border border-white/20 mb-3 group-hover:bg-pink-600 transition-all duration-300 shadow-md">
      {icon}
    </div>
    <span className="relative z-10 text-xs md:text-sm font-bold tracking-wide">
      {label}
    </span>
  </div>
);

export default Hero;
