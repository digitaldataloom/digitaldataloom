export interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  ctaText: string
  ctaHref: string
  highlighted?: boolean
  subtext?: string // Added for "Final pricing confirmed..."
}

export interface PricingTab {
  id: string
  label: string
  tiers: PricingTier[]
}

export interface PricingContent {
  sectionTitle: string
  sectionSubtitle: string
  pricingNote: string
  tabs: PricingTab[]
}

export const pricingContent: PricingContent = {
  sectionTitle: "Transparent Pricing",
  sectionSubtitle: "No hidden fees. Choose the plan that fits your needs.",
  pricingNote: "Final pricing is confirmed after a short discovery call and free tracking audit, based on your setup and requirements.",
  tabs: [
    {
      id: "tracking-setup",
      label: "Tracking Setup",
      tiers: [
        {
          name: "GA4 Setup – Service-Based Website",
          price: "$350 (starting at)",
          description: "One-time GA4 and GTM setup for lead tracking.",
          features: [
            "GA4 property & event configuration",
            "Lead form, booking & call conversions",
            "Google Tag Manager setup",
            "Google Ads conversion linking",
          ],
          ctaText: "Request Tracking Setup",
          ctaHref: "#contact",
        },
        {
          name: "GA4 E-commerce Setup",
          price: "$550 (starting at)",
          description: "One-time GA4 e-commerce implementation.",
          features: [
            "GA4 enhanced e-commerce events",
            "GTM implementation",
            "Purchase & revenue tracking",
            "Google Ads conversion setup",
          ],
          ctaText: "Request Tracking Setup",
          ctaHref: "#contact",
        },
        {
          name: "Offline Conversion Tracking (Google Ads)",
          price: "Custom pricing",
          description: "CRM-based or offline data integration.", // Inferred description to match layout, promptly only gave features
          subtext: "Final pricing confirmed after a discovery call",
          features: [
            "Offline conversion imports",
            "CRM-based or GTM/Zapier workflows",
            "Call tracking integration",
          ],
          ctaText: "Discuss OCT Setup",
          ctaHref: "#contact",
        },
      ],
    },
  ],
}
