import React from "react";
import Image from "next/image";
import { mayaProfile } from "@/content/maya";
import { Button } from "@/components/ui/Button";
import { MapPin, Video } from "lucide-react";

interface FinalCtaSectionProps {
  onOpenConsultation?: () => void;
}

export function FinalCtaSection({ onOpenConsultation }: FinalCtaSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-surface relative overflow-hidden">
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-primary text-surface p-8 sm:p-12 md:p-16 lg:p-20 shadow-elevated border border-primary-light">
          {/* Subtle Background Texture Image */}
          <div className="absolute inset-0 opacity-15 mix-blend-overlay">
            <Image
              src="/images/cta-texture.jpg"
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent bg-primary-dark/80 px-4 py-1 rounded-full border border-primary-light/40">
              {mayaProfile.finalCta.eyebrow}
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white leading-tight tracking-tight">
              {mayaProfile.finalCta.title}
            </h2>

            <p className="text-base sm:text-lg text-secondary/90 leading-relaxed font-sans max-w-2xl mx-auto">
              {mayaProfile.finalCta.description}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="accent"
                size="lg"
                onClick={onOpenConsultation}
                className="w-full sm:w-auto"
              >
                {mayaProfile.finalCta.primaryButton}
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#services"
                className="w-full sm:w-auto border-secondary text-surface hover:bg-white/10"
              >
                {mayaProfile.finalCta.secondaryButton}
              </Button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-secondary/80 border-t border-primary-light/40 max-w-md mx-auto">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-accent" />
                <span>123th Street 45 W, Santa Monica</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Video className="w-4 h-4 text-accent" />
                <span>Statewide California Telehealth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
