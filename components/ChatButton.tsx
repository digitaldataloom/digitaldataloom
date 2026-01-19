"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

interface ChatButtonProps {
  whatsappUrl: string
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}

export function ChatButton({ 
  whatsappUrl, 
  className = "", 
  variant = "outline",
  size = "default"
}: ChatButtonProps) {
  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={className}
    >
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2"
      >
        <MessageCircle className="h-4 w-4" />
        Chat Now
      </a>
    </Button>
  )
}
