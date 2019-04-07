<?php

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$date = date('d/m/Y H:i:s');

	$error = array();
	if ($name == '') {
		$error['name'] = 'name';
	}
	if ($email == '') {
		$error['email'] = 'email';
	}
	if ($message == '') {
		$error['message'] = 'message';
	}

	if (empty($error)) {
		$para = 'david.park@pixcellence.com';
		$titulo = 'Pixcellence Website Contact Form';
		$header = 'from: ' . $email;
		$msg = "Name: $name\n E-mail: $email\n Message: $message\n Date: $date";

		if (mail($para, $titulo, $msg, $header)) {
			echo "success";
		} else {
			echo 'error';

		}
	} else {
		echo json_encode($error);
	}

?>
