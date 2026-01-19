export interface TrustItem {
  title: string
  description: string
}

export interface TrustContent {
  items: TrustItem[]
}

export const trustContent: TrustContent = {
  items: [
    {
      title: "GA4 Certified",
      description: "Google Analytics 4 experts",
    },
    {
      title: "GTM Specialists",
      description: "Advanced tag management",
    },
    {
      title: "Server-Side Tracking",
      description: "First-party data collection",
    },
    {
      title: "Custom Dashboards",
      description: "Looker Studio & Data Studio",
    },
    {
      title: "Data-Driven Results",
      description: "Accurate attribution experts",
    },
  ],
}
