"use client";

import { MapPin, Phone, Mail } from "lucide-react";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const navLinks = [
  { label: "Home",       href: "#home"      },
  { label: "About",      href: "#about"     },
  { label: "Amenities",  href: "#amenities" },
  { label: "Rate Chart", href: "#rates"     },
  { label: "Gallery",    href: "#gallery"   },
  { label: "Location",   href: "#location"  },
  { label: "Contact",    href: "#contact"   },
];

const legalLinks = [
  { label: "Rate Chart",        href: "#rates"   },
  { label: "Payment Plans",     href: "#contact" },
  { label: "Terms & Conditions",href: "#"        },
  { label: "Privacy Policy",    href: "#"        },
];

export function Footer() {
  return (
    <footer className="bg-primary-footer border-t border-white/[0.04]" aria-label="Site Footer">

      {/* === Newsletter Banner === */}
      <div className="border-b border-white/[0.04]">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl py-8 md:py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-sm">
              <p className="font-serif text-lg text-primary-white mb-1">Stay Updated</p>
              <p className="text-[13px] text-primary-gray/50 font-light leading-relaxed">
                Get exclusive project updates, offers, and real estate insights from Derimi Estate.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 max-w-md" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email for newsletter"
                className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-sm px-5 py-3 text-sm text-primary-white placeholder:text-primary-gray/30 focus:outline-none focus:border-primary-gold/40 transition-colors duration-300 font-light min-w-0"
              />
              <button
                type="submit"
                className="shrink-0 bg-primary-gold text-primary-black text-[11px] font-semibold tracking-[0.12em] uppercase px-6 py-3 rounded-sm hover:bg-primary-gold-light transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* === Main Footer Grid === */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-12 lg:gap-16">

          {/* Brand Column */}
          <div className="space-y-8">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group w-fit" aria-label="Derimi City Home">
              <div className="w-9 h-9 rounded-full border border-primary-gold/25 group-hover:border-primary-gold/50 flex items-center justify-center bg-primary-gold/5 transition-all duration-500">
                <span className="font-serif font-medium text-sm text-primary-gold">DE</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif font-semibold text-base text-primary-white tracking-[0.1em]">
                  DERIMI <span className="text-primary-gold font-light">CITY</span>
                </span>
                <span className="text-[8px] uppercase tracking-[0.25em] text-primary-gray/30 mt-1 font-light">
                  Derimi Estate Pvt. Ltd.
                </span>
              </div>
            </a>

            {/* Brand statement */}
            <p className="text-primary-gray/40 text-[13px] font-light leading-[1.9] max-w-xs">
              Building premium residential and commercial townships that blend luxury living with nature and world-class infrastructure — in the heart of Bihar.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { Icon: FacebookIcon, label: "Facebook", href: "#" },
                { Icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/derimi.estates?utm_source=qr&igsh=MWQ5MjhjZG82cTBocw==" },
                { Icon: TwitterIcon,  label: "Twitter", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-sm border border-white/[0.08] flex items-center justify-center text-primary-gray/40 hover:text-primary-gold hover:border-primary-gold/30 transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-primary-gray/30 font-light mb-7">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[13px] text-primary-gray/50 hover:text-primary-white font-light transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-primary-gold/0 group-hover:bg-primary-gold/40 transition-all duration-300" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-10">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-primary-gray/30 font-light mb-7">Contact</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={13} className="text-primary-gold/40 mt-0.5 shrink-0" />
                  <address className="not-italic text-[13px] text-primary-gray/50 font-light leading-relaxed">
                    Bishunpura, Parsa Saran, Bihar
                  </address>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={13} className="text-primary-gold/40 shrink-0" />
                  <a href="tel:+918002220084" className="text-[13px] text-primary-gray/50 hover:text-primary-gold/70 font-light transition-colors duration-300">
                    +91 80022 20084
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={13} className="text-primary-gold/40 shrink-0" />
                  <a href="mailto:dhrimiestate@gmail.com" className="text-[13px] text-primary-gray/50 hover:text-primary-gold/70 font-light transition-colors duration-300">
                    dhrimiestate@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-primary-gray/30 font-light mb-5">Investment</p>
              <ul className="space-y-2.5">
                {legalLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[13px] text-primary-gray/50 hover:text-primary-white font-light transition-colors duration-300">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* === Bottom Brand Bar === */}
      <div className="border-t border-white/[0.05]">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Legal line */}
          <p className="text-[11px] tracking-[0.12em] text-primary-gray/40 font-light uppercase text-center sm:text-left">
            © 2026 Derimi Estates Pvt. Ltd. All Rights Reserved.
          </p>
          {/* Location */}
          <p className="text-[11px] text-primary-gray/25 font-light">
            Bishunpura, Parsa Saran, Bihar
          </p>
          {/* Back to top */}
          <a
            href="#home"
            className="text-[11px] text-primary-gray/30 hover:text-primary-gold/70 font-light tracking-[0.12em] uppercase transition-colors duration-300"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
