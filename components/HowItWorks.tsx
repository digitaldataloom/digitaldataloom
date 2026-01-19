import type { HowItWorksContent } from "@/content/howItWorks"

interface HowItWorksProps {
  content: HowItWorksContent
}

export function HowItWorks({ content }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="bg-background-secondary py-20 lg:py-28">
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

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-3">
          {content.steps.map((step, index) => (
            <div key={step.stepNumber} className="relative flex flex-col items-center text-center">
              {/* Connector Line */}
              {index < content.steps.length - 1 && (
                <div className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-border md:block" />
              )}
              
              {/* Step Number */}
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent-yellow bg-background text-2xl font-bold text-accent-yellow">
                {step.stepNumber}
              </div>
              
              {/* Content */}
              <h3 className="mt-6 text-xl font-semibold text-foreground-bright">
                {step.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
