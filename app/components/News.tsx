"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

interface NewsCard {
  id: string;
  image: string;
  title: string;
  description: string;
}

const newsCards: NewsCard[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=200&h=200&fit=crop",
    title: "الخبر الأول",
    description: "وصف مختصر للخبر الأول يظهر هنا",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=200&h=200&fit=crop",
    title: "الخبر الثاني",
    description: "وصف مختصر للخبر الثاني يظهر هنا",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=200&h=200&fit=crop",
    title: "الخبر الثالث",
    description: "وصف مختصر للخبر الثالث يظهر هنا",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=200&h=200&fit=crop",
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
    <section 
      id="news" 
      className="min-h-7xl py-28 w-full bg-[#1dd1a1] dark:bg-slate-900 transition-colors duration-500"
    >
      <h3 className={`text-center mb-10 text-white font-bold text-3xl transition-all duration-700 transform ${mounted ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
        احدث الاخبار
      </h3>
      
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {newsCards.map((card, index) => (
          <div
            key={card.id}
            style={{ transitionDelay: `${index * 100}ms` }}
            className={`p-2 border border-dashed border-white border-2 rounded-full w-fit h-[75%] transition-all duration-700 transform ${
              mounted ? "scale-100 opacity-100" : "scale-50 opacity-0"
            } hover:scale-105`}
          >
            <div className="bg-white dark:bg-slate-800 rounded-full h-full p-2 justify-center transition-colors">
              <div className="bg-pink-700 dark:bg-indigo-600 rounded-full pb-3 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full object-cover rounded-full"
                />
              </div>

              <p className="text-center font-bold text-gray-800 dark:text-slate-100 mt-2">
                {card.title}
              </p>
              <p className="max-w-50 mx-auto text-center font-bold text-amber-600 dark:text-amber-400">
                {card.description}
              </p>
              
              <div className="border-dashed border-red-600 dark:border-rose-500 rounded-full w-fit mx-auto p-1 border-2 mt-3">
                <div className="rounded-full bg-[#1dd1a1] dark:bg-indigo-600 text-2xl text-white w-10 flex justify-center items-center h-10 m-auto hover:rotate-90 transition-transform cursor-pointer">
                  <Plus size={20} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}