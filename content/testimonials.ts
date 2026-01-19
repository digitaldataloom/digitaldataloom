export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
}

export interface TestimonialsContent {
  sectionTitle: string
  sectionSubtitle: string
  testimonials: Testimonial[]
}

export const testimonialsContent: TestimonialsContent = {
  sectionTitle: "What My Clients Say",
  sectionSubtitle: "Trusted by marketing teams and business owners",
  testimonials: [
    {
      quote: "Digital Data Loom transformed our tracking setup. We finally know exactly which campaigns are driving revenue and stopped wasting budget on underperforming ads.",
      author: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Inc.",
    },
    {
      quote: "The server-side tracking implementation was seamless. Our conversion data accuracy improved by 40%, and we can now make decisions with confidence.",
      author: "Michael Torres",
      role: "Head of Growth",
      company: "Scale Digital Agency",
    },
    {
      quote: "Their GA4 migration was the smoothest transition we've experienced. The custom dashboards they built save us hours every week.",
      author: "Emily Richardson",
      role: "E-commerce Manager",
      company: "Modern Retail Co.",
    },
  ],
}
