import { FadeIn } from "@/components/ui/fade-in";

export function WhoWeAre() {
  return (
    <section className="py-24 border-t border-white/5">
      <FadeIn>
        <h2 className="text-3xl font-semibold text-white mb-8">Who We Are</h2>
        <div className="space-y-6 text-brand-text-muted text-lg leading-relaxed max-w-2xl">
          <p>
            Smart-Waves Technologies is a tech-enabled firm powered by sophisticated design and manufacturing 
            capabilities in Aerospace, Consumer Electronics, Defence, Healthcare, and IoT.
          </p>
          <p>
            Founded in 2016 in Hyderabad by Mr. Mallikharjuna Rao Yelisela, we bridge the gap between 
            conceptual design and physical reality, ensuring every product meets the highest standards 
            of quality and reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 mt-12 border-l border-brand-accent/30 pl-8">
          <div>
            <span className="block text-3xl font-bold text-white mb-1">2016</span>
            <span className="text-sm text-brand-text-muted uppercase tracking-wider">Established</span>
          </div>
          <div>
            <span className="block text-3xl font-bold text-white mb-1">AS9100D</span>
            <span className="text-sm text-brand-text-muted uppercase tracking-wider">Certified</span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
