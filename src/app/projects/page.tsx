"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { CallToAction } from "@/components/sections/CallToAction";
import { ArrowRight } from "lucide-react";

// Project Data
const projects = [
  {
    id: 1,
    title: "Avionics Project",
    category: "Aerospace",
    description: "High-performance avionics control systems designed for extreme conditions.",
    image: "/images/project-avionics.jpg" // Placeholder path
  },
  {
    id: 2,
    title: "Defence Communication System",
    category: "Defense Electronics System",
    description: "Secure, encrypted communication modules for field operations.",
    image: "/images/project-defence-1.jpg" // Placeholder path
  },
  {
    id: 3,
    title: "Radar Signal Processor",
    category: "Defense Electronics System",
    description: "Advanced signal processing unit for next-gen radar applications.",
    image: "/images/project-defence-2.jpg" // Placeholder path
  }
];

const categories = ["All", "Aerospace", "Defense Electronics System"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(project => 
    filter === "All" ? true : project.category === filter
  );

  return (
    <main className="min-h-screen bg-brand-bg relative pt-24 pb-20">
      
      {/* Header Section */}
      <section className="px-6 sm:px-12 lg:px-20 mb-20">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-brand-accent tracking-widest text-sm font-semibold uppercase mb-4 block">
              Our Portfolio
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              Our Projects
            </h1>
            <p className="text-xl text-brand-text-muted leading-relaxed max-w-3xl mx-auto">
              Smart-Waves manages the entire product manufacturing cycle through strong partnership with reputed 
              component suppliers and has high end capability, infrastructure in developing the end product. 
              We are sensitive to the customer's timeline, quality requirements and budget.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Filter Buttons */}
      <section className="px-6 mb-16">
        <FadeIn>
          <div className="flex flex-wrapjustify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm font-medium tracking-wide
                  ${filter === cat 
                    ? "bg-brand-accent border-brand-accent text-white" 
                    : "bg-transparent border-white/10 text-brand-text-muted hover:border-white/30 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Projects Grid */}
      <section className="px-6 sm:px-12 lg:px-20 mb-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <FadeIn key={project.id}>
              <div className="group bg-brand-surface border border-white/5 rounded-xl overflow-hidden hover:border-brand-accent/30 transition-all duration-500 flex flex-col h-full">
                {/* Image Area (Placeholder gradient for now) */}
                <div className="h-48 bg-gradient-to-br from-brand-surface to-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-accent/5 group-hover:bg-brand-accent/10 transition-colors" />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-white/10">
                    {project.category}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-brand-text-muted text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="pt-6 border-t border-white/5 flex items-center text-brand-accent text-sm font-medium group-hover:gap-2 transition-all">
                    View Case Study <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
