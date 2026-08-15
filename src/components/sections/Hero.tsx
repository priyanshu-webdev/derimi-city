"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "200+",         label: "Happy Families" },
  { value: "₹1,751/Sqft", label: "Starting Rate"  },
  { value: "Bihar's",      label: "Premier Township" },
  { value: "100%",         label: "Clear Title"    },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY   = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const opacity  = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[100svh] min-h-[760px] flex flex-col"
      aria-label="Hero"
    >
      {/* === Background === */}
      <motion.div
        className="absolute inset-0 z-0 origin-center"
        style={{ y: imageY }}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2560&q=85"
          alt="Derimi City - Luxury Township Bihar"
          fill
          priority
          className="object-cover"
        />
        {/* Left-side deep vignette for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-black/[0.97] via-primary-black/60 to-primary-black/20" />
        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-primary-black/20 to-transparent" />
        {/* Subtle warm gold tone */}
        <div className="absolute inset-0 bg-primary-gold/[0.03] mix-blend-overlay" />
      </motion.div>

      {/* === Main Content === */}
      <motion.div
        className="relative z-10 flex-1 min-h-0 flex flex-col justify-center"
        style={{ y: contentY, opacity }}
      >
        {/* Indented to move content away from left edge */}
        <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl pt-24 pb-10">
          <div className="max-w-2xl xl:max-w-3xl">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-primary-gold/60" />
              <span className="text-[10px] text-primary-gold/80 tracking-[0.3em] uppercase font-light">
                Bishunpura, Parsa Saran · Bihar
              </span>
            </motion.div>

            {/* Main Heading — uppercase, wide tracking, premium editorial scale */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif leading-[1.0] mb-8"
            >
              <span className="block text-[4.5rem] sm:text-7xl md:text-[8rem] xl:text-[9.5rem] font-light text-white/95 uppercase tracking-[0.08em]">
                Derimi
              </span>
              <span className="block text-[4.5rem] sm:text-7xl md:text-[8rem] xl:text-[9.5rem] font-bold text-primary-gold uppercase tracking-[0.08em]">
                City
              </span>
            </motion.h1>

            {/* Sub-copy — high contrast, limited width, generous line height */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/75 text-sm md:text-[15px] font-light leading-[2] max-w-[340px] mb-10 tracking-wide"
            >
              A premium residential &amp; commercial township designed for those who believe where you live defines how you live.
            </motion.p>

            {/* CTAs — taller, stronger horizontal padding, smooth hover */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Button
                variant="gold"
                size="lg"
                className="px-10 py-5 text-[11px] tracking-[0.2em] uppercase transition-all duration-300"
                asChild
              >
                <a href="#contact">Book Site Visit</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-10 py-5 text-[11px] tracking-[0.2em] uppercase transition-all duration-300"
                asChild
              >
                <a href="#amenities">Explore Project</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* === Floating Stats Bar === */}
      <motion.div
        className="relative z-10 mt-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="border-t border-white/[0.06] bg-primary-black/50 backdrop-blur-md">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col py-5 px-6 md:px-8">
                  <span className="font-serif text-xl md:text-2xl text-primary-white font-medium">{s.value}</span>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-primary-gray/50 mt-1 font-light">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* === Scroll Indicator (vertical right edge) === */}
      <motion.div
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span
          className="text-[9px] tracking-[0.3em] uppercase text-primary-gray/40 font-light"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll to explore
        </span>
        <motion.div
          className="w-px bg-primary-gold/40"
          animate={{ height: ["0px", "48px", "0px"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
