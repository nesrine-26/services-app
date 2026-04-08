import React from "react";
import { GraduationCap, Laptop, Pencil } from "lucide-react";

const Links = () => {
  const services = [
    {
      title: "تصميم المواقع الإلكترونية",
      icon: <GraduationCap size={32} className="text-yellow-400" />,
    },
    {
      title: "برمجة تطبيقات سطح المكتب",
      icon: <GraduationCap size={32} className="text-cyan-400" />,
    },
    {
      title: "برمجة تطبيقات الهواتف المحمولة",
      icon: <Laptop size={32} className="text-cyan-400" />,
    },
    {
      title: "خدمات التسويق الإلكتروني",
      icon: <Pencil size={32} className="text-cyan-400" />,
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row w-full min-h-[600px] items-stretch overflow-hidden">
      {/* Right Section: Image Background */}
      {/* On mobile: full width, fixed height. On desktop: 50% width, full height */}
      <div className="relative w-full lg:w-1/2 min-h-[350px] lg:min-h-full">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
          alt="User working"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/50 backdrop-blur-[1px]"></div>

        <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6">
          <h2 className="text-white border-2 border-white rounded-full px-6 py-2 md:px-8 md:py-3 text-lg md:text-xl font-bold backdrop-blur-md shadow-xl text-center whitespace-nowrap">
            روابط سريعة
          </h2>
        </div>
      </div>

      {/* Left Section: Dark Blue Content */}
      <div className="w-full lg:w-1/2 bg-[#1e3a8a] p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <div className="flex flex-col xl:flex-row gap-8 md:gap-10 items-start w-full">
          {/* Text Column */}
          <div className="w-full xl:w-1/2 flex flex-col gap-4 order-1">
            <h2 className="text-yellow-400 text-2xl md:text-3xl font-bold leading-tight">
              تصميم المواقع الإلكترونية
            </h2>
            <h3 className="text-pink-500 text-lg md:text-xl font-medium">
              وصف مختصر عن الخدمة . .
            </h3>
            <p className="text-white text-justify leading-relaxed text-sm md:text-base opacity-90">
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم.
            </p>
            <button className="bg-pink-600 text-white w-fit px-8 py-2 rounded-md mt-4 hover:bg-pink-700 transition-transform active:scale-95 shadow-lg">
              التفاصيل
            </button>
          </div>

          {/* List Column */}
          <div className="w-full xl:w-1/2 flex flex-col gap-3 order-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-3 border border-cyan-500/20 bg-white/5 hover:bg-white/10 transition-all cursor-pointer rounded-sm"
              >
                <div className="border border-pink-500 p-2 flex items-center justify-center bg-[#1e3a8a] shrink-0">
                  {service.icon}
                </div>
                <span className="text-white text-sm md:text-base font-medium group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Links;
