import { FadeIn } from "@/components/ui/fade-in";

export function CallToAction() {
  return (
    <section className="py-32 border-t border-white/5 mb-20">
      <FadeIn>
        <div className="bg-brand-surface border border-white/10 p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 relative z-10">
            Let's Work Together
          </h2>
          <p className="text-xl text-brand-text-muted mb-8 max-w-2xl relative z-10">
            Our goal is to offer broad capabilities, competitive pricing, exceptional quality, and outstanding service.
          </p>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-brand-text-muted text-left max-w-3xl mx-auto md:mx-0">
            <div>
              <h3 className="text-white font-semibold mb-2">Visit Us</h3>
              <p className="text-sm">
                I - Floor, Plot No. C-1, Electronic Complex,<br/>
                Kushaiguda, Hyderabad - 500062, Telangana.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Contact</h3>
              <p className="text-sm">
                <span className="block">040-27138558 / 27148558</span>
                <span className="block mt-1">info@smart-waves.com</span>
                <span className="block">sales@smart-waves.co.in</span>
              </p>
            </div>
          </div>
          
          <button className="bg-white text-brand-bg font-bold px-8 py-4 rounded-sm hover:bg-brand-text-primary transition-colors relative z-10">
             Contact Us
          </button>
        </div>
      </FadeIn>
    </section>
  );
}
