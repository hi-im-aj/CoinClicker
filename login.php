<?php
	session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Coin Clicker: Log In</title>
	<link rel="stylesheet" type="text/css" href="assets/css/init.css">
	<link rel="stylesheet" type="text/css" href="assets/css/navbar.css">
	<link rel="stylesheet" type="text/css" href="assets/css/login.css">
</head>
<body>
	<nav id="navbarHeader">
		<ul>
			<li><a href="index">Home</a></li>
			<li><a href="signup">Create Account</a></li>
		</ul>
	</nav>
	<?php
		if(isset($_GET['signup'])){
			if($_GET['signup'] == "success"){
				echo "<p class='successField'>Account created successfully!</p>";
			}
		} elseif(isset($_GET['error'])){
			if($_GET['error'] == "sqlerror"){
				echo "<p class='errorField'>Server error!</p>";
			} elseif($_GET['error'] == "invalidpass"){
				echo "<p class='errorField'>Incorrect password!</p>";
			} elseif($_GET['error'] == "nouser"){
				echo "<p class='errorField'>User does not exist!</p>";
			}
		}
	?>
	<section id="li-form">
		<form method="post" action="assets/inc/login.inc.php">
			<div id="li-usernameContainer">
				<label for="li-username">Username: </label>
				<input type="text" name="li-username" required>
			</div>
			<div id="li-passContainer">
				<label for="li-password">Password: </label>
				<input type="password" name="li-password" required>
			</div>
			<div id="li-subContainer">
				<button type="submit" name="li-submit">Log In</button>
			</div>
		</form>
	</section>
</body>
</html>