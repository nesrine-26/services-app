import React from 'react';
import { Network, Calendar, Building2, PhoneCall, Globe, Briefcase, Contact2, Clock } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className=" relative flex-1 flex flex-col w-full overflow-hidden text-white font-sans h-[calc(100vh-70px)]">
<Image src="/bg.avif" alt="Background Image" fill className="object-cover object-[center_30%] opacity-20 relative z-10" />
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br w-screen  from-yellow-600 via-purple-900 to-blue-950  " />
<div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] bg-[size:20px_20px]" />

      <div className=" relative z-10 flex flex-col flex-1 h-full">

        {/* Vertical Pagination Dots (Far Left) */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 items-center z-20">
          <div className="w-6 h-6 bg-pink-500 rounded-full ring-4 ring-white/20" />
          <div className="w-6 h-6 border-2 border-white rounded-full" />
          <div className="w-6 h-6 border-2 border-white rounded-full" />
          <div className="w-6 h-6 border-2 border-white rounded-full" />
        </div>

        {/* Top Section: Logo and Diamond Menu */}
        <div className="flex justify-between items-start p-10 flex-grow">

          {/* Right: Logo */}
          <div className="text-center">
            <div className="w-16 h-16 border-2 border-yellow-500 rotate-45 flex items-center justify-center mx-auto mb-4">
              <div className="-rotate-45 text-blue-400 text-2xl">💎</div>
            </div>
            <h1 className="text-2xl font-bold">قالب كريستال</h1>
            <p className="text-yellow-400 text-sm">آية من الجمال</p>
          </div>
          <div className="relative mt-16 ml-16">
            {/* Rotate the whole grid 45deg */}
            <div className="grid grid-cols-2 gap-2 rotate-45" style={{ minWidth: '200px', minHeight: '200px' }}>

              {/* Top-Left Cell: Globe */}
              <div className="w-25 h-25 bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/40 transition cursor-pointer">
                <Globe size={24} className="-rotate-45" />
              </div>

              {/* Top-Right Cell: Contact */}
              <div className="w-25 h-25 bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/40 transition cursor-pointer">
                <Contact2 size={24} className="-rotate-45" />
              </div>

              {/* Bottom-Left Cell: Briefcase */}
              <div className="w-25 h-25  bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/40 transition cursor-pointer">
                <Briefcase size={24} className="-rotate-45" />
              </div>
              <div className="w-25 h-25 bg-white text-pink-600 shadow-xl flex items-center justify-center cursor-pointer">
                <div className="-rotate-45 flex flex-col items-center gap-1">
                  <Clock size={20} />
                  <p className="text-center text-xs font-semibold leading-tight" style={{ maxWidth: '48px' }}>
                    خدمات الموقع
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Section: Navigation Tabs */}
        <div className="px-10 grid md:grid-cols-4 grid-cols-1 w-screen mx-auto bg-blue-950 backdrop-blur-md border-t border-white/10">
          <NavItem icon={<Network size={20} />} label="الهيكل التنظيمي" />
          <NavItem icon={<Calendar size={20} />} label="أهم الأحداث" />
          <NavItem icon={<Building2 size={20} />} label="الهيكل الإداري" />
          <NavItem icon={<PhoneCall size={20} />} label="اتصل بنا" />
        </div>
      </div>
    </section>
  );
};

const NavItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="group flex flex-col items-center py-6 cursor-pointer hover:bg-white/10 transition-all relative border-l border-white/5 last:border-l-0">
    {/* Hover arc indicator — always rendered, toggled via opacity */}
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-3 z-10  bg-blue-950 rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className='rounded-2xl w-80 h-40 absolute bottom-0 border-t border-r border-l border-dashed '>
    <div className="  border-dashed w-fit mx-auto -mt-10 backdrop-blur-sm bg-white/30 mb-10 p-8  rounded-full border border-white/30 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    </div>
    <div className='w-20 h-20 absolute bg-blue-950 rounded-full bottom-3 -z-10 '></div>
    <span className="text-sm font-medium z-0    bg-blue-950">{label}</span>
  </div>
);

export default Hero;