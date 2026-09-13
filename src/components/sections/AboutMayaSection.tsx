import React from "react";
import Image from "next/image";
import { mayaProfile } from "@/content/maya";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Award, CheckCircle2 } from "lucide-react";

interface AboutMayaSectionProps {
  onOpenConsultation?: () => void;
}

export function AboutMayaSection({ onOpenConsultation }: AboutMayaSectionProps) {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-secondary/20 border-y border-secondary/60 scroll-mt-20">
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Decorative backplate */}
              <div className="absolute -inset-4 bg-secondary rounded-2xl rotate-2" />

              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-card border border-secondary-dark/20">
                <Image
                  src={mayaProfile.about.image}
                  alt={mayaProfile.about.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 450px"
                  className="object-cover object-top hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Verified Licensure Badge */}
              <div className="absolute -bottom-4 right-4 bg-surface p-3.5 rounded-xl border border-secondary shadow-soft flex items-center gap-3">
                <Award className="w-8 h-8 text-accent shrink-0" />
                <div>
                  <span className="block text-xs font-semibold text-primary">
                    Licensed Clinical Psychologist
                  </span>
                  <span className="text-[11px] text-ink-muted">
                    Santa Monica, CA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Details */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <SectionHeading
              eyebrow={mayaProfile.about.eyebrow}
              title={mayaProfile.about.title}
            />

            <div className="space-y-4 text-base md:text-lg text-ink-muted leading-relaxed font-sans">
              {mayaProfile.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Facts List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {mayaProfile.about.details.map((detail) => (
                <div
                  key={detail.label}
                  className="p-3.5 rounded-xl bg-surface border border-secondary/80 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] font-semibold text-primary uppercase tracking-wide">
                      {detail.label}
                    </span>
                    <span className="text-xs text-ink-muted font-medium">
                      {detail.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Core Modalities Badges */}
            <div className="pt-2">
              <span className="block text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                Core Evidence-Based Modalities
              </span>
              <div className="flex flex-wrap gap-2">
                {mayaProfile.modalities.map((m) => (
                  <span
                    key={m.name}
                    className="text-xs px-3 py-1 rounded-full bg-surface border border-secondary text-ink-muted font-medium"
                  >
                    {m.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button variant="accent" size="md" onClick={onOpenConsultation}>
                Send Practice Inquiry
              </Button>
              <Button variant="outline" size="md" href="#office">
                View Santa Monica Office
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
