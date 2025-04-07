<?php
/**
 * Form Handler for Harp Lessons NYC
 * 
 * This script processes the lesson request form, sends an email notification,
 * and tracks Google Ads conversions before redirecting to the confirmation page.
 */

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Form field values
    $name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
    $email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
    $phone = isset($_POST['phone']) ? strip_tags(trim($_POST['phone'])) : 'Not provided';
    $age = isset($_POST['age']) ? strip_tags(trim($_POST['age'])) : 'Not provided';
    $harp_experience = isset($_POST['harp_experience']) ? strip_tags(trim($_POST['harp_experience'])) : 'Not provided';
    $has_harp = isset($_POST['has_harp']) ? strip_tags(trim($_POST['has_harp'])) : 'Not provided';
    $message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : 'No additional information provided';
    $gclid = isset($_POST['gclid']) ? strip_tags(trim($_POST['gclid'])) : '';

    // Validate required fields
    $errors = [];

    if (empty($name)) {
        $errors[] = "Please enter your name.";
    }

    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Please enter a valid email address.";
    }

    // If there are errors, redirect back with error messages
    if (!empty($errors)) {
        $error_query = http_build_query(['errors' => $errors]);
        header("Location: index.html?$error_query#CONTACT");
        exit;
    }

    // Prepare email content
    $recipient = "harplessonsbyesther@gmail.com"; // Change to your email
    $subject = "New Lesson Request from $name";
    
    $email_content = "New Harp Lesson Request\n\n";
    $email_content .= "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Age: $age\n";
    $email_content .= "Harp Experience: $harp_experience\n";
    $email_content .= "Has Harp at Home: $has_harp\n";
    $email_content .= "Additional Information:\n$message\n\n";
    
    if (!empty($gclid)) {
        $email_content .= "Google Ads GCLID: $gclid\n";
        $email_content .= "(This inquiry came from a Google Ad)\n";
    }

    // Email headers
    $headers = "From: $name <$email>";

    // Send email
    if (mail($recipient, $subject, $email_content, $headers)) {
        // Store form data in session for confirmation page if needed
        session_start();
        $_SESSION['form_data'] = [
            'name' => $name,
            'email' => $email,
            'phone' => $phone,
            'gclid' => $gclid
        ];
        
        // Redirect to confirmation page
        header("Location: confirmation.html");
        exit;
    } else {
        // If mail fails, redirect with error
        header("Location: index.html?error=mail_failed#CONTACT");
        exit;
    }

} else {
    // If not a POST request, redirect to homepage
    header("Location: index.html");
    exit;
}
?>