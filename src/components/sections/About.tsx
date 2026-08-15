"use client";

import Image from "next/image";
import { Section } from "@/components/ui/section";
import { FadeUp, StaggerContainer, StaggerItem, ImageReveal } from "@/components/animations/FadeUp";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "200+",  label: "Happy Customers" },
  { value: "6",     label: "Years Experience" },
  { value: "100%",  label: "Clear Title"      },
  { value: "Bihar", label: "Premier Township" },
];

export function About() {
  return (
    <Section id="about" variant="wide" className="bg-primary-black">
      <div className="grid grid-cols-1 lg:grid-cols-[52%_1fr] gap-12 lg:gap-16 items-center">

        {/* === Left: Image Column === */}
        {/* 9C: explicit 'relative' on the wrapper ensures floating card positions correctly */}
        <div className="relative order-2 lg:order-1 pb-10 lg:pb-0">
          <FadeUp>
            {/* Main image */}
            <ImageReveal delay={0.1}>
              <div className="relative rounded-sm overflow-hidden aspect-[4/5] max-h-[680px]">
                <Image
                  src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1200&q=80"
                  alt="Derimi Estate Pvt. Ltd. - Premium Township in Bishunpura"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/60 to-transparent" />
              </div>
            </ImageReveal>

            {/* Floating accent card — levitation animation */}
            <motion.div 
              className="absolute -bottom-6 right-2 lg:-right-8 bg-primary-charcoal/90 border border-white/[0.08] p-5 rounded-sm shadow-2xl w-44 backdrop-blur-md"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-3xl font-serif text-primary-gold mb-1">6</div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-primary-gray/60 font-light">Years of trusted excellence</div>
            </motion.div>

            {/* Decorative gold line — hidden on mobile to prevent left-bleed scroll trigger */}
            <div className="absolute top-8 -left-4 lg:-left-8 w-px h-32 bg-gradient-to-b from-transparent via-primary-gold/40 to-transparent hidden lg:block" />
          </FadeUp>
        </div>

        {/* === Right: Text Column === */}
        <StaggerContainer className="order-1 lg:order-2">

          {/* Section eyebrow */}
          <StaggerItem>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-primary-gold/50" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-primary-gold/70 font-light">
                About the Project
              </span>
            </div>
          </StaggerItem>

          {/* Heading */}
          <StaggerItem>
            <h2 className="font-serif text-4xl md:text-5xl text-primary-white leading-[1.1] mb-6 text-balance">
              A Vision of{" "}
              <span className="text-primary-gold font-light italic">Modern Living</span>
              {" "}at Bishunpura,{" "}
              <span className="text-primary-white/60 font-light">Parsa Saran</span>
            </h2>
          </StaggerItem>

          {/* Body — 6B: max-w-md → max-w-lg to prevent cramped orphaned lines */}
          <StaggerItem>
            <div className="space-y-5 text-primary-gray/60 text-[15px] leading-[1.8] font-light mb-10 max-w-lg">
              <p>
                Derimi City by <strong className="text-primary-gray/80 font-normal">Derimi Estate Pvt. Ltd.</strong> is a premium residential and commercial township built to shape Bihar's future. Nestled at Bishunpura, it blends luxury living with nature and world-class infrastructure.
              </p>
              <p>
                Whether you're building your dream home or securing a high-return commercial investment — Derimi City offers a serene, future-ready environment with excellent connectivity and complete documentation support.
              </p>
            </div>
          </StaggerItem>

          {/* Stats — 8C: grid-cols-2 md:grid-cols-4 so labels never get crushed on small screens */}
          <StaggerItem>
            <div className="gold-rule-left mb-6 md:mb-8" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-serif text-2xl md:text-3xl text-primary-white font-medium">{s.value}</span>
                  <span className="text-[9px] tracking-[0.15em] uppercase text-primary-gray/50 mt-2 font-light leading-tight">{s.label}</span>
                </div>
              ))}
            </div>
            <div className="gold-rule-left mb-8" />
          </StaggerItem>

          <StaggerItem>
            <Button variant="gold" size="lg">Discover More</Button>
          </StaggerItem>

        </StaggerContainer>
      </div>
    </Section>
  );
}
