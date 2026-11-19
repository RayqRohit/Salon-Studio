"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";
import ClientMarquee from "@/components/ClientMarquee";
import FooterSection from "@/components/FooterSection";

const exhibitions = [
  { title: "Through the Lens", year: "2024" },
  { title: "Candid Connections", year: "2024" },
  { title: "Urban Stories", year: "2023" },
  { title: "Nature's Palette", year: "2023" },
  { title: "Moments Unseen", year: "2022" },
  { title: "Reflections of Prague", year: "2022" },
];

const awards = [
  { title: "Prague Photography Award", year: "2024" },
  { title: "European Fine Art Photography", year: "2024" },
  { title: "Best Urban Photography", year: "2023" },
  { title: "Nature Photographer of the Year", year: "2023" },
  { title: "Candid Moments Award", year: "2022" },
  { title: "Excellence in Visual Storytelling", year: "2022" },
];

export default function AboutPage() {
  const rightColumnRef = useRef<HTMLElement>(null);

  const handleLeftWheel = (e: React.WheelEvent<HTMLElement>) => {
    if (rightColumnRef.current && window.innerWidth >= 1024) {
      rightColumnRef.current.scrollTop += e.deltaY;
    }
  };

  return (
    <main className="min-h-screen lg:h-screen lg:overflow-hidden bg-[#0e1011] p-3 md:p-3.5 text-white">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-3 items-start">
        {/* Left Column: Fixed / Sticky Showcase Card */}
        <section
          aria-label="About Showcase"
          className="w-full h-full"
          onWheel={handleLeftWheel}
        >
          <div className="relative w-full h-[480px] sm:h-[540px] lg:h-full lg:min-h-[580px] rounded-[12px] overflow-hidden bg-[#0e1011] select-none">
            {/* Docked Top-Left Navbar (highlights About) */}
            <Navbar />

            {/* Main Hero Photo of Ema Hanssen */}
            <Image
              src="/images/work-studio.webp"
              alt="Ema Hanssen"
              fill
              priority
              className="object-cover object-[51%_21%] pointer-events-none scale-[1.08] translate-y-7 md:translate-y-9"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />

            {/* Bottom-Right Inverted Notch Badge "Ema Hanssen" */}
            <div className="absolute bottom-0 right-0 z-20 bg-[#0e1011] pt-[12px] pb-[8px] px-[18px] rounded-tl-[18px] select-none flex items-center justify-center">
              <span className="text-[14px] font-normal text-white leading-[1.2] whitespace-pre">
                Ema Hanssen
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
        </section>

        {/* Right Column: Independent Scroll Container */}
        <section
          ref={rightColumnRef}
          aria-label="About Profile & History"
          className="w-full h-full lg:overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex flex-col gap-3"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Top Row: BioCard + SocialLinks Stack */}
          <div className="grid grid-cols-1 md:grid-cols-[1.55fr_1fr] gap-3 items-stretch shrink-0">
            {/* Bio Card */}
            <div className="bg-white/[0.07] rounded-[12px] py-8 md:py-10 lg:py-11 px-6 md:px-8 lg:px-9 text-white flex flex-col justify-between h-full select-none">
              <div className="flex items-center gap-4">
                <div className="relative w-[70px] h-[70px] rounded-full overflow-hidden bg-zinc-800 shrink-0">
                  <Image
                    src="/images/avatar-ema.webp"
                    alt="Ema Hanssen"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[18px] font-normal text-white tracking-normal leading-[1.2]">
                    Ema Hanssen
                  </h1>
                  <p className="text-[14px] font-normal text-white/60 leading-[1.2] mt-1">
                    Photographer
                  </p>
                </div>
              </div>

              <p className="text-[15px] font-normal text-white leading-[1.65] mt-10">
                I&apos;m Ema, a photographer based in Prague. I capture authentic moments and tell stories through my images, blending creativity and emotion in each shot.
              </p>
            </div>

            {/* Social Links & Contact Me */}
            <SocialLinks />
          </div>

          {/* About Card */}
          <div className="bg-white/[0.07] rounded-[12px] p-7 md:p-9 lg:p-10 flex flex-col gap-10 md:gap-14 lg:gap-16 select-none shrink-0">
            <h2 className="text-[28px] md:text-[32px] font-normal text-white leading-tight">
              About
            </h2>
            <div className="flex flex-col gap-5 text-[14px] md:text-[15px] font-normal text-white/80 leading-[1.65]">
              <p>
                With a focus on both candid moments and stunning landscapes, I strive to evoke emotion and tell stories through my work. My photography blends the rawness of everyday life with the artistry of fine art, allowing viewers to connect with each image on a deeper level.
              </p>
              <p>
                Whether I&apos;m exploring urban environments or venturing into nature, my goal is the extraordinary in the ordinary. Through my lens, I invite you to join me on this journey of discovery and inspiration.
              </p>
            </div>
          </div>

          {/* Clients Card with Infinite Logo Marquee */}
          <div className="bg-white/[0.07] rounded-[12px] px-6 py-5 md:px-8 md:py-6 flex items-center gap-6 md:gap-10 overflow-hidden select-none shrink-0">
            <span className="text-[15px] md:text-[16px] text-white/70 font-normal shrink-0">
              Clients
            </span>
            <div className="flex-1 overflow-hidden">
              <ClientMarquee />
            </div>
          </div>

          {/* Exhibitions Section */}
          <div className="bg-white/[0.07] rounded-[12px] p-7 md:p-9 lg:p-10 flex flex-col gap-8 md:gap-10 select-none shrink-0">
            <div className="flex flex-col gap-10 md:gap-14 lg:gap-16">
              <h2 className="text-[28px] md:text-[34px] font-normal text-white leading-tight">
                Exhibitions
              </h2>
              <p className="text-[14px] md:text-[15px] font-normal text-white/60 leading-[1.6] max-w-[560px]">
                Discover a curated collection of my photography work, capturing moments of emotion, nature, and urban life in stunning detail.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 w-full">
              {exhibitions.map((item, index) => (
                <div
                  key={index}
                  className="group w-full min-h-[76px] md:min-h-0 md:h-[66px] px-5 md:px-6 py-4 md:py-0 rounded-[12px] bg-white/[0.05] hover:bg-white/[0.10] flex items-center justify-between text-white transition-all duration-300 ease-out cursor-pointer select-none"
                >
                  <div className="flex flex-col gap-1 md:block">
                    <span className="text-[16px] md:text-[18px] font-normal text-white tracking-tight">
                      {item.title}
                    </span>
                    <span className="text-[14px] font-normal text-white/60 md:hidden">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex items-center text-[15px] md:text-[16px] shrink-0">
                    <span className="hidden md:inline text-white/60 group-hover:text-white/80 transition-colors duration-300">
                      {item.year}
                    </span>
                    {/* Arrow: Always visible on mobile, animated hover on desktop */}
                    <div className="flex items-center text-white/70 group-hover:text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:max-w-0 md:opacity-0 md:-translate-x-2 md:pointer-events-none md:group-hover:max-w-[28px] md:group-hover:opacity-100 md:group-hover:translate-x-0 md:group-hover:ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0"
                      >
                        <line x1="4" y1="12" x2="12" y2="4" />
                        <polyline points="5.5 4 12 4 12 10.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Recognitions Section */}
          <div className="bg-white/[0.07] rounded-[12px] p-7 md:p-9 lg:p-10 flex flex-col gap-8 md:gap-10 select-none shrink-0">
            <div className="flex flex-col gap-10 md:gap-14 lg:gap-16">
              <h2 className="text-[28px] md:text-[34px] font-normal text-white leading-tight">
                Awards &amp; Recognitions
              </h2>
              <p className="text-[14px] md:text-[15px] font-normal text-white/60 leading-[1.6] max-w-[560px]">
                Honored to receive multiple awards for excellence in photography, recognizing my creative vision and commitment to capturing compelling visual stories.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 w-full">
              {awards.map((item, index) => (
                <div
                  key={index}
                  className="group w-full min-h-[76px] md:min-h-0 md:h-[66px] px-5 md:px-6 py-4 md:py-0 rounded-[12px] bg-white/[0.05] hover:bg-white/[0.10] flex items-center justify-between text-white transition-all duration-300 ease-out cursor-pointer select-none"
                >
                  <div className="flex flex-col gap-1 md:block">
                    <span className="text-[16px] md:text-[18px] font-normal text-white tracking-tight">
                      {item.title}
                    </span>
                    <span className="text-[14px] font-normal text-white/60 md:hidden">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex items-center text-[15px] md:text-[16px] shrink-0">
                    <span className="hidden md:inline text-white/60 group-hover:text-white/80 transition-colors duration-300">
                      {item.year}
                    </span>
                    {/* Arrow: Always visible on mobile, animated hover on desktop */}
                    <div className="flex items-center text-white/70 group-hover:text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:max-w-0 md:opacity-0 md:-translate-x-2 md:pointer-events-none md:group-hover:max-w-[28px] md:group-hover:opacity-100 md:group-hover:translate-x-0 md:group-hover:ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0"
                      >
                        <line x1="4" y1="12" x2="12" y2="4" />
                        <polyline points="5.5 4 12 4 12 10.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Section */}
          <FooterSection showAllProjects={false} showSocials={false} />
        </section>
      </div>
    </main>
  );
}
