"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import type { ProjectDetail } from "@/data/projectsData";

interface WorkDetailClientProps {
  project: ProjectDetail;
}

export default function WorkDetailClient({ project }: WorkDetailClientProps) {
  const rightColumnRef = useRef<HTMLElement>(null);

  const handleLeftWheel = (e: React.WheelEvent<HTMLElement>) => {
    if (rightColumnRef.current && window.innerWidth >= 1024) {
      rightColumnRef.current.scrollTop += e.deltaY;
    }
  };

  return (
    <main className="min-h-screen lg:h-screen lg:overflow-hidden bg-[#0e1011] p-3 md:p-3.5 text-white">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-3 items-start">
        {/* Left Column: Fixed / Sticky Project Main Image */}
        <section
          aria-label={`${project.title} Showcase`}
          className="w-full h-full"
          onWheel={handleLeftWheel}
        >
          <div className="relative w-full h-[480px] sm:h-[540px] lg:h-full lg:min-h-[580px] rounded-[12px] overflow-hidden bg-[#0e1011] select-none">
            {/* Docked Top-Left Navbar */}
            <Navbar />

            {/* Main Hero Image */}
            {project.mainImage && (
              <Image
                src={project.mainImage}
                alt={project.title}
                fill
                priority
                className="object-cover object-[center_20%] pointer-events-none scale-[1.08] translate-y-7 md:translate-y-9"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            )}

            {/* Bottom-Right Title Badge with Inverted Fillets */}
            <div className="absolute bottom-0 right-0 z-20 bg-[#0e1011] pt-[12px] pb-[8px] px-[18px] rounded-tl-[18px] select-none flex items-center justify-center">
              <span className="text-[14px] font-normal text-white leading-[1.2] whitespace-pre">
                {project.title}
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
          aria-label={`${project.title} Details`}
          className="w-full h-full lg:overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex flex-col gap-3"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Top Section: Intro Card + 4 Metadata Cards */}
          <div className="grid grid-cols-1 md:grid-cols-[1.25fr_1fr] gap-3 w-full shrink-0">
            {/* Intro Card */}
            <div className="bg-white/[0.07] rounded-[12px] p-7 md:p-9 lg:p-10 flex flex-col justify-between shrink-0 select-none min-h-[260px]">
              <h1 className="text-[32px] md:text-[38px] font-normal text-white leading-tight">
                {project.title}
              </h1>
              <p className="text-[14px] md:text-[15px] font-normal text-white leading-[1.6]">
                {project.description}
              </p>
            </div>

            {/* 4 Metadata Cards Stack */}
            <div className="flex flex-col gap-3 justify-between w-full shrink-0">
              <div className="bg-white/[0.07] rounded-[12px] px-5 py-4 flex items-center justify-between text-[14px] md:text-[15px] min-h-[58px]">
                <span className="text-white/60">Year</span>
                <span className="text-white font-normal">{project.year}</span>
              </div>
              <div className="bg-white/[0.07] rounded-[12px] px-5 py-4 flex items-center justify-between text-[14px] md:text-[15px] min-h-[58px]">
                <span className="text-white/60">Client</span>
                <span className="text-white font-normal">{project.client}</span>
              </div>
              <div className="bg-white/[0.07] rounded-[12px] px-5 py-4 flex items-center justify-between text-[14px] md:text-[15px] min-h-[58px]">
                <span className="text-white/60">Service</span>
                <span className="text-white font-normal">{project.service}</span>
              </div>
              <div className="bg-white/[0.07] rounded-[12px] px-5 py-4 flex items-center justify-between text-[14px] md:text-[15px] min-h-[58px]">
                <span className="text-white/60">Location</span>
                <span className="text-white font-normal">{project.location}</span>
              </div>
            </div>
          </div>

          {/* Gallery Images Stack */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="flex flex-col gap-3 w-full shrink-0">
              {project.galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="relative w-full aspect-[3/4] sm:aspect-[4/5] min-h-[380px] sm:min-h-[500px] rounded-[12px] overflow-hidden bg-white/[0.04]"
                >
                  <Image
                    src={img}
                    alt={`${project.title} Gallery image ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Next Project Section */}
          {project.nextProject && project.nextProject.title && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full shrink-0 items-stretch">
              {/* Next Info Card */}
              <div className="bg-white/[0.07] rounded-[12px] p-7 md:p-9 flex flex-col justify-start md:justify-between gap-8 md:gap-0 select-none h-auto md:h-[450px] lg:h-[480px]">
                {/* Top: Next Badge */}
                <div>
                  <span className="inline-block bg-white/[0.08] text-white text-[12px] font-normal px-2.5 py-1 rounded-[4px] leading-none">
                    Next
                  </span>
                </div>

                {/* Bottom Group: Description + View Project */}
                <div className="flex flex-col gap-6 items-start">
                  <p className="text-[15px] md:text-[16px] font-normal text-white leading-[1.6] max-w-[420px]">
                    {project.nextProject.description}
                  </p>
                  <Link
                    href={`/work/${project.nextProject.slug}`}
                    className="group/link relative inline-flex flex-col text-white text-[14px] md:text-[15px] font-normal cursor-pointer select-none"
                  >
                    <span>View Project</span>
                    <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-white/20" />
                    <span className="absolute -bottom-1 left-0 h-[1.5px] bg-white w-full group-hover/link:w-[20px] transition-all duration-300 ease-out" />
                  </Link>
                </div>
              </div>

              {/* Next Thumbnail Card */}
              <Link
                href={`/work/${project.nextProject.slug}`}
                className="group relative w-full aspect-[3/4] min-h-[480px] sm:min-h-[520px] md:min-h-0 md:h-[450px] lg:h-[480px] rounded-[12px] overflow-hidden bg-white/[0.07] block select-none"
              >
                {project.nextProject.image && (
                  <Image
                    src={project.nextProject.image}
                    alt={project.nextProject.title}
                    fill
                    className="object-cover filter blur-0 group-hover:blur-[4px] group-hover:scale-105 transition-all duration-700 ease-out pointer-events-none"
                    sizes="(min-width: 768px) 25vw, 100vw"
                  />
                )}
                {/* Top-Left Notched Badge with Tag Name and Animated Arrow */}
                <div className="absolute top-0 left-0 z-10 bg-[#0e1011] pt-[8px] pb-[12px] px-[16px] rounded-br-[18px] inline-flex items-center select-none">
                  <span className="text-[14px] md:text-[15px] font-normal text-white leading-[1.2]">
                    {project.nextProject.title}
                  </span>
                  <span className="inline-flex items-center overflow-hidden max-w-0 opacity-0 -translate-x-1.5 group-hover:max-w-[28px] group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-2 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]">
                    <span className="text-[14px] font-normal text-white leading-none shrink-0">
                      →
                    </span>
                  </span>

                  {/* Inverted corner fillets */}
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
            </div>
          )}

          {/* Footer Section */}
          <FooterSection showAllProjects={false} showSocials={true} />
        </section>
      </div>
    </main>
  );
}
