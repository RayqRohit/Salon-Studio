import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hanssen — Portfolio & Salon Studio",
  description: "Minimal portfolio and salon studio showcase with dark and light aesthetics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="min-h-full bg-[#0e1011] text-white selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
