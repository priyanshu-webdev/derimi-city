import * as React from "react"
import { cn } from "@/lib/utils"

type SectionVariant = "default" | "wide" | "full" | "flush"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  containerClassName?: string
  variant?: SectionVariant
}

const containerMap: Record<SectionVariant, string> = {
  default: "container mx-auto px-6 md:px-12 max-w-6xl",
  wide:    "container mx-auto px-6 md:px-12 max-w-7xl",
  full:    "w-full px-6 md:px-12",
  flush:   "w-full",
}

export function Section({
  className,
  containerClassName,
  children,
  variant = "default",
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-24 md:py-32 relative", className)} {...props}>
      <div className={cn(containerMap[variant], "relative z-10", containerClassName)}>
        {children}
      </div>
    </section>
  )
}
