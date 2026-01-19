import { Card, CardContent } from "@/components/ui/card"
import type { TestimonialsContent } from "@/content/testimonials"

interface TestimonialsProps {
  content: TestimonialsContent
}

export function Testimonials({ content }: TestimonialsProps) {
  return (
    <section id="testimonials" className="bg-background-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-4 lg:px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground-bright lg:text-4xl">
            {content.sectionTitle}
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            {content.sectionSubtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {content.testimonials.map((testimonial) => (
            <Card 
              key={testimonial.author} 
              className="border-border bg-background"
            >
              <CardContent className="pt-6">
                {/* Quote */}
                <blockquote className="text-foreground leading-relaxed">
                  {`"${testimonial.quote}"`}
                </blockquote>
                
                {/* Author */}
                <div className="mt-6 border-t border-border pt-6">
                  <p className="font-semibold text-foreground-bright">
                    {testimonial.author}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
