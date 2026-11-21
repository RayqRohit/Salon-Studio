"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  src: string;
}

const projects: ProjectItem[] = [
  {
    id: "beige",
    title: "Beige",
    category: "Commercial",
    year: "2024",
    src: "/images/work-beige.webp",
  },
  {
    id: "darkness",
    title: "Darkness",
    category: "Commercial",
    year: "2024",
    src: "/images/work-darkness.webp",
  },
  {
    id: "gentlemen",
    title: "Gentlemen",
    category: "Editorial",
    year: "2024",
    src: "/images/work-gentlemen.webp",
  },
  {
    id: "city",
    title: "City",
    category: "Commercial",
    year: "2024",
    src: "/images/work-city.webp",
  },
  {
    id: "nature",
    title: "Nature",
    category: "Editorial",
    year: "2024",
    src: "https://framerusercontent.com/images/ZTLT0ArgKLy80DwalNobuJIT6Q.webp?width=1800&height=2400",
  },
  {
    id: "brand",
    title: "Brand",
    category: "Editorial",
    year: "2023",
    src: "https://framerusercontent.com/images/bhoZ7ZXGwGYLkjaT0BDOc5WlMx8.webp?width=900&height=1200",
  },
  {
    id: "studio",
    title: "Studio",
    category: "Commercial",
    year: "2023",
    src: "/images/work-studio.webp",
  },
  {
    id: "colors",
    title: "Colors",
    category: "Editorial",
    year: "2023",
    src: "/images/work-colors.webp",
  },
  {
    id: "duo",
    title: "Duo",
    category: "Commercial",
    year: "2023",
    src: "/images/work-duo.webp",
  },
  {
    id: "elegance",
    title: "Elegance",
    category: "Editorial",
    year: "2023",
    src: "/images/work-elegance.webp",
  },
  {
    id: "hat",
    title: "Hat",
    category: "Commercial",
    year: "2023",
    src: "/images/work-hat.webp",
  },
  {
    id: "black-white",
    title: "Black & White",
    category: "Editorial",
    year: "2023",
    src: "/images/work-black-white.webp",
  },
  {
    id: "streets",
    title: "Streets",
    category: "Commercial",
    year: "2023",
    src: "/images/work-streets.webp",
  },
  {
    id: "stoic",
    title: "Stoic",
    category: "Commercial",
    year: "2023",
    src: "/images/work-stoic.webp",
  },
];

export default function WorkPage() {
  const [activeProject, setActiveProject] = useState<ProjectItem>(projects[0]);
  const rightColumnRef = useRef<HTMLElement>(null);

  const handleLeftWheel = (e: React.WheelEvent<HTMLElement>) => {
    if (rightColumnRef.current && window.innerWidth >= 1024) {
      rightColumnRef.current.scrollTop += e.deltaY;
    }
  };

  return (
    <main className="min-h-screen lg:h-screen lg:overflow-hidden bg-[#0e1011] p-3 md:p-3.5 text-white">
      {/* Pinned Navbar (Fixed for mobile & desktop) */}
      <Navbar />

      {/* ========================================================
          MOBILE & TABLET VIEW (< 1024px)
          Matches template reference on smaller screens:
          1. Intro "Work" card with docked Navbar
          2. Vertical feed of project cards (one below another)
          3. Footer
         ======================================================== */}
      <div className="lg:hidden flex flex-col gap-3 w-full">
        {/* Top Work Intro Card with Docked Navbar */}
        <section
          aria-label="Work Introduction"
          className="relative bg-white/[0.07] rounded-[12px] p-7 pt-17 sm:p-9 sm:pt-24 flex flex-col gap-11 sm:gap-12 select-none overflow-hidden"
        >
          <h1 className="text-[32px] sm:text-[38px] font-normal text-white leading-tight">
            Work
          </h1>
          <p className="text-[15px] sm:text-[16px] font-normal text-white leading-[1.6]">
            My work captures authentic moments. From portraits to landscapes, I
            create visually striking images that resonate deeply.
          </p>
        </section>

        {/* Vertical Feed of Full-Width Project Cards */}
        <section
          aria-label="Mobile Projects Feed"
          className="flex flex-col gap-3 w-full"
        >
          {projects.map((item) => (
            <Link
              key={item.id}
              href={`/work/${item.id}`}
              className="group relative w-full aspect-[3/4] rounded-[12px] overflow-hidden bg-white/[0.07] block select-none cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                priority={item.id === "beige"}
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                sizes="100vw"
              />

              {/* Top-Left Notched Badge with Project Title */}
              <div className="absolute top-0 left-0 z-10 bg-[#0e1011] pt-[8px] pb-[12px] px-[16px] rounded-br-[18px] inline-flex items-center select-none">
                <span className="text-[14px] font-normal text-white leading-[1.2]">
                  {item.title}
                </span>

                {/* Inverted Corner Fillet - Right side of top-left tab */}
                <svg
                  className="absolute -right-[18px] top-0 w-[18px] h-[18px] overflow-visible pointer-events-none"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M 0 18 L -1 18 L -1 -1 L 18 -1 L 18 0 C 8.059 0 0 8.059 0 18 Z"
                    fill="#0e1011"
                  />
                </svg>

                {/* Inverted Corner Fillet - Bottom side of top-left tab */}
                <svg
                  className="absolute left-0 -bottom-[18px] w-[18px] h-[18px] overflow-visible pointer-events-none"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M 0 18 L -1 18 L -1 -1 L 18 -1 L 18 0 C 8.059 0 0 8.059 0 18 Z"
                    fill="#0e1011"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </section>

        {/* Footer Section */}
        <FooterSection showAllProjects={false} showSocials={false} />
      </div>

      {/* ========================================================
          DESKTOP VIEW (>= 1024px)
          Desktop Split Layout:
          - Left: Sticky showcase image with docked Navbar & bottom-right badge
          - Right: Scroll container with Work intro + project text row links + footer
         ======================================================== */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-3 w-full h-full items-start">
        {/* Left Column: Fixed / Sticky Project Showcase Card */}
        <section
          aria-label="Work Showcase"
          className="w-full h-full"
          onWheel={handleLeftWheel}
        >
          <div className="relative w-full h-full min-h-[580px] rounded-[12px] overflow-hidden bg-[#0e1011] select-none">
            {/* Display Active Project Image with Crossfade */}
            {projects.map((project) => (
              <div
                key={project.id}
                className={`absolute inset-0 transition-opacity duration-500 ease-out ${activeProject.id === project.id
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 pointer-events-none"
                  }`}
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  priority={project.id === "beige"}
                  className="object-cover object-[center_20%] pointer-events-none"
                  sizes="50vw"
                />
              </div>
            ))}

            {/* Bottom-Right Inverted Notch Showing Active Project Title */}
            <div className="absolute bottom-0 right-0 z-20 bg-[#0e1011] pt-[12px] pb-[8px] px-[18px] rounded-tl-[18px] select-none flex items-center justify-center">
              <span className="text-[14px] font-normal text-white leading-[1.2] whitespace-pre">
                {activeProject.title}
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
          aria-label="Work Projects List"
          className="w-full h-full overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex flex-col gap-3"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Top Intro Card */}
          <div className="bg-white/[0.07] rounded-[12px] p-7 md:p-9 lg:p-10 flex flex-col justify-between shrink-0 select-none min-h-[260px] md:min-h-[280px] lg:min-h-[300px]">
            <h1 className="text-[32px] md:text-[38px] font-normal text-white leading-tight">
              Work
            </h1>
            <p className="text-[14px] md:text-[16px] font-normal text-white leading-[1.6] max-w-[500px]">
              My work captures authentic moments. From portraits to landscapes, I
              create visually striking images that resonate deeply.
            </p>
          </div>

          {/* List of Projects */}
          <div className="flex flex-col gap-3 w-full shrink-0">
            {projects.map((item) => {
              const isSelected = activeProject.id === item.id;
              return (
                <Link
                  key={item.id}
                  href={`/work/${item.id}`}
                  onMouseEnter={() => setActiveProject(item)}
                  className={`group w-full h-[60px] md:h-[62px] px-5 md:px-6 rounded-[12px] flex items-center justify-between font-normal transition-all duration-300 ease-out cursor-pointer select-none active:scale-[0.995] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 ${isSelected
                    ? "bg-white/[0.12] text-white"
                    : "bg-white/[0.07] text-white hover:bg-white/[0.11]"
                    }`}
                >
                  <span className="text-[16px] md:text-[17px] font-normal">
                    {item.title}
                  </span>
                  <div className="flex items-center text-[14px] md:text-[15px] shrink-0">
                    <div className="flex items-center gap-6 sm:gap-10 text-white/60 group-hover:text-white/80 transition-colors duration-300">
                      <span>{item.category}</span>
                      <span>{item.year}</span>
                    </div>
                    {/* Animated Hover Arrow */}
                    <div className="overflow-hidden flex items-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] max-w-0 opacity-0 -translate-x-2 pointer-events-none group-hover:max-w-[28px] group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-4 sm:group-hover:ml-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white shrink-0"
                      >
                        <path d="M2.5 8h11" />
                        <path d="M9.5 4l4 4-4 4" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Footer Section (without All Projects and 2x2 Socials) */}
          <FooterSection showAllProjects={false} showSocials={false} />
        </section>
      </div>
    </main>
  );
}
