import React from "react";
import { mayaProfile } from "@/content/maya";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check } from "lucide-react";

export function EmpathySection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30 border-y border-secondary/60">
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow={mayaProfile.empathy.eyebrow}
              title={mayaProfile.empathy.headline}
            />

            <div className="space-y-4 text-base md:text-lg text-ink-muted leading-relaxed font-sans">
              {mayaProfile.empathy.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Right Column: Key Experience Insights Card */}
          <div className="lg:col-span-5">
            <div className="bg-surface rounded-2xl p-6 sm:p-8 border border-secondary shadow-card space-y-5">
              <h3 className="text-xl font-serif text-primary font-normal">
                Recognizing These Patterns:
              </h3>
              <ul className="space-y-3.5">
                {mayaProfile.empathy.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-ink">
                    <span className="w-5 h-5 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-secondary text-xs text-ink-muted italic">
                Sessions are carefully tailored to help your nervous system reset without demanding unsustainable effort.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
