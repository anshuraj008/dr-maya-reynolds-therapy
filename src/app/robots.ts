import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/", // Fictional profile ethically marked disallow/noindex
    },
    sitemap: "https://dr-maya-reynolds.example.com/sitemap.xml",
  };
}
