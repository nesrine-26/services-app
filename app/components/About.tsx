"use client";

import Image from "next/image";

const circleImages = [
  {
    src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=200&h=200&fit=crop",
    alt: "London Bridge",
  },
  {
    src: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=200&h=200&fit=crop",
    alt: "Big Ben",
  },
  {
    src: "https://images.unsplash.com/photo-1448906654166-444d494666b3?w=200&h=200&fit=crop",
    alt: "London Eye",
  },
  {
    src: "https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?w=200&h=200&fit=crop",
    alt: "Tower Bridge",
  },
  {
    src: "https://images.unsplash.com/photo-1543965170-e399d2e96b59?w=200&h=200&fit=crop",
    alt: "Westminster",
  },
  {
    src: "https://images.unsplash.com/photo-1568869934-48dd6c7b6dff?w=200&h=200&fit=crop",
    alt: "London Street",
  },
  {
    src: "https://images.unsplash.com/photo-1520637102912-2df6bb2aec6d?w=200&h=200&fit=crop",
    alt: "Hyde Park",
  },
];

export default function About() {
  return (
    <div className="relative justify-center items-center max-w-7xl mx-auto bg-white font-sans selection:bg-cyan-100 min-h-screen flex  overflow-hidden">
      {/* Right: Text Content */}
      <div className=" ">
        <h1 className="text-4xl md:text-[2.4rem] font-bold text-[#1a2744] mb-3 leading-tight">
          نرحب بكم علي صفحتنا الرئيسية
        </h1>

        <p className="text-xl md:text-[1.35rem] font-semibold text-[#e84060] mb-6 leading-relaxed">
          لطالما اشتقنا لزيارتك الأولى طويلا . . .
        </p>

        <p className="text-[0.97rem] text-gray-700 leading-[2] text-justify max-w-[560px] ml-auto">
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
      <div className="bg-[radial-gradient(circle,_#000000_1px,_transparent_1px)] bg-[size:20px_20px] h-2/3 w-1/3 absolute bottom-20 left-0 opacity-20 z-0"></div>
      <div className="bg-[radial-gradient(circle,_#3b82f6_1px,_transparent_1px)] bg-[size:20px_20px] h-2/3 w-1/3 absolute top-0 right-0 opacity-20 z-0"></div>

      <section className="flex max-w-7xl mx-auto justify-center p-10 g">
        {/* The Masked Container */}
        <div
          className="w-96 h-96 bg-cover bg-center "
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
