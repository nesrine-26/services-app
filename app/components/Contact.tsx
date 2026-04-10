import React from "react";
import { MapPin, Phone, Mail, Quote } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const quickLinks = [
    "الرئيسية",
    "عن الموقع",
    "خدماتنا",
    "من نحن",
    "الأخبار",
    "ألبوم الصور",
    "الوظائف",
    "الرئيسية",
    "عن الموقع",
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=200&h=200&fit=crop",
  ];

  return (
    <footer className="w-full font-sans text-white overflow-hidden transition-colors duration-500" dir="rtl">
      {/* Top Accent Bar */}
      <div className="h-12 bg-cyan-400 dark:bg-cyan-600 w-full transition-colors"></div>

      <div className="flex flex-col lg:flex-row min-h-[500px]">
        {/* Left Section: About and Quick Links (60% width) */}
        <div className="lg:w-3/5 bg-[#1a2e6b] dark:bg-slate-900 p-10 flex flex-col md:flex-row gap-10 transition-colors">
          {/* About Us Column */}
          <div className="md:w-1/2 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-cyan-400">
              <Quote size={20} className="rotate-180" />
              <h3 className="text-xl font-bold">رؤيتنا</h3>
            </div>
            <p className="text-sm leading-loose text-gray-300">
              نحن نسعى لتقديم حلول رقمية مبتكرة تجمع بين الإبداع الفني والدقة التقنية، 
              نهدف دائماً لتطوير تجربة المستخدم وتلبية تطلعات عملائنا في التحول الرقمي 
              من خلال فريق عمل متخصص وشغوف بالتميز.
            </p>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-3">
                <span className="p-1 border border-yellow-400 rounded-sm">
                  <MapPin size={18} className="text-yellow-400" />
                </span>
                <span className="text-sm">طنطا - شارع سعيد - كلية التجارة</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="p-1 border border-cyan-400 rounded-sm">
                  <Phone size={18} className="text-cyan-400" />
                </span>
                <span className="text-sm" dir="ltr">
                  +2 040 ( 3314275 - 3316612 )
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="p-1 border border-pink-500 rounded-sm">
                  <Mail size={18} className="text-pink-500" />
                </span>
                <span className="text-sm">support@crystal-template.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Newsletter Column */}
          <div className="md:w-1/2 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-cyan-400">
              <Quote size={20} className="rotate-180" />
              <h3 className="text-xl font-bold">روابط مختصرة</h3>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {quickLinks.map((link, idx) => (
                <button
                  key={idx}
                  className="bg-[#111f4d] dark:bg-slate-800 py-2 px-1 text-xs hover:bg-cyan-600 transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-4">
              <p className="text-sm text-gray-300 leading-relaxed">
                اشترك في نشرتنا البريدية لتصلك أحدث أخبارنا وخدماتنا مباشرة إلى بريدك الإلكتروني
              </p>
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني هنا"
                className="bg-[#2d4386] dark:bg-slate-800 p-3 text-sm outline-none border-b-2 border-transparent focus:border-cyan-400 transition-all"
              />
              <button className="bg-pink-600 hover:bg-pink-700 dark:bg-cyan-600 dark:hover:bg-cyan-700 py-3 font-bold transition-colors">
                اشترك الآن
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section: Photo Gallery (30% width) */}
        <div className="lg:w-[30%] bg-[#fbc531] dark:bg-slate-800 p-10 flex flex-col gap-6 transition-colors">
          <div className="flex items-center gap-2 text-[#1a2e6b] dark:text-cyan-400">
            <Quote size={20} className="rotate-180" />
            <h3 className="text-xl font-bold">أحدث الأعمال</h3>
          </div>
          <div className="grid grid-cols-3 gap-1">
            {galleryImages.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="Our Projects"
                className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            ))}
          </div>
        </div>

        {/* Right Section: Social Sidebar (10% width) */}
        <div className="lg:w-[10%] bg-[#1a2e6b] dark:bg-slate-900 flex flex-col items-center justify-center gap-4 py-10 transition-colors">
             {/* Social items would go here */}
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="bg-[#111f4d] dark:bg-slate-900 py-6 px-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 border-t border-white/5 transition-colors">
        <div className="flex gap-4">
          <span className="hover:text-cyan-400 cursor-pointer transition-colors">سياسة الخصوصية</span>
          <span>|</span>
          <span className="hover:text-cyan-400 cursor-pointer transition-colors">شروط الاستخدام</span>
          <span>|</span>
          <span className="hover:text-cyan-400 cursor-pointer transition-colors">مركز المساعدة</span>
        </div>
        
        <div className="mt-4 md:mt-0 font-medium">
          تصميم وبرمجة بواسطة <span className="text-white">Crystal Dev Team</span> © {new Date().getFullYear()}
        </div>

        <div className="flex gap-4 mt-4 md:mt-0">
          <span>متوفر على:</span>
          <div className="flex gap-2 text-lg">
            <span className="cursor-pointer hover:text-white transition-colors" title="Apple Store"></span>
            <span className="cursor-pointer hover:text-white transition-colors" title="Google Play Store">🤖</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;