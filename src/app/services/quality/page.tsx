"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { CallToAction } from "@/components/sections/CallToAction";
import { 
  ShieldCheck, 
  Activity, 
  Search, 
  FileCheck, 
  Award, 
  Users, 
  Clock, 
  CheckCircle,
  Microscope,
  Zap
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function QualityServicesPage() {
  return (
    <main className="min-h-screen bg-brand-bg relative pt-24 pb-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="px-6 sm:px-12 lg:px-20 mb-20 relative">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-brand-accent tracking-widest text-sm font-semibold uppercase mb-4 block">
              Reliability Engineering
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              Quality & Reliability Services
            </h1>
            <p className="text-xl text-brand-text-muted leading-relaxed max-w-3xl mx-auto">
              Smart-Waves is a pioneer in delivering comprehensive quality and reliability solutions to the electronic industry. 
              We leverage a team of experts and a testing facility to predict product durability, ensuring specifications compliance 
              and accelerating time to market.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Process Methodology */}
      <section className="px-6 sm:px-12 lg:px-20 mb-24 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
           {[
             {
               title: "Simulation",
               desc: "We ensure the successful implementation of design through rigorous simulation.",
               icon: Activity
             },
             {
               title: "Validation",
               desc: "We help to accelerate product performance through comprehensive validation.",
               icon: CheckCircle
             },
             {
               title: "Verification",
               desc: "We develop quality-driven products using our reliable inspection methods.",
               icon: Search
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

      {/* Certifications Section */}
      <section className="px-6 sm:px-12 lg:px-20 mb-24 py-20 bg-brand-surface border-y border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-6">Certified Excellence</h2>
            <p className="text-brand-text-muted leading-relaxed mb-8">
              Smart-Waves has implemented a quality management system following <strong className="text-white">AS 9100D</strong> and <strong className="text-white">ISO 9001:2015</strong>, 
              which includes the Design and Manufacturing of PCB Assembly, Integration, and Box Build for Aerospace, Defence, and other industries.
            </p>
            <div className="flex gap-4">
              <div className="bg-brand-bg px-6 py-4 rounded border border-white/10 flex items-center gap-3">
                <Award className="w-8 h-8 text-brand-accent" />
                <div>
                  <div className="text-white font-bold">AS 9100D</div>
                  <div className="text-xs text-brand-text-muted">Aerospace Quality</div>
                </div>
              </div>
              <div className="bg-brand-bg px-6 py-4 rounded border border-white/10 flex items-center gap-3">
                <Award className="w-8 h-8 text-brand-accent" />
                <div>
                  <div className="text-white font-bold">ISO 9001:2015</div>
                  <div className="text-xs text-brand-text-muted">Quality Management</div>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="bg-brand-bg p-8 rounded-xl border border-white/5">
              <h3 className="text-lg font-semibold text-white mb-6 border-b border-white/5 pb-4">Our Scope</h3>
              <ul className="space-y-4">
                {[
                  "Electronic Manufacturing Services",
                  "Production Transition",
                  "Contract Manufacturing",
                  "Original Design Manufacturing",
                  "Prototype Manufacturing"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-brand-text-muted">
                    <CheckCircle className="w-4 h-4 text-brand-success mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="px-6 sm:px-12 lg:px-20 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "Defined Standards", 
                desc: "The highest quality standard is maintained all through the product lifecycle.",
                icon: FileCheck
              },
              { 
                step: "02", 
                title: "Experienced Team", 
                desc: "Professional team provides quality products and firmly holds on project implementation.",
                icon: Users
              },
              { 
                step: "03", 
                title: "Quality by Design", 
                desc: "Quality is ensured throughout the design process, leveraging our end-to-end management system.",
                icon: Microscope
              },
              { 
                step: "04", 
                title: "On-time Delivery", 
                desc: "Committed to on-time engineering solutions and delivery schedules.",
                icon: Clock
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative p-6 border-l-2 border-brand-accent/30 hover:border-brand-accent transition-colors pl-6 h-full">
                   <div className="text-4xl font-bold text-white/10 absolute top-0 right-0">{item.step}</div>
                   <h3 className="text-xl font-bold text-white mb-3 mt-4">{item.title}</h3>
                   <p className="text-sm text-brand-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 sm:px-12 lg:px-20 mb-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-6">What Can You Expect?</h2>
             <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
               <div className="bg-brand-surface p-4 rounded border border-white/5 flex items-center gap-3">
                 <ShieldCheck className="w-5 h-5 text-brand-success" />
                 <span className="text-brand-text-primary text-sm">Quality Assurance</span>
               </div>
               <div className="bg-brand-surface p-4 rounded border border-white/5 flex items-center gap-3">
                 <ShieldCheck className="w-5 h-5 text-brand-success" />
                 <span className="text-brand-text-primary text-sm">Board Build-up & Test Facility</span>
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
            <Link href="/services/manufacturing" className="group bg-brand-surface p-6 rounded-lg border border-white/5 hover:border-brand-accent/50 transition-all">
               <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">Manufacturing</h3>
               <p className="text-sm text-brand-text-muted">Turnkey manufacturing solutions from prototype to production.</p>
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
