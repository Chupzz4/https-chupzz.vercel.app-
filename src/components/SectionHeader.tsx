import { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  copy: string;
};

export function SectionHeader({ eyebrow, title, copy }: SectionHeaderProps) {
  return (
    <Reveal className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-normal text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-7 text-slate-300 sm:text-base">{copy}</p>
    </Reveal>
  );
}
