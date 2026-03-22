import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"

import { navigationContent } from "@/content/navigation"
import { contactContent } from "@/content/contact"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contact Us | Digital Data Loom',
  description: 'Get in touch with Digital Data Loom for your web analytics and tracking needs.',
}

export default function ContactFormPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar content={navigationContent} whatsappUrl={contactContent.whatsappUrl} />
      
      <main className="flex-1">
        <ContactForm />
      </main>

      <Footer navigation={navigationContent} contact={contactContent} />
    </div>
  )
}
