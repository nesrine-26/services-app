"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface NewsCard {
  id: string;
  image: string;
  title: string;
  description: string;
}

const newsCards: NewsCard[] = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=200&h=200&fit=crop",
    title: "الخبر الأول",
    description: "وصف مختصر للخبر الأول يظهر هنا",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=200&h=200&fit=crop",
    title: "الخبر الثاني",
    description: "وصف مختصر للخبر الثاني يظهر هنا",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=200&h=200&fit=crop",
    title: "الخبر الثالث",
    description: "وصف مختصر للخبر الثالث يظهر هنا",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=200&h=200&fit=crop",
    title: "الخبر الرابع",
    description: "وصف مختصر للخبر الرابع يظهر هنا",
  },
];

export default function LatestNewsSection() {
  return (
    <section className="min-h-7xl py-28 w-full bg-[#1dd1a1] dark:bg-gray-900">
      <h3 className="text-center mb-10 text-white font-bold text-3xl">
        احدث الاخبار
      </h3>
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {newsCards.map((card) => (
          <div
            key={card.id}
            className="p-2 border border-dashed border-white dark:border-gray-500 border-2 rounded-full w-fit h-[75%]"
          >
            <div className="bg-white dark:bg-gray-800 rounded-full h-full p-2 justify-center">
              <div className="bg-pink-700 dark:bg-pink-800 rounded-full pb-3">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full object-cover rounded-full"
                />
              </div>

              <p className="text-center dark:text-white">{card.title}</p>
              <p className="max-w-50 mx-auto text-center font-bold text-amber-00 dark:text-gray-300">
                {card.description}
              </p>
              <div className="border-dashed border-red-600 dark:border-red-400 rounded-full w-fit mx-auto p-1 border-2 mt-3">
                <div className="rounded-full bg-[#1dd1a1] dark:bg-teal-700 text-2xl text-white w-10 flex justify-center items-center h-10 m-auto">
                  +
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}