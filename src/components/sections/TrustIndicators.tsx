import { ShieldCheck, Map, Leaf, Route, Building2 } from "lucide-react";

// Unique items — auto-tripled below for seamless infinite loop on all widths
const uniqueItems = [
  { icon: Building2,   text: "Premium Township"                 },
  { icon: Map,         text: "Residential & Commercial Plots"   },
  { icon: Route,       text: "Wide Roads & Street Lights"       },
  { icon: Leaf,        text: "Green Landscaping"                },
  { icon: ShieldCheck, text: "100% Documentation Support"       },
];

// 5E: Triple instead of double — ensures seamless loop at all viewport widths
const items = [...uniqueItems, ...uniqueItems, ...uniqueItems];

export function TrustIndicators() {
  return (
    <div
      className="relative z-20 overflow-hidden border-y border-white/[0.05] bg-primary-charcoal/80 backdrop-blur-sm"
      role="region"
      aria-label="Project highlights"
    >
      {/* 3B: Visually-hidden text for screen readers */}
      <ul className="sr-only">
        {uniqueItems.map((item) => (
          <li key={item.text}>{item.text}</li>
        ))}
      </ul>

      {/* Visual ticker — aria-hidden so screen readers use the list above */}
      <div
        className="flex items-center gap-0 whitespace-nowrap"
        style={{ animation: "ticker 32s linear infinite" }}
        aria-hidden="true"
      >
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-3 px-10 py-4 shrink-0 border-r border-white/[0.04] last:border-r-0"
            >
              {/* 4B: Raised from /60 to /70 for WCAG contrast */}
              <span className="text-primary-gold/70">
                <Icon className="w-4 h-4" />
              </span>
              {/* 4B: Raised from /60 to /75 */}
              <span className="text-[11px] tracking-[0.18em] uppercase text-primary-gray/75 font-light">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
