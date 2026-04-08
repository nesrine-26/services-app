"use client";
import { Pause, Play, PlayIcon } from "lucide-react";
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
    <div className="relative flex justify-center gap-x-10 min-h-screen items-center w-full mx-auto">
      <img
        className="absolute inset-0 opacity-40 w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="relative w-1/3 h-1/2 p-5 bg-white/50 rounded-2xl  z-10 shadow-[10px_10px_0px_rgba(0,0,0,0.4)] ">
        <video ref={videoRef} className="w-full h-full rounded-xl object-cover">
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay Controls */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={togglePlay}
            className="bg-[#1dd1a1] text-white border-4  p-3 rounded-full backdrop-blur-md"
          >
            {playing ? <Pause /> : <PlayIcon fill="white" size={20} />}
          </button>
        </div>
      </div>
      <div className="space-x-1 z-10 ">
        <h2 className="text-2xl font-bold mb-4 text-pink-500">
          {" "}
          فيديو الموقع{" "}
        </h2>
        <p className="text-gray-600 mb-6 font-bold text-2xl max-w-96">
          {" "}
          جولة ميدانية لكاميرا الموقع داخل أسوار الشركة
        </p>
        <hr />
        <p className="text-gray-600 mb-6">
          {" "}
          ابدأ رحلتك معنا الآن فالعديد من الخدمات والأماكن تستحق زيارتك{" "}
        </p>
        <button className="bg-orange-400 text-white py-1 px-6  hover:bg-orange-500 transition-colors">
          مشاهدة الفيديو
        </button>
        <button className="bg-pink-600 text-white py-1 px-6  hover:bg-pink-700 transition-colors cursor-pointer">
          مزيد من الفيديوهات
        </button>
      </div>
    </div>
  );
};

export default VideoSection;
