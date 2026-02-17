"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { CallToAction } from "@/components/sections/CallToAction";
import { 
  Lightbulb, 
  Cpu, 
  Wrench, 
  Activity, 
  Users 
} from "lucide-react";

export default function RDPage() {
  return (
    <main className="min-h-screen bg-brand-bg relative pt-24 pb-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="px-6 sm:px-12 lg:px-20 mb-20 relative">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-brand-accent tracking-widest text-sm font-semibold uppercase mb-4 block">
              Innovation Hub
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              Research & Development
            </h1>
            <p className="text-xl text-brand-text-muted leading-relaxed max-w-3xl mx-auto">
              Smart-Waves invests in research and development to transform new ideas into manufacturable, 
              high-performance electronic products. Our R&D team blends system design, embedded engineering, 
              and advanced simulation to shorten development cycles and improve product reliability.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* R&D Activities */}
      <section className="px-6 sm:px-12 lg:px-20 mb-24 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
           {[
             {
               title: "Concept Feasibility & Architecture",
               desc: "We validate product concepts, define system architecture, and choose the right technologies, components, and platforms for each application.",
               icon: Lightbulb
             },
             {
               title: "Hardware, Firmware & Embedded Design",
               desc: "Our engineers develop schematics, PCB layouts, and embedded software/firmware for aerospace, defence, industrial, IoT, and healthcare products.",
               icon: Cpu
             },
             {
               title: "Prototyping & NPI",
               desc: "We rapidly build and iterate prototypes, refine designs based on testing feedback, and prepare products for smooth transition into volume manufacturing.",
               icon: Wrench
             },
             {
               title: "Simulation, Validation & Reliability",
               desc: "Using simulations and structured validation, we identify potential design issues early and enhance long-term reliability before mass production.",
               icon: Activity
             }
           ].map((area, i) => (
             <FadeIn key={i} delay={i * 0.1}>
               <div className="flex gap-6 items-start">
                 <div className="bg-brand-surface border border-white/5 p-4 rounded-lg shrink-0">
                   <area.icon className="w-6 h-6 text-brand-accent" />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                   <p className="text-brand-text-muted leading-relaxed">{area.desc}</p>
                 </div>
               </div>
             </FadeIn>
           ))}
        </div>
      </section>

      {/* Collaboration */}
      <section className="px-6 sm:px-12 lg:px-20 mb-32 bg-brand-surface py-20 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="w-20 h-20 bg-brand-bg rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Collaboration with Customers</h2>
            <p className="text-lg text-brand-text-muted leading-relaxed">
              Our R&D team works closely with customers' engineering and product teams, safeguarding their intellectual 
              property while co-creating solutions that fit their specifications. We believe in true partnership 
              to bring your vision to life.
            </p>
          </FadeIn>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
