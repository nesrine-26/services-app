"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

interface NewsCard {
  id: string;
  image: string;
  title: string;
  description: string;
}

const newsCards: NewsCard[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=400&fit=crop",
    title: "الخبر الأول",
    description: "وصف مختصر للخبر الأول يظهر هنا",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=400&fit=crop",
    title: "الخبر الثاني",
    description: "وصف مختصر للخبر الثاني يظهر هنا",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=400&fit=crop",
    title: "الخبر الثالث",
    description: "وصف مختصر للخبر الثالث يظهر هنا",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=400&fit=crop",
    title: "الخبر الرابع",
    description: "وصف مختصر للخبر الرابع يظهر هنا",
  },
];

export default function LatestNewsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="about"
      className="relative justify-center items-center bg-white dark:bg-slate-950 font-sans selection:bg-cyan-100 dark:selection:bg-cyan-900 min-h-screen flex flex-col overflow-hidden px-4 py-12 transition-colors duration-500"
    >
      <h3
        className={`text-center mb-10 text-slate-800 dark:text-white font-bold text-3xl transition-all duration-700 transform ${
          mounted ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        أحدث الأخبار
      </h3>

      <div className="flex items-center justify-center gap-8 flex-wrap">
        {newsCards.map((card, index) => (
          <div
            key={card.id}
            style={{ transitionDelay: `${index * 100}ms` }}
            className={`p-2 border-2 border-dashed border-cyan-500 dark:border-cyan-400 rounded-full w-72 transition-all duration-700 transform ${
              mounted ? "scale-100 opacity-100" : "scale-50 opacity-0"
            } hover:scale-105`}
          >
            <div className="bg-cyan-400  dark:bg-slate-800 rounded-full h-full p-4 flex flex-col items-center transition-colors shadow-sm">
              <div className=" bg-cyan-600 dark:bg-cyan-700 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-md">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full aspect-square object-cover rounded-full"
                />
              </div>

              <p className="text-center font-bold text-white dark:text-slate-100 mt-4 text-lg">
                {card.title}
              </p>
              <p className="max-w-[180px] mx-auto text-center text-sm text-slate-200 dark:text-cyan-200/70 mt-1">
                {card.description}
              </p>

              <div className="border-2 border-dashed border-white dark:border-cyan-400 rounded-full w-fit mx-auto p-1 mt-4">
                <div className="rounded-full bg-cyan-500 dark:bg-cyan-600 text-white w-10 h-10 flex justify-center items-center hover:rotate-90 transition-transform cursor-pointer shadow-lg shadow-cyan-200 dark:shadow-none">
                  <Plus size={20} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}