import { FadeIn } from "@/components/ui/fade-in";
import { Cpu, Layers, Microscope, Zap } from "lucide-react";

const capabilities = [
  {
    icon: Layers,
    title: "PCB Design & Layout",
    desc: "Rigorous schematic capture and layout design focused on signal integrity, thermal management, and manufacturability (DFM)."
  },
  {
    icon: Cpu,
    title: "Precision Manufacturing",
    desc: "High-layer count boards, flex-rigid PCBs, and HDI technology manufactured with automated precision."
  },
  {
    icon: Microscope,
    title: "Testing & QA",
    desc: "Comprehensive testing including AOI, X-Ray inspection, and functional testing to meet IPC Class 3 standards."
  },
  {
    icon: Zap,
    title: "R&D Prototyping",
    desc: "Agile prototyping services designed to iterate quickly without compromising on industrial-grade quality."
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
