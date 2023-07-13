<?php
// Get data from form
$email= $_POST['email'];
$message= $_POST['message'];

$to = "md472@nau.edu";
$subject = "This is the subject line";

// The following text will be sent
// Email = user entered email
// Message = user entered message
$txt = "\r\n Email = " . $email . "\r\n Message =" . $message;

$headers = "From: noreply@demosite.com" . "\r\n" .
			"CC: somebodyelse@example.com";
if($email != NULL) {
	mail($to, $subject, $txt, $headers);
}

// Redirect to
header("Location:last.html");
?>
