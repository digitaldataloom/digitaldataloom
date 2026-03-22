import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { GTM_ID, isGTMEnabled, getGTMInlineScript, getGTMNoScriptUrl } from '@/lib/analytics'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Digital Data Loom | Conversion Tracking & Web Analytics',
  description: 'Accurate GA4, GTM, server-side tracking, and analytics dashboards so you can clearly see what drives results and where ad spend is wasted.',
  keywords: ['conversion tracking', 'web analytics', 'GA4', 'GTM', 'server-side tracking', 'analytics dashboards'],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/android-chrome-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/android-chrome-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gtmScript = getGTMInlineScript()
  const gtmNoScriptUrl = getGTMNoScriptUrl()

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager - Head Script */}
        {isGTMEnabled() && gtmScript && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: gtmScript }}
          />
        )}
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager - NoScript Fallback */}
        {isGTMEnabled() && gtmNoScriptUrl && (
          <noscript>
            <iframe
              src={gtmNoScriptUrl}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
