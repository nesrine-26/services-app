"use client";
import React, { useEffect, useState } from "react";
import { GraduationCap, Laptop, Pencil, ChevronLeft } from "lucide-react";

const Links = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      title: "تصميم المواقع الإلكترونية",
      icon: <GraduationCap size={32} className="text-yellow-400" />,
    },
    {
      title: "برمجة تطبيقات سطح المكتب",
      icon: <GraduationCap size={32} className="text-cyan-400" />,
    },
    {
      title: "برمجة تطبيقات الهواتف المحمولة",
      icon: <Laptop size={32} className="text-cyan-400" />,
    },
    {
      title: "خدمات التسويق الإلكتروني",
      icon: <Pencil size={32} className="text-cyan-400" />,
    },
  ];

  return (
    <section id="links" className="flex flex-col lg:flex-row w-full min-h-[600px] items-stretch overflow-hidden transition-colors duration-500">
      {/* Right Section: Image Background */}
      <div className={`relative w-full lg:w-1/2 min-h-[350px] lg:min-h-full transition-all duration-1000 transform ${mounted ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}>
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
          alt="User working"
        />
        {/* Overlay adapted for Dark Mode */}
        <div className="absolute inset-0 bg-blue-900/40 dark:bg-slate-950/60 backdrop-blur-[2px]"></div>

        <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6">
          <h2 className="text-white border-2 border-white rounded-full px-6 py-2 md:px-8 md:py-3 text-lg md:text-xl font-bold backdrop-blur-md shadow-2xl text-center whitespace-nowrap animate-pulse">
            روابط سريعة
          </h2>
        </div>
      </div>

      {/* Left Section: Content Panel */}
      <div className="w-full lg:w-1/2 bg-[#1e3a8a] dark:bg-slate-900 p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center transition-colors duration-500">
        <div className="flex flex-col xl:flex-row gap-8 md:gap-10 items-start w-full">
          
          {/* Text Column with Slide-up Animation */}
          <div className={`w-full xl:w-1/2 flex flex-col gap-4 order-1 transition-all duration-700 delay-300 transform ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <h2 className="text-yellow-400 dark:text-amber-400 text-2xl md:text-3xl font-bold leading-tight">
              تصميم المواقع الإلكترونية
            </h2>
            <h3 className="text-pink-500 dark:text-rose-400 text-lg md:text-xl font-medium">
              وصف مختصر عن الخدمة . .
            </h3>
            <p className="text-white dark:text-slate-300 text-justify leading-relaxed text-sm md:text-base opacity-90">
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم.
            </p>
            <button className="bg-pink-600 dark:bg-indigo-600 text-white w-fit px-8 py-2 rounded-md mt-4 hover:bg-pink-700 dark:hover:bg-indigo-700 transition-all active:scale-95 shadow-lg flex items-center gap-2 group">
              التفاصيل
              <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>

          {/* List Column with Staggered Entrance */}
          <div className="w-full xl:w-1/2 flex flex-col gap-3 order-2">
            {services.map((service, index) => (
              <div
                key={index}
                style={{ transitionDelay: `${500 + (index * 100)}ms` }}
                className={`group flex items-center gap-4 p-3 border border-cyan-500/20 bg-white/5 hover:bg-white/10 dark:hover:bg-slate-800 transition-all cursor-pointer rounded-sm transform ${mounted ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
              >
                <div className="border border-pink-500 dark:border-indigo-500 p-2 flex items-center justify-center bg-[#1e3a8a] dark:bg-slate-800 shrink-0 transition-transform group-hover:rotate-12">
                  {service.icon}
                </div>
                <span className="text-white dark:text-slate-100 text-sm md:text-base font-medium group-hover:text-cyan-300 dark:group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Links;