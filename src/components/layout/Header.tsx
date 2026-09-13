"use client";

import React from "react";
import Link from "next/link";
import { mayaProfile } from "@/content/maya";
import { navLinks } from "@/content/navigation";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";

interface HeaderProps {
  onOpenConsultation?: () => void;
}

export function Header({ onOpenConsultation }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-surface/90 backdrop-blur-md border-b border-secondary/60 transition-all">
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="group flex flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded-sm"
        >
          <span className="font-serif text-xl sm:text-2xl font-normal text-primary group-hover:text-accent transition-colors tracking-tight">
            {mayaProfile.name}
          </span>
          <span className="text-xs text-ink-muted tracking-wide font-sans">
            Psychotherapy • {mayaProfile.location}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center space-x-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-muted hover:text-primary transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-accent hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Button
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
            onClick={onOpenConsultation}
          >
            Get in Touch
          </Button>

          <MobileNav onOpenConsultation={onOpenConsultation} />
        </div>
      </div>
    </header>
  );
}
