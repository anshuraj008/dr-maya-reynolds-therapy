import React from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  titleAs?: "h1" | "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  titleAs: TitleTag = "h2",
  className,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "space-y-4",
        isCentered ? "text-center mx-auto max-w-2xl" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block text-xs md:text-sm font-semibold tracking-wider text-accent uppercase">
          {eyebrow}
        </span>
      )}
      <TitleTag
        className={cn(
          "text-3xl md:text-4xl lg:text-[2.6rem] font-serif leading-[1.2] text-primary tracking-tight font-normal",
          isCentered ? "mx-auto" : ""
        )}
      >
        {title}
      </TitleTag>
      {description && (
        <p className="text-base md:text-lg text-ink-muted leading-relaxed font-sans">
          {description}
        </p>
      )}
    </div>
  );
}
