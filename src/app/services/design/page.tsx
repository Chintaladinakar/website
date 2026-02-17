"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { CallToAction } from "@/components/sections/CallToAction";
import { 
  PencilRuler, 
  Cpu, 
  Settings, 
  Wifi, 
  Layers, 
  Box, 
  Activity, 
  CheckCircle, 
  ShieldCheck, 
  DollarSign,
  Users,
  Lightbulb,
  Microscope
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DesignServicesPage() {
  return (
    <main className="min-h-screen bg-brand-bg relative pt-24 pb-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="px-6 sm:px-12 lg:px-20 mb-20 relative">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-brand-accent tracking-widest text-sm font-semibold uppercase mb-4 block">
              Our Expertise
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              Design Services
            </h1>
            <p className="text-xl text-brand-text-muted leading-relaxed max-w-3xl mx-auto">
              Smart-Waves provides a wide array of electronic design services blending creativity, technology, and engineering 
              in relevant electronic domains. We help customers shape ideas into world-class solutions that can be deployed 
              successfully in real-world scenarios.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Intro & Process */}
      <section className="px-6 sm:px-12 lg:px-20 mb-24 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
             <h2 className="text-3xl font-bold text-white mb-6">From Concept to Reality</h2>
             <p className="text-brand-text-muted leading-relaxed mb-6">
                With our proven track record, customers can be assured that their products will stand out in the market. 
                Our skilled engineers collaborate closely with you to design, manufacture, simulate, and test flawless products.
             </p>
             <p className="text-brand-text-muted leading-relaxed">
                We follow a rigorous stage-gated process:
             </p>
             <ul className="mt-6 space-y-4">
               {[
                 "Product Concept Design (Ideation)",
                 "Preliminary Product Development & Specifications",
                 "PCB Design & Prototype Build",
                 "Pilot Testing & Validation",
                 "Design Modification & Refinement",
                 "Full-Scale Production"
               ].map((step, i) => (
                 <li key={i} className="flex items-center text-brand-text-primary">
                   <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center mr-4 text-brand-accent text-sm font-bold">
                     {i + 1}
                   </div>
                   {step}
                 </li>
               ))}
             </ul>
          </FadeIn>
          <FadeIn delay={0.2}>
             <div className="bg-brand-surface border border-white/5 rounded-xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full filter blur-[80px]" />
                <h3 className="text-xl font-bold text-white mb-6 relative z-10">Why Choose Our Design?</h3>
                <div className="space-y-6 relative z-10">
                  {[
                    { title: "Custom Design", desc: "Designs that fully meet customer ideas and project requirements.", icon: PencilRuler },
                    { title: "Dedicated Team", desc: "Engineers work in total cooperation throughout development.", icon: Users },
                    { title: "R&D Focus", desc: "Bringing new concepts to reality with advanced research.", icon: Microscope }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-brand-accent" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-brand-text-muted">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </FadeIn>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="px-6 sm:px-12 lg:px-20 mb-24 py-20 bg-brand-surface/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white">What We Offer</h2>
              <p className="text-brand-text-muted mt-4 max-w-2xl mx-auto">
                Comprehensive design services encompassing system, PCB, mechanical, IoT, embedded, and RF domains.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Layers, title: "System Design", desc: "Concept to total product Development" },
              { icon: Activity, title: "High-Speed Design", desc: "Digital, Analog, and RF designs" },
              { icon: Cpu, title: "PCB Layout", desc: "Multilayer PCB Designs with DFM focus" },
              { icon: Wifi, title: "Embedded & IoT", desc: "Smart connected systems architecture" },
              { icon: Box, title: "FPGA Programming", desc: "RTL programming and logic design" },
              { icon: Settings, title: "Mechanical CAD", desc: "3D design, simulation, and analysis" },
              { icon: CheckCircle, title: "Automated Testing", desc: "Automatic Test Equipment (ATE) development" }
            ].map((cap, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-brand-bg border border-white/5 p-6 rounded-lg hover:border-brand-accent/30 transition-all group h-full">
                  <cap.icon className="w-8 h-8 text-brand-text-muted group-hover:text-brand-accent transition-colors mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{cap.title}</h3>
                  <p className="text-sm text-brand-text-muted">{cap.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Values */}
      <section className="px-6 sm:px-12 lg:px-20 mb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { 
              step: "01", 
              title: "Project Planning", 
              desc: "We plan a project to set delivery expectations according to its workflow.",
              icon: Layers 
            },
            { 
              step: "02", 
              title: "Controlled Budget", 
              desc: "We define the budget in the designing phase and strictly abide by it.",
              icon: DollarSign 
            },
            { 
              step: "03", 
              title: "Secured IP", 
              desc: "Every project is unique, so we safeguard our customer's intellectual property.",
              icon: ShieldCheck 
            }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-gradient-to-br from-brand-surface to-brand-bg p-8 rounded-2xl border border-white/10 relative overflow-hidden h-full">
                 <div className="absolute top-4 right-4 text-4xl font-bold text-white/5">{item.step}</div>
                 <item.icon className="w-10 h-10 text-brand-accent mb-6" />
                 <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                 <p className="text-brand-text-muted leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Expectation & Testimonial */}
      <section className="px-6 sm:px-12 lg:px-20 mb-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-6">What Can You Expect?</h2>
            <div className="flex flex-wrapjustify-center gap-4 text-brand-text-primary text-sm font-semibold uppercase tracking-wider">
               <span className="bg-white/5 px-4 py-2 rounded-full border border-white/10">Quick Tech Adoption</span>
               <span className="bg-white/5 px-4 py-2 rounded-full border border-white/10">In-house Team</span>
               <span className="bg-white/5 px-4 py-2 rounded-full border border-white/10">Effective Testing</span>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="bg-brand-surface border border-brand-accent/20 p-8 md:p-12 rounded-2xl text-center relative max-w-5xl mx-auto">
             <div className="text-4xl text-brand-accent mb-6">"</div>
             <p className="text-xl md:text-2xl text-white font-light italic mb-8 leading-relaxed">
               A sophisticated design and manufacturing hub that can bridge the gap between current technology and customer requirements with latest, robust and advanced engineering solutions.
             </p>
             <div className="text-brand-text-muted font-bold tracking-widest uppercase text-sm">
               Bharat Electronics
             </div>
          </div>
        </FadeIn>
      </section>

      {/* Other Services Navigation */}
      <section className="px-6 sm:px-12 lg:px-20 mb-20 border-t border-white/5 pt-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">More Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/manufacturing" className="group bg-brand-surface p-6 rounded-lg border border-white/5 hover:border-brand-accent/50 transition-all">
               <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">Manufacturing</h3>
               <p className="text-sm text-brand-text-muted">24x7 manufacturing capability & precision production.</p>
            </Link>
            <Link href="/services/quality" className="group bg-brand-surface p-6 rounded-lg border border-white/5 hover:border-brand-accent/50 transition-all">
               <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">Quality & Reliability</h3>
               <p className="text-sm text-brand-text-muted">Complete product testing adhering to industry standards.</p>
            </Link>
            <Link href="/services/management" className="group bg-brand-surface p-6 rounded-lg border border-white/5 hover:border-brand-accent/50 transition-all">
               <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">Management</h3>
               <p className="text-sm text-brand-text-muted">Optimizing performance, driving cost savings & satisfaction.</p>
            </Link>
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
