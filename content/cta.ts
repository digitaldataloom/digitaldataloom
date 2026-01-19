export interface CTAContent {
  headline: string
  subheadline: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta: {
    text: string
    href: string
  }
}

export const ctaContent: CTAContent = {
  headline: "Ready to See What's Really Working?",
  subheadline: "Get a free tracking audit and discover how accurate data can transform your marketing performance.",
  primaryCta: {
    text: "Claim Your Free Audit",
    href: "#contact",
  },
  secondaryCta: {
    text: "Book a Strategy Call",
    href: "#contact",
  },
}
