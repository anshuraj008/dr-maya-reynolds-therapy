import React from "react";
import { mayaProfile } from "@/content/maya";
import { Quote } from "lucide-react";

export function EmotionalBreathingSection() {
  return (
    <section className="py-20 md:py-28 bg-primary text-surface relative overflow-hidden">
      {/* Subtle organic background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-light/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <Quote className="w-10 h-10 text-accent/80 mx-auto transform -rotate-180" />

        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal leading-snug tracking-tight text-white">
          &ldquo;{mayaProfile.breathingStatement.quote}&rdquo;
        </blockquote>

        <div className="pt-2">
          <p className="text-sm uppercase tracking-widest text-secondary font-semibold">
            {mayaProfile.breathingStatement.attribution}
          </p>
          <p className="text-xs text-secondary/70">
            Santa Monica, CA • California Telehealth
          </p>
        </div>
      </div>
    </section>
  );
}
