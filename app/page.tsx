import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { TrustStrip } from "@/components/TrustStrip"
import { Services } from "@/components/Services"
import { HowItWorks } from "@/components/HowItWorks"
import { Pricing } from "@/components/Pricing"
import { Testimonials } from "@/components/Testimonials"
import { CTASection } from "@/components/CTASection"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

// Content imports
import { navigationContent } from "@/content/navigation"
import { heroContent } from "@/content/hero"
import { trustContent } from "@/content/trust"
import { servicesContent } from "@/content/services"
import { howItWorksContent } from "@/content/howItWorks"
import { pricingContent } from "@/content/pricing"
import { testimonialsContent } from "@/content/testimonials"
import { ctaContent } from "@/content/cta"
import { contactContent } from "@/content/contact"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar content={navigationContent} whatsappUrl={contactContent.whatsappUrl} />
      
      <main className="flex-1">
        <Hero content={heroContent} />
        <TrustStrip content={trustContent} />
        <Services content={servicesContent} />
        <HowItWorks content={howItWorksContent} />
        <Pricing content={pricingContent} />
        <Testimonials content={testimonialsContent} />
        <CTASection content={ctaContent} />
        <Contact content={contactContent} />
      </main>

      <Footer navigation={navigationContent} contact={contactContent} />
    </div>
  )
}
