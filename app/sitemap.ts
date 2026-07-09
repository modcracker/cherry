import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.cherry.nyc";

  // Define our application's routes and metadata
  const routes = [
    // Core & High-Priority Landing Pages
    {
      url: `${baseUrl}`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },

    // Specialized Services & Deep Funnels
    {
      url: `${baseUrl}/agency-comparison`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dmca-takedown-service`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reverse-image-lookup-defense`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/legal-contracts-autonomy`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nyc-webcam-modeling`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tribeca-studio`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },

    // Legal & Support Info
    {
      url: `${baseUrl}/frequently-asked-questions`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },

    // Neighborhood-Specific Studio Locations
    {
      url: `${baseUrl}/locations/soho`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations/chelsea`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations/williamsburg`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations/midtown`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
  ];

  return routes;
}
