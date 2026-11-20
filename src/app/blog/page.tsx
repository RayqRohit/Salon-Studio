"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { featuredPost, blogPosts } from "@/data/blogData";

export default function BlogPage() {
  const rightColumnRef = useRef<HTMLElement>(null);

  const handleLeftWheel = (e: React.WheelEvent<HTMLElement>) => {
    if (rightColumnRef.current && window.innerWidth >= 1024) {
      rightColumnRef.current.scrollTop += e.deltaY;
    }
  };

  const handleScrollToBlog = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("blog");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen lg:h-screen lg:overflow-hidden bg-[#0e1011] p-3 md:p-3.5 text-white">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-3 items-start">
        {/* Left Column: Fixed / Sticky Featured Blog Showcase Card */}
        <section
          aria-label="Featured Story"
          className="w-full h-full"
          onWheel={handleLeftWheel}
        >
          <div className="relative w-full aspect-[0.871429] sm:aspect-auto sm:h-[480px] md:h-[540px] lg:h-full lg:min-h-[580px] rounded-[12px] overflow-hidden bg-[#0e1011] select-none">
            {/* Docked Top-Left Navbar (highlights Blog) */}
            <Navbar />

            {/* Featured Post Card (Isolated group to avoid affecting Navbar) */}
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group/card absolute inset-0 block cursor-pointer"
            >
              {/* Main Featured Photo */}
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                priority
                className="object-cover object-top transition-[filter] duration-500 ease-out group-hover/card:blur-[6px]"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />

              {/* Bottom Overlay Card: "New" Badge + Title + "Read" */}
              <div
                className="absolute bottom-3 left-3 right-3 z-20 bg-[#0e1011] group-hover/card:bg-[#141618] rounded-[8px] p-3.5 md:px-5 md:py-3.5 flex items-center justify-between gap-4 transition-colors duration-300 select-none border border-white/[0.04]"
              >
                <div className="flex items-center gap-3 overflow-hidden min-w-0">
                  <span className="bg-white text-black text-[12px] sm:text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-[4px] shrink-0">
                    New
                  </span>
                  <h2 className="text-[18px] sm:text-[16px] md:text-[15px] font-normal text-white line-clamp-2 leading-snug">
                    {featuredPost.title}
                  </h2>
                </div>

                <div className="hidden sm:flex flex-col items-start shrink-0">
                  <span className="text-[14px] font-normal text-white leading-tight">
                    Read
                  </span>
                  <span className="h-[1px] bg-white w-full group-hover/card:w-[10px] transition-all duration-300 ease-out mt-1" />
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Right Column: Independent Scroll Container without scrollbar */}
        <section
          ref={rightColumnRef}
          aria-label="Journal Articles"
          className="w-full h-full lg:overflow-y-auto scroll-smooth no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex flex-col gap-3"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Journal Header Card */}
          <div className="bg-white/[0.07] rounded-[12px] p-8 md:p-11 lg:p-12 flex flex-col justify-between gap-14 md:gap-20 lg:gap-28 select-none shrink-0 min-h-[260px] md:min-h-[300px]">
            <h1 className="text-[30px] md:text-[37px] font-normal text-white leading-tight">
              Journal
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <p className="text-[16px] md:text-[16px] font-normal text-white max-w-[500px] leading-[1.6]">
                Explore photography tips, behind-the-scenes insights, and creative inspiration from my projects and personal work.
              </p>

              <a
                href="#blog"
                onClick={handleScrollToBlog}
                className="group inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[6px] bg-[#0e1011] hover:bg-[#161819] text-[14px] font-normal text-white transition-colors duration-200 shrink-0 self-start sm:self-auto cursor-pointer"
              >
                <span>Explore</span>
                <div className="relative w-[14px] h-[14px] overflow-hidden">
                  <div className="flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-0 group-hover:-translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-[14px] h-[14px] shrink-0 text-white/90"
                    >
                      <line x1="8" y1="3" x2="8" y2="13" />
                      <polyline points="4.5 9.5 8 13 11.5 9.5" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-[14px] h-[14px] shrink-0 text-white/90"
                    >
                      <line x1="8" y1="3" x2="8" y2="13" />
                      <polyline points="4.5 9.5 8 13 11.5 9.5" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* 2-Column Grid of Blog Cards */}
          <div id="blog" className="grid grid-cols-1 sm:grid-cols-2 gap-3 shrink-0 scroll-mt-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative rounded-[12px] overflow-hidden aspect-[0.871429] sm:aspect-[3/4] bg-[#181a1b] select-none block cursor-pointer"
              >
                {/* Image */}
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-[filter] duration-500 ease-out group-hover:blur-[6px]"
                />

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-3 left-3 right-3 p-5 rounded-[8px] bg-[#0e1011] text-white flex items-end justify-between gap-3 group-hover:bg-[#141618] transition-colors duration-300 border border-white/[0.04]">
                  <h3 className="text-[17px] sm:text-[15px] md:text-[16px] font-normal text-white leading-[1.3] line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="hidden sm:flex flex-col items-start shrink-0 pb-0.5">
                    <span className="text-[13px] sm:text-[14px] font-normal text-white leading-tight">
                      Read
                    </span>
                    <span className="h-[1px] bg-white w-full group-hover:w-[10px] transition-all duration-300 ease-out mt-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer Section (Includes 2x2 Socials before Contact Me) */}
          <FooterSection showAllProjects={false} showSocials={true} />
        </section>
      </div>
    </main>
  );
}
