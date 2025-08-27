'use client'; // Required for client-side features like useEffect

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

/* const slides = [
  { id: 1, content: 'Slide 1', bg: '<Image src="/ProjectImgs/Aeidan/img1.jpg" alt="About Us" object-fill"/>' },
  { id: 2, content: 'Slide 2', bg: 'bg-gray-200' },
  { id: 3, content: 'Slide 3', bg: 'bg-gray-200' },
]; */

export default function Slider({selectedProject}) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 4000; // auto scroll delay in ms

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, delay);

    return () => resetTimeout();
  }, [current]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  if (!selectedProject) return null;
  const slides = selectedProject.sliderImages

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden h-64 lg:h-96 mt-10 rounded-lg shadow-lg">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`min-w-full h-64 flex items-center justify-center text-white text-3xl font-bold`}
          >
            <Image src= {slide.bg} alt="About Us" width={700} height={400} object-fill='true'/>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/40 text-white px-3 py-2 z-10 hover:bg-black/60"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/40 text-white px-3 py-2 z-10 hover:bg-black/60"
      >
        ›
      </button>
    </div>
  );
}
