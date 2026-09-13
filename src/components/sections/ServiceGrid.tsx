import React from "react";
import Image from "next/image";
import { mayaProfile } from "@/content/maya";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ServiceGridProps {
  onOpenConsultation?: () => void;
}

export function ServiceGrid({ onOpenConsultation }: ServiceGridProps) {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-surface scroll-mt-20">
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FOCUSED SPECIALTIES"
          title="Clinical Areas of Focus"
          description="Therapy tailored to high-achieving, thoughtful adults ready to build steadier ways of navigating work, relationships, and everyday life."
          align="center"
          className="mb-14 md:mb-18"
        />

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mayaProfile.services.map((service, index) => (
            <article
              key={service.id}
              className="group bg-surface rounded-2xl border border-secondary/80 overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary/30">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wider uppercase text-primary border border-secondary">
                    Specialty 0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-2xl font-serif text-primary font-normal group-hover:text-accent transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs font-medium text-accent tracking-wide uppercase">
                    {service.subtitle}
                  </p>

                  <p className="text-sm text-ink-muted leading-relaxed font-sans">
                    {service.description}
                  </p>

                  {/* Focus areas list */}
                  <div className="pt-3 border-t border-secondary/60">
                    <span className="block text-xs font-semibold text-primary mb-2">
                      Key Focus & Tools:
                    </span>
                    <ul className="space-y-1.5">
                      {service.focusAreas.map((area, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-ink-muted">
                          <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 sm:px-7 pb-6 pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-primary hover:text-accent py-2 border-b border-secondary hover:border-accent transition-colors"
                >
                  <span>Inquire About This Service</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-secondary/30 border border-secondary text-center max-w-2xl mx-auto space-y-3">
          <p className="text-sm text-ink font-sans">
            Not sure which area best fits what you are experiencing? We can explore your needs during an initial consultation.
          </p>
          <div>
            <Button variant="outline" size="sm" onClick={onOpenConsultation}>
              Schedule an Initial Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
