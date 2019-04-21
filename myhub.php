<?php
	session_start();
	if (isset($_SESSION['username'])) {
		$username = $_SESSION['username'];
	} else {
		header("Location: ../login?error=loginfail");
	}
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Coin Clicker</title>
	<link rel="stylesheet" type="text/css" href="assets/css/init.css">
	<link rel="stylesheet" type="text/css" href="assets/css/myhub.css">
	<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
</head>
<body>
	<div id="navBar">
		<p id="usernameDisplay">Welcome <?php echo $username; ?></p>
		<p id="timeDisplay"></p>
		<a id="logoutDisplay" href="assets/inc/logout.inc">Save and exit</a>
	</div>
	<div class="counter">
		<h1 id="counterTxt">0</h1>
		
	</div>
	<div class="cashflow">
		<h1 id="cashflowTxt">Cashflow: 0 coins pr second</h1>
	</div>
	<div class="coin">
		<img id="coinBtn" src="http://pngimg.com/uploads/coin/coin_PNG36871.png">
	</div>
	<div id="businessMenu">
		<ul id="businessList"></ul>
	</div>
	<script type="text/javascript" src="assets/js/myhub.js"></script>
</body>
</html>