# Google Ads Form Submission Conversion Tracking

This document explains how Google Ads conversion tracking has been set up for your contact form submissions.

## What Has Been Implemented

1. **Google Tag Manager (GT-T9CD235D)** has been added to both pages
2. **Google Analytics 4 (G-6WNLK7FNS8)** has been added to both pages
3. **Google Ads Conversion Tracking (16923342394/ZBRgCOeh6KkaELrs1oU_)** has been set up to track form submissions

## How Form Submissions Are Tracked

The conversion tracking has been implemented in two places to ensure reliable tracking:

1. **On Form Submit**: When a user submits the contact form, conversion tracking occurs immediately
   ```javascript
   <form onsubmit="gtag('event', 'conversion', {'send_to': 'AW-16923342394/ZBRgCOeh6KkaELrs1oU_'});">
   ```

2. **On Thank You Page**: After form submission, when the user is redirected to the thank-you page, conversion tracking occurs again
   ```javascript
   gtag('event', 'conversion', {
     'send_to': 'AW-16923342394/ZBRgCOeh6KkaELrs1oU_'
   });
   ```

This dual implementation ensures that conversions are tracked even if there are issues with one of the methods.

## Verifying It Works

To verify that conversion tracking is working:

1. Open your website in Chrome
2. Right-click and select "Inspect" or press F12
3. Go to the "Console" tab
4. Fill out and submit the contact form
5. Check for any errors in the console
6. After being redirected to the thank you page, check for any errors in the console again

Conversion data should appear in your Google Ads account within 24-48 hours after the first conversions are tracked.

## Notes

- No additional Google Tag Manager configuration is needed since the tracking is implemented directly in the HTML code
- If you want to track other types of conversions in the future, you can obtain additional conversion labels from Google Ads
- If you change your form handling method or thank-you page URL, you'll need to update the conversion tracking code