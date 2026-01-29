import { FadeIn } from "@/components/ui/fade-in";

export function WhoWeAre() {
  return (
    <section className="py-24 border-t border-white/5">
      <FadeIn>
        <h2 className="text-3xl font-semibold text-white mb-8">Who We Are</h2>
        <div className="space-y-6 text-brand-text-muted text-lg leading-relaxed max-w-2xl">
          <p>
            Smart-Waves is more than just a manufacturer; we are an engineering partner dedicated 
            to the art of complex electronics. Founded by veteran engineers, we bridge the gap 
            between conceptual design and physical reality.
          </p>
          <p>
            Our facility operates on a culture of absolute precision. We don't just assemble components; 
            we validate every trace, solder joint, and signal path to ensure performance in the most 
            demanding environments.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 mt-12 border-l border-brand-accent/30 pl-8">
          <div>
            <span className="block text-3xl font-bold text-white mb-1">15+</span>
            <span className="text-sm text-brand-text-muted uppercase tracking-wider">Years Exp</span>
          </div>
          <div>
            <span className="block text-3xl font-bold text-white mb-1">IPC-3</span>
            <span className="text-sm text-brand-text-muted uppercase tracking-wider">Standard</span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
