export interface NavLink {
  label: string
  href: string
}

export interface NavigationContent {
  logo: string
  links: NavLink[]
  ctaText: string
  ctaHref: string
}

export const navigationContent: NavigationContent = {
  logo: "Digital Data Loom",
  links: [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  ctaText: "Claim Free Audit",
  ctaHref: "#contact",
}
