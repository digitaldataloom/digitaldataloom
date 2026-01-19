export interface HeroContent {
  headline: string
  subheadline: string
  personalNote: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta: {
    text: string
    href: string
  }
  videoId: string
}

export const heroContent: HeroContent = {
  headline: "Know Exactly What's Working – With Accurate Conversion Tracking & Analytics",
  subheadline: "Accurate GA4, GTM, server-side tracking, and analytics dashboards so you can clearly see what drives results and where ad spend is wasted.",
  personalNote: "I personally handle all tracking and analytics work — no outsourcing, no handoffs.",
  primaryCta: {
    text: "Claim Free Audit",
    href: "#contact",
  },
  secondaryCta: {
    text: "See How It Works",
    href: "#how-it-works",
  },
  videoId: "dQw4w9WgXcQ", // Replace with actual video ID
}
