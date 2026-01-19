export interface SocialLink {
  platform: string
  url: string
  label: string
}

export interface ContactContent {
  sectionTitle: string
  sectionSubtitle: string
  calendlyUrl: string
  email: string
  whatsappNumber: string
  whatsappUrl: string
  responseTime: string
  socialLinks: SocialLink[]
}

export const contactContent: ContactContent = {
  sectionTitle: "Let's Talk",
  sectionSubtitle: "Book a free strategy call or reach out directly",
  calendlyUrl: "https://calendly.com/digitaldataloom/30min",
  email: "digitaldataloom@gmail.com",
  whatsappNumber: "+8801749181410",
  whatsappUrl: "https://wa.me/8801749181410",
  responseTime: "I typically respond within 24 hours",
  socialLinks: [
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/theshamimahsan",
      label: "LinkedIn",
    },
    {
      platform: "youtube",
      url: "https://www.youtube.com/@digitaldataloom",
      label: "YouTube",
    },
  ],
}
