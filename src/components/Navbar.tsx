"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);

  return (
    <header className="absolute top-0 left-0 z-30 flex items-start bg-[#0e1011] pt-0 pb-3 px-4 rounded-br-[20px] select-none">
      {/* Brand Logo */}
      <Link href="/" className="group flex items-center gap-2 mr-5 cursor-pointer">
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
          <div className="flex flex-col transition-transform duration-300 ease-out -translate-y-1/2 group-hover:translate-y-0">
            <span className="h-[18px] flex items-center text-white">
              hanssen
            </span>
            <span className="h-[18px] flex items-center text-white">
              hanssen
            </span>
          </div>
        </div>
      </Link>

      {/* Nav Links */}
      <nav className="flex items-center gap-5 text-[14px] font-normal tracking-normal mr-4 leading-[18px]">
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
            <div className="flex flex-col transition-transform duration-300 ease-out -translate-y-1/2 group-hover:translate-y-0">
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
        className="w-[30px] h-[20px] rounded-full bg-[#242628] flex items-center p-[6px] cursor-pointer hover:bg-[#2e3134] transition-colors"
        aria-label="Toggle theme"
      >
        <span
          className={`w-[8px] h-[8px] rounded-full bg-white transition-transform duration-200 ${
            isDark ? "translate-x-[10px]" : "translate-x-0"
          }`}
        />
      </button>

      {/* Inverted Corner Fillets */}
      <svg
        className="absolute -right-[18px] top-0 w-[18px] h-[18px] pointer-events-none"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path d="M 0 0 L 0 18 C 0 8.059 8.059 0 18 0 Z" fill="#0e1011" />
      </svg>
      <svg
        className="absolute left-0 -bottom-[18px] w-[18px] h-[18px] pointer-events-none"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path d="M 0 0 L 0 18 C 0 8.059 8.059 0 18 0 Z" fill="#0e1011" />
      </svg>
    </header>
  );
}
