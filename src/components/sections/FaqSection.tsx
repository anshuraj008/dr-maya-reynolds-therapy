"use client";

import React, { useState } from "react";
import { mayaProfile } from "@/content/maya";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

interface FaqSectionProps {
  onOpenConsultation?: () => void;
}

export function FaqSection({ onOpenConsultation }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 md:py-24 lg:py-32 bg-secondary/20 border-t border-secondary/60 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CLINICAL & LOGISTICAL QUESTIONS"
          title="Frequently Asked Questions"
          description="Straightforward answers about session structure, modalities, location, and what to expect."
          align="center"
          className="mb-12 md:mb-16"
        />

        {/* Accordion List */}
        <div className="space-y-4">
          {mayaProfile.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-btn-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className={cn(
                  "bg-surface rounded-xl border transition-all duration-200 overflow-hidden",
                  isOpen ? "border-primary/40 shadow-soft" : "border-secondary hover:border-secondary-dark/60"
                )}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left px-5 sm:px-6 py-5 flex items-center justify-between gap-4 font-serif text-lg sm:text-xl text-primary font-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-accent shrink-0 transition-transform duration-300",
                        isOpen ? "transform rotate-180 text-primary" : ""
                      )}
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cn(
                    "transition-all duration-300 ease-in-out px-5 sm:px-6",
                    isOpen ? "pb-6 max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  )}
                >
                  <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-sans border-t border-secondary/60 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Consultation Callout */}
        <div className="mt-12 text-center space-y-3">
          <p className="text-sm text-ink-muted">
            Have a question about scheduling or starting therapy?
          </p>
          <Button variant="outline" size="sm" onClick={onOpenConsultation}>
            Connect With Dr. Maya
          </Button>
        </div>
      </div>
    </section>
  );
}
