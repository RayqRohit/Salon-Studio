"use client";

import { useRef } from "react";
import HeroCarousel from "@/components/HeroCarousel";
import BioCard from "@/components/BioCard";
import SocialLinks from "@/components/SocialLinks";
import LatestWork from "@/components/LatestWork";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  const rightColumnRef = useRef<HTMLElement>(null);

  const handleLeftWheel = (e: React.WheelEvent<HTMLElement>) => {
    if (rightColumnRef.current && window.innerWidth >= 1024) {
      rightColumnRef.current.scrollTop += e.deltaY;
    }
  };

  return (
    <main className="min-h-screen lg:h-screen lg:overflow-hidden bg-[#0e1011] p-3 md:p-3.5 text-white">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-3 items-start">
        {/* Left Column: Fixed / Static Hero Carousel */}
        <section
          aria-label="Hero Showcase"
          className="w-full h-full"
          onWheel={handleLeftWheel}
        >
          <HeroCarousel />
        </section>

        {/* Right Column: Independent Scroll Container without scrollbar */}
        <section
          ref={rightColumnRef}
          aria-label="Profile and Works"
          className="w-full h-full lg:overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex flex-col gap-3"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Top Row: BioCard (Full-width on mobile, 60% on desktop) and SocialLinks (Hidden on smaller screens) */}
          <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-3 items-stretch shrink-0">
            <BioCard />
            <div className="hidden md:block">
              <SocialLinks />
            </div>
          </div>

          {/* Bottom Section: Latest Work Card Header and 10-Card Showcase */}
          <LatestWork />

          {/* Footer Section: All Projects, 2x2 Socials, Contact Me, and White Footer Card */}
          <FooterSection />
        </section>
      </div>
    </main>
  );
}
