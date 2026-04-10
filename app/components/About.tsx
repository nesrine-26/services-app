"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
    initial={{width:0, opacity:0}}
    whileInView={{width:"100%", opacity:1}}
    transition={{duration:0.5}}
      id="about"
      className="relative justify-center items-center transition-all ease-in-out bg-white dark:bg-slate-950 font-sans selection:bg-cyan-100 dark:selection:bg-indigo-900 min-h-7xl my-10 flex flex-col md:flex-row overflow-hidden px-4 py-12 md:py-0 gap-8 md:gap-12 transition-colors duration-500"
    >
      <div className="flex items-center justify-between">
        {/* Text Content */}
        <div
          className={`max-w-7xl  mx-auto relative z-10 w-full md:w-1/2 text-right transition-all duration-1000 transform ${
            mounted ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
          dir="rtl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-[2.4rem] font-bold text-[#1a2744] dark:text-slate-100 mb-3 leading-tight">
            نرحب بكم علي صفحتنا الرئيسية
          </h1>

          <p className="text-lg sm:text-xl md:text-[1.35rem] font-semibold text-[#e84060] dark:text-rose-400 mb-6 leading-relaxed">
            لطالما اشتقنا لزيارتك الأولى طويلا . . .
          </p>

          <p className="text-[0.97rem] text-gray-700 dark:text-slate-400 leading-[2] text-justify max-w-[560px]">
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي
            توزيعاً طبيعياً -إلى حد ما- للأحرف عوضاً عن استخدام «هنا يوجد محتوى
            نصي، هنا يوجد محتوى نصي» فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء.
          </p>

          <button className="mt-8 px-8 py-3 bg-[#1a2744] dark:bg-indigo-600 text-white rounded-full hover:bg-[#e84060] dark:hover:bg-rose-500 transition-colors duration-300 shadow-lg">
            اكتشف المزيد
          </button>
        </div>

        {/* Background Decorative Dots (Professional adjustment for Dark Mode) */}
        <div className="bg-[radial-gradient(circle,_#000000_1px,_transparent_1px)] dark:bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] bg-[size:20px_20px] h-2/3 w-1/3 absolute bottom-20 left-0 opacity-10 dark:opacity-5 z-0 hidden sm:block"></div>
        <div className="bg-[radial-gradient(circle,_#3b82f6_1px,_transparent_1px)] bg-[size:20px_20px] h-2/3 w-1/3 absolute top-0 right-0 opacity-10 dark:opacity-10 z-0 hidden sm:block"></div>

        {/* Masked Image Section */}
        <section
          className={`relative z-10 flex justify-center w-full md:w-1/2 p-4 sm:p-10 transition-all duration-1000 delay-300 transform ${
            mounted
              ? "translate-x-0 opacity-100 scale-100"
              : "-translate-x-20 opacity-0 scale-90"
          }`}
        >
        <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeInOut" }}
  viewport={{ once: true }}
  className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-cover bg-center shadow-2xl"
  style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=1171&auto=format&fit=crop')`,
    
    WebkitMaskImage: `
      radial-gradient(circle 45px at 35% 25%, black 98%, transparent 100%),
      radial-gradient(circle 45px at 65% 25%, black 98%, transparent 100%),
      radial-gradient(circle 45px at 20% 50%, black 98%, transparent 100%),
      radial-gradient(circle 45px at 50% 50%, black 98%, transparent 100%),
      radial-gradient(circle 45px at 80% 50%, black 98%, transparent 100%),
      radial-gradient(circle 45px at 35% 75%, black 98%, transparent 100%),
      radial-gradient(circle 45px at 65% 75%, black 98%, transparent 100%)
    `,
    
    maskImage: `
      radial-gradient(circle 45px at 35% 25%, black 98%, transparent 100%),
      radial-gradient(circle 45px at 65% 25%, black 98%, transparent 100%),
      radial-gradient(circle 45px at 20% 50%, black 98%, transparent 100%),
      radial-gradient(circle 45px at 50% 50%, black 98%, transparent 100%),
      radial-gradient(circle 45px at 80% 50%, black 98%, transparent 100%),
      radial-gradient(circle 45px at 35% 75%, black 98%, transparent 100%),
      radial-gradient(circle 45px at 65% 75%, black 98%, transparent 100%)
    `,

    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
  }}
/>


          {/* Floating Decorative Element for Dark Mode */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-rose-500/10 dark:bg-indigo-500/20 rounded-full blur-2xl z-[-1] animate-pulse"></div>
        </section>
      </div>
    </motion.div>
  );
}
