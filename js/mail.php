<?php

	// Configuration Settings
	// You can add multiple instances of to, cc, and bcc
	$simpleFormMailRecipient = "heidi@heidi-o.de";
	$simpleFormMailFrom = $_POST['Email_Address'];
	$simpleFormMailSubject = "Contact Form - heidi-o.de";
	$simpleFormSuccessMessage = "Thanks! Your message sent successfully.";
	
	// Basic header information
	$header = "From: <$simpleFormMailFrom>\n";
	$header .= "Return-path: <$simpleFormMailFrom>\n";
	$header .= "X-Sender-IP: " .$_SERVER['REMOTE_ADDR']."\n";
	$header .= "Content-Type: text/html; \n charset=utf-8 \n";
	
	// Construct the basic HTML for the message
	$head = "<html><body>";
	$table_start = "<table border='1' width='100%'><td align='center'><strong>Field</strong></td><td align='center'><strong>Value</strong></td>";
	
	// Fetch all the form fields and their values
	$text = "";
	foreach($_POST as $name => $value) {
		$text .= "<tr><td>$name</td><td>$value</td></tr>";
	}

	// End the table and add extra footer information
	$table_end = "</table>";
	$info = "<br />Message sent from: ".$_SERVER['SERVER_NAME'];
	$footer = "</body></html>";

	// Combine all the information
	$body = "$head $table_start $text $table_end $info $footer";

	// If everything is filled out correctly, send the e-mail
	if ($body != "") {
		mail($simpleFormMailRecipient, $simpleFormMailSubject, $body, $header);
		echo $simpleFormSuccessMessage;
	}

?>