"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { FadeIn } from "@/components/ui/fade-in";

const slides = [
  {
    kicker: "Engineering Excellence",
    title: "Precision PCB Manufacturing",
    desc: "We design and manufacture high-reliability electronics for mission-critical industries. From rapid prototyping to volume production, we engineer trust into every layer."
  },
  {
    kicker: "Advanced Technology",
    title: "HDI & Flex-Rigid Solutions",
    desc: "Pushing the boundaries of miniaturization and signal integrity. Our capabilities include high-layer count boards, microvias, and exotic materials for aerospace and defense."
  },
  {
    kicker: "Quality Assurance",
    title: "IPC Class 3 Standards",
    desc: "Zero compromise on quality. Our 100% automated optical inspection and rigorous functional testing ensure your electronics perform perfectly in the harshest environments."
  }
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide (continuous mode)
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center h-full w-full px-6 sm:px-12 lg:px-20 py-12">
      <div className="grid grid-cols-1 items-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={clsx(
              "col-start-1 row-start-1 transition-all duration-1000 ease-in-out flex flex-col justify-center",
              index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
            )}
            aria-hidden={index !== current}
          >
            <span className="text-brand-accent tracking-widest text-sm font-semibold uppercase mb-4 block">
              {slide.kicker}
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8 text-white max-w-3xl">
              {slide.title}
            </h1>
            <p className="text-lg text-brand-text-muted leading-relaxed max-w-xl mb-10">
              {slide.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-accent hover:bg-sky-400 text-white font-medium px-8 py-4 rounded-sm transition-colors text-sm tracking-wide">
                Discuss Your Requirement
              </button>
              <button className="border border-brand-text-muted/30 hover:border-white text-brand-text-primary hover:bg-white/5 font-medium px-8 py-4 rounded-sm transition-all text-sm tracking-wide">
                View Capabilities
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-3 mt-8">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={clsx(
              "h-1.5 rounded-full transition-all duration-500",
              idx === current ? "w-12 bg-brand-accent" : "w-4 bg-white/20 hover:bg-white/40"
            )}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
