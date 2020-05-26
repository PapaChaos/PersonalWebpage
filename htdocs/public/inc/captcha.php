<?php
session_start();
 
if(isset($_POST['submit'])) {
     
    if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message']) && !empty($_POST['code'])) {
     
        if($_POST['code'] == $_SESSION['rand_code']) {
         
            // send email
            $accept = "Thank you for contacting me.";
         
        } else {
         
            $error = "Please verify that you typed in the correct code.";
         
        }
         
    } else {
     
        $error = "Please fill out the entire form.";
     
    }
 
}
?>