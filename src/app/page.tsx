import { VisualPanel } from "@/components/VisualPanel";
import { HeroCarousel } from "@/components/HeroCarousel";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Capabilities } from "@/components/sections/Capabilities";
import { Industries } from "@/components/sections/Industries";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg selection:bg-brand-accent selection:text-white">
      
      {/* SECTION 1: Hybrid Split Screen Hero (100vh) */}
      <div className="flex flex-col-reverse lg:flex-row h-screen w-full relative">
        {/* Left: Carousel Content */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative z-10 bg-brand-bg flex items-center">
            <HeroCarousel />
        </div>

        {/* Right: Video Panel */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative">
           <VisualPanel />
        </div>
      </div>

      {/* SECTION 2: Standard Website Flow */}
      <div className="w-full relative z-10 border-t border-white/5 bg-brand-bg">
        <div className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto w-full">
          <WhoWeAre />
          <Capabilities />
          <Industries />
          <CallToAction />
        </div>
        
        {/* Footer */}
        <footer className="px-6 sm:px-12 lg:px-20 py-8 border-t border-white/5 text-brand-text-muted text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Smart-Waves Electronics. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
