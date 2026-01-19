"use client"

import { Button } from "@/components/ui/button"
import type { CTAContent } from "@/content/cta"

interface CTASectionProps {
  content: CTAContent
}

export function CTASection({ content }: CTASectionProps) {
  const handleScrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-4 lg:px-6">
        <div className="rounded-2xl border border-accent-yellow/20 bg-background-secondary p-8 text-center lg:p-16">
          <h2 className="text-balance text-3xl font-bold text-foreground-bright lg:text-4xl">
            {content.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            {content.subheadline}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-accent-cta text-foreground-bright hover:bg-accent-cta/90 font-semibold px-8"
              onClick={() => handleScrollToSection(content.primaryCta.href)}
            >
              {content.primaryCta.text}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-foreground-bright bg-transparent"
              onClick={() => handleScrollToSection(content.secondaryCta.href)}
            >
              {content.secondaryCta.text}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
