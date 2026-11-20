"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { BlogPost, getBlogPostBySlug, allBlogPosts } from "@/data/blogData";

interface BlogPostDetailProps {
  post: BlogPost;
}

export default function BlogPostDetail({ post }: BlogPostDetailProps) {
  const rightColumnRef = useRef<HTMLElement>(null);

  const handleLeftWheel = (e: React.WheelEvent<HTMLElement>) => {
    if (rightColumnRef.current && window.innerWidth >= 1024) {
      rightColumnRef.current.scrollTop += e.deltaY;
    }
  };

  const handleScrollToContent = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("post-content");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Find related posts
  const relatedPosts = (post.related || [])
    .map((slug) => getBlogPostBySlug(slug))
    .filter((p): p is BlogPost => !!p && p.slug !== post.slug)
    .slice(0, 2);

  // If fewer than 2 related posts, fill with others
  if (relatedPosts.length < 2) {
    const others = allBlogPosts.filter(
      (p) => p.slug !== post.slug && !relatedPosts.some((rp) => rp.slug === p.slug)
    );
    while (relatedPosts.length < 2 && others.length > 0) {
      const next = others.shift();
      if (next) relatedPosts.push(next);
    }
  }

  return (
    <main className="min-h-screen lg:h-screen lg:overflow-hidden bg-[#0e1011] p-3 md:p-3.5 text-white">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-3 items-start">
        {/* Left Column: Fixed / Sticky Showcase Card */}
        <section
          aria-label="Blog Article Showcase"
          className="w-full h-full"
          onWheel={handleLeftWheel}
        >
          <div className="relative w-full aspect-[0.871429] sm:aspect-auto sm:h-[480px] md:h-[540px] lg:h-full lg:min-h-[580px] rounded-[12px] overflow-hidden bg-[#0e1011] select-none">
            {/* Docked Top-Left Navbar (highlights Blog) */}
            <Navbar />

            {/* Main Article Hero Image */}
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover object-top"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />

            {/* Bottom-Right Inverted Fillet Notch Badge for Category */}
            <div className="absolute bottom-0 right-0 z-20 bg-[#0e1011] rounded-tl-[18px] px-4 flex items-center justify-center select-none h-[36px]">
              <span className="text-[14px] leading-none font-normal text-white">
                {post.category}
              </span>

              {/* Inverted Corner Fillet - Left side of notch (Smooth seamless S-curve) */}
              <svg
                className="absolute -left-[18px] bottom-0 w-[18px] h-[18px] overflow-visible pointer-events-none"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M 0 18 C 9.941 18 18 9.941 18 0 L 19 0 L 19 19 L 0 19 Z"
                  fill="#0e1011"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Right Column: Independent Scroll Container without scrollbar */}
        <section
          ref={rightColumnRef}
          aria-label="Article Details"
          className="w-full h-full lg:overflow-y-auto scroll-smooth no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex flex-col gap-3"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Top Header Card */}
          <div className="bg-white/[0.07] rounded-[12px] p-8 md:p-11 lg:p-12 flex flex-col justify-between gap-12 md:gap-16 lg:gap-20 select-none shrink-0 min-h-[460px] md:min-h-[520px] lg:h-full lg:min-h-[calc(100vh-24px)]">
            {/* Top Date Badge */}
            <span className="bg-white/10 px-2.5 py-1 rounded-[4px] text-[12px] text-white/80 self-start">
              {post.date}
            </span>

            {/* Bottom Title, Excerpt & Read Article Button */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h1 className="text-[30px] sm:text-[35px] md:text-[38px] font-normal text-white leading-[1.2]">
                  {post.title}
                </h1>
                <p className="text-[15px] md:text-[16px] text-white/70 leading-[1.6]">
                  {post.excerpt}
                </p>
              </div>

              {/* Read Article ↓ Button with Rolling Arrow */}
              <a
                href="#post-content"
                onClick={handleScrollToContent}
                className="group inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[6px] bg-[#0e1011] hover:bg-[#161819] text-[14px] font-normal text-white transition-colors duration-200 shrink-0 self-start cursor-pointer"
              >
                <span>Read Article</span>
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

          {/* 3-Card Metadata Row (Side-by-side on desktop, stacked horizontal bars on mobile) */}
          <div
            id="post-content"
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 shrink-0 scroll-mt-3"
          >
            {/* Category */}
            <div className="bg-white/[0.07] rounded-[12px] p-5 flex flex-row items-center justify-between select-none">
              <span className="text-[14px] text-white/60 font-normal">Category</span>
              <span className="text-[14px] sm:text-[15px] text-white font-normal">{post.category}</span>
            </div>

            {/* Reading Time */}
            <div className="bg-white/[0.07] rounded-[12px] p-5 flex flex-row items-center justify-between select-none">
              <span className="text-[14px] text-white/60 font-normal">Reading Time</span>
              <span className="text-[14px] sm:text-[15px] text-white font-normal">{post.readTime}</span>
            </div>

            {/* Date */}
            <div className="bg-white/[0.07] rounded-[12px] p-5 flex flex-row items-center justify-between select-none">
              <span className="text-[14px] text-white/60 font-normal">Date</span>
              <span className="text-[14px] sm:text-[15px] text-white font-normal">{post.date}</span>
            </div>
          </div>

          {/* Article Rich Text Body Card */}
          <div className="bg-white/[0.07] rounded-[12px] p-7 md:p-10 lg:p-12 text-white flex flex-col gap-5 select-none shrink-0">
            {post.content.map((block, idx) => {
              if (block.tag === "h2") {
                return (
                  <h2
                    key={idx}
                    className="text-[26px] md:text-[30px] font-normal text-white mt-4 first:mt-0 leading-tight"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.tag === "h3") {
                return (
                  <h3
                    key={idx}
                    className="text-[20px] md:text-[22px] font-normal text-white mt-3 leading-tight"
                  >
                    {block.text}
                  </h3>
                );
              }
              return (
                <p
                  key={idx}
                  className="text-[16px] md:text-[17px] text-white/75 leading-[1.75]"
                >
                  {block.text}
                </p>
              );
            })}
          </div>

          {/* 3-Column Social Share Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 shrink-0">
            {[
              {
                name: "Pinterest",
                href: "https://www.pinterest.com/",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="w-[18px] h-[18px] shrink-0 text-white"
                  >
                    <rect width="256" height="256" fill="none" />
                    <line
                      x1="128"
                      y1="88"
                      x2="96"
                      y2="224"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                    <path
                      d="M66.7,152A80,80,0,1,1,216,112c0,44.18-32,72-64,72s-41.63-21.07-41.63-21.07"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                  </svg>
                ),
              },
              {
                name: "Facebook",
                href: "https://www.facebook.com/",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="w-[18px] h-[18px] shrink-0 text-white"
                  >
                    <rect width="256" height="256" fill="none" />
                    <circle
                      cx="128"
                      cy="128"
                      r="96"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                    <path
                      d="M168,88H152a24,24,0,0,0-24,24V224"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                    <line
                      x1="96"
                      y1="144"
                      x2="160"
                      y2="144"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                  </svg>
                ),
              },
              {
                name: "Instagram",
                href: "https://www.instagram.com/",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="w-[18px] h-[18px] shrink-0 text-white"
                  >
                    <rect width="256" height="256" fill="none" />
                    <circle
                      cx="128"
                      cy="128"
                      r="40"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                      strokeWidth="16"
                    />
                    <rect
                      x="32"
                      y="32"
                      width="192"
                      height="192"
                      rx="48"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                    <circle cx="180" cy="76" r="12" fill="currentColor" />
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/[0.07] hover:bg-white/[0.12] rounded-[12px] p-5 flex items-center justify-between text-white transition-colors duration-200 cursor-pointer select-none"
              >
                <div className="flex items-center gap-2 md:gap-2.5">
                  {social.icon}
                  <span className="text-[14px] sm:text-[15px] font-normal text-white">
                    {social.name}
                  </span>
                </div>
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
                      className="w-[14px] h-[14px] shrink-0 text-white/80"
                    >
                      <line x1="4" y1="12" x2="12" y2="4" />
                      <polyline points="5 4 12 4 12 11" />
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
                      className="w-[14px] h-[14px] shrink-0 text-white/80"
                    >
                      <line x1="4" y1="12" x2="12" y2="4" />
                      <polyline points="5 4 12 4 12 11" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Related Articles Section */}
          <div className="flex flex-col gap-3 shrink-0">
            {/* Related Header Card */}
            <div className="bg-white/[0.07] rounded-[12px] px-6 py-5 md:px-7 md:py-5 flex items-center justify-between select-none">
              <div className="flex items-center gap-2 text-[14px] sm:text-[15px] font-normal text-white">
                <span>Related Articles</span>
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

              <Link
                href="/blog"
                className="group flex flex-col items-start shrink-0 cursor-pointer pb-0.5"
              >
                <span className="text-[14px] sm:text-[15px] font-normal text-white leading-tight">
                  View All
                </span>
                <span className="h-[1px] bg-white w-full group-hover:w-[20px] transition-all duration-300 ease-out mt-1" />
              </Link>
            </div>

            {/* 2-Card Grid of Related Posts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group relative rounded-[12px] overflow-hidden aspect-[0.871429] sm:aspect-[3/4] bg-[#181a1b] select-none block cursor-pointer"
                >
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-[filter] duration-500 ease-out group-hover:blur-[6px]"
                  />

                  {/* Bottom Overlay Card */}
                  <div className="absolute bottom-3 left-3 right-3 p-5 rounded-[8px] bg-[#0e1011] text-white flex items-end justify-between gap-3 group-hover:bg-[#141618] transition-colors duration-300 border border-white/[0.04]">
                    <h3 className="text-[16px] sm:text-[15px] md:text-[16px] font-normal text-white leading-[1.3] line-clamp-2">
                      {relatedPost.title}
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
          </div>

          {/* Footer Section (Includes 2x2 Socials before Contact Me) */}
          <FooterSection showAllProjects={false} showSocials={true} />
        </section>
      </div>
    </main>
  );
}
