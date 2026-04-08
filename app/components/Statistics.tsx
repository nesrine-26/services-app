import React from "react";
import {
  Globe,
  GraduationCap,
  Users,
  Building2,
  Briefcase,
} from "lucide-react";

const statsData = [
  {
    id: 1,
    icon: <Globe size={60} className="text-cyan-400" />,
    value: "3270",
    label: "عدد العملاء",
  },
  {
    id: 2,
    icon: <GraduationCap size={60} className="text-cyan-400" />,
    value: "75",
    label: "سنوات الخبرة",
  },
  {
    id: 3,
    icon: <Users size={60} className="text-cyan-400" />,
    value: "1300",
    label: "عدد الموظفين",
  },
  {
    id: 4,
    icon: <Building2 size={60} className="text-cyan-400" />,
    value: "10",
    label: "فروع الشركة",
  },
  {
    id: 5,
    icon: <Briefcase size={60} className="text-cyan-400" />,
    value: "150",
    label: "المشاريع المنفذة",
  },
];

const Statistics = () => {
  return (
    <section className="min-h-screen bg-[#0f1035] text-white py-20 px-10 flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">الإحصائيات</h2>
        <p className="text-yellow-500 text-lg">
          أحياناً تختصر لغة الأرقام الكثير من الكلمات والعبارات الإنشائية
        </p>
      </div>

      {/* Stats Cards Grid */}
      <div className="flex flex-wrap justify-center gap-6 max-w-7xl">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="relative w-56 h-80 flex flex-col items-center justify-between p-8 rounded-[40px] border border-pink-600/50 bg-[#1a1b4b]/40 backdrop-blur-sm"
          >
            {/* Icon */}
            <div className="mt-4">{stat.icon}</div>

            {/* Value */}
            <div className="text-3xl font-bold">{stat.value}</div>

            {/* Label Button-style */}
            <div className="w-full py-2 px-4 border border-white/40 rounded-full text-center text-sm mb-4">
              {stat.label}
            </div>

            {/* Bottom Accent Bar */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-1.5 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
