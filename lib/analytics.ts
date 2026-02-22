/**
 * Google Tag Manager Configuration (via Stape.io First-Party CDN)
 *
 * Uses a custom first-party loader hosted on shamim.digitaldataloom.com
 * as recommended by stape.io for improved tracking reliability.
 *
 * Set GTM_ID to null or empty string to disable GTM entirely.
 */

// ============================================
// GTM CONFIGURATION - EDIT HERE
// ============================================
export const GTM_ID: string | null = "GTM-5DRSKR8N"

/**
 * Stape.io first-party custom loader endpoint.
 * This replaces the standard googletagmanager.com script URL.
 */
const STAPE_LOADER_URL =
  "https://shamim.digitaldataloom.com/autdgfvww.js?ddnlnc6=HhNLITMpWUAzJSUtNVw6UwFKREhWQhAbShMfAQ4QFRkTFgIHCwsbGFkUGQs%3D"

/**
 * Stape.io first-party noscript fallback URL.
 * Mirrors the standard GTM ns.html but served from your own subdomain.
 */
const STAPE_NOSCRIPT_URL = `https://shamim.digitaldataloom.com/ns.html?id=${GTM_ID}`

// ============================================
// GTM HELPER FUNCTIONS - DO NOT EDIT BELOW
// ============================================

/**
 * Check if GTM is enabled
 */
export const isGTMEnabled = (): boolean => {
  return Boolean(GTM_ID && GTM_ID !== "GTM-XXXXXXX")
}

/**
 * Get GTM noscript iframe URL (first-party via stape.io)
 */
export const getGTMNoScriptUrl = (): string | null => {
  if (!isGTMEnabled()) return null
  return STAPE_NOSCRIPT_URL
}

/**
 * GTM inline script content using the stape.io custom first-party loader.
 * This replaces the standard googletagmanager.com loader URL.
 */
export const getGTMInlineScript = (): string | null => {
  if (!isGTMEnabled()) return null
  return `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src="${STAPE_LOADER_URL}";f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`
}
