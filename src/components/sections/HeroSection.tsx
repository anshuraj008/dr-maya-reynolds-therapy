import React from "react";
import Image from "next/image";
import { mayaProfile } from "@/content/maya";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, MapPin, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onOpenConsultation?: () => void;
}

export function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-20 lg:pb-32 bg-surface">
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Editorial Content Column */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/60 border border-secondary text-primary text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>{mayaProfile.hero.eyebrow}</span>
            </div>

            {/* H1 Primary Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-normal text-primary leading-[1.18] tracking-tight">
              {mayaProfile.hero.title}
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg md:text-xl text-ink-muted leading-relaxed font-sans max-w-2xl">
              {mayaProfile.hero.subtext}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                variant="accent"
                size="lg"
                href="#services"
                className="w-full sm:w-auto"
              >
                {mayaProfile.hero.primaryCta}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onOpenConsultation}
                className="w-full sm:w-auto"
              >
                Send Practice Inquiry
              </Button>
            </div>

            {/* Trust Markers */}
            <div className="pt-6 border-t border-secondary flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-ink-muted">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>Evidence-Based: CBT & EMDR</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Santa Monica + California Telehealth</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>Paced, Grounded Approach</span>
              </div>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background decorative framing */}
              <div className="absolute -inset-4 bg-secondary/50 rounded-2xl -rotate-1 transition-transform group-hover:rotate-0" />

              <div className="relative aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5] rounded-xl overflow-hidden shadow-card border border-secondary-dark/20">
                <Image
                  src="/images/hero-grounding.jpg"
                  alt="A thoughtful woman looking out at morning garden sunlight in Santa Monica"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating grounded badge */}
              <div className="absolute -bottom-5 -left-4 sm:bottom-6 sm:-left-6 bg-surface/95 backdrop-blur-md border border-secondary p-4 rounded-xl shadow-soft max-w-[240px]">
                <p className="text-xs font-serif text-primary font-medium italic leading-snug">
                  &ldquo;A supportive space to understand your internal cues and build lasting regulation.&rdquo;
                </p>
                <p className="text-[10px] text-ink-subtle uppercase tracking-wider mt-1.5">
                  Dr. Maya Reynolds, PsyD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
