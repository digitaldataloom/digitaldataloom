export interface Service {
  title: string
  description: string
  features: string[]
  highlighted?: boolean
}

export interface ServicesContent {
  sectionTitle: string
  sectionSubtitle: string
  personalNote: string
  services: Service[]
}

export const servicesContent: ServicesContent = {
  sectionTitle: "Services",
  sectionSubtitle: "Comprehensive tracking and analytics solutions for service businesses, agencies, SaaS, and e-commerce",
  personalNote: "I personally handle all tracking and analytics work — no outsourcing, no handoffs. You work directly with me from start to finish.",
  services: [
    {
      title: "Offline Conversion Tracking",
      description: "Connect your CRM and offline sales data to your ad platforms for smarter bidding and true ROI measurement.",
      features: [
        "CRM integration (HubSpot, Salesforce, etc.)",
        "Lead-to-sale attribution",
        "Enhanced Conversions for Leads",
        "Offline conversion imports",
      ],
      highlighted: true,
    },
    {
      title: "GA4 Setup & Migration",
      description: "Complete Google Analytics 4 implementation with enhanced measurement and custom events.",
      features: [
        "Custom event tracking",
        "Lead & form tracking",
        "Cross-domain setup",
        "Data validation",
      ],
    },
    {
      title: "Google Tag Manager",
      description: "Professional GTM container setup with organized tags, triggers, and variables.",
      features: [
        "Container architecture",
        "Conversion tracking",
        "Marketing pixels",
        "Form & CTA tracking",
      ],
    },
    {
      title: "Server-Side Tracking",
      description: "First-party data collection that bypasses ad blockers and improves data quality.",
      features: [
        "Server-side GTM",
        "First-party cookies",
        "Enhanced conversions",
        "Data accuracy boost",
      ],
    },
    {
      title: "Analytics Dashboards",
      description: "Custom Looker Studio dashboards that turn your data into actionable insights.",
      features: [
        "Real-time reporting",
        "Marketing attribution",
        "ROI visualization",
        "Automated reports",
      ],
    },
    {
      title: "Tracking Audits",
      description: "Comprehensive review of your current tracking setup with detailed recommendations.",
      features: [
        "Data accuracy check",
        "Gap identification",
        "Implementation review",
        "Priority roadmap",
      ],
    },
  ],
}
