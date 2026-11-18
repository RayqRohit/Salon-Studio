import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hanssen — Portfolio Framer Template",
  description: "Hanssen is a minimal Framer template tailored for personal portfolios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
      <body className={`${dmSans.className} min-h-full bg-[#0e1011] text-white selection:bg-white selection:text-black [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden`} style={{ scrollbarWidth: "none" }}>
        {children}
      </body>
    </html>
  );
}
