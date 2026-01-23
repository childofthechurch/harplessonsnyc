# Contact Form Implementation for Harp Lessons NYC

This package includes several files to implement a contact form for lesson requests with Google Ads conversion tracking.

## Files Included

1. **test-form.html** - Test page to preview the form with a local submission handler
2. **test-form-formspree.html** - Test page with Formspree integration for easy form processing
3. **submit-form.php** - PHP form handler (for server-side processing)
4. **confirmation.html** - Already exists in your site as the thank-you page

## Implementation Options

You have two main options for implementing the contact form:

### Option 1: PHP Form Handler (Self-hosted)

If your web host supports PHP:

1. Upload the `submit-form.php` file to your server
2. Add the contact form code to your index.html file
3. Set the form's action to `action="submit-form.php"`
4. Test to ensure emails are being sent correctly

This option gives you the most control but requires PHP support on your server.

### Option 2: Formspree Integration (Current Implementation)

Formspree is a form handling service that works without requiring server-side code:

**Current Setup (Free Plan):**
- The form is configured to use Formspree's free plan
- After submission, users will see Formspree's default success page
- You'll receive emails with the form submissions

**Upgrade Options:**
1. **Formspree Pro Plan ($8/month):**
   - Enables custom redirect to your confirmation.html page
   - To enable this, upgrade your Formspree account and add back:
   ```html
   <input type="hidden" name="_next" value="confirmation.html">
   ```
   - This will redirect users to your custom confirmation page

2. **Custom JavaScript Solution:**
   - An alternative is to use AJAX to submit the form and then manually redirect
   - This would require additional JavaScript code

## Google Ads Conversion Tracking

The form includes code to capture the Google Click ID (gclid) which is essential for tracking conversions in Google Ads:

1. The form has a hidden input field: `<input type="hidden" id="gclid_field" name="gclid" value="">`
2. JavaScript captures the GCLID from either the URL or a previously stored cookie
3. The GCLID is submitted with the form for conversion tracking

**Note:** For complete Google Ads conversion tracking with the free Formspree plan:
- You would need to set up Google Analytics and configure it to track form submissions
- Or upgrade to Formspree Pro to use your custom confirmation page with conversion tracking code

## Testing the Implementation

1. Open either test-form.html or test-form-formspree.html to see how the form looks
2. Fill out the form and submit to test the submission process
3. You should receive an email with the form data
4. The user will see Formspree's default success page (which includes a link back to your site)

## Final Implementation Steps

1. The form is already integrated into your index.html
2. Set up Google Analytics to track form submissions as events
3. Consider upgrading to Formspree Pro for custom redirect and better integration

## PHP Alternative

If you prefer complete control with custom redirects:
1. Upload the `submit-form.php` file to your server
2. Change the form action to `action="submit-form.php"`
3. Test to ensure emails are being sent and redirects are working correctly

---

For any questions or issues with implementation, please reach out.