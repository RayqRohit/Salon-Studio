import Link from "next/link";

// Arrow Up Right Icon used for hover transition
function ArrowIcon({ className = "text-white" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" fill="currentColor" className={className}>
      <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
    </svg>
  );
}

export default function SocialLinks() {
  return (
    <div className="flex flex-col gap-3 w-full select-none">
      {/* Instagram */}
      <Link
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-full h-[58px] px-5 md:px-6 rounded-[12px] bg-white/[0.07] text-white flex items-center justify-between text-[14px] font-normal hover:bg-white/[0.11] transition-colors duration-300"
      >
        <span>Instagram</span>
        <div className="relative w-[18px] h-[18px] overflow-hidden">
          <div className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
            <div className="w-[18px] h-[18px] flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" fill="currentColor" className="text-white">
                <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
              </svg>
            </div>
            <div className="w-[18px] h-[18px] flex items-center justify-center shrink-0">
              <ArrowIcon />
            </div>
          </div>
        </div>
      </Link>

      {/* Pinterest */}
      <Link
        href="https://pinterest.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-full h-[58px] px-5 md:px-6 rounded-[12px] bg-white/[0.07] text-white flex items-center justify-between text-[14px] font-normal hover:bg-white/[0.11] transition-colors duration-300"
      >
        <span>Pinterest</span>
        <div className="relative w-[18px] h-[18px] overflow-hidden">
          <div className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
            <div className="w-[18px] h-[18px] flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" fill="currentColor" className="text-white">
                <path d="M224,112c0,22.57-7.9,43.2-22.23,58.11C188.39,184,170.25,192,152,192c-17.88,0-29.82-5.86-37.43-12l-10.78,45.82A8,8,0,0,1,96,232a8.24,8.24,0,0,1-1.84-.21,8,8,0,0,1-6-9.62l32-136a8,8,0,0,1,15.58,3.66l-16.9,71.8C122,166,131.3,176,152,176c27.53,0,56-23.94,56-64A72,72,0,1,0,73.63,148a8,8,0,0,1-13.85,8A88,88,0,1,1,224,112Z" />
              </svg>
            </div>
            <div className="w-[18px] h-[18px] flex items-center justify-center shrink-0">
              <ArrowIcon />
            </div>
          </div>
        </div>
      </Link>

      {/* Behance */}
      <Link
        href="https://behance.net"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-full h-[58px] px-5 md:px-6 rounded-[12px] bg-white/[0.07] text-white flex items-center justify-between text-[14px] font-normal hover:bg-white/[0.11] transition-colors duration-300"
      >
        <span>Behance</span>
        <div className="relative w-[18px] h-[18px] overflow-hidden">
          <div className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
            <div className="w-[18px] h-[18px] flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" fill="currentColor" className="text-white">
                <path d="M160,80a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H168A8,8,0,0,1,160,80Zm-24,78a42,42,0,0,1-42,42H32a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H90a38,38,0,0,1,25.65,66A42,42,0,0,1,136,158ZM40,116H90a22,22,0,0,0,0-44H40Zm80,42a26,26,0,0,0-26-26H40v52H94A26,26,0,0,0,120,158Zm128-6a8,8,0,0,1-8,8H169a32,32,0,0,0,56.59,11.2,8,8,0,0,1,12.8,9.61A48,48,0,1,1,248,152Zm-17-8a32,32,0,0,0-62,0Z" />
              </svg>
            </div>
            <div className="w-[18px] h-[18px] flex items-center justify-center shrink-0">
              <ArrowIcon />
            </div>
          </div>
        </div>
      </Link>

      {/* Twitter */}
      <Link
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-full h-[58px] px-5 md:px-6 rounded-[12px] bg-white/[0.07] text-white flex items-center justify-between text-[14px] font-normal hover:bg-white/[0.11] transition-colors duration-300"
      >
        <span>Twitter</span>
        <div className="relative w-[18px] h-[18px] overflow-hidden">
          <div className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
            <div className="w-[18px] h-[18px] flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" fill="currentColor" className="text-white">
                <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z" />
              </svg>
            </div>
            <div className="w-[18px] h-[18px] flex items-center justify-center shrink-0">
              <ArrowIcon />
            </div>
          </div>
        </div>
      </Link>

      {/* Solid White Contact Me */}
      <Link
        href="#contact"
        className="group w-full h-[58px] px-5 md:px-6 rounded-[12px] bg-white text-black flex items-center justify-between text-[14px] font-normal hover:bg-white/90 transition-colors duration-300 shadow-sm"
      >
        <span>Contact Me</span>
        <div className="relative w-[18px] h-[18px] overflow-hidden">
          <div className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
            <div className="w-[18px] h-[18px] flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" fill="currentColor" className="text-black">
                <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z" />
              </svg>
            </div>
            <div className="w-[18px] h-[18px] flex items-center justify-center shrink-0">
              <ArrowIcon className="text-black" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
