<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
error_reporting(1);
require 'vendor/autoload.php';
 
if( isset( $_POST ) && !empty( $_POST ) ) {
    extract($_REQUEST);

    $mail = new PHPMailer();

    $subject_title = 'You have received new enquiry';
    $body_message  = '<table>';
    $body_message  .= '<tr>Name: '.$name.'</tr>';
    $body_message  .= '<tr>Email: '.$email.'</tr>';
    $body_message  .= '<tr>Phone Number: '.$name.'</tr>';
    $body_message  .= '<tr>Company: '.$msg_subject.'</tr>';
    $body_message  .= '<tr>Message: '.$message.'</tr>';
    
    try {
        $mail->SMTPDebug = FALSE;									
        $mail->isSMTP();											
        $mail->Host	 = 'smtp.gmail.com';					
        $mail->SMTPAuth = true;							
        $mail->Username = 'phoenixtechnologies@gmail.com';				
        $mail->Password = 'opheheeakfcfieux';						
        $mail->SMTPSecure = 'tls';							
        $mail->Port	 = 587;    
        $mail->setFrom('phoenixtechnologies@gmail.com', 'Phoenix Technologies');	
		$mail->addBCC('phoenixtechnologies@gmail.com', 'Phoenix Technologies');		
        $mail->addAddress('.$email.', '.$name.');
        
        $mail->isHTML(true);								
        $mail->Subject = $subject_title;
        $mail->Body = $body_message;
        // $mail->AltBody = 'Body in plain text for non-HTML mail clients';
        $mail->send();
        echo "success";
    } catch (Exception $e) {
        // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}


?>
