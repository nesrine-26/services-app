"use client";
import { useEffect, useState } from "react";
import {
  Search,
  Menu,
  Flag,
  X,
  Newspaper,
  BarChart3,
  Image,
  Video,
  Briefcase,
  Link,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
const Header = ({ darkTheme = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === "dark" : darkTheme;

  const navLinks = [
    { name: "من نحن", href: "#about", icon: <Flag size={16} /> },
    { name: "الأخبار", href: "#news", icon: <Newspaper size={16} /> },
    {
      name: "إحصائيات الموقع",
      href: "#statistics",
      icon: <BarChart3 size={16} />,
    },
    { name: "ألبوم الصور", href: "#album", icon: <Image size={16} /> },
    { name: "روابط سريعة", href: "#links", icon: <Link size={16} /> },
    { name: "الفيديو", href: "#video", icon: <Video size={16} /> },
    { name: "خدماتنا", href: "#services", icon: <Briefcase size={16} /> },
  ];

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-colors duration-300 shadow-lg font-sans
        ${
          isDark
            ? "bg-slate-950 text-slate-100 border-b border-slate-800"
            : "bg-gradient-to-r from-purple-700 via-indigo-800 to-teal-600 text-white"
        }`}
    >
      <div className="mx-4 md:mx-10 flex items-center justify-between py-4 gap-4">
        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            className="p-2 hover:bg-white/10 rounded-md transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Theme Icon (Visible next to hamburger) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 transition"
          >
            {isDark ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} />
            )}
          </button>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`flex justify-center items-center gap-2 transition-all duration-200
                ${
                  active === link.name
                    ? (isDark ? "bg-indigo-600 text-white" : "bg-pink-600") +
                      " px-4 py-2 rounded-md shadow-md"
                    : "hover:text-cyan-300"
                }`}
            >
              {active === link.name ? link.icon : ""}
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 transition ml-4"
          >
            {isDark ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} />
            )}
          </button>
        </nav>

        {/* Search Bar */}
        <div className="flex-grow max-w-xs md:max-w-md relative">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="أدخل كلمة البحث هنا . . ."
              className={`w-full border rounded-full py-2 pr-4 pl-10 focus:outline-none focus:ring-2 transition text-sm
                ${
                  isDark
                    ? "bg-slate-900 border-slate-700 text-slate-200 placeholder-slate-500 focus:ring-indigo-500"
                    : "bg-white/20 border-white/30 text-white placeholder-white/70 focus:bg-white/30 focus:ring-cyan-400"
                }`}
            />
            <div
              className={`absolute left-1 p-2 rounded-full cursor-pointer transition
              ${isDark ? "bg-indigo-600 hover:bg-indigo-500" : "bg-indigo-900 hover:bg-indigo-950"}`}
            >
              <Search size={16} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isDark ? "bg-slate-900" : "bg-indigo-900/95 backdrop-blur-md"}
          ${isOpen ? "max-h-screen border-t border-white/10" : "max-h-0"}
        `}
      >
        <div className="flex flex-col p-4 gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-center py-3 border-b transition w-full flex items-center justify-center gap-3
                ${isDark ? "border-slate-800 hover:bg-slate-800" : "border-white/5 hover:text-cyan-300"}
              `}
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
