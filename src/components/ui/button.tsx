import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "outline" | "ghost" | "link" | "gold" | "ghost-gold"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          // Base — all buttons share this foundation
          "relative inline-flex items-center justify-center whitespace-nowrap",
          "text-sm font-medium tracking-[0.1em] uppercase",
          "transition-all duration-500 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-primary-black",
          "disabled:pointer-events-none disabled:opacity-40",
          "cursor-pointer select-none overflow-hidden",
          // ── Gold (Primary CTA) ──────────────────────────
          // Inner top-highlight pseudo-layer creates illusion of
          // light hitting metal — the key to "expensive" buttons.
          variant === "gold" && [
            "bg-primary-gold text-primary-black font-semibold",
            // Inner highlight shimmer on top edge
            "before:absolute before:inset-0 before:rounded-[inherit]",
            "before:bg-gradient-to-b before:from-white/[0.18] before:to-transparent",
            "before:opacity-100",
            // Hover: lighter gold + lift + warm glow
            "hover:bg-primary-gold-light hover:-translate-y-[3px]",
            "hover:shadow-[0_10px_32px_rgba(184,149,42,0.30),0_2px_8px_rgba(184,149,42,0.20)]",
            "active:translate-y-0 active:shadow-none",
          ],
          // ── Outline ─────────────────────────────────────
          variant === "outline" && [
            "border border-primary-gold/40 text-primary-gold bg-transparent",
            "hover:border-primary-gold/80 hover:bg-primary-gold/[0.06]",
            "hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(184,149,42,0.12)]",
            "active:translate-y-0 active:shadow-none",
          ],
          // ── Ghost ────────────────────────────────────────
          variant === "ghost" && [
            "text-primary-white/70 bg-transparent",
            "hover:text-primary-white hover:bg-white/[0.05]",
          ],
          // ── Ghost Gold ───────────────────────────────────
          variant === "ghost-gold" && [
            "text-primary-gold/70 bg-transparent",
            "hover:text-primary-gold hover:bg-primary-gold/[0.07]",
          ],
          // ── Default ──────────────────────────────────────
          variant === "default" && [
            "bg-primary-white text-primary-black",
            "hover:bg-primary-cream hover:-translate-y-[2px] hover:shadow-lg",
            "active:translate-y-0",
          ],
          // ── Link ─────────────────────────────────────────
          variant === "link" && [
            "text-primary-gold underline-offset-4 hover:underline p-0 h-auto",
            "tracking-normal font-normal text-sm uppercase-none",
          ],
          // ── Sizes ────────────────────────────────────────
          size === "default" && "h-10 px-6 rounded-[2px]",
          size === "sm"      && "h-8 px-4 rounded-[2px] text-xs",
          size === "lg"      && "h-12 px-10 rounded-[2px] text-sm",
          size === "icon"    && "h-10 w-10 rounded-[2px]",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
