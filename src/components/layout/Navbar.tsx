"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  {
    label: "Company",
    href: "#",
    children: [
      { label: "Home", href: "/", description: "Return to the homepage." },
      { label: "About Us", href: "/about", description: "Learn about our mission and values." },
      { label: "Our Projects", href: "/projects", description: "Explore our portfolio of work." },
    ],
  },
  {
    label: "Capabilities",
    href: "#",
    children: [
      { label: "Design", href: "/capabilities/design", description: "Innovative design solutions." },
      { label: "Manufacturing", href: "/capabilities/manufacturing", description: "State-of-the-art production." },
      { label: "Sectors", href: "/capabilities/sectors", description: "Industries we serve." },
      { label: "Quality", href: "/capabilities/quality", description: "Commitment to excellence." },
      { label: "R&D", href: "/capabilities/rd", description: "Research and development." },
    ],
  },
  {
    label: "Credentials",
    href: "#",
    children: [
      { label: "Certifications", href: "/credentials/certifications", description: "Our industry certifications." },
      { label: "Sectors / Industries", href: "/credentials/sectors", description: "Areas of expertise." },
    ],
  },
  {
    label: "Contact Us",
    href: "#",
    children: [
      { label: "Careers", href: "/contact/careers", description: "Join our team." },
      { label: "IR", href: "/contact/ir", description: "Investor relations." },
    ],
  },
];

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-white/10"
    >
      {/* Circuit Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <svg
          className="absolute w-full h-full opacity-[0.15] text-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="circuit-pattern"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(1)"
            >
              <path
                d="M10 10h30v30h-30z M50 50h30v30h-30z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <path
                d="M25 10v-5 M25 80v20 M10 25h-10 M80 25h20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <circle cx="10" cy="10" r="1.5" fill="currentColor" />
              <circle cx="40" cy="10" r="1.5" fill="currentColor" />
              <circle cx="40" cy="40" r="1.5" fill="currentColor" />
              <circle cx="10" cy="40" r="1.5" fill="currentColor" />
              <path d="M10 10 L40 40 M10 40 L40 10" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-bg/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
          Smart<span className="text-blue-500">Waves</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item, index) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 text-base font-medium text-brand-text-secondary transition-colors py-2 group"
              >
                <motion.span
                  animate={{ color: hoveredIndex === index ? "#ffffff" : "#94a3b8" }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    hoveredIndex === index ? "rotate-180 text-white" : "text-brand-text-secondary"
                  }`}
                />
              </Link>

              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-full ${
                      index > 0 ? "right-0" : "left-0"
                    } w-[600px] bg-[#050505]/95 backdrop-blur-2xl border border-white/5 rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-x-8 gap-y-6`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="group/item block"
                      >
                         <div className="flex items-center gap-2 mb-1">
                           <div className="h-1.5 w-1.5 rounded-full bg-blue-500/50 group-hover/item:bg-blue-400 transition-colors" />
                           <div className="text-base font-medium text-white group-hover/item:text-blue-400 transition-colors">
                            {child.label}
                           </div>
                        </div>
                        <div className="text-sm text-gray-400 group-hover/item:text-gray-300 pl-3.5 transition-colors line-clamp-2">
                          {child.description}
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-bg border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="font-medium text-white">{item.label}</div>
                  <div className="pl-4 space-y-2 border-l border-white/10">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block text-sm text-brand-text-secondary hover:text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
