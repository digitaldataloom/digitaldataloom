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
  headline: "Know Exactly What Works With Accurate Conversion Tracking and Analytics",
  subheadline: "Accurate GA4, GTM, server-side tracking, and analytics dashboards allow you to clearly see what drives results and where ad spend is wasted.",
  personalNote: "✔️ Tracking Setup within 24 Hours ✔️ I Take Care of Everything ✔️ Reliable Post-Setup Support",
  primaryCta: {
    text: "Claim Free Audit",
    href: "#contact",
  },
  secondaryCta: {
    text: "See How It Works",
    href: "#how-it-works",
  },
  videoId: "7QFD1XQ-Rcg", // Replace with actual video ID
}
