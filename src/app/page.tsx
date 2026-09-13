"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { AboutMayaSection } from "@/components/sections/AboutMayaSection";
import { OfficeSection } from "@/components/sections/OfficeSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactModal } from "@/components/sections/ContactModal";

export default function Home() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const handleOpenInquiry = () => {
    setIsInquiryOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryOpen(false);
  };

  return (
    <>
      <Header onOpenConsultation={handleOpenInquiry} />

      <main id="main-content" className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onOpenConsultation={handleOpenInquiry} />

        {/* 2. Three Focused Services */}
        <ServiceGrid onOpenConsultation={handleOpenInquiry} />

        {/* 3. About Dr. Maya Reynolds, PsyD */}
        <AboutMayaSection onOpenConsultation={handleOpenInquiry} />

        {/* 4. Our Office Section (Assignment New Section) */}
        <OfficeSection onOpenConsultation={handleOpenInquiry} />

        {/* 5. Frequently Asked Questions */}
        <FaqSection onOpenConsultation={handleOpenInquiry} />
      </main>

      <Footer />

      {/* Accessible Practice Inquiry Modal */}
      <ContactModal
        isOpen={isInquiryOpen}
        onClose={handleCloseInquiry}
      />
    </>
  );
}
