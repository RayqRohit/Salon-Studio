import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="flex flex-col gap-2 w-full lg:w-[245px] shrink-0 select-none">
      {/* Instagram */}
      <Link
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="h-[50px] px-5 rounded-[12px] bg-[#181b1c] text-white flex items-center justify-between text-[14px] font-medium hover:bg-[#222526] transition-colors"
      >
        <span>Instagram</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-white/80">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      </Link>

      {/* Pinterest */}
      <Link
        href="https://pinterest.com"
        target="_blank"
        rel="noopener noreferrer"
        className="h-[50px] px-5 rounded-[12px] bg-[#181b1c] text-white flex items-center justify-between text-[14px] font-medium hover:bg-[#222526] transition-colors"
      >
        <span>Pinterest</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-white/80">
          <line x1="12" y1="5" x2="12" y2="21" />
          <path d="M7.5 19.5c.8-2.8 1.8-6.2 1.8-8.2 0-2.2 1.3-3.8 3.2-3.8 1.8 0 2.8 1.3 2.8 3.1 0 2.8-1.5 5.4-3.5 5.4-.8 0-1.4-.4-1.8-1" />
        </svg>
      </Link>

      {/* Behance */}
      <Link
        href="https://behance.net"
        target="_blank"
        rel="noopener noreferrer"
        className="h-[50px] px-5 rounded-[12px] bg-[#181b1c] text-white flex items-center justify-between text-[14px] font-medium hover:bg-[#222526] transition-colors"
      >
        <span>Behance</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white/80">
          <path d="M22 7h-7v2h7V7zm1.726 10c-.442 1.297-2.029 3-4.726 3-3.664 0-5.856-2.675-5.856-5.967 0-3.642 2.453-6.033 5.76-6.033 3.649 0 5.485 2.571 5.485 5.586 0 .584-.069 1.144-.14 1.414H15.9c.105 1.455 1.135 2.27 2.476 2.27 1.196 0 2.05-.623 2.433-1.27H23.726zm-2.417-3.65c-.073-1.127-.798-2.091-2.193-2.091-1.353 0-2.062.973-2.196 2.091h4.389zM8.88 13.398c-.808-.344-1.637-.622-1.637-1.528 0-.809.684-1.364 1.637-1.364 1.034 0 1.691.547 1.705 1.419h2.247c-.033-1.89-1.594-3.325-3.952-3.325-2.316 0-3.996 1.349-3.996 3.255 0 1.282.781 2.28 2.148 2.766-1.543.518-2.454 1.642-2.454 3.123 0 2.128 1.83 3.656 4.301 3.656 2.59 0 4.398-1.542 4.398-3.754 0-1.859-1.171-2.909-2.397-3.248zm-.897 4.908c-1.135 0-1.937-.624-1.937-1.56 0-.88.752-1.465 1.937-1.465 1.148 0 1.942.585 1.942 1.465 0 .936-.794 1.56-1.942 1.56z"/>
        </svg>
      </Link>

      {/* Twitter (Classic Bird) */}
      <Link
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="h-[50px] px-5 rounded-[12px] bg-[#181b1c] text-white flex items-center justify-between text-[14px] font-medium hover:bg-[#222526] transition-colors"
      >
        <span>Twitter</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-white/80">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      </Link>

      {/* Solid White Contact Me */}
      <Link
        href="#contact"
        className="h-[50px] px-5 rounded-[12px] bg-white text-black flex items-center justify-between text-[14px] font-semibold hover:bg-white/90 transition-colors shadow-sm"
      >
        <span>Contact Me</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-black">
          <rect width="20" height="15" x="2" y="4.5" rx="2" />
          <path d="m22 6.5-10 6.5-10-6.5" />
        </svg>
      </Link>
    </div>
  );
}
