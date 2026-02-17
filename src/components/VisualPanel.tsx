import Image from "next/image";

export function VisualPanel() {
  return (
    <div className="w-full h-full relative bg-brand-surface border-b lg:border-b-0 lg:border-l border-white/5 overflow-hidden">
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent pointer-events-none" />
      
      {/* Video Background */}
      {/* 
          NOTE: Video Ratio Explanation
          The video container is dynamic: it takes up 50% of the screen width and the full available height (minus the navigation bar).
          On a standard 1920x1080 screen, the video area is roughly 960px x 1000px, which is almost a 1:1 (Square) ratio.
          The video is set to `object-cover`, meaning it covers this entire area.
      */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/video-placeholder.png"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        {/* Fallback image if video fails to load (managed by poster, but keeping Image as backup structure if needed is tricky inside video tag, so we rely on poster) */}
      </video>

      {/* Overlay Content */}
      <div className="absolute bottom-12 left-12 z-20 pointer-events-none">
        <div className="flex items-center gap-3 mb-2">
          <span className="flex h-2 w-2 rounded-full bg-brand-success animate-pulse"></span>
          <span className="text-brand-text-muted text-xs uppercase tracking-widest font-medium">Live Output</span>
        </div>
        <p className="text-white text-lg font-light tracking-wide">
          Quality Management
          <span className="block text-brand-text-muted text-sm mt-1">AS9100D & ISO 9001:2015 Certified</span>
        </p>
      </div>
    </div>
  );
}
