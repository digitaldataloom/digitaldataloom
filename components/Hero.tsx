"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { HeroContent } from "@/content/hero"

interface HeroProps {
  content: HeroContent
}

export function Hero({ content }: HeroProps) {
  const handleScrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <section id="hero" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="flex flex-col gap-6">
            <h1 className="text-balance text-4xl font-bold leading-tight text-foreground-bright lg:text-5xl xl:text-6xl">
              {content.headline}
            </h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl">
              {content.subheadline}
            </p>
            <p className="text-pretty text-base leading-relaxed text-accent-yellow font-medium">
              {content.personalNote}
            </p>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:flex-wrap">
              <Button
                size="lg"
                className="bg-accent-yellow text-primary-foreground hover:bg-accent-yellow/90 font-semibold"
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

          {/* Video Column */}
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-background-secondary">
            <iframe
              src={`https://www.youtube.com/embed/${content.videoId}`}
              title="Digital Data Loom - Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
