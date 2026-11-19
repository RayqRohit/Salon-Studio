"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scroll when mobile menu overlay is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Docked Top-Left Header */}
      <header className="absolute top-0 left-0 z-30 flex items-center bg-[#0e1011] pt-0 pb-[10px] px-[16px] rounded-br-[20px] select-none">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2 mr-3 md:mr-5 cursor-pointer">
          <svg
            className="w-[14px] h-[14px] text-white shrink-0"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 3.75 7.5 C 3.75 5.429 5.429 3.75 7.5 3.75 C 9.571 3.75 11.25 5.429 11.25 7.5 C 11.25 9.571 9.571 11.25 7.5 11.25 C 5.429 11.25 3.75 9.571 3.75 7.5 Z M 7.5 15 C 11.642 15 15 11.642 15 7.5 C 15 3.358 11.642 0 7.5 0 C 3.358 0 0 3.358 0 7.5 C 0 11.642 3.358 15 7.5 15 Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          <div className="relative inline-flex flex-col justify-start overflow-hidden h-[18px] leading-[18px] font-medium text-[15px] tracking-normal">
            <div className="flex flex-col transition-transform duration-300 ease-out translate-y-0 group-hover:-translate-y-1/2">
              <span className="h-[18px] flex items-center text-white">
                hanssen
              </span>
              <span className="h-[18px] flex items-center text-white">
                hanssen
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links (Hidden on mobile/tablet) */}
        <nav className="hidden md:flex items-center gap-5 text-[14px] font-normal tracking-normal mr-4 leading-[18px]">
          {[
            { label: "Work", href: "#work" },
            { label: "About", href: "#about" },
            { label: "Blog", href: "#blog" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative inline-flex flex-col justify-start overflow-hidden h-[18px] cursor-pointer"
            >
              <div className="flex flex-col transition-transform duration-300 ease-out translate-y-0 group-hover:-translate-y-1/2">
                <span className="h-[18px] flex items-center text-white">
                  {item.label}
                </span>
                <span className="h-[18px] flex items-center text-white">
                  {item.label}
                </span>
              </div>
            </Link>
          ))}
        </nav>

        {/* Theme Toggle Pill */}
        <button
          type="button"
          onClick={() => setIsDark(!isDark)}
          className="w-[30px] h-[20px] rounded-full bg-[#ffffff1c] flex items-center p-[6px] cursor-pointer hover:bg-[#ffffff25] transition-colors"
          aria-label="Toggle theme"
        >
          <span
            className={`w-[8px] h-[8px] rounded-full bg-white transition-transform duration-200 ${
              isDark ? "translate-x-[10px]" : "translate-x-0"
            }`}
          />
        </button>

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
      </header>

      {/* Docked Top-Right Menu Button Notch (Mobile & Tablet: md:hidden) */}
      <div className="md:hidden absolute top-0 right-0 z-30 flex items-center bg-[#0e1011] pt-0 pb-[10px] px-[16px] rounded-bl-[20px] select-none">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="group relative inline-flex flex-col justify-start overflow-hidden h-[18px] leading-[18px] font-normal text-[14px] text-white cursor-pointer"
        >
          <div className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
            <span className="h-[18px] flex items-center text-white">Menu</span>
            <span className="h-[18px] flex items-center text-white">Menu</span>
          </div>
        </button>

        {/* Left Inverted Corner Fillet */}
        <svg
          className="absolute -left-[18px] top-0 w-[18px] h-[18px] overflow-visible pointer-events-none scale-x-[-1]"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M 0 18 L -1 18 L -1 -1 L 18 -1 L 18 0 C 8.059 0 0 8.059 0 18 Z"
            fill="#0e1011"
          />
        </svg>

        {/* Bottom Inverted Corner Fillet */}
        <svg
          className="absolute right-0 -bottom-[18px] w-[18px] h-[18px] overflow-visible pointer-events-none scale-x-[-1]"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M 0 18 L -1 18 L -1 -1 L 18 -1 L 18 0 C 8.059 0 0 8.059 0 18 Z"
            fill="#0e1011"
          />
        </svg>
      </div>

      {/* Mobile Menu Overlay Modal */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0e1011] p-3 flex flex-col md:hidden">
          <div className="relative w-full h-full bg-[#181a1b] rounded-[16px] p-6 pb-6 flex flex-col justify-between overflow-hidden">
            {/* Docked Top-Right Close Button Notch */}
            <div className="absolute top-0 right-0 z-30 flex items-center bg-[#0e1011] pt-0 pb-[10px] px-[16px] rounded-bl-[20px] select-none">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="group relative inline-flex flex-col justify-start overflow-hidden h-[18px] leading-[18px] font-normal text-[14px] text-white cursor-pointer"
              >
                <div className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                  <span className="h-[18px] flex items-center text-white">Close</span>
                  <span className="h-[18px] flex items-center text-white">Close</span>
                </div>
              </button>

              {/* Left Inverted Corner Fillet */}
              <svg
                className="absolute -left-[18px] top-0 w-[18px] h-[18px] overflow-visible pointer-events-none scale-x-[-1]"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M 0 18 L -1 18 L -1 -1 L 18 -1 L 18 0 C 8.059 0 0 8.059 0 18 Z"
                  fill="#0e1011"
                />
              </svg>

              {/* Bottom Inverted Corner Fillet */}
              <svg
                className="absolute right-0 -bottom-[18px] w-[18px] h-[18px] overflow-visible pointer-events-none scale-x-[-1]"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M 0 18 L -1 18 L -1 -1 L 18 -1 L 18 0 C 8.059 0 0 8.059 0 18 Z"
                  fill="#0e1011"
                />
              </svg>
            </div>

            {/* Top-Left Profile Header */}
            <div className="flex items-center gap-3.5 pt-2 select-none">
              <div className="relative w-[48px] h-[48px] rounded-full overflow-hidden bg-zinc-800 shrink-0">
                <Image
                  src="/images/avatar-ema.webp"
                  alt="Ema Hanssen"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[17px] font-medium text-white leading-tight">
                  Ema Hanssen
                </span>
                <span className="text-[13px] font-normal text-white/50 leading-tight mt-1">
                  Photographer
                </span>
              </div>
            </div>

            {/* Middle Spacious Area */}
            <div className="flex-1" />

            {/* Bottom Stack of Navigation Links */}
            <div className="flex flex-col gap-2.5 w-full select-none">
              {[
                { label: "Home", href: "/" },
                { label: "Work", href: "#work" },
                { label: "About", href: "#about" },
                { label: "Blog", href: "#blog" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full h-[54px] px-5 rounded-[12px] bg-white/[0.07] hover:bg-white/[0.11] transition-colors duration-500 ease-out text-white flex items-center justify-between text-[15px] font-normal"
                >
                  <span>{link.label}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 256 256"
                    fill="currentColor"
                    className="text-white"
                  >
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                  </svg>
                </Link>
              ))}

              {/* Solid White Contact Me Button */}
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full h-[54px] px-5 rounded-[12px] bg-white text-black hover:bg-white/85 transition-colors duration-500 ease-out flex items-center justify-between text-[15px] font-normal shadow-sm"
              >
                <span>Contact Me</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                  className="text-black"
                >
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
