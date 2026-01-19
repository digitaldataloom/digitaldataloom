import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { ServicesContent } from "@/content/services"

interface ServicesProps {
  content: ServicesContent
}

export function Services({ content }: ServicesProps) {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-4 lg:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground-bright lg:text-4xl">
            {content.sectionTitle}
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            {content.sectionSubtitle}
          </p>
          <p className="mt-4 text-pretty text-base text-accent-yellow font-medium max-w-2xl mx-auto">
            {content.personalNote}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.services.map((service) => (
            <Card 
              key={service.title} 
              className={cn(
                "border-border bg-background-secondary transition-colors hover:border-accent-blue/50",
                service.highlighted && "border-accent-yellow ring-1 ring-accent-yellow"
              )}
            >
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle className="text-xl text-foreground-bright">
                    {service.title}
                  </CardTitle>
                  {service.highlighted && (
                    <span className="inline-flex items-center rounded-full bg-accent-yellow/10 px-2.5 py-0.5 text-xs font-medium text-accent-yellow">
                      Featured
                    </span>
                  )}
                </div>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <span className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        service.highlighted ? "bg-accent-yellow" : "bg-accent-blue"
                      )} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
