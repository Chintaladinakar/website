"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { CallToAction } from "@/components/sections/CallToAction";
import { Award, CheckCircle, FileText } from "lucide-react";

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-brand-bg relative pt-24 pb-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="px-6 sm:px-12 lg:px-20 mb-20 relative">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-brand-accent tracking-widest text-sm font-semibold uppercase mb-4 block">
              Quality Assurance
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              Certifications
            </h1>
            <p className="text-xl text-brand-text-muted leading-relaxed max-w-3xl mx-auto">
              Smart-Waves operates with a certified quality management system to ensure consistent, 
              reliable products for demanding industries such as aerospace and defence.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Certifications List */}
      <section className="px-6 sm:px-12 lg:px-20 mb-24 relative z-10">
        <div className="max-w-5xl mx-auto grid gap-12">
           {/* AS9100D */}
           <FadeIn>
             <div className="bg-brand-surface border border-white/5 p-8 md:p-12 rounded-2xl flex flex-col md:flex-row gap-8 items-start">
               <div className="bg-brand-bg p-6 rounded-xl border border-white/10 shrink-0">
                 <Award className="w-16 h-16 text-brand-accent" />
               </div>
               <div>
                 <h2 className="text-2xl font-bold text-white mb-4">AS9100D – Aerospace Quality Management</h2>
                 <p className="text-brand-text-muted leading-relaxed mb-6">
                   Smart-Waves Technologies Pvt. Ltd. is certified to AS9100D for its quality management system covering 
                   the design and manufacturing of PCB assemblies, integration, and box build for aerospace, defence, and other industries.
                 </p>
                 <div className="inline-flex items-center text-sm font-semibold text-brand-text-primary bg-white/5 px-4 py-2 rounded-full">
                    <CheckCircle className="w-4 h-4 mr-2 text-brand-success" /> Certified
                 </div>
               </div>
             </div>
           </FadeIn>

           {/* ISO 9001 */}
           <FadeIn delay={0.2}>
             <div className="bg-brand-surface border border-white/5 p-8 md:p-12 rounded-2xl flex flex-col md:flex-row gap-8 items-start">
               <div className="bg-brand-bg p-6 rounded-xl border border-white/10 shrink-0">
                 <FileText className="w-16 h-16 text-brand-accent" />
               </div>
               <div>
                 <h2 className="text-2xl font-bold text-white mb-4">ISO 9001:2015 – Quality Management System</h2>
                 <p className="text-brand-text-muted leading-relaxed mb-6">
                   We are also certified to ISO 9001:2015, demonstrating our commitment to standardized processes, 
                   continual improvement, and customer satisfaction across our design and manufacturing activities.
                 </p>
                 <div className="inline-flex items-center text-sm font-semibold text-brand-text-primary bg-white/5 px-4 py-2 rounded-full">
                    <CheckCircle className="w-4 h-4 mr-2 text-brand-success" /> Certified
                 </div>
               </div>
             </div>
           </FadeIn>
        </div>
      </section>

      {/* Scope Section */}
      <section className="px-6 sm:px-12 lg:px-20 mb-32">
         <div className="max-w-4xl mx-auto text-center bg-brand-bg border border-white/10 p-12 rounded-2xl">
           <FadeIn>
             <h2 className="text-2xl font-bold text-white mb-6">Scope of Certification</h2>
             <p className="text-lg text-brand-text-muted leading-relaxed">
               The certifications cover: design and manufacturing of PCB assembly, integration, and box build 
               for aerospace, defence, and other industrial applications.
             </p>
           </FadeIn>
         </div>
      </section>

      <CallToAction />
    </main>
  );
}
