# Dr. Maya Reynolds, PsyD — Therapy Website
**Grow My Therapy — Stage 2 Selection Assignment**

A production-grade, highly responsive, and accessible mental health therapy web application built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Assignment Summary

- **Part 1: Reference Homepage Architecture & Layout Grammar**  
  Preserved the editorial therapy layout structure: slim header branding, asymmetric hero with local-intent eyebrow, problem-awareness empathy narrative, 3-card service grid, visual breathing statement, therapeutic approach pillars, therapist about/credentials, accessible FAQ accordion, and grounding final CTA & footer.
  
- **Part 2: Cohesive Redesign & Source-of-Truth Content Migration**  
  Replaced all legacy theme tokens, copy, and imagery with the single source of truth: the profile of **Dr. Maya Reynolds, PsyD**, a licensed clinical psychologist in Santa Monica, California. Integrated CBT, EMDR, mindfulness-based practices, and somatic grounding tools for high-achieving adults navigating anxiety, panic, trauma, burnout, and perfectionism.
  
- **Part 3: Custom "Our Office" Section**  
  Introduced an editorial office section highlighting the physical practice at **123th Street 45 W, Santa Monica, CA 90401**, complete with serene natural lighting photography, private consultation room details, and California telehealth availability.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Testing**: [Playwright E2E Suite](https://playwright.dev/)
- **Fonts**: `Playfair Display` (Serif display headers) + `Plus Jakarta Sans` (Humanist body typography) via `next/font/google`
- **Component Architecture**: Server Components by default with minimal, isolated Client Components (`MobileNav`, `FaqSection`, `ContactModal`).

---

## 🎨 Design System & Color Tokens

The visual direction follows a calming, grounded California editorial palette:

| Token | Hex Value | Purpose |
| :--- | :--- | :--- |
| **Primary** | `#24352F` | Deep Eucalyptus — Headings, dark accents, footer |
| **Secondary** | `#E9DED0` | Warm Oat — Subtle backgrounds, borders, card fills |
| **Accent** | `#B8795B` | Muted Terracotta — CTAs, active highlights, key badges |
| **Surface** | `#FAF8F4` | Warm Ivory — Main canvas background |
| **Ink** | `#242723` | Charcoal — Crisp, accessible body text |

---

## 🚀 Local Setup & Scripts

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
# Open http://localhost:3000

# 3. Typecheck TypeScript
npm run typecheck

# 4. Run automated E2E tests
npm run test

# 5. Production build
npm run build
npm run start
```

---

## 🔒 Security, SEO & Ethical Standards

- **Ethical `noindex` Implementation**: Marked with `robots: { index: false, follow: false }` and `robots.txt` disallow to protect real search engine users from fictional practice info while keeping semantic on-page SEO and JSON-LD schema visible to evaluators.
- **Strict Copy Safety**: No invented fees, insurance panels, testimonials, guarantees, or unsupported clinical credentials beyond PsyD.
- **Mental Health Emergency Protocol**: Prominent display of the **988 Suicide & Crisis Lifeline** notice in the footer banner and consultation modal.
- **Security Headers**: Configured `X-Content-Type-Options`, `X-Frame-Options: DENY`, `Referrer-Policy`, and restrictive `Permissions-Policy`.

---

## 📹 5-Minute Loom Walkthrough Script

| Timecode | Section & Visual | Client-Facing Presentation Dialogue |
| :--- | :--- | :--- |
| **0:00 – 0:30** | **Introduction** | *"Hello Dr. Maya! Here is your new website draft. Our main goal was to create a calm, grounded digital home for your practice that immediately puts adults in Santa Monica and across California at ease."* |
| **0:30 – 1:20** | **Hero & Empathy Section** | *"In the hero, we highlight your local Santa Monica presence and California telehealth options with an emotional headline. The warm eucalyptus and terracotta tones reduce cognitive overwhelm compared to sterile medical sites."* |
| **1:20 – 2:20** | **The Three Focus Services** | *"We created three dedicated service cards matching your core focus: Anxiety & Panic, Trauma & EMDR, and Burnout & Perfectionism for high-achieving individuals."* |
| **2:20 – 3:00** | **Approach & About Dr. Maya** | *"Your warm, collaborative style and evidence-based modalities—CBT, EMDR, mindfulness, and somatic regulation—are clearly highlighted with safety and stabilization as top priorities."* |
| **3:00 – 3:40** | **Custom Our Office Section** | *"Here is the new custom space section featuring your Santa Monica office at 123th Street 45 W, showing the natural sunlight, comfortable seating, and privacy."* |
| **3:40 – 4:15** | **Interactive FAQ Accordion** | *"The FAQ answers common questions directly from your clinical profile so clients know exactly what to expect without feeling overwhelmed."* |
| **4:15 – 4:50** | **Mobile Responsiveness & Consultation Modal** | *"On mobile, the layout flows seamlessly into a single column with an accessible navigation drawer and a simple, non-emergency consultation request form."* |
| **4:50 – 5:00** | **Conclusion** | *"Thank you! I look forward to your feedback on this warm and grounded presentation of your practice."* |

---

## 📁 Repository Structure

```
c:/Projects/Grow-Assignment/
├── public/
│   └── images/
│       ├── maya/ (Dr. Maya portrait)
│       ├── office/ (Santa Monica office photography)
│       └── services/ (Grounded therapy category imagery)
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── layout/ (Header, Footer, MobileNav)
│   │   ├── sections/ (Hero, Empathy, ServiceGrid, Breathing, Approach, About, Office, FAQ, FinalCTA, ContactModal)
│   │   └── ui/ (Button, SectionHeading)
│   ├── content/
│   │   ├── maya.ts (Single source of truth)
│   │   └── navigation.ts
│   └── lib/
│       ├── cn.ts
│       └── seo.ts
├── tests/
│   └── homepage.spec.ts (Playwright test suite)
├── playwright.config.ts
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```
