"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

// === Luxury Easing Curves ===
// easeOutQuint — slower deceleration, feels more intentional and "expensive"
const ease = [0.22, 1, 0.36, 1] as const;

// For image/mask reveals — snappier entry, longer tail
const easeReveal = [0.16, 1, 0.3, 1] as const;

// ─────────────────────────────────────────────
// FadeUp — primary reveal component
// ─────────────────────────────────────────────
interface FadeUpProps {
  children:  ReactNode;
  delay?:    number;
  duration?: number;
  className?: string;
}

export function FadeUp({ children, delay = 0, duration = 1.1, className = "" }: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// FadeIn — pure opacity, no Y movement
// ─────────────────────────────────────────────
export function FadeIn({ children, delay = 0, duration = 1.3, className = "" }: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// ImageReveal — clip-path wipe + subtle scale
// Creates the "unveiling" effect used by premium agencies.
// Wrap any <img> or image container with this component.
// ─────────────────────────────────────────────
export function ImageReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?:   number;
  className?: string;
}) {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 1.2, delay, ease: easeReveal }}
    >
      <motion.div
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 1.6, delay, ease: easeReveal }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// Stagger — container + item pair
// ─────────────────────────────────────────────
const containerVariants: Variants = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren:   0.04,
    },
  },
};

const itemVariants: Variants = {
  hidden:  { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease },
  },
};

export function StaggerContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px" }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
