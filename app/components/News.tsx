'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface NewsCard {
  id: string;
  image: string;
  title: string;
  description: string;
}

const newsCards: NewsCard[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=200&h=200&fit=crop',
    title: 'الخبر الأول',
    description: 'وصف مختصر للخبر الأول يظهر هنا',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=200&h=200&fit=crop',
    title: 'الخبر الثاني',
    description: 'وصف مختصر للخبر الثاني يظهر هنا',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=200&h=200&fit=crop',
    title: 'الخبر الثالث',
    description: 'وصف مختصر للخبر الثالث يظهر هنا',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=200&h=200&fit=crop',
    title: 'الخبر الرابع',
    description: 'وصف مختصر للخبر الرابع يظهر هنا',
  },
];

export default function LatestNewsSection() {
  return (
    <section className="w-full bg-cyan-500 py-12 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-white text-2xl md:text-3xl font-bold">احدث الأخبار</h2>
      </div>

      {/* News Cards Grid */}
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {newsCards.map((card) => (
          <div key={card.id} className="flex flex-col items-center">
            {/* Circular Image Container */}
            <div className="relative w-40 h-40 mb-4">
              <div className="absolute inset-0 bg-white rounded-full p-2">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="bg-white rounded-3xl p-6 w-48 text-center shadow-lg">
              {/* Title */}
              <h3 className="text-gray-800 font-semibold text-sm mb-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                {card.description}
              </p>

              {/* Action Button */}
              <button className="bg-cyan-500 text-white rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto hover:bg-cyan-600 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
