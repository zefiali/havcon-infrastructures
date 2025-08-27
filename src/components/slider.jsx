"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function Slider({ selectedProject }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const [open, setOpen] = useState(false);

  const delay = 4000;
  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  if (!selectedProject) return null;
  const slides = selectedProject.sliderImages;

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, delay);
    return () => resetTimeout();
  }, [current, slides.length]);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden h-64 lg:h-96 mt-10 rounded-lg shadow-lg">
      {/* Slider */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="min-w-full h-64 lg:h-96 flex items-center justify-center"
          >
            <Image
              src={slide.bg}
              alt={`Slide ${index + 1}`}
              width={700}
              height={400}
              className="cursor-pointer object-cover rounded-lg"
              onClick={() => {
                setCurrent(index);
                setOpen(true);
              }}
            />
          </div>
        ))}
      </div>

      {/* Slider arrows */}
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

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={current}
        slides={slides.map((s) => ({ src: s.bg }))}
        plugins={[Zoom]}
        on={{ view: ({ index }) => setCurrent(index) }}
      />
    </div>
  );
}
