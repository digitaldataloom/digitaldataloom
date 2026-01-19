import type { TrustContent } from "@/content/trust"

interface TrustStripProps {
  content: TrustContent
}

export function TrustStrip({ content }: TrustStripProps) {
  return (
    <section className="border-y border-border bg-background-secondary py-8">
      <div className="mx-auto max-w-[1200px] px-4 lg:px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {content.items.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent-yellow">
                {item.title}
              </span>
              <span className="mt-1 text-xs text-muted-foreground">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
