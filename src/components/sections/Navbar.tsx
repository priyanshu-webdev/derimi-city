"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ── Brochure URL ───────────────────────────────────────────────────────────
// Set this to the path of the brochure PDF once it is available, e.g. "/brochure.pdf"
const BROCHURE_URL: string | null = "/brochure.pdf";

const navLinks = [
  { name: "Home",       href: "#home",      sectionId: "home"      },
  { name: "About",      href: "#about",     sectionId: "about"     },
  { name: "Amenities",  href: "#amenities", sectionId: "amenities" },
  { name: "Rate Chart", href: "#rates",     sectionId: "rates"     },
  { name: "Gallery",    href: "#gallery",   sectionId: "gallery"   },
  { name: "Location",   href: "#location",  sectionId: "location"  },
  { name: "Contact",    href: "#contact",   sectionId: "contact"   },
];

export function Navbar() {
  const [isScrolled, setIsScrolled]           = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection]       = useState("home");

  // Track scroll state for navbar background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver — highlights the nav link for the section in view
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.sectionId);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
          isScrolled
            ? "bg-primary-black/85 backdrop-blur-xl border-b border-white/[0.04] py-4 shadow-[0_4px_32px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-7"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a
              href="#home"
              className="flex items-center shrink-0 group transition-opacity duration-300 hover:opacity-90"
              aria-label="DERIMI ESTATES PVT. LTD. — Home"
            >
              <Image
                src="/derimi-logo.png"
                alt="DERIMI ESTATES PVT. LTD. — Building India's Future"
                width={160}
                height={160}
                className="h-10 md:h-11 w-auto object-contain select-none"
                priority
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center" aria-label="Primary Navigation">
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={cn(
                        "relative text-[11px] font-light tracking-[0.2em] uppercase transition-colors duration-500 py-1",
                        activeSection === link.sectionId
                          ? "text-primary-white after:w-full"
                          : "text-primary-gray/60 hover:text-primary-white",
                        "after:absolute after:bottom-0 after:left-0 after:h-px",
                        "after:bg-primary-gold after:transition-all after:duration-300",
                        activeSection === link.sectionId ? "after:w-full" : "after:w-0 hover:after:w-full"
                      )}
                      aria-current={activeSection === link.sectionId ? "page" : undefined}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className="text-[10px] tracking-widest border-primary-gold/40 text-primary-gold/80 hover:border-primary-gold hover:text-primary-gold hover:bg-primary-gold/5 transition-all duration-300"
                asChild
              >
                {BROCHURE_URL ? (
                  <a href={BROCHURE_URL} download="Derimi-City-Brochure.pdf" aria-label="Download Derimi City Brochure">
                    Download Brochure
                  </a>
                ) : (
                  <a
                    href="#contact"
                    title="Brochure coming soon — contact us to receive it"
                    aria-label="Request brochure — contact us"
                  >
                    Download Brochure
                  </a>
                )}
              </Button>
              <Button variant="gold" size="sm" asChild>
                <a href="#contact">Book Site Visit</a>
              </Button>
            </div>

            {/* Mobile Hamburger — 44px touch target (WCAG 2.5.5) */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-3 -mr-1 group min-w-[44px] min-h-[44px] items-center justify-center"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              <span className="block w-6 h-px bg-primary-white/70 group-hover:bg-primary-gold transition-colors duration-300" />
              <span className="block w-4 h-px bg-primary-white/70 group-hover:bg-primary-gold transition-colors duration-300 ml-auto" />
              <span className="block w-6 h-px bg-primary-white/70 group-hover:bg-primary-gold transition-colors duration-300" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden transition-all duration-500",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-primary-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-label="Navigation menu"
          aria-modal="true"
          className={cn(
            "absolute top-0 right-0 h-full w-[min(80vw,360px)]",
            "bg-primary-charcoal border-l border-white/[0.06]",
            "flex flex-col transition-transform duration-500 ease-out",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}>
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-white/[0.06]">
            <span className="font-serif text-sm text-primary-gold tracking-widest">MENU</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-primary-gray/60 hover:text-primary-white transition-colors p-1"
              aria-label="Close Menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col px-8 py-8 gap-1 flex-1">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center justify-between py-4 border-b border-white/[0.04] group"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="text-sm font-light tracking-[0.2em] uppercase text-primary-gray/70 group-hover:text-primary-white transition-colors duration-500">
                  {link.name}
                </span>
                <span className="text-primary-gold/30 group-hover:text-primary-gold transition-colors duration-300 text-xs">→</span>
              </a>
            ))}
          </nav>

          {/* Drawer Footer CTAs */}
          <div className="px-8 py-8 border-t border-white/[0.06] flex flex-col gap-3">
            <Button variant="gold" className="w-full" asChild>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Book Site Visit
              </a>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              {BROCHURE_URL ? (
                <a href={BROCHURE_URL} download="Derimi-City-Brochure.pdf" aria-label="Download Derimi City Brochure">
                  Download Brochure
                </a>
              ) : (
                <a
                  href="#contact"
                  title="Brochure coming soon — contact us to receive it"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Download Brochure
                </a>
              )}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
