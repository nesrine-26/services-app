"use client";
import { Pause, PlayIcon } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    <motion.section
     
      className="relative flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-x-16 min-h-screen w-full px-6 py-12 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500"
      id="video"
    >
      {/* Background Image Overlay - Reduced opacity for Dark Mode */}
      <img
        className="absolute inset-0 opacity-10 dark:opacity-5 w-full h-full object-cover -z-10"
        src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1476&auto=format&fit=crop"
        alt="Background"
      />

      {/* Video Container Area with Entrance Animation */}
      <motion.div
       initial={{  y: 40 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5 }}
        className={`relative w-full md:w-3/4 lg:w-[45%] aspect-video bg-white/40 dark:bg-slate-800/40 p-3 md:p-5 rounded-2xl z-10 transition-all duration-1000 transform
          ${mounted ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}
          shadow-[8px_8px_0px_rgba(0,0,0,0.2)] md:shadow-[15px_15px_0px_rgba(0,0,0,0.3)] dark:md:shadow-[15px_15px_0px_rgba(79,70,229,0.2)]`}
      >
        <video
          ref={videoRef}
          className="w-full h-full rounded-xl object-cover bg-black shadow-inner"
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
            className="bg-[#1dd1a1] dark:bg-indigo-600 text-white border-4 border-white/50 p-4 md:p-6 rounded-full backdrop-blur-sm pointer-events-auto hover:scale-110 active:scale-95 transition-all shadow-lg group"
          >
            {playing ? (
              <Pause size={28} />
            ) : (
              <PlayIcon
                fill="white"
                size={28}
                className="group-hover:scale-110 transition-transform"
              />
            )}
          </button>
        </div>
      </motion.div>

      {/* Content Area with Staggered Entrance */}
      <motion.div
       initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
        className={`w-full lg:w-[40%] text-center lg:text-right z-10 transition-all duration-1000 delay-300 transform
          ${mounted ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
      >
        <h2 className="text-xl md:text-2xl font-bold mb-3 text-pink-500 dark:text-rose-400">
          فيديو الموقع
        </h2>
        <p className="text-gray-800 dark:text-slate-100 mb-4 font-bold text-2xl md:text-3xl lg:max-w-md leading-snug">
          جولة ميدانية لكاميرا الموقع داخل أسوار الشركة
        </p>

        <hr className="border-gray-300 dark:border-slate-700 mb-4 w-24 mx-auto lg:mr-0 lg:ml-auto" />

        <p className="text-gray-600 dark:text-slate-400 mb-8 max-w-lg mx-auto lg:mr-0 leading-relaxed">
          ابدأ رحلتك معنا الآن فالعديد من الخدمات والأماكن تستحق زيارتك. استمتع
          بمشاهدة التفاصيل وكأنك معنا في قلب الحدث.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <button className="bg-orange-400 dark:bg-amber-500 text-white font-bold py-2 px-8 hover:bg-orange-500 dark:hover:bg-amber-600 transition-all shadow-md active:scale-95 rounded-sm">
            مشاهدة الفيديو
          </button>
          <button className="bg-pink-600 dark:bg-indigo-600 text-white font-bold py-2 px-8 hover:bg-pink-700 dark:hover:bg-indigo-700 transition-all shadow-md active:scale-95 rounded-sm">
            مزيد من الفيديوهات
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default VideoSection;
