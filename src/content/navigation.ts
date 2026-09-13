export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "Our Office", href: "#office" },
  { label: "FAQs", href: "#faqs" },
];

export const footerLinks = {
  navigation: [
    { label: "Services Overview", href: "#services" },
    { label: "Therapeutic Approach", href: "#approach" },
    { label: "Meet Dr. Maya", href: "#about" },
    { label: "Santa Monica Office", href: "#office" },
    { label: "Common Questions", href: "#faqs" },
  ],
  services: [
    { label: "Anxiety & Panic Therapy", href: "#services" },
    { label: "Trauma & EMDR Therapy", href: "#services" },
    { label: "Burnout & Perfectionism", href: "#services" },
    { label: "California Telehealth", href: "#office" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Notice of Privacy Practices", href: "#" },
    { label: "Good Faith Estimate", href: "#" },
  ],
};
