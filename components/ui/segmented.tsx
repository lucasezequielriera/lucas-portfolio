"use client";

import { motion } from "framer-motion";

export type SegmentedItem = {
  key: string;
  label: string;
};

export function Segmented({
  items,
  value,
  onChange,
  ariaLabel,
  /**
   * Set when the caller renders matching `panel-<key>` elements, so each tab can
   * point at the region it controls. Left off, the buttons stay plain toggles.
   */
  linkedPanels = false,
}: {
  items: SegmentedItem[];
  value: string;
  onChange: (key: string) => void;
  ariaLabel: string;
  linkedPanels?: boolean;
}) {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className="inline-flex max-w-full shrink-0 items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {items.map((item) => {
        const active = item.key === value;
        return (
          <button
            key={item.key}
            role="tab"
            type="button"
            {...(linkedPanels
              ? { id: `tab-${item.key}`, "aria-controls": `panel-${item.key}` }
              : {})}
            aria-selected={active}
            onClick={() => onChange(item.key)}
            className={`relative shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 font-[family-name:var(--font-geist-mono)] text-[0.68rem] uppercase tracking-wide transition-colors ${
              active ? "text-black" : "text-white/50 hover:text-white/85"
            }`}
          >
            {active && (
              <motion.span
                layoutId="segmented-active"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                className="absolute inset-0 rounded-full bg-white"
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
