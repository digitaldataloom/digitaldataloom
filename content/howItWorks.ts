export interface Step {
  stepNumber: number
  title: string
  description: string
}

export interface HowItWorksContent {
  sectionTitle: string
  sectionSubtitle: string
  steps: Step[]
}

export const howItWorksContent: HowItWorksContent = {
  sectionTitle: "How It Works",
  sectionSubtitle: "A simple, proven process to get your tracking right",
  steps: [
    {
      stepNumber: 1,
      title: "Discovery Call",
      description: "I start with a free consultation to understand your business goals, current tracking setup, and identify gaps in your data collection.",
    },
    {
      stepNumber: 2,
      title: "Custom Implementation",
      description: "I personally implement a tailored tracking solution designed specifically for your needs, with thorough testing and validation.",
    },
    {
      stepNumber: 3,
      title: "Ongoing Optimization",
      description: "I provide continuous monitoring, reporting, and optimization to ensure your tracking evolves with your business.",
    },
  ],
}
