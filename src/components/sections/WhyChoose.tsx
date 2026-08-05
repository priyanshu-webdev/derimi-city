"use client";

import { Section } from "@/components/ui/section";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/FadeUp";

const features = [
  {
    n: "01",
    title: "Wide Internal Roads",
    desc:  "Spacious road network designed for comfortable, safe movement within the township.",
  },
  {
    n: "02",
    title: "Street Lighting",
    desc:  "Well-illuminated pathways for a safe and welcoming environment at all hours.",
  },
  {
    n: "03",
    title: "Electricity Supply",
    desc:  "Reliable, modern power infrastructure supporting every residential and commercial need.",
  },
  {
    n: "04",
    title: "Underground Drainage",
    desc:  "Modern sewage and drainage systems ensuring a clean, hygienic community.",
  },
  {
    n: "05",
    title: "Commercial Zone",
    desc:  "Dedicated commercial plots for businesses, markets, and essential services.",
  },
  {
    n: "06",
    title: "Children's Park",
    desc:  "Safe, well-maintained play areas designed with your children's wellbeing in mind.",
  },
  {
    n: "07",
    title: "Green Landscape",
    desc:  "Lush gardens and planted avenues that bring nature into everyday life.",
  },
  {
    n: "08",
    title: "Clean Water Supply",
    desc:  "24/7 reliable and clean water availability for every resident.",
  },
  {
    n: "09",
    title: "Gated Community",
    desc:  "Secure entry points and professional security for complete peace of mind.",
  },
  {
    n: "10",
    title: "Documentation Support",
    desc:  "100% legal, transparent, and hassle-free property documentation assistance.",
  },
];

export function WhyChoose() {
  const left  = features.slice(0, 5);
  const right = features.slice(5);

  return (
    <Section id="why" variant="wide" className="bg-primary-black">
      {/* Header */}
      <FadeUp className="mb-20">
        {/* Style B eyebrow: no gold line — intentional variation from About/Amenities */}
        <span className="text-[10px] tracking-[0.3em] uppercase text-primary-gold/60 font-light block mb-5">
          Why Choose Derimi City
        </span>
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-20">
          <h2 className="font-serif text-4xl md:text-5xl text-primary-white leading-tight text-balance max-w-lg">
            World-Class{" "}
            <span className="text-primary-gold font-light italic">Infrastructure</span>
          </h2>
          <p className="text-primary-gray/50 text-sm font-light max-w-xs leading-relaxed">
            Every detail of Derimi City has been thoughtfully planned to deliver an elevated living experience.
          </p>
        </div>
      </FadeUp>

      {/* Two-column editorial list */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-0">
        {/* Left column */}
        <StaggerContainer>
          {left.map((f) => (
            <StaggerItem key={f.n}>
              <div className="group border-t border-white/[0.06] py-8 flex gap-8 items-start hover:border-primary-gold/[0.15] transition-colors duration-700 cursor-default">
                <span className="font-serif text-5xl text-primary-white/[0.07] group-hover:text-primary-gold/15 transition-colors duration-700 leading-none select-none shrink-0 mt-1">
                  {f.n}
                </span>
                <div className="transform group-hover:translate-x-2 transition-transform duration-500 ease-[0.22,1,0.36,1]">
                  <h3 className="font-serif text-xl font-medium text-primary-white mb-2 group-hover:text-primary-gold transition-colors duration-500">
                    {f.title}
                  </h3>
                  <p className="text-[13px] text-primary-gray/50 font-light leading-relaxed transition-colors duration-500 group-hover:text-primary-gray/70">{f.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
          {/* Final rule */}
          <div className="border-t border-white/[0.06]" />
        </StaggerContainer>

        {/* Right column */}
        <StaggerContainer>
          {right.map((f) => (
            <StaggerItem key={f.n}>
              <div className="group border-t border-white/[0.06] py-8 flex gap-8 items-start hover:border-primary-gold/[0.15] transition-colors duration-700 cursor-default">
                <span className="font-serif text-5xl text-primary-white/[0.07] group-hover:text-primary-gold/15 transition-colors duration-700 leading-none select-none shrink-0 mt-1">
                  {f.n}
                </span>
                <div className="transform group-hover:translate-x-2 transition-transform duration-500 ease-[0.22,1,0.36,1]">
                  <h3 className="font-serif text-xl font-medium text-primary-white mb-2 group-hover:text-primary-gold transition-colors duration-500">
                    {f.title}
                  </h3>
                  <p className="text-[13px] text-primary-gray/50 font-light leading-relaxed transition-colors duration-500 group-hover:text-primary-gray/70">{f.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
          <div className="border-t border-white/[0.06]" />
        </StaggerContainer>
      </div>
    </Section>
  );
}
