import Image from "next/image";
import Link from "next/link";

const workItems = [
  {
    id: "beige",
    title: "Beige",
    src: "/images/work-beige.webp",
    alt: "Beige styling editorial",
    href: "#beige",
  },
  {
    id: "darkness",
    title: "Darkness",
    src: "/images/work-darkness.webp",
    alt: "Darkness portrait session",
    href: "#darkness",
  },
];

export default function LatestWork() {
  return (
    <div className="flex flex-col gap-3 w-full select-none">
      {/* Latest Work Header Card (Dark rounded card matching Image 2) */}
      <div className="w-full bg-[#181b1c] rounded-[12px] px-6 py-5 flex items-center justify-between">
        <h2 className="text-[15px] font-semibold text-white flex items-center gap-1.5 tracking-tight">
          <span>Latest Work</span>
          <span className="text-[13px] font-normal">↓</span>
        </h2>
        <Link
          href="#work"
          className="text-white text-[13px] font-medium underline underline-offset-4 hover:text-white/80 transition-colors"
        >
          View All
        </Link>
      </div>

      {/* Two Column Work Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {workItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group relative h-[360px] lg:h-[calc(100vh-375px)] min-h-[320px] rounded-[12px] overflow-hidden bg-[#181b1c] block"
          >
            {/* Background Image */}
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(min-width: 1024px) 25vw, 50vw"
            />

            {/* Top-Left Notched Badge with Tag Name */}
            <div className="absolute top-0 left-0 z-10 bg-[#0e1011] px-4 py-2 rounded-br-[14px]">
              <span className="text-[12px] font-medium text-white/90">
                {item.title}
              </span>

              {/* Inverted corner fillets */}
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
