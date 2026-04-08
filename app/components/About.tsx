

"use client";
 
import Image from "next/image";
 
export default function About() {
  return (
    <div className="relative justify-center items-center max-w-7xl mx-auto bg-white font-sans selection:bg-cyan-100 min-h-screen flex flex-col md:flex-row overflow-hidden px-4 py-12 md:py-0 gap-8 md:gap-12">
      
      {/* Text Content */}
      <div className="relative z-10 w-full md:w-1/2 text-right" dir="rtl">
        <h1 className="text-3xl sm:text-4xl md:text-[2.4rem] font-bold text-[#1a2744] mb-3 leading-tight">
          نرحب بكم علي صفحتنا الرئيسية
        </h1>
 
        <p className="text-lg sm:text-xl md:text-[1.35rem] font-semibold text-[#e84060] mb-6 leading-relaxed">
          لطالما اشتقنا لزيارتك الأولى طويلا . . .
        </p>
 
        <p className="text-[0.97rem] text-gray-700 leading-[2] text-justify max-w-[560px] ">
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
          التي يبقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاً
          طبيعياً -إلى حد ما- للأحرف عوضاً عن استخدام «هنا يوجد محتوى نصي، هنا
          يوجد محتوى نصي» فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من
          برامج النشر المكتبي وبرامج تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل
          افتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث
          ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين
          ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة،
          وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.
        </p>
      </div>
 
      {/* Background Decorative Dots */}
      <div className="bg-[radial-gradient(circle,_#000000_1px,_transparent_1px)] bg-[size:20px_20px] h-2/3 w-1/3 absolute bottom-20 left-0 opacity-20 z-0 hidden sm:block"></div>
      <div className="bg-[radial-gradient(circle,_#3b82f6_1px,_transparent_1px)] bg-[size:20px_20px] h-2/3 w-1/3 absolute top-0 right-0 opacity-20 z-0 hidden sm:block"></div>
 
      {/* Masked Image */}
      <section className="relative z-10 flex justify-center w-full md:w-1/2 p-4 sm:p-10">
        <div
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=1171&auto=format&fit=crop')`,
            WebkitMaskImage: `
              radial-gradient(circle 40px at 35% 25%, black 100%, transparent 100%),
              radial-gradient(circle 40px at 65% 25%, black 100%, transparent 100%),
              radial-gradient(circle 50px at 20% 50%, black 100%, transparent 100%),
              radial-gradient(circle 50px at 50% 50%, black 100%, transparent 100%),
              radial-gradient(circle 50px at 80% 50%, black 100%, transparent 100%),
              radial-gradient(circle 50px at 35% 75%, black 100%, transparent 100%),
              radial-gradient(circle 50px at 65% 75%, black 100%, transparent 100%)
            `,
            maskImage: `
              radial-gradient(circle 50px at 35% 25%, black 100%, transparent 100%),
              radial-gradient(circle 50px at 65% 25%, black 100%, transparent 100%),
              radial-gradient(circle 50px at 20% 50%, black 100%, transparent 100%),
              radial-gradient(circle 50px at 50% 50%, black 100%, transparent 100%),
              radial-gradient(circle 50px at 80% 50%, black 100%, transparent 100%),
              radial-gradient(circle 50px at 35% 75%, black 100%, transparent 100%),
              radial-gradient(circle 50px at 65% 75%, black 100%, transparent 100%)
            `,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
      </section>
    </div>
  );
}
 
