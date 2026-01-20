"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ChatButton } from "@/components/ChatButton"
import type { NavigationContent } from "@/content/navigation"

interface NavbarProps {
  content: NavigationContent
  whatsappUrl: string
}

export function Navbar({ content, whatsappUrl }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
        >
          <div className="relative h-10 w-auto">
            <img
              src="/DDL logo.png"
              alt={content.logo}
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {content.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground-bright cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <ChatButton
            whatsappUrl={whatsappUrl}
            variant="outline"
            className="border-muted-foreground/30 text-muted-foreground hover:bg-muted hover:text-foreground-bright bg-transparent"
          />
          <Button
            className="bg-accent-cta text-foreground-bright hover:bg-accent-cta/90"
            onClick={() => {
              const element = document.querySelector(content.ctaHref)
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            {content.ctaText}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-foreground-bright"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto max-w-[1200px] px-4 py-4">
            <div className="flex flex-col gap-4">
              {content.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground-bright cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2">
                <ChatButton
                  whatsappUrl={whatsappUrl}
                  variant="outline"
                  className="w-full border-muted-foreground/30 text-muted-foreground hover:bg-muted hover:text-foreground-bright bg-transparent"
                />
                <Button
                  className="w-full bg-accent-cta text-foreground-bright hover:bg-accent-cta/90"
                  onClick={() => {
                    const element = document.querySelector(content.ctaHref)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                    setIsMenuOpen(false)
                  }}
                >
                  {content.ctaText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
