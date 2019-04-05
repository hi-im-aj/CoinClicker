<?php
	session_start();
	if (isset($_SESSION['username'])) {
		$avatar = $_SESSION['avatar'];
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
	<div class="counter">
		<h1 id="counterTxt">0</h1>
		
	</div>
	<div class="cashflow">
		<h1 id="cashflowTxt">Cashflow: 0 coins pr second</h1>
	</div>
	<div class="coin">
		<button id="coinBtn"><img src="http://pngimg.com/uploads/coin/coin_PNG36871.png"></button>
	</div>
</body>
<script type="text/javascript" src="assets/js/myhub.js"></script>
</html>