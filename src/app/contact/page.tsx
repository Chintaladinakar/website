"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-bg relative pt-24 pb-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="px-6 sm:px-12 lg:px-20 mb-20 relative">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-brand-accent tracking-widest text-sm font-semibold uppercase mb-4 block">
              Get in Touch
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              Contact Us
            </h1>
            <p className="text-xl text-brand-text-muted leading-relaxed max-w-2xl mx-auto">
              Reach out to Smart-Waves for design, manufacturing, quality and reliability, 
              or complete product lifecycle solutions.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="px-6 sm:px-12 lg:px-20 mb-32 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <FadeIn>
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-white mb-8">Headquarters</h2>
                <div className="flex gap-4 items-start mb-6">
                  <MapPin className="w-6 h-6 text-brand-accent shrink-0 mt-1" />
                  <p className="text-brand-text-muted leading-relaxed">
                    Smart-Waves Technologies Pvt. Ltd.<br />
                    I – Floor, Plot No. C‑1, Electronic Complex,<br />
                    Kushaiguda, Hyderabad – 500062, Telangana, India.
                  </p>
                </div>
                <div className="flex gap-4 items-center mb-6">
                  <Phone className="w-6 h-6 text-brand-accent shrink-0" />
                  <p className="text-brand-text-muted">
                    040‑27138558 / 27148558
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                   <Mail className="w-6 h-6 text-brand-accent shrink-0 mt-1" />
                   <div className="text-brand-text-muted">
                     <p>Sales: <a href="mailto:sales@smart-waves.co.in" className="hover:text-white transition-colors">sales@smart-waves.co.in</a></p>
                     <p>General: <a href="mailto:info@smart-waves.co.in" className="hover:text-white transition-colors">info@smart-waves.com</a></p>
                   </div>
                </div>
              </div>

              <div className="bg-brand-surface border border-white/5 p-8 rounded-xl">
                 <h3 className="text-xl font-bold text-white mb-4">Business Note</h3>
                 <p className="text-brand-text-muted leading-relaxed">
                   Our goal is to offer broad capabilities, competitive pricing, exceptional quality, 
                   and outstanding service to each and every customer.
                 </p>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.2}>
            <div className="bg-brand-surface border border-white/5 p-8 md:p-10 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-brand-text-primary mb-2">Name</label>
                  <input type="text" className="w-full bg-brand-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-accent focus:outline-none transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-text-primary mb-2">Company</label>
                  <input type="text" className="w-full bg-brand-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-accent focus:outline-none transition-colors" placeholder="Your Company" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brand-text-primary mb-2">Email</label>
                    <input type="email" className="w-full bg-brand-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-accent focus:outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-text-primary mb-2">Phone</label>
                    <input type="tel" className="w-full bg-brand-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-accent focus:outline-none transition-colors" placeholder="+91..." />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-text-primary mb-2">Sector / Application</label>
                  <select className="w-full bg-brand-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-accent focus:outline-none transition-colors">
                    <option>Aerospace</option>
                    <option>Defence</option>
                    <option>Consumer Electronics</option>
                    <option>Industrial</option>
                    <option>Healthcare</option>
                    <option>IoT</option>
                    <option>Railways</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-text-primary mb-2">Requirement Details</label>
                  <textarea rows={4} className="w-full bg-brand-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-accent focus:outline-none transition-colors" placeholder="Tell us about your project..."></textarea>
                </div>
                
                <button type="button" className="w-full bg-brand-accent hover:bg-sky-400 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            </div>
          </FadeIn>

        </div>
      </section>
    </main>
  );
}
