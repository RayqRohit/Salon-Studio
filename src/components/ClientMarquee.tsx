"use client";

import logosData from "./ClientLogos.json";

interface LogoItem {
  viewBox: string;
  content: string;
}

export default function ClientMarquee() {
  const logos = Object.entries(logosData) as [string, LogoItem][];

  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] select-none">
      <div className="animate-marquee items-center gap-12 sm:gap-16 py-1">
        {/* Set 1 */}
        {logos.map(([id, logo], idx) => (
          <div
            key={`a-${id}-${idx}`}
            className="h-[22px] sm:h-[26px] w-auto shrink-0 text-white/50 hover:text-white transition-colors duration-300"
          >
            <svg
              viewBox={logo.viewBox}
              className="h-full w-auto fill-current"
              dangerouslySetInnerHTML={{ __html: logo.content }}
            />
          </div>
        ))}
        {/* Set 2 (for seamless loop) */}
        {logos.map(([id, logo], idx) => (
          <div
            key={`b-${id}-${idx}`}
            className="h-[22px] sm:h-[26px] w-auto shrink-0 text-white/50 hover:text-white transition-colors duration-300"
          >
            <svg
              viewBox={logo.viewBox}
              className="h-full w-auto fill-current"
              dangerouslySetInnerHTML={{ __html: logo.content }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
