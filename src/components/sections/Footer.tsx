"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

// ── YouTube Channel URL ──────────────────────────────────────────────────
// Set this to the official YouTube channel URL once available, e.g. "https://www.youtube.com/@derimiestates"
const YOUTUBE_URL: string = "";

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

const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
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

// ── Email validation helper ──────────────────────────────────────────────
function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

// ── Newsletter Form (extracted as a sub-component for clean state isolation)
function NewsletterForm() {
  const [email, setEmail]         = useState("");
  const [error, setError]         = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess]     = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Reset previous error
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate async submission
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setEmail("");
    }, 1200);
  }

  if (success) {
    return (
      <div className="w-full sm:w-auto max-w-md flex items-center gap-3 bg-primary-gold/[0.06] border border-primary-gold/20 rounded-sm px-5 py-4">
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-gold shrink-0">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <p className="text-[13px] text-primary-gold/80 font-light">Thank you! You are now subscribed.</p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col w-full sm:w-auto gap-2 max-w-md"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Newsletter subscription form"
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          placeholder="Your email address"
          aria-label="Email for newsletter"
          aria-describedby={error ? "newsletter-email-error" : undefined}
          aria-invalid={!!error}
          disabled={submitting}
          className={`flex-1 bg-white/[0.04] border rounded-sm px-5 py-3 text-sm text-primary-white placeholder:text-primary-gray/30 focus:outline-none transition-colors duration-300 font-light min-w-0 disabled:opacity-50 ${
            error
              ? "border-red-500/50 focus:border-red-500/70"
              : "border-white/[0.08] focus:border-primary-gold/40"
          }`}
        />
        <button
          type="submit"
          disabled={submitting}
          aria-busy={submitting}
          className="shrink-0 bg-primary-gold text-primary-black text-[11px] font-semibold tracking-[0.12em] uppercase px-6 py-3 rounded-sm hover:bg-primary-gold-light transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {submitting ? (
            <>
              <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
              Subscribing…
            </>
          ) : (
            "Subscribe"
          )}
        </button>
      </div>
      {error && (
        <p
          id="newsletter-email-error"
          role="alert"
          className="text-[11px] text-red-400/80 font-light pl-1"
        >
          {error}
        </p>
      )}
    </form>
  );
}

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
                Get exclusive project updates, offers, and real estate insights from DERIMI ESTATES PVT. LTD.
              </p>
            </div>
            <NewsletterForm />
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
                  DERIMI ESTATES PVT. LTD.
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
                {
                  Icon: FacebookIcon,
                  label: "Facebook",
                  href: "https://www.facebook.com/share/1Ec9ppU43y/?mibextid=wwXIfr",
                  isExternal: true,
                  title: undefined,
                },
                {
                  Icon: InstagramIcon,
                  label: "Instagram",
                  href: "https://www.instagram.com/derimiestates?igsh=MW15aHBwZWo1YnBsZQ==",
                  isExternal: true,
                  title: undefined,
                },
                {
                  Icon: YouTubeIcon,
                  label: YOUTUBE_URL ? "YouTube" : "YouTube (Coming Soon)",
                  href: YOUTUBE_URL || "#contact",
                  isExternal: !!YOUTUBE_URL,
                  title: YOUTUBE_URL ? undefined : "YouTube channel coming soon — contact us for video tours",
                },
              ].map(({ Icon, label, href, isExternal, title }) => (
                <a
                  key={label}
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  title={title}
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
                  <a href="mailto:derimiestates@gmail.com" className="text-[13px] text-primary-gray/50 hover:text-primary-gold/70 font-light transition-colors duration-300">
                    derimiestates@gmail.com
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
            © 2026 DERIMI ESTATES PVT. LTD. All Rights Reserved.
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
