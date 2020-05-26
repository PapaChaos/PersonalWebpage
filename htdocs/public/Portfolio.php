<?php
$pageTitle = 'Portfolio';
$section = null; ?>

<!DOCTYPE html>
<html>
	<head>
		<title><?php echo $pageTitle; ?></title>
		<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
		<link rel="stylesheet" href="css/PortfolioPC.css" type="text/css">
		<link rel="stylesheet" href="css/Portfolio.css" type="text/css">
		<link rel="stylesheet" href="css/Footer.css" type="text/css">
	</head>
	
	<body>
		<div class="page">
		<?php include("inc/navmenu.php"); ?> 
		<div class = "BlogPosts">
			<div class="gameList">
				<div class="col-1">
					<img src="img/FEA512.png" class="appimage" alt="Team Freaking Exhausted Logo">
				</div>
				<div class="col-2">
				<p class="apptitle">Title:</p>
				<p class="apptitle">Trailer:</p>
				<p class="apptitle">Get the game:</p>
				</div>
				<div class="col-3">
					<div class="apptitle"> <u>FE Arcade</u></div>
					<p><a href='https://www.youtube.com/watch?v=M_b5_S6tmX8' target="_blank"><img class="youtubeLink" alt='Get it on Google Play' src='img/YouTube-logo.png'/></a></p>
					<p><a href='https://play.google.com/store/apps/details?id=com.freaking_exhausted.Freaking_Exhausted_Arcade&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target="_blank"><img class="googleplayLink" alt='Get it on Google Play' src='img/google-play-badge.png'/></a></p>
				</div>
			</div>
			<div class="gameList">
				<div class="col-1">
					<img src="img/icon_01.jpg" class="appimage" alt="Team Freaking Exhausted Logo">
				</div>
				<div class="col-2">
				<p class="apptitle">Title:</p>
				<p class="apptitle">Get the game:</p>
				</div>
				<div class="col-3">
					<div class="apptitle"> <u>Death Spring Battlefield</u></div>
					<p><a href='https://mega.nz/#!4ZpGVRwD!qjdbXcjAhl9fO2H7P8ppsUhJV_aJ7ULNLcn7cVmqNcg' target="_blank"><img class="megaLink" alt='Get it on megadownloads' src='img/MegaDownload.png'/></a></p>
				</div>
			</div>
			</div>

		</div>
		<?php include("inc/Footer.php"); ?>
    </body>
</html>