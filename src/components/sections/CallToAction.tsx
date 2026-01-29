import { FadeIn } from "@/components/ui/fade-in";

export function CallToAction() {
  return (
    <section className="py-32 border-t border-white/5 mb-20">
      <FadeIn>
        <div className="bg-brand-surface border border-white/10 p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 relative z-10">
            Ready to Engineer the Future?
          </h2>
          <p className="text-xl text-brand-text-muted mb-10 max-w-2xl relative z-10">
            Partner with Smart-Waves for PCB solutions that meet the rigorous demands of your industry. 
            Let's discuss your next project.
          </p>
          
          <button className="bg-white text-brand-bg font-bold px-8 py-4 rounded-sm hover:bg-brand-text-primary transition-colors relative z-10">
            Contact Engineering Team
          </button>
        </div>
      </FadeIn>
    </section>
  );
}
