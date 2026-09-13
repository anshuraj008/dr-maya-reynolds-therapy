"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { EmpathySection } from "@/components/sections/EmpathySection";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { EmotionalBreathingSection } from "@/components/sections/EmotionalBreathingSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { AboutMayaSection } from "@/components/sections/AboutMayaSection";
import { OfficeSection } from "@/components/sections/OfficeSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { ContactModal } from "@/components/sections/ContactModal";

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <>
      <Header onOpenConsultation={handleOpenConsultation} />

      <main id="main-content" className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onOpenConsultation={handleOpenConsultation} />

        {/* 2. Empathy / Problem-Awareness */}
        <EmpathySection />

        {/* 3. Three Focused Services */}
        <ServiceGrid onOpenConsultation={handleOpenConsultation} />

        {/* 4. Emotional Statement / Visual Breathing Room */}
        <EmotionalBreathingSection />

        {/* 5. Therapeutic Approach Narrative */}
        <ApproachSection />

        {/* 6. About Dr. Maya Reynolds, PsyD */}
        <AboutMayaSection onOpenConsultation={handleOpenConsultation} />

        {/* 7. Custom Our Office Section */}
        <OfficeSection onOpenConsultation={handleOpenConsultation} />

        {/* 8. Frequently Asked Questions */}
        <FaqSection onOpenConsultation={handleOpenConsultation} />

        {/* 9. Final CTA */}
        <FinalCtaSection onOpenConsultation={handleOpenConsultation} />
      </main>

      <Footer />

      {/* Accessible Direct Consultation Modal */}
      <ContactModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />
    </>
  );
}
