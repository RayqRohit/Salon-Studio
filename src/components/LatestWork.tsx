import Image from "next/image";
import Link from "next/link";

const workItems = [
  {
    id: "beige",
    title: "Beige",
    src: "/images/work-beige.webp",
    alt: "Beige editorial styling",
    href: "#beige",
  },
  {
    id: "darkness",
    title: "Darkness",
    src: "/images/work-darkness.webp",
    alt: "Darkness portrait session",
    href: "#darkness",
  },
  {
    id: "gentlemen",
    title: "Gentlemen",
    src: "/images/work-gentlemen.webp",
    alt: "Gentlemen fashion portrait",
    href: "#gentlemen",
  },
  {
    id: "city",
    title: "City",
    src: "/images/work-city.webp",
    alt: "City portrait with sunglasses",
    href: "#city",
  },
  {
    id: "studio",
    title: "Studio",
    src: "/images/work-studio.webp",
    alt: "Studio editorial portrait",
    href: "#studio",
  },
  {
    id: "colors",
    title: "Colors",
    src: "/images/work-colors.webp",
    alt: "Colors portrait in hat",
    href: "#colors",
  },
  {
    id: "duo",
    title: "Duo",
    src: "/images/work-duo.webp",
    alt: "Duo styling editorial",
    href: "#duo",
  },
  {
    id: "elegance",
    title: "Elegance",
    src: "/images/work-elegance.webp",
    alt: "Elegance blue wrap portrait",
    href: "#elegance",
  },
  {
    id: "hat",
    title: "Hat",
    src: "/images/work-hat.webp",
    alt: "Hat portrait session",
    href: "#hat",
  },
  {
    id: "black-white",
    title: "Black & White",
    src: "/images/work-black-white.webp",
    alt: "Black & White portrait",
    href: "#black-white",
  },
];

export default function LatestWork() {
  return (
    <div className="flex flex-col gap-3 w-full select-none">
      {/* Latest Work Header Card */}
      <div className="w-full bg-white/[0.07] rounded-[12px] px-6 py-5 flex items-center justify-between">
        <h2 className="text-[15px] font-normal text-white flex items-center gap-1.5 leading-[1.2]">
          <span>Latest Work</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 256 256"
            fill="currentColor"
            className="text-white shrink-0"
          >
            <path d="M205.66,149.66a8,8,0,0,1,0,11.31l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.31L120,208.69V40a8,8,0,0,1,16,0V208.69l58.34-59.03A8,8,0,0,1,205.66,149.66Z" />
          </svg>
        </h2>
        <Link
          href="/work"
          className="group relative inline-flex flex-col text-white text-[14px] font-normal cursor-pointer select-none"
        >
          <span>View All</span>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20" />
          <span className="absolute bottom-0 left-0 h-[2px] bg-white w-full group-hover:w-[20px] transition-all duration-300 ease-out" />
        </Link>
      </div>

      {/* 10-Card Grid Showcase */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3">
        {workItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group relative aspect-[3/4] w-full min-h-[360px] sm:min-h-[400px] rounded-[12px] overflow-hidden bg-white/[0.07] block"
          >
            {/* Background Image */}
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover object-top filter blur-0 group-hover:blur-[6px] will-change-[filter] transition-[filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              sizes="(min-width: 1024px) 25vw, 50vw"
            />

            {/* Top-Left Notched Badge with Tag Name and Animated Expanding Arrow */}
            <div className="absolute top-0 left-0 z-10 bg-[#0e1011] pt-[8px] pb-[12px] px-[16px] rounded-br-[18px] inline-flex items-center select-none">
              <span className="text-[14px] font-normal text-white leading-[1.2] whitespace-pre">
                {item.title}
              </span>
              <span className="inline-flex items-center overflow-hidden max-w-0 opacity-0 -translate-x-1.5 group-hover:max-w-[28px] group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-2 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]">
                <span className="text-[14px] font-normal text-white leading-none shrink-0">
                  →
                </span>
              </span>

              {/* Inverted corner fillets */}
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
