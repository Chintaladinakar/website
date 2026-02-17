import { FadeIn } from "@/components/ui/fade-in";
import { CallToAction } from "@/components/sections/CallToAction";
import { Cpu, Target, Award, Users, Lightbulb, Shield, Briefcase, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-bg relative overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative px-6 sm:px-12 lg:px-20 py-24 border-b border-white/5">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-brand-accent tracking-widest text-sm font-semibold uppercase mb-4 block">
              Our Identity
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8">
              Delivering Futuristic <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-text-muted">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-brand-text-muted leading-relaxed max-w-2xl mx-auto">
              Smart-Waves Technologies is more than just a manufacturer; we are an advanced end-to-end product life-cycle solution partner 
              with solid experience across electronics, defence, and aerospace industries. We deliver complex design solutions 
              into smart, customized, and cost-effective products.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Vision & Mission */}
      <section className="px-6 sm:px-12 lg:px-20 py-24 border-b border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-24">
          <FadeIn>
            <div className="bg-brand-surface border border-white/10 p-8 rounded-xl h-full relative overflow-hidden group hover:border-brand-accent/30 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target className="w-24 h-24 text-brand-accent" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-brand-accent" />
                Our Vision
              </h2>
              <p className="text-brand-text-muted leading-relaxed">
                To partner with our clients in their pursuit of achieving sustainable market leadership and to provide quality services 
                that exceed the expectations of our esteemed customers.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="bg-brand-surface border border-white/10 p-8 rounded-xl h-full relative overflow-hidden group hover:border-brand-accent/30 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Shield className="w-24 h-24 text-brand-accent" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-brand-accent" />
                Our Mission
              </h2>
              <p className="text-brand-text-muted leading-relaxed">
                To build long term relationships with our customers and clients and provide exceptional customer services by pursuing 
                business through innovation and advanced technology which turns engineering services ideas into winning products.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 sm:px-12 lg:px-20 py-24 border-b border-white/5 bg-brand-bg/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
             <div className="text-center mb-16">
               <span className="text-brand-accent tracking-widest text-sm font-semibold uppercase mb-2 block">Why Choose Us</span>
               <h2 className="text-3xl font-bold text-white">Our Core Values</h2>
             </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "State-of-Art Technology",
                desc: "Our comprehensive domain knowledge and tailor-made engineering have translated into many innovative products."
              },
              {
                icon: Briefcase,
                title: "Customized Solutions",
                desc: "We specialize in developing bespoke systems that fit customer's specifications in Aerospace, Defence, Healthcare, IoT, and more."
              },
              {
                icon: Award,
                title: "Quality Standard",
                desc: "We assure quality and reliable product service deployable to scale. Certified AS9100D & ISO 9001:2015."
              },
              {
                icon: Users,
                title: "Exceptional Service",
                desc: "We promise to provide fit-to-purpose products and strive to enrich profitability for our customers through dedicated service."
              }
            ].map((value, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="h-full p-6 rounded-lg bg-brand-surface border border-white/5 hover:border-brand-accent/50 transition-colors">
                  <value.icon className="w-8 h-8 text-brand-accent mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-brand-text-muted leading-relaxed">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="px-6 sm:px-12 lg:px-20 py-24 border-b border-white/5">
         <div className="max-w-7xl mx-auto">
           <FadeIn>
             <h2 className="text-3xl font-bold text-white mb-16 text-center">Leadership Team</h2>
           </FadeIn>

           <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
             {/* Founder */}
             <FadeIn>
               <div className="flex flex-col md:flex-row gap-8 items-start">
                 <div className="w-full md:w-48 h-48 bg-brand-surface rounded-lg border border-white/10 shrink-0 overflow-hidden relative">
                    {/* Placeholder for Founder Image */}
                    <div className="absolute inset-0 flex items-center justify-center bg-white/5 text-brand-text-muted">
                       <Users className="w-12 h-12 opacity-20" />
                    </div>
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-white">Mr. Mallikharjuna Rao Yelisela</h3>
                   <span className="text-brand-accent text-sm font-medium block mb-4">Founder & Managing Director</span>
                   <p className="text-brand-text-muted leading-relaxed mb-4 text-justify">
                     Founded Smart-Waves in 2016. With over 20 years of experience in aerospace and defence projects, he brings a proven 
                     track record of excellence. He holds a post-graduate degree in Digital Electronics from Osmania University and 
                     Engineering from JNTU.
                   </p>
                 </div>
               </div>
             </FadeIn>

             {/* Co-founder */}
             <FadeIn delay={0.2}>
               <div className="flex flex-col md:flex-row gap-8 items-start">
                 <div className="w-full md:w-48 h-48 bg-brand-surface rounded-lg border border-white/10 shrink-0 overflow-hidden relative">
                    {/* Placeholder for Co-Founder Image */}
                    <div className="absolute inset-0 flex items-center justify-center bg-white/5 text-brand-text-muted">
                       <Users className="w-12 h-12 opacity-20" />
                    </div>
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-white">Mr. Kiran Rao Govada</h3>
                   <span className="text-brand-accent text-sm font-medium block mb-4">Co-Founder & Engagement Partner</span>
                   <p className="text-brand-text-muted leading-relaxed mb-4 text-justify">
                     A technology-driven executive with 21+ years of experience in international sports consulting, Sports Technology, 
                     ICT Applications Delivery, and Leadership. He serves as the Engagement Partner and Advisor.
                   </p>
                 </div>
               </div>
             </FadeIn>
           </div>
         </div>
      </section>

      {/* Clients */}
      <section className="px-6 sm:px-12 lg:px-20 py-24 border-b border-white/5 bg-brand-surface">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-white">Trusted by Industry Leaders</h2>
          </div>
          <div className="flex flex-wrapjustify-center gap-8 lg:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Client Names as Text for now, can be replaced with logos */}
             {["VSSC", "ECIL", "Honeywell", "Linkwell", "Vedvaag", "Keus", "Bhawati"].map((client, i) => (
               <span key={i} className="text-xl font-bold text-brand-text-muted hover:text-white transition-colors cursor-default">
                 {client}
               </span>
             ))}
          </div>
        </FadeIn>
      </section>

      <CallToAction />
    </main>
  );
}
