import React from "react";
import Link from "next/link";
import { mayaProfile } from "@/content/maya";
import { footerLinks } from "@/content/navigation";
import { MapPin, Video } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-surface border-t border-primary-light">
      {/* Demonstration Banner */}
      <div className="bg-primary-dark/90 border-b border-primary-light/40 py-2.5 px-4 sm:px-6 lg:px-8 text-center text-xs text-secondary/80">
        <p>{mayaProfile.disclaimer.academic}</p>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 space-y-3">
            <span className="font-serif text-2xl lg:text-3xl font-normal text-white block">
              {mayaProfile.name}
            </span>
            <p className="text-sm text-secondary/90 font-sans max-w-sm leading-relaxed">
              Warm, collaborative, and grounded psychotherapy for adults navigating anxiety, trauma, burnout, and perfectionism.
            </p>
            <div className="pt-2 space-y-2 text-xs text-secondary/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>Office:</strong> {mayaProfile.address}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Video className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>Telehealth:</strong> Secure video sessions for clients residing across California
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-sans">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-secondary/80">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-accent transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas of Focus */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-sans">
              Specialties &amp; Modalities
            </h4>
            <ul className="space-y-2 text-sm text-secondary/80">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-accent transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs text-secondary/60 pt-2 leading-relaxed">
              Integrative CBT, EMDR, Mindfulness-Based Practices, and Somatic Grounding Techniques.
            </p>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-primary-light/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-secondary/70">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} {mayaProfile.name}. All rights reserved. Santa Monica, CA.
          </p>
          <div className="flex flex-wrap gap-6 text-xs">
            {footerLinks.legal.map((item) => (
              <span key={item.label} className="hover:text-white transition-colors cursor-default">
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
