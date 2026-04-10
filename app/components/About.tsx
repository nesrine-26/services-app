"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Responsive mask sizes
  const maskCircleSize = typeof window !== 'undefined' && window.innerWidth < 640 ? "25px" : "45px";

  return (
    <div
      id="about"
      className="relative bg-white dark:bg-slate-950 font-sans selection:bg-cyan-100 dark:selection:bg-indigo-900 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Image Section (Top on mobile, Left on Desktop) */}
        <section
          className={`order-2 relative z-10 w-full md:w-1/2 flex justify-center transition-all duration-1000 delay-300 transform ${
            mounted ? "translate-x-0 opacity-100 scale-100" : "-translate-x-10 opacity-0 scale-95"
          }`}
        >
          <motion.div
            initial={{width:0  }}
  whileInView={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="hover:scale-110 w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] bg-cover bg-center shadow-2xl"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=1171&auto=format&fit=crop')`,
              WebkitMaskImage: `
                radial-gradient(circle ${maskCircleSize} at 35% 25%, black 98%, transparent 100%),
                radial-gradient(circle ${maskCircleSize} at 65% 25%, black 98%, transparent 100%),
                radial-gradient(circle ${maskCircleSize} at 20% 50%, black 98%, transparent 100%),
                radial-gradient(circle ${maskCircleSize} at 50% 50%, black 98%, transparent 100%),
                radial-gradient(circle ${maskCircleSize} at 80% 50%, black 98%, transparent 100%),
                radial-gradient(circle ${maskCircleSize} at 35% 75%, black 98%, transparent 100%),
                radial-gradient(circle ${maskCircleSize} at 65% 75%, black 98%, transparent 100%)
              `,
              maskImage: `
                radial-gradient(circle ${maskCircleSize} at 35% 25%, black 98%, transparent 100%),
                radial-gradient(circle ${maskCircleSize} at 65% 25%, black 98%, transparent 100%),
                radial-gradient(circle ${maskCircleSize} at 20% 50%, black 98%, transparent 100%),
                radial-gradient(circle ${maskCircleSize} at 50% 50%, black 98%, transparent 100%),
                radial-gradient(circle ${maskCircleSize} at 80% 50%, black 98%, transparent 100%),
                radial-gradient(circle ${maskCircleSize} at 35% 75%, black 98%, transparent 100%),
                radial-gradient(circle ${maskCircleSize} at 65% 75%, black 98%, transparent 100%)
              `,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          />
          {/* Floating Decorative Element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-500/20 dark:bg-indigo-500/30 rounded-full blur-3xl z-[-1] "></div>
        </section>

        {/* Text Content Section */}
        <div
          className={`w-full md:w-1/2 text-center md:text-right transition-all duration-1000 transform order-1 ${
            mounted ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}
          dir="rtl"
        >
          <motion.h1
  initial={{ x: 150, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2744] dark:text-slate-100 mb-4 leading-tight"
>
  نرحب بكم على صفحتنا الرئيسية
</motion.h1>


          <motion.p 
          initial={{x:100}}
          whileInView={{x:0}}
          transition={{duration:1.2, ease:"easeInOut"}}
          className="text-lg sm:text-xl font-semibold text-[#e84060] dark:text-rose-400 mb-6">
            لطالما اشتقنا لزيارتك الأولى طويلاً . . .
          </motion.p>

          <motion.p 
          initial={{x:100}}
          whileInView={{x:0}}
          transition={{duration:1.4, ease:"easeInOut"}}
          className="text-base sm:text-lg text-gray-700 dark:text-slate-400 leading-relaxed mx-auto md:mr-0 max-w-xl">
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي
            توزيعاً طبيعياً.
          </motion.p>

          <motion.button 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:1.8, ease:"easeInOut"}}
          className="mt-10 px-10 py-4 bg-[#1a2744] dark:bg-indigo-600 text-white font-medium rounded-full hover:bg-[#e84060] dark:hover:bg-rose-500 transition-all duration-300 shadow-xl hover:scale-105 active:scale-95">
            اكتشف المزيد
          </motion.button>
        </div>
      </div>

      {/* Decorative Background Dots */}
      <div className="px-96 bg-amber-500 ">
<div className="absolute bottom-10  z-50 left-1/6 hidden lg:block bg-[radial-gradient(circle,_#3b82f6_1px,_transparent_1px)]  bg-[size:24px_24px]  h-24 w-96  dark:bg-[radial-gradient(circle,_#fff_1px,_transparent_1px)]"></div>
      <div className="absolute hidden top-10 z-50 right-1/6 bg-[radial-gradient(circle,_#3b82f6_1px,_transparent_1px)] bg-[size:24px_24px] h-24 w-96 lg:block"></div>
    
      </div>
      
    </div>
  );
}