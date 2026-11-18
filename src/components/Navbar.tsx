"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);

  return (
    <header className="absolute top-0 left-0 z-30 flex items-center bg-[#0e1011] pt-1.5 pb-3 px-4 rounded-br-[20px] select-none">
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-2 mr-5 group">
        <span className="w-3 h-3 rounded-full border border-white/60 flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
        </span>
        <span className="font-medium text-[15px] tracking-tight text-white leading-none">
          hanssen
        </span>
      </Link>

      {/* Nav Links */}
      <nav className="flex items-center gap-5 text-[14px] text-white/80 font-normal mr-4 leading-none">
        <Link href="#work" className="hover:text-white transition-colors">
          Work
        </Link>
        <Link href="#about" className="hover:text-white transition-colors">
          About
        </Link>
        <Link href="#blog" className="hover:text-white transition-colors">
          Blog
        </Link>
        <Link href="#contact" className="hover:text-white transition-colors">
          Contact
        </Link>
      </nav>

      {/* Theme Toggle Pill */}
      <button
        type="button"
        onClick={() => setIsDark(!isDark)}
        className="w-7 h-4 rounded-full bg-[#262829] flex items-center px-0.5 cursor-pointer hover:bg-[#333739] transition-colors"
        aria-label="Toggle theme"
      >
        <span
          className={`w-3 h-3 rounded-full bg-white transition-transform ${
            isDark ? "translate-x-3" : "translate-x-0"
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
