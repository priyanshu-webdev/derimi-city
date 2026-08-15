"use client";

import { Section } from "@/components/ui/section";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/FadeUp";
import { MapPin, School, Hospital, ShoppingCart, Train, Plane, Route } from "lucide-react";

const connectivity = [
  { icon: <School       size={16} />, title: "Schools & Colleges",   dist: "2 km"  },
  { icon: <Hospital     size={16} />, title: "Hospitals",            dist: "3 km"  },
  { icon: <ShoppingCart size={16} />, title: "Markets",              dist: "1 km"  },
  { icon: <Train        size={16} />, title: "Railway Station",      dist: "8 km"  },
  { icon: <Plane        size={16} />, title: "Airport",              dist: "15 km" },
  { icon: <Route        size={16} />, title: "Main Highway",         dist: "0.5 km"},
];

export function Location() {
  return (
    <Section id="location" variant="wide" className="bg-primary-charcoal overflow-hidden pb-16 md:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-12 lg:gap-16 items-start">

          {/* === Left Text Column === */}
          <div className="order-2 lg:order-1 pt-0 lg:pt-4">
            <FadeUp>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-primary-gold/50" />
                <span className="text-[10px] tracking-[0.25em] uppercase text-primary-gold/70 font-light">
                  Location & Connectivity
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-primary-white leading-tight mb-6 text-balance">
                Prime Location at{" "}
                <span className="text-primary-gold font-light italic">Bishunpura</span>,{" "}
                <span className="text-primary-white/60 font-light">Parsa Saran</span>
              </h2>
              <p className="text-primary-gray/50 text-sm font-light leading-[1.9] mb-8 md:mb-12 max-w-sm">
                Derimi City is strategically positioned for convenient access to essential services while retaining a tranquil, nature-forward environment.
              </p>
            </FadeUp>

            {/* Connectivity list — not cards */}
            <StaggerContainer className="space-y-0">
              {connectivity.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-center justify-between py-4 border-b border-white/[0.05] group hover:border-primary-gold/20 transition-colors duration-300">
                    <div className="flex items-center gap-4">
                      <span className="text-primary-gold/40 group-hover:text-primary-gold/70 transition-colors duration-300">
                        {item.icon}
                      </span>
                      <span className="text-[13px] text-primary-gray/60 font-light group-hover:text-primary-gray/80 transition-colors duration-300">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-[11px] text-primary-gold/60 font-light tracking-wider">{item.dist}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeUp delay={0.5} className="mt-10">
              <a
                href="https://www.google.com/maps/place/25%C2%B054'03.8%22N+85%C2%B000'35.7%22E/@25.9010498,85.0073519,17z/data=!3m1!4b1!4m4!3m3!8m2!3d25.9010498!4d85.0099268?hl=en&entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-primary-gold/70 hover:text-primary-gold transition-colors duration-300 group"
              >
                <MapPin size={13} className="group-hover:scale-110 transition-transform" />
                Get Directions
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </FadeUp>
          </div>

          {/* === Right Map Column — 60% === */}
          <FadeUp delay={0.2} className="order-1 lg:order-2 h-[320px] md:h-[400px] lg:h-[640px] rounded-sm overflow-hidden relative">
            <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06] rounded-sm z-10 pointer-events-none" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3596.5!2d85.00992683769!3d25.90104975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1722000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "invert(95%) hue-rotate(180deg) contrast(85%) saturate(60%) brightness(0.75)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Derimi City Location — Bishunpura, Parsa Saran, Bihar"
            />
          </FadeUp>

      </div>
    </Section>
  );
}
