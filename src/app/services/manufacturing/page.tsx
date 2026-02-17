"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { CallToAction } from "@/components/sections/CallToAction";
import { 
  Factory, 
  Settings, 
  Clock, 
  Zap, 
  Cpu, 
  Box, 
  Truck, 
  Users,
  CheckCircle,
  ShieldCheck,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

export default function ManufacturingServicesPage() {
  return (
    <main className="min-h-screen bg-brand-bg relative pt-24 pb-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="px-6 sm:px-12 lg:px-20 mb-20 relative">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-brand-accent tracking-widest text-sm font-semibold uppercase mb-4 block">
              Turnkey Solutions
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              Manufacturing Services
            </h1>
            <p className="text-xl text-brand-text-muted leading-relaxed max-w-3xl mx-auto">
              Smart-Waves is an engineering-driven company backed by experienced engineers and a strong management team with 
              10+ years of experience. We provide complete turnkey manufacturing solutions from prototyping support to full-scale 
              production in aerospace, defense, healthcare, railway, and industrial electronics.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Highlights Grid */}
      <section className="px-6 sm:px-12 lg:px-20 mb-24 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
           {[
             {
               title: "Precise",
               desc: "Visualize your ideas using Smart-Waves' unique approach to precision engineering.",
               icon: Settings
             },
             {
               title: "24x7 Production",
               desc: "Our in-house manufacturing facility is at your service round the clock.",
               icon: Clock
             },
             {
               title: "Automated",
               desc: "Details automated solutions for various industries to ensure consistency and speed.",
               icon: Zap
             }
           ].map((item, i) => (
             <FadeIn key={i} delay={i * 0.1}>
               <div className="bg-brand-surface border border-white/5 p-8 rounded-xl text-center group hover:border-brand-accent/30 transition-all">
                 <div className="w-16 h-16 bg-brand-bg rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-accent/10 transition-colors">
                   <item.icon className="w-8 h-8 text-white group-hover:text-brand-accent transition-colors" />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                 <p className="text-brand-text-muted">{item.desc}</p>
               </div>
             </FadeIn>
           ))}
        </div>
      </section>

      {/* Offerings Section */}
      <section className="px-6 sm:px-12 lg:px-20 mb-24 py-20 bg-brand-surface border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">What We Offer</h2>
              <p className="text-brand-text-muted max-w-2xl mx-auto">
                Our manufacturing service caters to diverse requirements. From prototype to mass production, 
                our engineering team ensures the highest standards. All facilities are ISO 9001 certified.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Cpu, title: "Electronic Manufacturing", desc: "Comprehensive EMS solutions." },
              { icon: TrendingUp, title: "Production Transition", desc: "Seamless shift from prototype to mass production." },
              { icon: Users, title: "Contract Manufacturing", desc: "Dedicated manufacturing partnership." },
              { icon: Factory, title: "Original Design Manufacturing", desc: "Complete ODM services." },
              { icon: Box, title: "Prototype Manufacturing", desc: "Rapid prototyping for validation." },
            ].map((offer, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 bg-brand-bg p-6 rounded-lg border border-white/5 hover:border-brand-accent/30 transition-colors">
                  <offer.icon className="w-6 h-6 text-brand-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{offer.title}</h3>
                    <p className="text-sm text-brand-text-muted">{offer.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="px-6 sm:px-12 lg:px-20 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "One-Stop Service", 
                desc: "One-stop partner for Design, Development and Manufacturing services."
              },
              { 
                step: "02", 
                title: "Qualified Resource", 
                desc: "Skilled engineering team aligning with customer’s thought process."
              },
              { 
                step: "03", 
                title: "Advanced Techniques", 
                desc: "Pursue your business with innovation and latest manufacturing techniques."
              },
              { 
                step: "04", 
                title: "Cost-Effective", 
                desc: "Realize design engineering projects faster and at the best price."
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative p-6 border-l-2 border-brand-accent/30 hover:border-brand-accent transition-colors pl-6">
                   <div className="text-4xl font-bold text-white/10 absolute top-0 right-0">{item.step}</div>
                   <h3 className="text-xl font-bold text-white mb-3 mt-4">{item.title}</h3>
                   <p className="text-sm text-brand-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Expectations & Testimonial */}
      <section className="px-6 sm:px-12 lg:px-20 mb-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-6">What Can You Expect?</h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
               <div className="bg-brand-surface p-4 rounded border border-white/5 flex items-center gap-3">
                 <CheckCircle className="w-5 h-5 text-brand-success" />
                 <span className="text-brand-text-primary text-sm">100% Quality Assurance</span>
               </div>
               <div className="bg-brand-surface p-4 rounded border border-white/5 flex items-center gap-3">
                 <CheckCircle className="w-5 h-5 text-brand-success" />
                 <span className="text-brand-text-primary text-sm">Fulfilling Technical Requirements</span>
               </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="bg-brand-surface border border-brand-accent/20 p-8 md:p-12 rounded-2xl text-center relative max-w-5xl mx-auto">
             <div className="text-4xl text-brand-accent mb-6">"</div>
             <p className="text-xl md:text-2xl text-white font-light italic mb-8 leading-relaxed">
               A sophisticated design and manufacturing hub that can bridge the gap between current technology 
               and customer requirements with latest, robust and advanced engineering solutions.
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
            <Link href="/services/design" className="group bg-brand-surface p-6 rounded-lg border border-white/5 hover:border-brand-accent/50 transition-all">
               <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">Design Services</h3>
               <p className="text-sm text-brand-text-muted">System design from concept to total product development.</p>
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
