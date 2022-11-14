<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
error_reporting(1);
require 'vendor/autoload.php';
 
if( isset( $_POST ) && !empty( $_POST ) ) {
    extract($_REQUEST);

    $mail = new PHPMailer();

    $subject_title = 'Sales Enquiry';
	
    $body_message .= '<div>
                        <div>Dear '.$name.',</div>
                        <div>Thanks for your enquiry the product. Our sales team will get back to shortly <br></div>                        
                    </div>';
					$body_message  .= '<div><table>';
    $body_message  .= '<tr><td><b>Name:</b><td><td> '.$name.'</td></tr>';
    $body_message  .= '<tr><td><b>Email:</b><td><td> '.$email.'</td></tr>';
    $body_message  .= '<tr><td><b>Phone Number:</b><td><td> '.$phone_number.'</td></tr>';
	$body_message  .= '<tr><td><b>Package:</b><td><td> '.$product.'</td></tr>';
    $body_message  .= '<tr><td><b>Company:</b><td><td> '.$msg_subject.'</td></tr>';
    $body_message  .= '<tr><td><b>Message:</b><td><td> '.$message.'</td></tr>';
    $body_message  .= '</table></div>';
	  $body_message .= '<div>
                        <br>
                        
                        Regards <br>
                        <b>Phoenix Technology Team</b>
                    </div>';
    try {
        $mail->SMTPDebug = false;									
        // $mail->isSMTP();											
        $mail->Host	 = 'sendmail';					
        $mail->SMTPAuth = true;							
        $mail->Username = 'phoenixtechnologies2022@gmail.com';				
        $mail->Password = 'opheheeakfcfieux';						
        $mail->SMTPSecure = 'tls';							
        $mail->Port	 = 587;
    
        $mail->setFrom('phoenixtechnologies2022@gmail.com', 'HelpDesk');		
        $mail->addAddress('phoenixtechnologies2022@gmail.com', 'Phoenix');
        $mail->addBcc($email);
        $mail->isHTML(true);								
        $mail->Subject = $subject_title;
        $mail->Body = $body_message;
        // $mail->AltBody = 'Body in plain text for non-HTML mail clients';
        $mail->send();
        echo "success";
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}


?>