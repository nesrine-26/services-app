"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import LatestNewsSection from "./components/News";
import VideoSection from "./components/VideoSection";
import ImageGallery from "./components/Album";
import Statistics from "./components/Statistics";
import Infos from "./components/Infos";
import Links from "./components/Links";
import Contact from "./components/Contact";

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: "smooth" 
    });
  };

  return (
    <div className="relative w-full ">
      {/* Floating Scroll Controls */}
      <div 
        className={`fixed bottom-10 right-6 md:right-10 z-[100] flex flex-col gap-2 transition-all duration-500 transform ${
          showScroll 
            ? "opacity-100 translate-y-0 scale-100" 
            : "opacity-0 translate-y-10 scale-50 pointer-events-none"
        }`}
      >
        <button
          onClick={scrollToTop}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white rounded-full p-3 shadow-2xl hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-600 transition-all active:scale-90"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} strokeWidth={2.5} />
        </button>
        
        <button
          onClick={scrollToBottom}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white rounded-full p-3 shadow-2xl hover:bg-rose-500 hover:text-white dark:hover:bg-rose-600 transition-all active:scale-90"
          aria-label="Scroll to bottom"
        >
          <ArrowDown size={24} strokeWidth={2.5} />
        </button>
      </div>

      <Header />
      <Hero />
      <About />
      <LatestNewsSection />
      <Statistics />
      <ImageGallery />
      <Links />
      <VideoSection />
      <Infos />
      <Contact />
    </div>
  );
}