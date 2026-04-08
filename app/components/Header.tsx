"use client";
import { useState } from "react";
import { Search, Menu, Flag, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "الأخبار", href: "#" },
    { name: "إحصائيات الموقع", href: "#" },
    { name: "ألبوم الصور", href: "#" },
    { name: "روابط سريعة", href: "#" },
    { name: "الفيديو", href: "#" },
    { name: "خدماتنا", href: "#" },
  ];

  return (
    <header
      className="w-full bg-gradient-to-r from-purple-700 via-indigo-800 to-teal-600 shadow-lg text-white font-sans sticky top-0 z-50"
      dir="rtl"
    >
      <div className="mx-4 md:mx-10 flex items-center justify-between py-4 gap-4">
        {/* Mobile Menu Toggle (Right side in RTL) */}
        <button
          className="lg:hidden p-2 hover:bg-white/10 rounded-md transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links - Desktop */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <a
            href="#"
            className="flex items-center gap-2 bg-pink-600 px-4 py-2 rounded-md hover:bg-pink-700 transition shadow-md"
          >
            <Flag size={16} />
            من نحن
          </a>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-cyan-300 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Search Bar (Centered/Flexible) */}
        <div className="flex-grow max-w-xs md:max-w-md relative">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="أدخل كلمة البحث هنا . . ."
              className="w-full bg-white/20 border border-white/30 text-white placeholder-white/70 rounded-full py-2 pr-4 pl-10 focus:outline-none focus:bg-white/30 focus:ring-2 focus:ring-cyan-400 transition text-sm"
            />
            <div className="absolute left-1 bg-indigo-900 p-2 rounded-full cursor-pointer hover:bg-indigo-950 transition">
              <Search size={16} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-indigo-900/95 backdrop-blur-md ${
          isOpen ? "max-h-screen border-t border-white/10" : "max-h-0"
        }`}
      >
        <div className="flex flex-col p-4 gap-4">
          <a
            href="#"
            className="flex items-center justify-center gap-2 bg-pink-600 px-4 py-3 rounded-md font-bold"
          >
            <Flag size={18} />
            من نحن
          </a>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-center py-2 border-b border-white/5 hover:text-cyan-300 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
