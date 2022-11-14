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
                        <div>Thanks for your enquiry the product. Our sales team will get back to shortly</div>                        
                    </div>';
					$body_message  .= '<div><table>';
    $body_message  .= '<tr>Name: '.$name.'</tr>';
    $body_message  .= '<tr>Email: '.$email.'</tr>';
    $body_message  .= '<tr>Phone Number: '.$name.'</tr>';
    $body_message  .= '<tr>Company: '.$msg_subject.'</tr>';
    $body_message  .= '<tr>Message: '.$message.'</tr>';
    $body_message  .= '</table></div>';
	  $body_message .= '<div>
                        <br>
                        
                        Regards
                        Phoenix Technology Team
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