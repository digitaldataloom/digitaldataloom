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
  personalNote: "✔️ Tracking Setup in 6 Hours ✔️ I Take Care of Everything ✔️ 24/7 Dedicated Expert Support",
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
