/**
 * Google Tag Manager Configuration
 * 
 * Edit the GTM_ID below to configure Google Tag Manager.
 * Set to null or empty string to disable GTM.
 * 
 * This is the ONLY file you need to edit for GTM configuration.
 */

// ============================================
// GTM CONFIGURATION - EDIT HERE
// ============================================
export const GTM_ID: string | null = "GTM-XXXXXXX"

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
 * Get GTM script URL
 */
export const getGTMScriptUrl = (): string | null => {
  if (!isGTMEnabled()) return null
  return `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
}

/**
 * Get GTM noscript iframe URL
 */
export const getGTMNoScriptUrl = (): string | null => {
  if (!isGTMEnabled()) return null
  return `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`
}

/**
 * GTM inline script content for dataLayer initialization
 */
export const getGTMInlineScript = (): string | null => {
  if (!isGTMEnabled()) return null
  return `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GTM_ID}');
  `.trim()
}
