"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/content/navigation";
import { mayaProfile } from "@/content/maya";
import { Button } from "@/components/ui/Button";

interface MobileNavProps {
  onOpenConsultation?: () => void;
}

export function MobileNav({ onOpenConsultation }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        className="p-2 text-primary hover:text-accent rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent transition-colors"
      >
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-primary/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#FAF8F4] border-l border-secondary p-6 shadow-2xl flex flex-col justify-between z-50"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-secondary">
                <div>
                  <span className="block font-serif font-medium text-lg text-primary">
                    {mayaProfile.shortName}
                  </span>
                  <span className="text-xs text-ink-muted">
                    {mayaProfile.credentials} • {mayaProfile.location}
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close navigation menu"
                  className="p-2 text-ink-muted hover:text-primary rounded-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block text-lg font-serif text-primary hover:text-accent transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-secondary space-y-3">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => {
                  setIsOpen(false);
                  onOpenConsultation?.();
                }}
              >
                Send Practice Inquiry
              </Button>
              <p className="text-center text-xs text-ink-subtle">
                Santa Monica Office & California Telehealth
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
