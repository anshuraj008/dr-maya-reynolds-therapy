import type { Metadata } from "next";
import { mayaProfile } from "@/content/maya";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://dr-maya-reynolds.example.com"),
  title: "Anxiety & Trauma Therapy in Santa Monica | Dr. Maya Reynolds, PsyD",
  description:
    "Grounded, evidence-based therapy for adults dealing with anxiety, panic, trauma, burnout, and perfectionism in Santa Monica, California and via secure California telehealth. Warm, collaborative care by Dr. Maya Reynolds, PsyD.",
  keywords: [
    "therapy Santa Monica",
    "clinical psychologist Santa Monica",
    "anxiety therapist Santa Monica",
    "trauma therapy Santa Monica",
    "EMDR therapy California",
    "burnout counseling Santa Monica",
    "Dr Maya Reynolds PsyD",
    "California telehealth therapy",
  ],
  authors: [{ name: mayaProfile.name }],
  creator: mayaProfile.name,
  robots: {
    index: false, // Fictional clinician profile per ethical assignment instructions
    follow: false,
    nocache: true,
  },
  openGraph: {
    title: "Anxiety & Trauma Therapy in Santa Monica | Dr. Maya Reynolds, PsyD",
    description:
      "Warm, collaborative, and grounded psychotherapy for adults in Santa Monica and across California via telehealth.",
    type: "website",
    locale: "en_US",
    siteName: "Dr. Maya Reynolds, PsyD Therapy",
    images: [
      {
        url: "/images/maya/maya-portrait.jpg",
        width: 1200,
        height: 900,
        alt: "Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist in Santa Monica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anxiety & Trauma Therapy in Santa Monica | Dr. Maya Reynolds, PsyD",
    description:
      "Warm, collaborative, and grounded psychotherapy for adults in Santa Monica and across California.",
    images: ["/images/maya/maya-portrait.jpg"],
  },
  alternates: {
    canonical: "https://dr-maya-reynolds.example.com",
  },
};

export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Dr. Maya Reynolds, PsyD - Therapy Practice",
    image: "https://dr-maya-reynolds.example.com/images/maya/maya-portrait.jpg",
    description:
      "Psychological therapy for adults experiencing anxiety, trauma, panic, and burnout in Santa Monica, CA.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123th Street 45 W",
      addressLocality: "Santa Monica",
      addressRegion: "CA",
      postalCode: "90401",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.0195,
      longitude: -118.4912,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Santa Monica",
      },
      {
        "@type": "State",
        name: "California",
      },
    ],
    knowsAbout: [
      "Cognitive Behavioral Therapy (CBT)",
      "Eye Movement Desensitization and Reprocessing (EMDR)",
      "Mindfulness-Based Stress Reduction",
      "Somatic Trauma Therapy",
      "Burnout & Perfectionism Counseling",
    ],
  };
}
