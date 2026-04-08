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

     
        {/* Thumbnails */}
<div className="flex gap-4 w-full h-full relative"> 
  {slides.map((slide, index) => (
    <button
      key={slide.id}
      onClick={() => setActive(index)}
      // 1. We move the expansion logic here. 
      // 2. 'flex-grow' handles the smooth expansion.
      className={`relative h-full overflow-hidden  transition-all duration-700 ease-in-out z-10 
        ${active === index ? "flex-[3] rounded-4xl" : "flex-1 border-white/10 rounded-full"}`}
    >
      {/* Image fills the button entirely */}
      <img
        src={slide.src}
        alt={slide.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay for text/details (only visible when active) */}
      <div className={`absolute inset-0 bg-black/30 transition-opacity duration-500 
        ${active === index ? "opacity-100" : "opacity-10"}`} 
      />

      {/* Badge/Index */}
      <div className={`${active === index ? "absolute bottom-5 right-5" : "absolute bottom-10 z-10 left-1/2 -translate-1/2 "}` } >
        <div className={`w-10 h-10 flex items-center justify-center rounded-full  text-white font-bold shadow-lg `} style={{backgroundColor: slide.dot }} >
          {index + 1}
        </div>
      </div>

      {/* Optional Title - only shows when expanded */}
      {active === index && (
        <div className="absolute bottom-5 left-5 text-right animate-fadeIn">
           <h3 className="text-white font-bold text-xl">{slide.title}</h3>
           <p className="text-white">{slide.description}</p>
        </div>
      )}
    </button>
  ))}
</div>
      </div>
    </div>
      
  );
}
