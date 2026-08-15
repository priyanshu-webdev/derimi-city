"use client";

import { Section } from "@/components/ui/section";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/FadeUp";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ── Brochure URL ───────────────────────────────────────────────────────────
// Set this to the path of the brochure PDF once it is available, e.g. "/brochure.pdf"
const BROCHURE_URL: string | null = "/brochure.pdf";

const rates = [
  { area: "600 Sqft",  dims: "20 × 30",    rate: "₹1,751",  price: "₹10,50,600", popular: false },
  { area: "1200 Sqft", dims: "30 × 40",    rate: "₹1,751",  price: "₹21,01,200", popular: false },
  { area: "1800 Sqft", dims: "50 × 36",    rate: "₹1,751",  price: "₹31,51,800", popular: true  },
  { area: "2400 Sqft", dims: "40 × 60",    rate: "₹1,751",  price: "₹42,02,400", popular: false },
  { area: "3600 Sqft", dims: "Commercial", rate: "₹1,926",  price: "₹69,33,960", popular: false },
  { area: "4800 Sqft", dims: "60 × 80",    rate: "₹1,751",  price: "₹84,04,800", popular: false },
];

export function RateChart() {
  return (
    <Section id="rates" variant="wide" className="bg-primary-charcoal">
      {/* Header */}
      <FadeUp className="mb-10 md:mb-14">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-primary-gold/50" />
          <span className="text-[10px] tracking-[0.25em] uppercase text-primary-gold/70 font-light">
            Investment Plan
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <h2 className="font-serif text-4xl md:text-5xl text-primary-white leading-tight">
            Premium{" "}
            <span className="text-primary-gold font-light italic">Rate Chart</span>
          </h2>
          <p className="text-primary-gray/50 text-sm font-light max-w-xs leading-relaxed">
            Transparent pricing with easy installment options. Choose the plot that fits your vision.
          </p>
        </div>
      </FadeUp>

      {/* 3A: Semantic table for screen readers — desktop */}
      <FadeUp delay={0.2} className="hidden md:block">
        <div className="border border-white/[0.06] rounded-[3px] overflow-hidden grain bg-primary-black/20">
          <table className="w-full border-collapse" aria-label="Derimi City Plot Pricing">
            <thead>
              <tr className="border-b border-white/[0.06] bg-primary-black/40">
                <th scope="col" className="px-6 py-4 text-left">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-primary-gray/40 font-light">Plot Size</span>
                </th>
                <th scope="col" className="px-6 py-4 text-left">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-primary-gray/40 font-light">Dimensions</span>
                </th>
                <th scope="col" className="px-6 py-4 text-left">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-primary-gray/40 font-light">Rate / Sqft</span>
                </th>
                <th scope="col" className="px-6 py-4 text-left">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-primary-gray/40 font-light">Estimated Price</span>
                </th>
                <th scope="col" className="px-6 py-4 text-left">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rates.map((r, i) => (
                <tr
                  key={i}
                  className={cn(
                    "border-b border-white/[0.04] last:border-b-0 transition-colors duration-500 group",
                    r.popular
                      ? "bg-primary-gold/[0.04] border-l-[3px] border-l-primary-gold/60 hover:bg-primary-gold/[0.08]"
                      : "hover:bg-white/[0.03] border-l-[3px] border-l-transparent"
                  )}
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-lg text-primary-white">{r.area}</span>
                      {r.popular && (
                        <span
                          className="text-[8px] tracking-[0.2em] uppercase bg-primary-gold text-primary-black px-2 py-0.5 font-semibold"
                          aria-label="Most popular option"
                        >
                          Popular
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm text-primary-gray/50 font-light">{r.dims}</span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm text-primary-white/70 font-light">{r.rate} / Sqft</span>
                  </td>
                  <td className="px-6 py-5">
                    <span className={cn("font-serif text-xl", r.popular ? "text-primary-gold" : "text-primary-white")}>
                      {r.price}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <Button
                      variant={r.popular ? "gold" : "ghost-gold"}
                      size="sm"
                      className="opacity-60 group-hover:opacity-100 transition-opacity"
                      aria-label={`Book ${r.area} plot at ${r.price}`}
                      asChild
                    >
                      <a href="#contact">Book</a>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeUp>

      {/* Mobile Cards */}
      <StaggerContainer className="md:hidden grid grid-cols-1 gap-4">
        {rates.map((r, i) => (
          <StaggerItem key={i}>
            <div className={cn(
              "p-6 border border-white/[0.06] rounded-sm",
              r.popular && "border-primary-gold/30 bg-primary-gold/[0.03]"
            )}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-xl text-primary-white">{r.area}</span>
                  {r.popular && (
                    <span className="text-[8px] tracking-[0.2em] uppercase bg-primary-gold text-primary-black px-2 py-0.5 font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-primary-gray/40 font-light">{r.dims}</span>
              </div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-sm text-primary-gray/50">{r.rate} / Sqft</span>
                <span className={cn("font-serif text-2xl", r.popular ? "text-primary-gold" : "text-primary-white")}>
                  {r.price}
                </span>
              </div>
              <Button
                variant={r.popular ? "gold" : "outline"}
                size="sm"
                className="w-full"
                aria-label={`Book ${r.area} plot at ${r.price}`}
                asChild
              >
                <a href="#contact">Book Now</a>
              </Button>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Footer note */}
      <FadeUp delay={0.4} className="mt-6 md:mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-[11px] text-primary-gray/40 font-light">
          * All prices are indicative. Contact our team for final quotation and payment plan details.
        </p>
        <Button variant="outline" size="sm" asChild>
          {BROCHURE_URL ? (
            <a href={BROCHURE_URL} download="Derimi-City-Brochure.pdf" aria-label="Download Derimi City Brochure">
              Download Full Brochure
            </a>
          ) : (
            <a
              href="#contact"
              title="Brochure coming soon — contact us to receive it"
              aria-label="Request brochure — contact us"
            >
              Download Full Brochure
            </a>
          )}
        </Button>
      </FadeUp>
    </Section>
  );
}
