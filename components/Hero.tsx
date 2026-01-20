"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { HeroContent } from "@/content/hero"

import Image from "next/image"

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
    <section id="hero" className="relative bg-background py-8 lg:py-12 min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-10">
        <Image
          src="/hero-bg-logos.png"
          alt="Digital Marketing Services Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 lg:px-6">
        <div className="flex flex-col gap-6 items-center text-center max-w-4xl mx-auto">
          {/* Text Content */}
          <div className="flex flex-col gap-4">
            <h1 className="text-balance text-2xl font-bold leading-tight text-foreground-bright lg:text-3xl xl:text-4xl">
              {content.headline}
            </h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl">
              {content.subheadline}
            </p>
            <p className="text-pretty text-base leading-relaxed text-accent-yellow font-medium">
              {content.personalNote}
            </p>
          </div>

          {/* Video */}
          <div className="relative w-full max-w-lg group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue/50 to-accent-yellow/50 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-background-secondary shadow-lg">
              <iframe
                src={`https://www.youtube.com/embed/${content.videoId}`}
                title="Digital Data Loom - Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap justify-center w-full pt-2">
            <Button
              size="lg"
              className="bg-accent-yellow text-primary-foreground hover:bg-accent-yellow/90 font-semibold min-w-[200px]"
              onClick={() => handleScrollToSection(content.primaryCta.href)}
            >
              {content.primaryCta.text}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-foreground-bright bg-transparent min-w-[200px]"
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
