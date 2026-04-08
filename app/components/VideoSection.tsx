"use client";
import { Pause, PlayIcon } from "lucide-react";
import { useRef, useState } from "react";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <section
      className="relative flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-x-16 min-h-screen w-full px-6 py-12 overflow-hidden"
      dir="rtl"
    >
      {/* Background Image Overlay */}
      <img
        className="absolute inset-0 opacity-20 w-full h-full object-cover -z-10"
        src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1476&auto=format&fit=crop"
        alt="Background"
      />

      {/* Video Container Area */}
      <div className="relative w-full md:w-3/4 lg:w-[45%] aspect-video bg-white/40 p-3 md:p-5 rounded-2xl z-10 shadow-[8px_8px_0px_rgba(0,0,0,0.2)] md:shadow-[15px_15px_0px_rgba(0,0,0,0.3)]">
        <video
          ref={videoRef}
          className="w-full h-full rounded-xl object-cover bg-black"
          poster="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>

        {/* Play/Pause Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <button
            onClick={togglePlay}
            className="bg-[#1dd1a1] text-white border-4 border-white/50 p-4 md:p-6 rounded-full backdrop-blur-sm pointer-events-auto hover:scale-110 transition-transform shadow-lg"
          >
            {playing ? (
              <Pause size={28} />
            ) : (
              <PlayIcon fill="white" size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full lg:w-[40%] text-center lg:text-right z-10">
        <h2 className="text-xl md:text-2xl font-bold mb-3 text-pink-500">
          فيديو الموقع
        </h2>
        <p className="text-gray-800 mb-4 font-bold text-2xl md:text-3xl lg:max-w-md leading-snug">
          جولة ميدانية لكاميرا الموقع داخل أسوار الشركة
        </p>

        <hr className="border-gray-300 mb-4 w-24 mx-auto lg:mr-0 lg:ml-auto" />

        <p className="text-gray-600 mb-8 max-w-lg mx-auto lg:mr-0">
          ابدأ رحلتك معنا الآن فالعديد من الخدمات والأماكن تستحق زيارتك. استمتع
          بمشاهدة التفاصيل وكأنك معنا في قلب الحدث.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <button className="bg-orange-400 text-white font-bold py-2 px-8 hover:bg-orange-500 transition-all shadow-md active:scale-95">
            مشاهدة الفيديو
          </button>
          <button className="bg-pink-600 text-white font-bold py-2 px-8 hover:bg-pink-700 transition-all shadow-md active:scale-95">
            مزيد من الفيديوهات
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
