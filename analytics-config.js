/**
 * Centralized Analytics Configuration
 * Update all your tracking IDs in one place
 */

const ANALYTICS_CONFIG = {
  // Google Analytics 4
  GA4_MEASUREMENT_ID: 'G-6WNLK7FNS8',

  // Google Ads
  GOOGLE_ADS_ID: 'AW-16923342394',
  GOOGLE_ADS_CONVERSION_LABEL: 'ZBRgCOeh6KkaELrs1oU_',

  // Meta Pixel (Facebook/Instagram)
  META_PIXEL_ID: '770878310335430',

  // Microsoft Clarity
  CLARITY_PROJECT_ID: 'ov9nsp1i4h', // This will be generated when you set up Clarity

  // Google Tag Manager
  GTM_ID: 'GT-T9CD235D'
};

// Make config available globally
window.ANALYTICS_CONFIG = ANALYTICS_CONFIG;
