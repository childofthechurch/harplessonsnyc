# Google Ads Conversion Tracking Guide

This guide explains how to set up conversion tracking in Google Ads to measure when users submit the lesson request form after clicking on your ads.

## Why Track Conversions?

Conversion tracking helps you:
- Understand which ads, keywords, and campaigns are driving form submissions
- Optimize your ad spend based on what's working
- Improve your return on investment (ROI) from Google Ads

## Setting Up Conversion Tracking

### Step 1: Create a Conversion Action in Google Ads

1. Sign in to your Google Ads account
2. Click the **Tools & Settings** menu (wrench icon) at the top
3. Under "Measurement," click **Conversions**
4. Click the blue **+ New conversion action** button
5. Select **Website**
6. Set up the conversion details:
   - **Name**: "Lesson Request Form Submission"
   - **Category**: "Contact"
   - **Value**: Select either "Don't assign a value" or assign a value if you know your customer value
   - **Count**: "One" (since one form submission = one lead)
7. Click **Create and continue**

### Step 2: Get Your Conversion Tracking Tag

1. Google will provide you with a conversion tracking tag
2. Select **Install the tag yourself**
3. You'll see two pieces of code:
   - The global site tag (goes in the <head> of all pages)
   - The event snippet (goes on your confirmation page)

### Step 3: Add the Tracking Code to Your Website

1. **Global Site Tag**: Add this to the <head> section of all pages on your site if it's not already there
2. **Event Snippet**: Add this to your confirmation.html page

The confirmation.html already has placeholder code - replace the placeholders:

```javascript
// Line 23 in confirmation.html
gtag('event', 'conversion', {'send_to': 'AW-XXXXXXXXXX/XXXXXXXXXXX'});

// Line 173 in confirmation.html
gtag('event', 'lesson_request_completed', {
  'event_category': 'conversion',
  'event_label': 'Lesson Request'
});
```

Replace `AW-XXXXXXXXXX/XXXXXXXXXXX` with your actual conversion ID and label.

### Step 4: Ensure GCLID Capture is Working

The GCLID (Google Click ID) is captured by:

1. Adding `?gclid={gclid}` to your ad's final URL (Google Ads does this automatically)
2. Our JavaScript code in the contact form captures this parameter
3. The GCLID is stored in a cookie for 30 days in case the user doesn't convert immediately
4. When the user submits the form, the GCLID is included in the submission

### Step 5: Test Your Conversion Tracking

1. Use Google's Tag Assistant or Chrome extension to verify the tags are firing
2. Create a test conversion by:
   - Clicking on one of your ads
   - Submitting the form
   - Checking that you reach the confirmation page
3. Check your Google Ads account in 24-48 hours to see if the conversion was recorded

## Advanced: Setting Up Offline Conversion Tracking

If you often follow up with potential students by phone or need more advanced tracking:

1. In Google Ads, create a new conversion action selecting "Import"
2. Choose "Other data sources or CRMs"
3. Select "Track calls from your website"
4. Follow Google's instructions to set up call tracking

## Troubleshooting

If conversions aren't tracking:

1. Verify your Google Ads account ID is correct in the tracking code
2. Check that the confirmation page loads properly after form submission
3. Ensure there are no JavaScript errors on your page
4. Verify that third-party cookies are not blocked by the user's browser

## Next Steps

Consider expanding your conversion tracking by:

1. Setting up Google Analytics integration with Google Ads
2. Creating audience lists for remarketing to people who visited but didn't convert
3. Implementing value-based bidding once you have enough conversion data