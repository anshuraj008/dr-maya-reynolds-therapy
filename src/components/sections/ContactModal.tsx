"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceFormat: "in-person",
    topic: "anxiety",
    message: "",
    botField: "", // Honeypot
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.botField) {
      // Honeypot triggered
      setStatus("success");
      return;
    }

    setStatus("submitting");
    // Simulate brief client request
    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  const handleReset = () => {
    setStatus("idle");
    setFormData({
      name: "",
      email: "",
      serviceFormat: "in-person",
      topic: "anxiety",
      message: "",
      botField: "",
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-surface border border-secondary/80 rounded-2xl p-6 md:p-8 shadow-elevated overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          aria-label="Close consultation request form"
          className="absolute top-5 right-5 p-2 text-ink-muted hover:text-primary rounded-full hover:bg-secondary/40 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {status === "success" ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-secondary/60 text-primary rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h3 id="modal-title" className="text-2xl font-serif text-primary font-normal">
              Inquiry Received
            </h3>
            <p className="text-sm text-ink-muted max-w-sm mx-auto leading-relaxed">
              Thank you for reaching out. Dr. Maya will review your message and follow up regarding session availability and consultation scheduling.
            </p>
            <div className="pt-4">
              <Button onClick={handleReset} variant="primary">
                Return to Site
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-1">
              <span className="text-xs font-semibold tracking-wider text-accent uppercase">
                Direct Practice Inquiry
              </span>
              <h3 id="modal-title" className="text-2xl md:text-3xl font-serif text-primary font-normal">
                Request a Consultation
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Connect regarding in-person sessions in Santa Monica or secure telehealth across California.
              </p>
            </div>

            {/* Non-emergency Mental Health Disclaimer */}
            <div className="p-3.5 mb-6 rounded-lg bg-secondary/40 border border-secondary text-xs text-ink-muted flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>
                <strong>Note:</strong> This form is for non-urgent scheduling inquiries. If you are experiencing a mental health emergency, please dial <strong>988</strong> or <strong>911</strong> immediately.
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot */}
              <div className="hidden">
                <label htmlFor="hp_field">Leave this empty</label>
                <input
                  id="hp_field"
                  type="text"
                  value={formData.botField}
                  onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-xs font-medium text-primary mb-1">
                  Full Name <span className="text-accent">*</span>
                </label>
                <input
                  id="name"
                  required
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-secondary-dark/40 bg-white text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-primary mb-1">
                  Email Address <span className="text-accent">*</span>
                </label>
                <input
                  id="email"
                  required
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-secondary-dark/40 bg-white text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="format" className="block text-xs font-medium text-primary mb-1">
                    Preferred Format
                  </label>
                  <select
                    id="format"
                    value={formData.serviceFormat}
                    onChange={(e) => setFormData({ ...formData, serviceFormat: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-secondary-dark/40 bg-white text-sm text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  >
                    <option value="in-person">In-Person (Santa Monica)</option>
                    <option value="telehealth">California Telehealth</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="topic" className="block text-xs font-medium text-primary mb-1">
                    Primary Area of Focus
                  </label>
                  <select
                    id="topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-secondary-dark/40 bg-white text-sm text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  >
                    <option value="anxiety">Anxiety & Panic</option>
                    <option value="trauma">Trauma & EMDR</option>
                    <option value="burnout">Burnout & Perfectionism</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-primary mb-1">
                  Brief Note <span className="text-ink-subtle font-normal">(Non-sensitive)</span>
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Share a brief note about what you hope to focus on in therapy..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-secondary-dark/40 bg-white text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <Button type="button" variant="ghost" size="sm" onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending..." : "Submit Inquiry"}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
