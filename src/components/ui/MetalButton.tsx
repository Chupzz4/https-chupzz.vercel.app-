import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "steel" | "platinum" | "ghost";
type Size = "md" | "lg";

type MetalButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

/**
 * The two metal button treatments plus a quiet ghost.
 *
 * Both metals are the same construction: a brushed gradient body, a 1px inset
 * highlight along the top edge, and a `.sheen` pseudo-element that sweeps on
 * hover. What separates them is contrast — steel is the single loudest thing
 * on any given screen, so at most one steel button is ever shown at a time.
 */
const variants: Record<Variant, string> = {
  steel: cn(
    "bg-brushed-steel text-[#0A1018] shadow-steel-key",
    "hover:brightness-[1.08] active:brightness-95"
  ),
  platinum: cn(
    // Dark body rather than bright platinum: a second high-contrast fill would
    // compete with the steel CTA sitting next to it.
    "border border-platinum/22 bg-gradient-to-b from-white/10 to-white/[0.02] text-ivory",
    "shadow-hair backdrop-blur-sm hover:border-platinum/40 hover:from-white/14"
  ),
  ghost: "text-platinum hover:text-ivory"
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.8125rem]",
  lg: "h-[3.25rem] px-7 text-sm"
};

export function MetalButton({
  variant = "steel",
  size = "md",
  className,
  children,
  ...props
}: MetalButtonProps) {
  return (
    <a
      className={cn(
        "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full",
        "font-semibold uppercase tracking-wider transition duration-300",
        variants[variant],
        sizes[size],
        variant !== "ghost" && "sheen",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
