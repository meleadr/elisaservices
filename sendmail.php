<?php

$name = $_POST['name'];
$mailFrom = $_POST['email'];
$message = $_POST['message'];
$phone = $_POST['phone'];

$mailTo = "elisaservices@hotmail.com";
$subject = "Elisaservices - Contact";
$headers = "De: ".$mailFrom;
$message = $message."\n\n".$phone;
$txt = "Vous avez reçu un message de ".$name.".\n\n".$message;

mail($mailTo, $subject, $txt, $headers);
header("Location: index.html");

?>
