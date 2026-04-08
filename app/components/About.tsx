"use client";

import Image from "next/image";

export default function About() {
  return (
    <div
      className="relative w-full min-h-screen bg-white font-sans selection:bg-cyan-100 flex flex-col lg:flex-row items-center justify-center overflow-hidden px-6 py-12 lg:p-20"
      dir="rtl"
    >
      {/* Background Decorative Dots - Hidden on mobile for clarity */}
      <div className="hidden lg:block bg-[radial-gradient(circle,_#000000_1px,_transparent_1px)] bg-[size:20px_20px] h-1/2 w-1/4 absolute bottom-10 right-0 opacity-10 -z-10"></div>
      <div className="hidden lg:block bg-[radial-gradient(circle,_#3b82f6_1px,_transparent_1px)] bg-[size:20px_20px] h-1/2 w-1/4 absolute top-0 left-0 opacity-10 -z-10"></div>

      {/* Right Content: Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-right z-10 lg:pl-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2744] mb-4 leading-tight">
          نرحب بكم علي صفحتنا الرئيسية
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl font-semibold text-[#e84060] mb-6 leading-relaxed">
          لطالما اشتقنا لزيارتك الأولى طويلا . . .
        </p>

        <p className="text-sm md:text-base text-gray-700 leading-[2] text-justify max-w-2xl mx-auto lg:mr-0">
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
          التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاً
          طبيعياً -إلى حد ما- للأحرف عوضاً عن استخدام «هنا يوجد محتوى نصي، هنا
          يوجد محتوى نصي» فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من
          برامج النشر المكتبي وبرامج تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل
          افتراضي كنموذج عن النص.
        </p>
      </div>

      {/* Left Content: The Masked Image Container */}
      <section className="w-full lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0 z-10">
        <div
          className="w-72 h-72 md:w-[450px] md:h-[450px] bg-cover bg-center transition-all duration-500 ease-in-out hover:rotate-2 hover:scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=1171&auto=format&fit=crop')`,
            WebkitMaskImage: `
              radial-gradient(circle 12% at 35% 25%, black 100%, transparent 100%),
              radial-gradient(circle 12% at 65% 25%, black 100%, transparent 100%),
              radial-gradient(circle 14% at 20% 50%, black 100%, transparent 100%),
              radial-gradient(circle 14% at 50% 50%, black 100%, transparent 100%),
              radial-gradient(circle 14% at 80% 50%, black 100%, transparent 100%),
              radial-gradient(circle 14% at 35% 75%, black 100%, transparent 100%),
              radial-gradient(circle 14% at 65% 75%, black 100%, transparent 100%)
            `,
            maskImage: `
              radial-gradient(circle 12% at 35% 25%, black 100%, transparent 100%),
              radial-gradient(circle 12% at 65% 25%, black 100%, transparent 100%),
              radial-gradient(circle 14% at 20% 50%, black 100%, transparent 100%),
              radial-gradient(circle 14% at 50% 50%, black 100%, transparent 100%),
              radial-gradient(circle 14% at 80% 50%, black 100%, transparent 100%),
              radial-gradient(circle 14% at 35% 75%, black 100%, transparent 100%),
              radial-gradient(circle 14% at 65% 75%, black 100%, transparent 100%)
            `,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
      </section>
    </div>
  );
}
