import { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "center",
  className
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "mb-14 max-w-3xl sm:mb-20",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <Eyebrow align={align}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "mt-6 text-balance font-display text-[2rem] font-normal leading-[1.12] tracking-[-0.015em] text-ivory",
          "sm:text-[2.75rem] lg:text-[3.25rem]"
        )}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-pretty text-[0.9375rem] leading-[1.85] text-silver",
            align === "center" && "mx-auto"
          )}
        >
          {copy}
        </p>
      ) : null}
    </Reveal>
  );
}
