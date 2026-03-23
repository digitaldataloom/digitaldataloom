import React from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { QuoteForm } from "@/components/QuoteForm"
import { navigationContent } from "@/content/navigation"
import { contactContent } from "@/content/contact"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get a Free Quote | Digital Data Loom',
  description: 'Request a personalized quote for conversion tracking, web analytics, and server-side tagging. fast, reliable, and professional.',
}

export default function GetQuotePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black selection:bg-emerald-500/30">
      <Navbar content={navigationContent} whatsappUrl={contactContent.whatsappUrl} />
      
      <main className="flex-1 py-12">
        <QuoteForm />
      </main>

      <Footer navigation={navigationContent} contact={contactContent} />
    </div>
  )
}
