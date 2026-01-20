"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import type { PricingContent } from "@/content/pricing"

interface PricingProps {
  content: PricingContent
}

export function Pricing({ content }: PricingProps) {
  const handleScrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-4 lg:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground-bright lg:text-4xl">
            {content.sectionTitle}
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            {content.sectionSubtitle}
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue={content.tabs[0].id} className="mb-12 flex flex-col items-center">
          <TabsList className="mb-8 w-full max-w-md bg-transparent p-0 gap-2 border border-border/40 rounded-full h-auto">
            {content.tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={cn(
                  "flex-1 rounded-full py-3 text-sm font-medium transition-all duration-300",
                  "data-[state=active]:bg-[#7C3AED] data-[state=active]:text-white", // Purple accent
                  "data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground hover:text-foreground-bright"
                )}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Pricing Note */}
          <p className="mb-8 text-center text-sm text-muted-foreground/80 italic">
            {content.pricingNote}
          </p>

          {content.tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="w-full">
              <div className="grid gap-8 md:grid-cols-3">
                {tab.tiers.map((tier) => (
                  <Card
                    key={tier.name}
                    className={cn(
                      "flex flex-col border-border bg-background-secondary",
                      tier.highlighted && "border-accent-yellow ring-1 ring-accent-yellow"
                    )}
                  >
                    <CardHeader>
                      <CardTitle className="text-xl text-foreground-bright">
                        {tier.name}
                      </CardTitle>
                      <div className="mt-2">
                        <span className="text-2xl font-bold text-accent-yellow">
                          {tier.price}
                        </span>
                        {tier.subtext && (
                          <p className="mt-1 text-xs text-muted-foreground">
                            {tier.subtext}
                          </p>
                        )}
                      </div>
                      <CardDescription className="mt-2 text-muted-foreground">
                        {tier.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-3">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                            <svg
                              className="h-5 w-5 flex-shrink-0 text-accent-blue"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className={cn(
                          "w-full",
                          tier.highlighted
                            ? "bg-accent-cta text-foreground-bright hover:bg-accent-cta/90"
                            : "bg-accent-blue text-foreground-bright hover:bg-accent-blue/90"
                        )}
                        onClick={handleScrollToContact}
                      >
                        {tier.ctaText}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
