"use client";

import Image from "next/image";

const circleImages = [
  { src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=200&h=200&fit=crop", alt: "London Bridge" },
  { src: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=200&h=200&fit=crop", alt: "Big Ben" },
  { src: "https://images.unsplash.com/photo-1448906654166-444d494666b3?w=200&h=200&fit=crop", alt: "London Eye" },
  { src: "https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?w=200&h=200&fit=crop", alt: "Tower Bridge" },
  { src: "https://images.unsplash.com/photo-1543965170-e399d2e96b59?w=200&h=200&fit=crop", alt: "Westminster" },
  { src: "https://images.unsplash.com/photo-1568869934-48dd6c7b6dff?w=200&h=200&fit=crop", alt: "London Street" },
  { src: "https://images.unsplash.com/photo-1520637102912-2df6bb2aec6d?w=200&h=200&fit=crop", alt: "Hyde Park" },
];

export default function About() {
  return (
    <div className="relative bg-white font-sans selection:bg-cyan-100 min-h-screen flex flex-col overflow-hidden">
      {/* Background Decorative Dots */}
      <div className="bg-[radial-gradient(circle,_#3b82f6_1px,_transparent_1px)] bg-[size:20px_20px] h-1/3 w-1/3 absolute bottom-20 left-0 opacity-20 z-0"></div>
      <div className="bg-[radial-gradient(circle,_#3b82f6_1px,_transparent_1px)] bg-[size:20px_20px] h-1/3 w-1/3 absolute top-0 right-0 opacity-20 z-0"></div>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex items-center">
        <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 md:px-20 max-w-7xl mx-auto gap-16 md:gap-24">
          
          {/* Left: Circle Image Cluster */}
          <div className="flex-shrink-0 w-[260px] h-[260px] relative order-2 md:order-1">
            <CircleCluster images={circleImages} />
          </div>

          {/* Right: Text Content */}
          <div className="flex-1 text-right">
            <h1 className="text-4xl md:text-[2.4rem] font-bold text-[#1a2744] mb-3 leading-tight">
              نرحب بكم علي صفحتنا الرئيسية
            </h1>

            <p className="text-xl md:text-[1.35rem] font-semibold text-[#e84060] mb-6 leading-relaxed">
              لطالما اشتقنا لزيارتك الأولى طويلا . . .
            </p>

            <p className="text-[0.97rem] text-gray-700 leading-[2] text-justify max-w-[560px] ml-auto">
               هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ
            عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يبقرأها.
            ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاً طبيعياً -إلى حد ما-
            للأحرف عوضاً عن استخدام «هنا يوجد محتوى نصي، هنا يوجد محتوى نصي» فتجعلها
            تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامج النشر المكتبي وبرامج تحرير
            صفحات الويب تستخدم لوريم إيبسوم بشكل افتراضي كنموذج عن النص، وإذا قمت
            بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في
            نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً
            عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.
            </p>
          </div>
        </section>
      </main>

      {/* Bottom Decorative Section */}
      <footer className="relative bg-[#2eb8c0] h-32 w-full mt-auto">
        <div className="max-w-7xl mx-auto h-full relative">
            <BuildingIllustration />
        </div>
      </footer>
    </div>
  );
}

function CircleCluster({ images }: { images: Array<{ src: string; alt: string }> }) {
  const size = 95;
  const gap = 8;
  const step = size + gap;

  const positions = [
    { x: step * 0.5 + gap, y: 0 },
    { x: step * 1.5 + gap * 2, y: 0 },
    { x: step * 2.5 + gap * 3, y: 0 },
    { x: 0, y: step + gap * 0.5 },
    { x: step + gap, y: step + gap * 0.5 },
    { x: step * 2 + gap * 2, y: step + gap * 0.5 },
    { x: step * 3 + gap * 3, y: step + gap * 0.5 },
  ];

  return (
    <div className="relative w-full h-full">
      {images.slice(0, 7).map((img, i) => (
        <div
          key={i}
          className="absolute rounded-full overflow-hidden shadow-lg border-[3px] border-white transition-transform hover:scale-110 duration-300 z-20"
          style={{
            width: size,
            height: size,
            top: positions[i].y,
            left: positions[i].x,
          }}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

function BuildingIllustration() {
  return (
    <svg
      width="200"
      height="80"
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 right-10 md:right-20"
    >
      <rect x="60" y="10" width="50" height="70" fill="#1a6e7a" />
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={67 + col * 14}
            y={18 + row * 14}
            width="9"
            height="9"
            fill="#2eb8c0"
            fillOpacity="0.8"
          />
        ))
      )}
      <rect x="20" y="30" width="38" height="50" fill="#157080" />
      {[0, 1, 2].map((row) =>
        [0, 1].map((col) => (
          <rect
            key={`l-${row}-${col}`}
            x={26 + col * 14}
            y={37 + row * 14}
            width="9"
            height="9"
            fill="#2eb8c0"
            fillOpacity="0.7"
          />
        ))
      )}
      <rect x="125" y="55" width="6" height="25" fill="#0f5560" />
      <ellipse cx="128" cy="48" rx="18" ry="20" fill="#1a8a6e" />
      <ellipse cx="128" cy="44" rx="13" ry="15" fill="#1faa88" />
    </svg>
  );
}