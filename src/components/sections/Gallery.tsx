import Image from "next/image";
import { Section } from "@/components/ui/section";
import { FadeUp } from "@/components/animations/FadeUp";

// Intentional asymmetric grid:
// Row 1: wide (col-span-2) + narrow (col-span-1)
// Row 2: three equal thirds
// Row 3: full-width panoramic
const images = [
  {
    src:    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    alt:    "Residential Plots in Parsa Saran at Derimi City",
    caption:"Premium Residential",
    aspect: "aspect-[16/10]",
    col:    "md:col-span-2",
  },
  {
    src:    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    alt:    "Luxury Township Bihar Infrastructure - DERIMI ESTATES PVT. LTD.",
    caption:"Modern Architecture",
    aspect: "aspect-[4/3]",
    col:    "md:col-span-1",
  },
  {
    src:    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    alt:    "Derimi City Luxury Township Interiors",
    caption:"Luxury Interiors",
    aspect: "aspect-[4/3]",
    col:    "md:col-span-1",
  },
  {
    src:    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    alt:    "Premium Township in Bishunpura green landscapes",
    caption:"Landscaped Spaces",
    aspect: "aspect-[4/3]",
    col:    "md:col-span-1",
  },
  {
    src:    "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1800&q=80",
    alt:    "Derimi City — Luxury Township Bihar Panorama",
    caption:"Township Panorama",
    aspect: "aspect-[21/9] md:aspect-[21/9]",
    col:    "col-span-2 md:col-span-3",
  },
];

// 9A: Server component — no client hooks needed
export function Gallery() {
  return (
    <Section id="gallery" variant="wide" className="bg-primary-black">
      {/* Header — 6A: Plain label variant (no gold line) to break eyebrow pattern uniformity */}
      <FadeUp className="mb-10 md:mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div>
          {/* Style B eyebrow: no line, slightly different weight */}
          <span className="text-[10px] tracking-[0.3em] uppercase text-primary-gold/60 font-light block mb-5">
            Project Gallery
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary-white leading-tight">
            Experience The{" "}
            <span className="text-primary-gold font-light italic">Luxury</span>
          </h2>
        </div>
        <p className="text-primary-gray/50 text-sm font-light max-w-xs leading-relaxed">
          A glimpse of the premium lifestyle awaiting you at Derimi City.
        </p>
      </FadeUp>

      {/* 3E + 5A: figure/figcaption for accessibility; mobile is 2-col to preserve asymmetry intent */}
      <FadeUp delay={0.15}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
          {images.map((img, i) => (
            <figure
              key={i}
              className={`relative overflow-hidden rounded-sm group cursor-pointer ${img.col} ${img.aspect}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transform group-hover:scale-[1.04] transition-transform duration-[6s] ease-out"
              />
              {/* Permanent dark overlay */}
              <div className="absolute inset-0 bg-primary-black/15 group-hover:bg-primary-black/0 transition-colors duration-700" />
              {/* Hover ring */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-primary-gold/15 transition-all duration-500 rounded-sm" />

              {/* 3E: figcaption — always visible (small + subtle), not hover-only */}
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-primary-black/70 to-transparent">
                <p className="text-[9px] tracking-[0.2em] uppercase text-primary-gold/60 font-light">
                  {img.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </FadeUp>
    </Section>
  );
}
