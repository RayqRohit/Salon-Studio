"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "./Navbar";

const slides = [
  {
    id: 1,
    title: "Good Las Vuguue",
    src: "/images/hero-slide-1.webp",
    alt: "Slide 01 - Fashion portrait back print",
  },
  {
    id: 2,
    title: "Studio Editorial",
    src: "/images/hero-slide-2.webp",
    alt: "Slide 02 - Editorial styling",
  },
  {
    id: 3,
    title: "Contemporary Minimal",
    src: "/images/hero-slide-3.webp",
    alt: "Slide 03 - Contemporary portrait",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[640px] lg:h-full min-h-[580px] rounded-[12px] rounded-tl-none overflow-hidden bg-[#0e1011] select-none group">
      {/* Docked Top-Left Navbar */}
      <Navbar />

      {/* Carousel Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            className="object-cover object-top"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      ))}

      {/* Left Navigation Arrow */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-[8px] bg-black/40 backdrop-blur-md flex items-center justify-center text-white/90 hover:bg-black/70 hover:scale-105 transition active:scale-95"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Right Navigation Arrow */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-[8px] bg-black/40 backdrop-blur-md flex items-center justify-center text-white/90 hover:bg-black/70 hover:scale-105 transition active:scale-95"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Bottom Left "View Project ↗" */}
      <div className="absolute left-5 bottom-5 z-20">
        <button
          type="button"
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-[8px] bg-black/40 backdrop-blur-md text-white/90 text-[13px] font-normal hover:bg-black/70 hover:text-white transition"
        >
          <span>View Project</span>
          <span className="text-xs">↗</span>
        </button>
      </div>

      {/* Bottom Center Pagination Dots */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-5 z-20 flex items-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all rounded-full ${
              current === i
                ? "w-4 h-1.5 bg-white"
                : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Bottom Right Inverted Notch "Selected Work" */}
      <div className="absolute bottom-0 right-0 z-20 bg-[#0e1011] px-5 py-2.5 rounded-tl-[18px]">
        <span className="text-[12px] font-normal text-white">
          Selected Work
        </span>

        {/* Inverted Corner Fillets */}
        <svg
          className="absolute -top-[18px] right-0 w-[18px] h-[18px] pointer-events-none"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path d="M 18 18 L 18 0 C 18 9.941 9.941 18 0 18 Z" fill="#0e1011" />
        </svg>
        <svg
          className="absolute bottom-0 -left-[18px] w-[18px] h-[18px] pointer-events-none"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path d="M 18 18 L 18 0 C 18 9.941 9.941 18 0 18 Z" fill="#0e1011" />
        </svg>
      </div>
    </div>
  );
}
