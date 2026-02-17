import { FadeIn } from "@/components/ui/fade-in";
import { Cpu, Layers, Microscope, Zap } from "lucide-react";

const capabilities = [
  {
    icon: Layers,
    title: "Design Services",
    desc: "Comprehensive design service with a range of simulations and analysis all through the product lifecycle to bring viable solutions."
  },
  {
    icon: Cpu,
    title: "Manufacturing Services",
    desc: "Specialized solutions developed within stipulated timeframes, rendering manufacturing services to industry-specific domains."
  },
  {
    icon: Microscope,
    title: "Quality & Reliability",
    desc: "Thorough and rigid quality checks integrated from the beginning. We strictly adhere to customer specifications and market standards."
  },
  {
    icon: Zap,
    title: "Management",
    desc: "Our tech expert team achieves projects with minimum risks, cost, and time. ISO 9001:2015 Quality Management System certified."
  }
];

export function Capabilities() {
  return (
    <section className="py-24 border-t border-white/5">
      <FadeIn>
        <div className="mb-12">
          <span className="text-brand-accent text-sm font-semibold uppercase tracking-wider mb-2 block">Our Expertise</span>
          <h2 className="text-3xl font-semibold text-white">Core Capabilities</h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 gap-12">
        {capabilities.map((cap, idx) => (
          <FadeIn key={idx} delay={idx * 100}>
            <div className="group flex gap-6 items-start hover:bg-white/5 p-6 -mx-6 rounded-lg transition-colors">
              <div className="bg-brand-surface border border-white/10 p-3 rounded-md group-hover:border-brand-accent/50 transition-colors">
                <cap.icon className="w-6 h-6 text-brand-text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2 group-hover:text-brand-accent transition-colors">
                  {cap.title}
                </h3>
                <p className="text-brand-text-muted leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
