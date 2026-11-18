import HeroCarousel from "@/components/HeroCarousel";
import BioCard from "@/components/BioCard";
import SocialLinks from "@/components/SocialLinks";
import LatestWork from "@/components/LatestWork";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0e1011] p-3 md:p-3.5 text-white flex items-center justify-center">
      <div className="w-full max-w-[1540px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 items-stretch">
        {/* Left Column: Main Hero Carousel with docked Navbar & Selected Work badge */}
        <section aria-label="Hero Showcase" className="w-full">
          <HeroCarousel />
        </section>

        {/* Right Column: Profile Bio & Socials Stack (Top) + Latest Work Showcase (Bottom) */}
        <section aria-label="Profile and Works" className="w-full flex flex-col justify-between gap-3">
          {/* Top Row: Bio Profile Card + Social Links Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_245px] gap-3 items-stretch">
            <BioCard />
            <SocialLinks />
          </div>

          {/* Bottom Section: Latest Work Card Header and 2-Card Showcase */}
          <LatestWork />
        </section>
      </div>
    </main>
  );
}
