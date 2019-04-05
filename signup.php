<?php
	session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Coin Clicker: Create Account</title>
	<link rel="stylesheet" type="text/css" href="assets/css/init.css">
	<link rel="stylesheet" type="text/css" href="assets/css/navbar.css">
	<link rel="stylesheet" type="text/css" href="assets/css/signup.css">
</head>
<body>
	<nav id="navbarHeader">
		<ul>
			<li><a href="index">Home</a></li>
			<li><a href="login">Log In</a></li>
		</ul>
	</nav>
	<?php
		if(isset($_GET['error'])){
			if($_GET['error'] == "invalidemailusername"){
				echo "<p class='errorField'>Invalid username and email!</p>";
			} elseif($_GET['error'] == "invalidemail"){
				echo "<p class='errorField'>Invalid email!</p>";
			} elseif($_GET['error'] == "invalidusername"){
				echo "<p class='errorField'>Invalid username!</p>";
			} elseif($_GET['error'] == "passconfirm"){
				echo "<p class='errorField'>Passwords does not match!</p>";
			} elseif($_GET['error'] == "sqlerror"){
				echo "<p class='errorField'>Server error!</p>";
			} elseif($_GET['error'] == "userexist"){
				echo "<p class='errorField'>Username is already taken!</p>";
			}
		}
	?>
	<section id="ca-form">
		<form method="post" action="assets/inc/signup.inc.php">
			<div id="ca-usernameContainer">
				<label for="ca-username">Username: </label>
				<input type="text" name="ca-username" required>
			</div>
			<div id="ca-emailContainer">
				<label for="ca-email">Email: </label>
				<input type="email" name="ca-email" required>
			</div>
			<div id="ca-passContainer">
				<label for="ca-pass">Password: </label>
				<input type="password" name="ca-password" required>
			</div>
			<div id="ca-pass2Container">
				<label for="ca-pass2">Confirm Password: </label>
				<input type="password" name="ca-password2" required>
			</div>
			<div id="ca-subContainer">
				<button type="submit" name="ca-submit">Create Account</button>
			</div>
		</form>
	</section>
</body>
</html>