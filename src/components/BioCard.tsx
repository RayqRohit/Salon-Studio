import Image from "next/image";
import Link from "next/link";

export default function BioCard() {
  return (
    <Link
      href="/about"
      className="group relative bg-white/[0.07] hover:bg-white/[0.11] transition-colors duration-300 rounded-[12px] py-8 md:py-10 lg:py-11 px-6 md:px-8 lg:px-9 text-white flex flex-col justify-between h-full select-none cursor-pointer overflow-hidden"
    >
      {/* Top Profile Header */}
      <div className="flex items-center gap-4">
        <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden bg-zinc-800 shrink-0">
          <Image
            src="/images/avatar-ema.webp"
            alt="Ema Hanssen"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-[18px] font-normal text-white tracking-normal leading-[1.2]">
            Ema Hanssen
          </h1>
          <p className="text-[14px] font-normal text-white/60 leading-[1.2] mt-1">
            Photographer
          </p>
        </div>
      </div>

      {/* Top Right Animated Hover Arrow */}
      <div className="absolute top-6 right-6 opacity-0 -translate-x-1.5 translate-y-1.5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none text-white/70 group-hover:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 256 256"
          fill="currentColor"
        >
          <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
        </svg>
      </div>

      {/* Bio Paragraph */}
      <p className="text-[15px] font-normal text-white leading-[1.65] mt-10">
        I&apos;m Ema, a photographer based in Prague. I capture authentic moments and tell stories through my images, blending creativity and emotion in each shot.
      </p>
    </Link>
  );
}
