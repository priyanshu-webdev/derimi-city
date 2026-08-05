import { FadeUp } from "@/components/animations/FadeUp";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

// 9A: Server component — no client-side logic needed
export function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-primary-black border-t border-white/[0.04]"
      aria-labelledby="contact-heading"
    >
      {/* Subtle warm radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,rgba(184,149,42,0.07),transparent)]" />

      <div className="container mx-auto px-6 md:px-12 max-w-6xl py-32 md:py-40 relative z-10">
        <FadeUp>
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-primary-gold/50" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-primary-gold/70 font-light">
              Take The First Step
            </span>
          </div>

          {/* Large editorial heading */}
          <h2
            id="contact-heading"
            className="font-serif font-light text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary-white leading-[1.05] mb-8 max-w-4xl text-balance"
          >
            Book Your{" "}
            <span className="text-primary-gold italic">Dream Plot</span>
            {" "}Today.
          </h2>

          {/* 4A: Raised from /50 → /70 for WCAG AA compliance */}
          <p className="text-primary-gray/70 text-base font-light leading-relaxed max-w-xl mb-14">
            Take the first step towards a luxurious and secure future at Derimi City. Our team is ready to guide you through every detail — from site visits to full documentation support.
          </p>

          {/* CTAs — 3C: Phone button now links to tel: */}
          <div className="flex flex-wrap items-center gap-5 mb-16">
            <Button variant="gold" size="lg" className="h-14 px-12">
              Schedule a Site Visit
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 px-8"
              asChild
            >
              <a href="tel:+918002220084" aria-label="Call us: +91 80022 20084">
                <Phone size={14} className="mr-2" aria-hidden="true" />
                +91 80022 20084
              </a>
            </Button>
          </div>

          {/* Contact micro-line */}
          <div className="flex flex-wrap items-center gap-8 border-t border-white/[0.05] pt-8">
            <div className="flex flex-col gap-1">
              <span className="text-[9px] tracking-[0.2em] uppercase text-primary-gray/40 font-light">Address</span>
              <address className="not-italic text-[12px] text-primary-gray/60 font-light leading-relaxed">
                Bishunpura, Parsa Saran, Bihar
              </address>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[9px] tracking-[0.2em] uppercase text-primary-gray/40 font-light">Email</span>
              <a
                href="mailto:dhrimiestate@gmail.com"
                className="text-[12px] text-primary-gold/70 hover:text-primary-gold transition-colors duration-300 font-light"
              >
                dhrimiestate@gmail.com
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
