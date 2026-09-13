import React from "react";
import Image from "next/image";
import { mayaProfile } from "@/content/maya";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, Sun, Shield, Video, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface OfficeSectionProps {
  onOpenConsultation?: () => void;
}

export function OfficeSection({ onOpenConsultation }: OfficeSectionProps) {
  const featureIcons = [Shield, Sun, MapPin];

  return (
    <section id="office" className="py-16 md:py-24 lg:py-32 bg-surface scroll-mt-20">
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          eyebrow={mayaProfile.office.eyebrow}
          title={mayaProfile.office.title}
          description={mayaProfile.office.description}
          align="center"
          className="mb-14 md:mb-18"
        />

        {/* Office Photos Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {mayaProfile.office.images.map((img, idx) => (
            <figure
              key={idx}
              className="group bg-surface rounded-2xl border border-secondary/80 overflow-hidden shadow-soft hover:shadow-card transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary/30">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
                />
              </div>
              <figcaption className="p-4 sm:p-5 bg-surface border-t border-secondary text-xs text-ink-muted flex items-center justify-between">
                <span className="font-medium text-primary">{img.caption}</span>
                <span className="text-[11px] text-accent uppercase tracking-wider font-semibold">
                  Santa Monica Office
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Location & Office Details Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Key Office Features */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-serif text-primary font-normal mb-4">
              Designed For Safety & Ease
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {mayaProfile.office.features.map((feat, index) => {
                const Icon = featureIcons[index % featureIcons.length];
                return (
                  <div
                    key={feat.title}
                    className="p-5 rounded-xl bg-secondary/20 border border-secondary/60 space-y-2 flex flex-col justify-start"
                  >
                    <div className="w-8 h-8 rounded-lg bg-surface text-primary flex items-center justify-center">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <h4 className="text-sm font-semibold text-primary">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Telehealth & Location Card */}
          <div className="lg:col-span-5 bg-secondary/40 rounded-2xl p-6 sm:p-7 border border-secondary flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wide">
                <MapPin className="w-4 h-4" />
                <span>In-Person & Virtual Availability</span>
              </div>
              <h3 className="text-xl font-serif text-primary font-normal">
                {mayaProfile.address}
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
                {mayaProfile.office.telehealthNote}
              </p>
              <div className="space-y-1.5 pt-2">
                <div className="flex items-center gap-2 text-xs text-primary font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>Private Santa Monica therapy office</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-primary font-medium">
                  <Video className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>Secure telehealth sessions across California</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-secondary-dark/20">
              <Button variant="primary" size="md" className="w-full" onClick={onOpenConsultation}>
                Inquire About Office or Telehealth Sessions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
