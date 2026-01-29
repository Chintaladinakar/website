import { FadeIn } from "@/components/ui/fade-in";

export function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center py-20 lg:py-0">
      <FadeIn>
        <span className="text-brand-accent tracking-widest text-sm font-semibold uppercase mb-4 block">
          Engineering Excellence
        </span>
        <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8 text-white">
          Precision PCB <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-text-muted">
            Manufacturing
          </span>
        </h1>
        <p className="text-lg text-brand-text-muted leading-relaxed max-w-xl mb-10">
          We design and manufacture high-reliability electronics for mission-critical industries. 
          From rapid prototyping to volume production, we engineer trust into every layer.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-brand-accent hover:bg-sky-400 text-white font-medium px-8 py-4 rounded-sm transition-colors text-sm tracking-wide">
            Discuss Your Requirement
          </button>
          <button className="border border-brand-text-muted/30 hover:border-white text-brand-text-primary hover:bg-white/5 font-medium px-8 py-4 rounded-sm transition-all text-sm tracking-wide">
            View Capabilities
          </button>
        </div>
      </FadeIn>
    </section>
  );
}
