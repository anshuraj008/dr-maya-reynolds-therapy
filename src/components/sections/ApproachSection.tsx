import React from "react";
import { mayaProfile } from "@/content/maya";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HeartHandshake, ShieldCheck, Activity, Brain } from "lucide-react";

export function ApproachSection() {
  const principleIcons = [ShieldCheck, Activity, HeartHandshake];

  return (
    <section id="approach" className="py-16 md:py-24 lg:py-32 bg-surface scroll-mt-20">
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow={mayaProfile.approachSection.eyebrow}
              title={mayaProfile.approachSection.title}
              description={mayaProfile.approachSection.description}
            />

            {/* Modalities summary box */}
            <div className="p-6 rounded-2xl bg-secondary/40 border border-secondary space-y-4">
              <h3 className="text-base font-serif text-primary font-medium flex items-center gap-2">
                <Brain className="w-5 h-5 text-accent" />
                <span>Integrative Clinical Modalities</span>
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {mayaProfile.modalities.map((modality) => (
                  <div key={modality.name} className="text-xs">
                    <span className="font-semibold text-primary block">{modality.name}</span>
                    <span className="text-ink-muted leading-relaxed">{modality.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 3 Core Pillars */}
          <div className="lg:col-span-7 space-y-6">
            {mayaProfile.approachSection.corePrinciples.map((principle, index) => {
              const Icon = principleIcons[index % principleIcons.length];
              return (
                <div
                  key={principle.title}
                  className="bg-surface rounded-2xl p-6 sm:p-8 border border-secondary shadow-soft hover:shadow-card transition-all space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary/60 text-primary flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-accent uppercase tracking-wider block">
                        Pillar 0{index + 1}
                      </span>
                      <h3 className="text-xl font-serif text-primary font-normal">
                        {principle.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-sans pl-0 sm:pl-13">
                    {principle.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
