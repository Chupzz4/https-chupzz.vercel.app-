import { cn } from "@/lib/utils";

/**
 * The dashboard micro-label: tiny, uppercase, heavily tracked, with a short
 * steel rule leading into it. Repeated at the top of every section, so the
 * rule and the tracking live here rather than being retyped nine times.
 */
export function Eyebrow({
  children,
  className,
  align = "left"
}: {
  children: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-label text-ice",
        align === "center" && "justify-center",
        className
      )}
    >
      <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-transparent to-ice/70" />
      {children}
      {align === "center" ? (
        <span aria-hidden="true" className="h-px w-8 bg-gradient-to-l from-transparent to-ice/70" />
      ) : null}
    </p>
  );
}
