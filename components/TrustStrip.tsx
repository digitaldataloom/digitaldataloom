import type { TrustContent } from "@/content/trust"

interface TrustStripProps {
  content: TrustContent
}

export function TrustStrip({ content }: TrustStripProps) {
  return (
    <section className="border-y border-border bg-background-secondary py-8">
      <div className="mx-auto max-w-[1200px] px-4 lg:px-6 overflow-hidden">
        <div className="flex w-max gap-16 animate-scroll mask-gradient">
          {[...content.items, ...content.items].map((item, i) => (
            <div key={`${item.title}-${i}`} className="flex flex-col items-center text-center min-w-[150px]">
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
