"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);

  return (
    <header className="absolute top-0 left-0 z-30 flex items-center bg-[#0e1011] px-5 py-3 rounded-br-[12px] select-none">
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-2 mr-6 group">
        <span className="w-2.5 h-2.5 rounded-full border border-white/60 flex items-center justify-center">
          <span className="w-1 h-1 rounded-full bg-white"></span>
        </span>
        <span className="font-semibold text-[13px] tracking-tight text-white">
          hanssen
        </span>
      </Link>

      {/* Nav Links */}
      <nav className="flex items-center gap-5 text-[13px] text-white/80 font-medium mr-5">
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
        className="w-8 h-4 rounded-full bg-[#262829] flex items-center px-0.5 cursor-pointer hover:bg-[#333739] transition-colors"
        aria-label="Toggle theme"
      >
        <span
          className={`w-3 h-3 rounded-full bg-white transition-transform ${
            isDark ? "translate-x-3.5" : "translate-x-0"
          }`}
        />
      </button>

      {/* Inverted Corner Fillets */}
      <svg
        className="absolute -right-3.5 top-0 w-3.5 h-3.5 pointer-events-none"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path d="M0 0 C0 8.83656 7.16344 16 16 16 H0 V0 Z" fill="#0e1011" transform="rotate(-90 8 8)" />
      </svg>
      <svg
        className="absolute left-0 -bottom-3.5 w-3.5 h-3.5 pointer-events-none"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path d="M0 0 C0 8.83656 7.16344 16 16 16 H0 V0 Z" fill="#0e1011" transform="rotate(-90 8 8)" />
      </svg>
    </header>
  );
}
