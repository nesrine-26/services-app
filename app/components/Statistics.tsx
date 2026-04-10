"use client";
import React, { useEffect, useState } from "react";
import {
  Globe,
  GraduationCap,
  Users,
  Building2,
  Briefcase,
} from "lucide-react";

const statsData = [
  { id: 1, icon: <Globe size={60} />, value: "3270", label: "عدد العملاء" },
  { id: 2, icon: <GraduationCap size={60} />, value: "75", label: "سنوات الخبرة" },
  { id: 3, icon: <Users size={60} />, value: "1300", label: "عدد الموظفين" },
  { id: 4, icon: <Building2 size={60} />, value: "10", label: "فروع الشركة" },
  { id: 5, icon: <Briefcase size={60} />, value: "150", label: "المشاريع المنفذة" },
];

const Statistics = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      id="statistics" 
      className="min-h-7xl bg-[#0f1035] dark:bg-slate-950 text-white py-20 px-10 flex flex-col items-center transition-colors duration-500"
    >
      {/* Header Section */}
      <div className={`text-center mb-16 transition-all duration-1000 transform ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="text-3xl font-bold mb-4 dark:text-slate-100">الإحصائيات</h2>
        <p className="text-yellow-500 dark:text-amber-400 text-lg">
          أحياناً تختصر لغة الأرقام الكثير من الكلمات والعبارات الإنشائية
        </p>
      </div>

      {/* Stats Cards Grid */}
      <div className="flex flex-wrap justify-center gap-8 max-w-7xl">
        {statsData.map((stat, index) => (
          <div
            key={stat.id}
            style={{ transitionDelay: `${index * 100}ms` }}
            className={`relative w-56 h-80 flex flex-col items-center justify-between p-8 rounded-[40px] border border-pink-600/50 dark:border-indigo-500/30 bg-[#1a1b4b]/40 dark:bg-slate-900/50 backdrop-blur-md transition-all duration-700 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-500/20
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            {/* Icon */}
            <div className="mt-4 text-cyan-400 dark:text-indigo-400 transition-colors">
              {stat.icon}
            </div>

            {/* Value */}
            <div className="text-3xl font-bold dark:text-white">{stat.value}</div>

            {/* Label Button-style */}
            <div className="w-full py-2 px-4 border border-white/40 dark:border-slate-700 rounded-full text-center text-sm mb-4 font-medium dark:bg-slate-800/50">
              {stat.label}
            </div>

            {/* Bottom Accent Bar */}
            <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-1.5 rounded-full shadow-lg transition-colors
              ${index % 2 === 0 ? "bg-orange-500 shadow-orange-500/50" : "bg-pink-500 shadow-pink-500/50"}`}>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;