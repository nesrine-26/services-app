"use client";
import { useState } from "react";
import { Search, Menu, Flag } from "lucide-react"; // Using lucide-react for icons

const Header = () => {
  const [active, setActive] = useState("من نحن");
  return (
    <header className="w-full bg-gradient-to-r from-purple-700 via-indigo-800 to-teal-600 p-4 shadow-lg text-white font-sans">
      <div className=" mx-10 flex items-center justify-between gap-4">
        {/* Right Side: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <a
            href="#"
            className="flex items-center gap-1 bg-pink-600 px-3 py-1.5 rounded-md hover:bg-pink-700 transition"
          >
            <Flag size={16} />
            من نحن
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            الأخبار
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            إحصائيات الموقع
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            ألبوم الصور
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            روابط سريعة
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            الفيديو
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            خدماتنا
          </a>

          <button className="flex items-center gap-1 hover:text-gray-200 transition">
            القائمة
            <Menu size={16} />
          </button>
        </nav>

        {/* Left Side: Search Bar */}
        <div className="flex-grow max-w-md relative">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="أدخل كلمة البحث هنا . . ."
              className="w-full bg-white/20 border border-white/30 text-white placeholder-white/70 rounded-full py-2 pr-4 pl-10 focus:outline-none focus:bg-white/30 transition"
            />
            <div className="absolute left-2 bg-indigo-900 p-1.5 rounded-full cursor-pointer hover:bg-indigo-950 transition">
              <Search size={18} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
