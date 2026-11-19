"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
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

// 30 repetitions (90 slides total) provides an immense buffer so even intense rapid-fire clicking
// never reaches an edge or gets stuck, and silently resets to center (index 45) when idle.
const extendedSlides = Array.from({ length: 30 }, () => slides).flat();

export default function HeroCarousel() {
  // Start at index 45 (Slide 1 at the center of the 90-slide buffer)
  const [current, setCurrent] = useState(45);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);

  // When transition is disabled for silent recentering, re-enable it on the next painted frame
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrent((prev) => {
      if (prev <= 2) {
        return 45 + ((prev % slides.length) - 1);
      }
      return prev - 1;
    });
  };

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrent((prev) => {
      if (prev >= extendedSlides.length - 3) {
        return 45 + ((prev % slides.length) + 1);
      }
      return prev + 1;
    });
  };

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    if (e.propertyName !== "transform") return;

    // Normalize back to center range [45, 46, 47] without animation
    const realIndex = ((current % slides.length) + slides.length) % slides.length;
    const centerIndex = 45 + realIndex;

    if (current !== centerIndex) {
      setIsTransitioning(false);
      setCurrent(centerIndex);
    }
  };

  const goToSlide = (pageIndex: number) => {
    setIsTransitioning(true);
    setCurrent(45 + pageIndex);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const diff = dragStartX - e.clientX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Compute active pagination dot (0, 1, or 2)
  const activeDotIndex = ((current % slides.length) + slides.length) % slides.length;

  return (
    <div className="relative w-full h-[640px] lg:h-full min-h-[580px] rounded-[12px] overflow-hidden bg-[#0e1011] select-none">
      {/* Docked Top-Left Navbar */}
      <Navbar />

      {/* Sliding Carousel Track Container */}
      <div
        className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div
          onTransitionEnd={handleTransitionEnd}
          className={`flex flex-row w-full h-full ${
            isTransitioning
              ? "transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
              : "transition-none"
          }`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {extendedSlides.map((slide, index) => (
            <div
              key={`${slide.id}-${index}`}
              className="relative w-full h-full shrink-0 flex-none select-none"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 45}
                className="object-cover object-top pointer-events-none"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />

              {/* Slide-specific "View Project ↗" button that slides with the image */}
              <div className="absolute left-8 bottom-8 z-10 pointer-events-auto">
                <a
                  href="#work"
                  className="flex items-center gap-1.5 px-[14px] py-[10px] rounded-[6px] bg-[#0e1011]/20 hover:bg-[#0e1011]/40 text-white text-[14px] font-normal leading-none transition-colors cursor-pointer"
                >
                  <span>View Project</span>
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 10L10 4M10 4H5.5M10 4V8.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Left Navigation Arrow */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-[40px] h-[40px] rounded-[4px] bg-[#0e1011]/20 hover:bg-[#0e1011]/40 transition-colors flex items-center justify-center cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
          <path fill="transparent" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22.5 12.5 15 20l7.5 7.5" />
        </svg>
      </button>

      {/* Right Navigation Arrow */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-[40px] h-[40px] rounded-[4px] bg-[#0e1011]/20 hover:bg-[#0e1011]/40 transition-colors flex items-center justify-center cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
          <path fill="transparent" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.5 12.5 25 20l-7.5 7.5" />
        </svg>
      </button>

      {/* Bottom Center Pagination Dots Capsule */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[30px] z-20 flex items-center bg-black/20 rounded-full px-2 py-1 select-none">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goToSlide(i)}
            aria-label={`Scroll to page ${i + 1}`}
            className="p-1.5 cursor-pointer focus:outline-none"
          >
            <div
              className={`w-[10px] h-[10px] rounded-full bg-white transition-opacity ${activeDotIndex === i ? "opacity-100" : "opacity-50 hover:opacity-75"
                }`}
            />
          </button>
        ))}
      </div>

      {/* Bottom Right Inverted Notch "Selected Work" */}
      <div className="absolute bottom-0 right-0 z-20 bg-[#0e1011] pt-[12px] pb-[8px] px-[16px] rounded-tl-[18px] rounded-tr-none rounded-br-none rounded-bl-none select-none flex items-center justify-center">
        <span className="text-[14px] font-normal text-white leading-[1.2] whitespace-pre">
          Selected Work
        </span>

        {/* Inverted Corner Fillet - Top Right */}
        <svg
          className="absolute -top-[18px] right-0 w-[18px] h-[18px] overflow-visible pointer-events-none"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M 18 0 L 19 0 L 19 19 L 0 19 L 0 18 C 9.941 18 18 9.941 18 0 Z"
            fill="#0e1011"
          />
        </svg>

        {/* Inverted Corner Fillet - Bottom Left */}
        <svg
          className="absolute bottom-0 -left-[18px] w-[18px] h-[18px] overflow-visible pointer-events-none"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M 18 0 L 19 0 L 19 19 L 0 19 L 0 18 C 9.941 18 18 9.941 18 0 Z"
            fill="#0e1011"
          />
        </svg>
      </div>
    </div>
  );
}
