export interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  ctaText: string
  ctaHref: string
  highlighted?: boolean
}

export interface PricingContent {
  sectionTitle: string
  sectionSubtitle: string
  pricingNote: string
  tiers: PricingTier[]
}

export const pricingContent: PricingContent = {
  sectionTitle: "Transparent Pricing",
  sectionSubtitle: "No hidden fees. Choose the plan that fits your needs.",
  pricingNote: "Final pricing is confirmed after a short discovery call and free tracking audit, based on your setup and requirements.",
  tiers: [
    {
      name: "Audit",
      price: "Free",
      description: "Perfect for understanding your current tracking health",
      features: [
        "Complete tracking audit",
        "Data accuracy assessment",
        "Gap identification",
        "Priority recommendations",
        "30-minute review call",
      ],
      ctaText: "Get Free Audit",
      ctaHref: "#contact",
    },
    {
      name: "Implementation",
      price: "From $2,500",
      description: "Full tracking setup tailored to your business",
      features: [
        "GA4 complete setup",
        "GTM implementation",
        "Conversion tracking",
        "E-commerce tracking",
        "Custom event setup",
        "30-day support",
      ],
      ctaText: "Get Started",
      ctaHref: "#contact",
      highlighted: true,
    },
    {
      name: "Ongoing",
      price: "From $500/mo",
      description: "Continuous optimization and reporting",
      features: [
        "Monthly reporting",
        "Dashboard maintenance",
        "Tracking updates",
        "Priority support",
        "Quarterly strategy calls",
        "New feature implementation",
      ],
      ctaText: "Book a Call",
      ctaHref: "#contact",
    },
  ],
}
