"use client";

import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "عنوان الصورة",
    description: "بعض التفاصيل عن الصورة",
    src: "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=800&h=500&fit=crop",
    dot: "#f4c430",
  },
  {
    id: 2,
    title: "لحظات الطفولة",
    description: "ذكريات لا تُنسى من أيام الطفولة",
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=500&fit=crop",
    dot: "#e8403a",
  },
  {
    id: 3,
    title: "غروب الشمس",
    description: "جمال الطبيعة في وقت الغروب",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
    dot: "#f4a030",
  },
  {
    id: 5,
    title: "قمم الجبال",
    description: "رحلة إلى أعلى القمم الثلجية",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop",
    dot: "#40c88a",
  },
];

export default function ImageGallery() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative flex w-full min-h-screen">
      
       
      {/* Left */}
      <div className="bg-[#f4c430] w-1/3  ">
           
      </div>

      {/* Right */}
      <div className="bg-[#1dd1a1] flex-1  text-white">
     
      </div>
       <div className="h-20 w-[75%] bg-tranparent gap-10  absolute flex justify-between rounded-2xl -translate-x-1/2 left-1/2">
    <button className="relative z-10 font bold text-4xl">
          البوم الصور
      </button>
      <button className="relative z-10 text-white  border px-5 py-0 my-3 rounded-xl font-bold ">
         المزيد من الصور
      </button>
       </div>
      {/* Center Card */}
      <div className="h-[75%] w-[75%] flex flex-col md:flex-row justify-between items-center bg-white gap-10 p-6 md:p-10 absolute  rounded-2xl -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 shadow-xl">

       
     

     
        <div className="w-full  h-full md:w-1/2">
          <img
            src={slides[active].src}
            alt={slides[active].title}
            className="rounded-[10%] w-full h-full  object-cover"
          />
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-4 gap-4 w-full   h-full md:w-1/2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActive(index)}
              className={`rounded-full overflow-hidden border-4 transition ${
                active === index
                  ? "border-black/20 border-dashed scale-105"
                  : "border-transparent opacity-70"
              }`}
            >
              <img
                src={slide.src}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
      
  );
}
