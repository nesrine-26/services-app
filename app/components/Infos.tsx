"use client";
import { Link2 } from "lucide-react";
import React, { useEffect, useState } from "react";

const Infos = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = [
    { text: "المجلس الأعلى للجامعات", color: "bg-pink-600" },
    { text: "تصميم المواقع الإلكترونية", color: "bg-cyan-500" },
    { text: "برمجة تطبيقات الموبايل", color: "bg-orange-500" },
    { text: "التسويق الإلكتروني", color: "bg-red-500" },
    { text: "برامج سطح المكتب", color: "bg-slate-800 dark:bg-slate-700" },
    { text: "حملات ترويجية", color: "bg-green-500" },
  ];

  return (
    <div
      className="flex flex-col lg:flex-row w-full min-h-screen bg-gray-50 dark:bg-slate-950 font-sans transition-colors duration-500"
      id="services"
    >
      {/* Left Section: Text and Grid */}
      <div 
        className={`w-full lg:w-1/2 p-6 md:p-12 lg:p-16 flex flex-col justify-center transition-all duration-1000 transform ${
          mounted ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-slate-100 mb-2 leading-tight">
          نرحب بكم على صفحتنا الرئيسية
        </h2>
        <h3 className="text-xl md:text-2xl text-pink-600 dark:text-rose-400 mb-6">
          لطالما اشتقنا لزيارتك الأولى طويلا . . .
        </h3>

        <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-10 text-justify">
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
          التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاً
          طبيعياً -إلى حد ما- للأحرف.
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((item, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`border-2 border-dashed border-gray-300 dark:border-slate-800 rounded-full flex items-center justify-between p-1 pl-6 group hover:border-pink-500 dark:hover:border-indigo-500 transition-all transform ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
            >
              <span
                className={`flex justify-center items-center rounded-full text-white w-10 h-10 shadow-lg shrink-0 transition-transform group-hover:scale-110 ${item.color}`}
              >
                <Link2 size={18} />
              </span>
              <span className="text-gray-700 dark:text-slate-200 font-medium text-sm md:text-base mr-3 group-hover:text-pink-600 dark:group-hover:text-indigo-400 transition-colors">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Background Image with Floating Card */}
      <div className="w-full lg:w-1/2 relative min-h-[600px] lg:min-h-full overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] hover:scale-110"
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80"
          alt="Workspace Background"
        />
        {/* Overlay adapted for Dark Mode */}
        <div className="absolute inset-0 bg-black/30 dark:bg-slate-950/40"></div>

        {/* Floating Card Container with Entrance Animation */}
        <div className="relative z-10 flex items-center justify-center h-full p-4 md:p-12 lg:p-20">
          <div 
            className={`bg-white dark:bg-slate-900/90 dark:backdrop-blur-xl w-full max-w-2xl p-6 md:p-10 shadow-2xl rounded-sm flex flex-col transition-all duration-1000 delay-500 transform ${
              mounted ? "scale-100 opacity-100" : "scale-90 opacity-0"
            } border border-transparent dark:border-slate-800`}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-700 dark:text-slate-100 text-center mb-1">
              نرحب بكم على صفحتنا الرئيسية
            </h2>
            <h3 className="text-base md:text-lg text-pink-600 dark:text-rose-400 mb-8 text-center">
              لطالما اشتقنا لزيارتك الأولى طويلا . . .
            </h3>

            {/* Inner Grid for sub-items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Item 1 */}
              <div className="flex flex-col items-center sm:items-start group">
                <div className="aspect-video w-full mb-3 overflow-hidden rounded-sm ring-1 ring-black/5 dark:ring-white/10">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80"
                    alt="City 1"
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-slate-400 mb-4 text-center sm:text-right">
                  بعض النص هنا يشير إلى مفهوم واضح ومختصر
                </p>
                <button className="bg-slate-800 dark:bg-indigo-600 text-white px-8 py-2 text-sm hover:bg-slate-700 dark:hover:bg-indigo-500 transition-colors w-full sm:w-auto rounded-sm">
                  المزيد
                </button>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-center sm:items-start group">
                <div className="aspect-video w-full mb-3 overflow-hidden rounded-sm ring-1 ring-black/5 dark:ring-white/10">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&q=80"
                    alt="City 2"
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-slate-400 mb-4 text-center sm:text-right">
                  بعض النص هنا يشير إلى مفهوم واضح ومختصر
                </p>
                <button className="bg-red-500 dark:bg-rose-600 text-white px-8 py-2 text-sm hover:bg-red-400 dark:hover:bg-rose-500 transition-colors w-full sm:w-auto rounded-sm">
                  المزيد
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infos;