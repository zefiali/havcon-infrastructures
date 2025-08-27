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

  // PhotoSwipe options — disable single-tap / vertical drag close so dialog isn't affected.
  const photoswipeOptions = {
    clickToCloseNonZoomable: false,
    closeOnScroll: false,
    closeOnVerticalDrag: false,
    clickToClose: false,
    pinchToClose: false,
    // allowPanToNext: true  // default is usually fine
  };

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
                width={1200}
                height={800}
              >
                {({ ref, open }) => (
                  <Image
                    ref={ref}
                    src={slide.bg}
                    alt={`Slide ${index + 1}`}
                    width={700}
                    height={400}
                    className="cursor-pointer object-cover rounded-lg"
                    onClick={(e) => {
                      // stop event bubbling to parent dialog + ensure slider index is synced
                      e.stopPropagation();
                      setCurrent(index); // sync slider index
                      open(); // open PhotoSwipe
                    }}
                  />
                )}
              </Item>
            </div>
          ))}
        </div>

        {/* slider arrows (main slider) */}
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
