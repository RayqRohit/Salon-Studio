"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

export default function ContactPage() {
  const rightColumnRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleLeftWheel = (e: React.WheelEvent<HTMLElement>) => {
    if (rightColumnRef.current && window.innerWidth >= 1024) {
      rightColumnRef.current.scrollTop += e.deltaY;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <main className="min-h-screen lg:h-screen lg:overflow-hidden bg-[#0e1011] p-3 md:p-3.5 text-white">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-3 items-start">
        {/* Left Column: Fixed / Sticky Showcase Card */}
        <section
          aria-label="Contact Showcase"
          className="w-full h-full"
          onWheel={handleLeftWheel}
        >
          <div className="relative w-full h-[480px] sm:h-[540px] lg:h-full lg:min-h-[580px] rounded-[12px] overflow-hidden bg-[#0e1011] select-none">
            {/* Docked Top-Left Navbar (highlights Contact in blue) */}
            <Navbar />

            {/* Main Showcase Photo */}
            <Image
              src="/images/contact-hero.webp"
              alt="My Studio"
              fill
              priority
              className="object-cover object-[50.5%_26.6%]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />

            {/* Bottom-Right Inverted Notch Badge "My Studio" */}
            <div className="absolute bottom-0 right-0 z-20 bg-[#0e1011] pt-[12px] pb-[8px] px-[18px] rounded-tl-[18px] select-none flex items-center justify-center">
              <span className="text-[14px] font-normal text-white leading-[1.2] whitespace-pre">
                My Studio
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
        <section
          ref={rightColumnRef}
          aria-label="Contact Details and Form"
          className="w-full h-full lg:overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex flex-col gap-3"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Top Form Card: "Let's Talk" */}
          <div className="bg-white/[0.07] rounded-[12px] p-8 md:p-11 lg:p-12 flex flex-col justify-between gap-12 md:gap-16 lg:gap-20 select-none shrink-0 min-h-[440px] md:min-h-[480px]">
            <h1 className="text-[32px] sm:text-[38px] md:text-[40px] font-normal text-white leading-tight">
              Let&apos;s Talk
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-[52px] px-4 rounded-[6px] bg-[#0e1011] text-white text-[15px] placeholder:text-white/40 border border-white/[0.08] focus:border-white/30 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-[52px] px-4 rounded-[6px] bg-[#0e1011] text-white text-[15px] placeholder:text-white/40 border border-white/[0.08] focus:border-white/30 focus:outline-none transition-colors"
                />
              </div>

              {/* Row 2: Message Textarea */}
              <textarea
                required
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-4 rounded-[6px] bg-[#0e1011] text-white text-[15px] placeholder:text-white/40 border border-white/[0.08] focus:border-white/30 focus:outline-none transition-colors resize-none h-[120px] md:h-[135px]"
              />

              {/* Row 3: Submit Button */}
              <button
                type="submit"
                className="w-full h-[52px] rounded-[6px] bg-white hover:bg-white/90 text-black text-[15px] font-medium transition-colors cursor-pointer flex items-center justify-center"
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>

          {/* Bottom 3-Part Row: Prague Studio, Studio Photo, Social Links */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr] gap-3 shrink-0">
            {/* Prague Studio Card */}
            <div className="order-2 lg:order-1 bg-white/[0.07] rounded-[12px] p-8 flex flex-col justify-between gap-12 select-none min-h-[260px]">
              <h2 className="text-[26px] md:text-[30px] font-normal text-white leading-tight">
                Prague <br />Studio
              </h2>

              <div className="flex flex-col gap-6">
                <p className="text-[15px] md:text-[15px] text-white/70 leading-[1.6]">
                  Vinohradská 121,
                  <br />
                  130 00 Praha 3,
                  <br />
                  Czech Republic
                </p>

                <a
                  href="https://maps.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 w-full h-[52px] px-5 rounded-[6px] bg-[#0e1011] hover:bg-[#161819] text-[15px] font-normal text-white transition-colors duration-200 cursor-pointer"
                >
                  <span>Get Direction</span>
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
                        className="w-[14px] h-[14px] shrink-0 text-white/90"
                      >
                        <line x1="4" y1="12" x2="12" y2="4" />
                        <polyline points="5 4 12 4 12 11" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Studio Photo Card */}
            <div className="order-1 lg:order-2 relative rounded-[12px] overflow-hidden bg-[#181a1b] aspect-square lg:aspect-auto lg:min-h-[260px] lg:h-full select-none">
              <Image
                src="/images/contact-studio.webp"
                alt="Studio"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 17vw, 100vw"
              />
            </div>

            {/* 4 Social Links Stack */}
            <div className="order-3 flex flex-col justify-between gap-3 min-h-[260px] lg:h-full">
              {[
                {
                  label: "Instagram",
                  href: "https://instagram.com",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" fill="currentColor" className="text-white">
                      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
                    </svg>
                  ),
                },
                {
                  label: "Pinterest",
                  href: "https://pinterest.com",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" fill="currentColor" className="text-white">
                      <path d="M224,112c0,22.57-7.9,43.2-22.23,58.11C188.39,184,170.25,192,152,192c-17.88,0-29.82-5.86-37.43-12l-10.78,45.82A8,8,0,0,1,96,232a8.24,8.24,0,0,1-1.84-.21,8,8,0,0,1-6-9.62l32-136a8,8,0,0,1,15.58,3.66l-16.9,71.8C122,166,131.3,176,152,176c27.53,0,56-23.94,56-64A72,72,0,1,0,73.63,148a8,8,0,0,1-13.85,8A88,88,0,1,1,224,112Z" />
                    </svg>
                  ),
                },
                {
                  label: "Behance",
                  href: "https://behance.net",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" fill="currentColor" className="text-white">
                      <path d="M160,80a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H168A8,8,0,0,1,160,80Zm-24,78a42,42,0,0,1-42,42H32a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H90a38,38,0,0,1,25.65,66A42,42,0,0,1,136,158ZM40,116H90a22,22,0,0,0,0-44H40Zm80,42a26,26,0,0,0-26-26H40v52H94A26,26,0,0,0,120,158Zm128-6a8,8,0,0,1-8,8H169a32,32,0,0,0,56.59,11.2,8,8,0,0,1,12.8,9.61A48,48,0,1,1,248,152Zm-17-8a32,32,0,0,0-62,0Z" />
                    </svg>
                  ),
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" fill="currentColor" className="text-white">
                      <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 min-h-[52px] px-5 rounded-[12px] bg-white/[0.07] hover:bg-white/[0.11] transition-colors duration-500 ease-out flex items-center justify-between text-[14px] sm:text-[15px] font-normal text-white cursor-pointer select-none"
                >
                  <span>{social.label}</span>
                  <div className="relative w-[18px] h-[18px] overflow-hidden">
                    <div className="flex flex-col transition-transform duration-500 ease-out group-hover:-translate-y-1/2">
                      <div className="w-[18px] h-[18px] flex items-center justify-center shrink-0">
                        {social.icon}
                      </div>
                      <div className="w-[18px] h-[18px] flex items-center justify-center shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 256 256"
                          fill="currentColor"
                          className="text-white"
                        >
                          <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Section */}
          <div className="shrink-0 w-full">
            <FooterSection showAllProjects={false} showSocials={false} showContactMe={false} />
          </div>
        </section>
      </div>
    </main>
  );
}
