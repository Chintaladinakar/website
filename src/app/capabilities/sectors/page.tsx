"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { CallToAction } from "@/components/sections/CallToAction";
import { 
  Plane, 
  Shield, 
  Tv, 
  Factory, 
  Activity, 
  Wifi, 
  Train 
} from "lucide-react";

export default function SectorsPage() {
  return (
    <main className="min-h-screen bg-brand-bg relative pt-24 pb-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="px-6 sm:px-12 lg:px-20 mb-20 relative">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-brand-accent tracking-widest text-sm font-semibold uppercase mb-4 block">
              Industries We Serve
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              Sectors
            </h1>
            <p className="text-xl text-brand-text-muted leading-relaxed max-w-3xl mx-auto">
              Smart-Waves delivers end-to-end product engineering and manufacturing solutions across multiple 
              high-reliability sectors, combining domain expertise with strong design and production capabilities.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Sector Blocks */}
      <section className="px-6 sm:px-12 lg:px-20 mb-32 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             {
               title: "Aerospace",
               desc: "We support aerospace programs with system design, multilayer PCB design, high-reliability assemblies, and full product lifecycle support for mission-critical environments.",
               icon: Plane
             },
             {
               title: "Defence Electronics",
               desc: "We work on defence electronics systems including rugged embedded hardware, secure communication modules, automatic test equipment, and custom electronics meeting stringent standards.",
               icon: Shield
             },
             {
               title: "Consumer Electronics",
               desc: "Design and manufacturing services for consumer devices, from concept and enclosure design to PCB layout, prototyping, and scalable manufacturing.",
               icon: Tv
             },
             {
               title: "Industrial Electronics",
               desc: "Development of industrial control, monitoring, and automation electronics with a focus on long-term reliability, manufacturability, and ease of maintenance.",
               icon: Factory
             },
             {
               title: "Healthcare",
               desc: "Contributing to electronic systems used in healthcare equipment, emphasizing safety, reliability, and compliance with relevant quality standards.",
               icon: Activity
             },
             {
               title: "IoT & Connected Devices",
               desc: "Design and build of IoT devices and connected embedded systems, covering hardware, firmware, connectivity, and cloud-integrated electronics.",
               icon: Wifi
             },
             {
               title: "Railways",
               desc: "Serving railway applications with robust electronics suitable for harsh environments, enabling monitoring, control, and communication functions.",
               icon: Train
             }
           ].map((sector, i) => (
             <FadeIn key={i} delay={i * 0.1}>
               <div className="bg-brand-surface border border-white/5 p-8 rounded-xl group hover:border-brand-accent/30 transition-all h-full">
                 <sector.icon className="w-10 h-10 text-brand-accent mb-6" />
                 <h3 className="text-xl font-bold text-white mb-4">{sector.title}</h3>
                 <p className="text-brand-text-muted leading-relaxed text-sm">{sector.desc}</p>
               </div>
             </FadeIn>
           ))}
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
