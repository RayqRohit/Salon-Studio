import Image from "next/image";

export default function BioCard() {
  return (
    <div className="bg-[#181b1c] rounded-[12px] p-7 md:p-8 text-white flex flex-col justify-between h-full select-none">
      {/* Top Profile Header */}
      <div className="flex items-center gap-3.5">
        <div className="relative w-14 h-14 rounded-full overflow-hidden bg-zinc-800 shrink-0 ring-1 ring-white/10">
          <Image
            src="/images/avatar-ema.webp"
            alt="Ema Hanssen"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-[17px] font-semibold text-white tracking-tight leading-snug">
            Ema Hanssen
          </h1>
          <p className="text-[13px] text-[#8a8f93] font-normal">
            Photographer
          </p>
        </div>
      </div>

      {/* Bio Paragraph */}
      <p className="text-[14px] text-white/85 leading-[1.65] font-normal max-w-sm mt-8">
        I&apos;m Ema, a photographer based in Prague. I capture authentic moments and tell stories through my images, blending creativity and emotion in each shot.
      </p>
    </div>
  );
}
