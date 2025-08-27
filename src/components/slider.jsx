"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

export default function Slider({ selectedProject }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 4000; // autoplay delay

  if (!selectedProject) return null;
  const slides = selectedProject.sliderImages || [];

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, delay);
    return () => resetTimeout();
  }, [current, slides.length]);

  const nextSlide = () => setCurrent((p) => (p + 1) % slides.length);
  const prevSlide = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  return (
    <Gallery>
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden h-64 lg:h-96 mt-10 rounded-lg shadow-lg">
        {/* Slider track */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id ?? index}
              className="min-w-full h-64 lg:h-96 flex items-center justify-center"
            >
              <Item
                original={slide.bg}
                thumbnail={slide.bg}
                width={1600}
                height={900}
              >
                {({ ref, open }) => (
                  <div
                    className="relative w-full h-full group cursor-zoom-in"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrent(index);
                      open();
                    }}
                  >
                    <Image
                      ref={ref}
                      src={slide.bg}
                      alt={`Slide ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                    {/* Zoom icon on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/30 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </Item>
            </div>
          ))}
        </div>

        {/* slider arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/40 text-white px-3 py-2 z-10 hover:bg-black/60"
        >
          ‹
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/40 text-white px-3 py-2 z-10 hover:bg-black/60"
        >
          ›
        </button>
      </div>
    </Gallery>
  );
}
