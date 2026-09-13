import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#24352F", // Deep eucalyptus
          dark: "#1A2722",
          light: "#31453E",
        },
        secondary: {
          DEFAULT: "#E9DED0", // Warm oat
          dark: "#DFCFC0",
          light: "#F3EDE5",
        },
        accent: {
          DEFAULT: "#B8795B", // Muted terracotta
          hover: "#A36548",
          light: "#C98F73",
        },
        surface: {
          DEFAULT: "#FAF8F4", // Warm ivory
          alt: "#F4EFEA",
          card: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#242723", // Charcoal
          muted: "#5A6158",
          subtle: "#80877E",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      maxWidth: {
        editorial: "76rem", // 1216px
        reading: "45rem", // 720px
      },
      spacing: {
        "section-y": "clamp(3rem, 6vw, 6.5rem)",
      },
      borderRadius: {
        editorial: "0.75rem",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(36, 53, 47, 0.05)",
        card: "0 10px 30px -4px rgba(36, 53, 47, 0.07)",
        elevated: "0 20px 40px -8px rgba(36, 53, 47, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
