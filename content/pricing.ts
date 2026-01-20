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
          price: "$450 (starting at)",
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
          price: "$750 (starting at)",
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
    {
      id: "monthly-management",
      label: "Monthly Management",
      tiers: [
        {
          name: "Monthly Management – Basic",
          price: "$150 / month / website",
          description: "Essential maintenance and monitoring.", // Inferred description
          features: [
            "GA4 & GTM tracking maintenance",
            "Data accuracy & event monitoring",
            "Up to 2 tracking or analytics requests",
            "Basic reporting checks",
            "Fixes delivered within 48 hours",
          ],
          ctaText: "Start Monthly Management",
          ctaHref: "#contact",
        },
        {
          name: "Monthly Management – Premium",
          price: "$300 / month / website",
          description: "Most Popular choice for businesses.", // Inferred description
          highlighted: true,
          features: [
            "GA4, GTM & Looker Studio support",
            "Tracking updates & new event requests",
            "Conversion & funnel analysis",
            "Up to 5 tracking/analytics requests",
            "Priority fixes within 24–48 hours",
          ],
          ctaText: "Get Priority Support",
          ctaHref: "#contact",
        },
        {
          name: "Monthly Management – Pro",
          price: "$450 / month / website",
          description: "Comprehensive enterprise-grade support.", // Inferred description
          features: [
            "GA4, GTM, BigQuery & Looker Studio",
            "Unlimited tracking & analytics requests",
            "Advanced reporting & diagnostics",
            "24/7 monitoring to prevent data loss",
            "Same-day fixes with priority support",
          ],
          ctaText: "Apply for Pro Management",
          ctaHref: "#contact",
        },
      ],
    },
  ],
}
