<?php
$pageTitle = 'Blog';
$section = null; ?>

<!DOCTYPE html>
<html>
	<head>
		<title><?php echo $pageTitle; ?></title>
		<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
		<link rel="stylesheet" href="css/PortfolioPC.css" type="text/css">
		<link rel="stylesheet" href="css/Blog.css" type="text/css">
		<link rel="stylesheet" href="css/Footer.css" type="text/css">
	</head>
	
	<body>
		<div class="page">
			<div id="webgl"></div>
			<script src="/inc/stats.min.js"></script>
			<?php include("inc/navmenu.php"); ?>
			<?php include("inc/quotes.php"); ?> 
			<script src="/inc/dat.gui.min.js"></script>
			<script src="/inc/three.min.js"></script>
			<!-- <script src="/inc/OrbitControls.js"></script>--> <!-- for mouse control -->
			<script src="/inc/FBXLoader.js"></script>
			<script src="/inc/background.js"></script>
			<div class="BlogPosts">
				<div class="BlogPost">
					<h1>Application, Game and Full Stack Developer</h1>
					<h3>A lover of developing and number crunching.</h3>
					<p>Frequent dabbler of C, C++ C# and Java.</p>
					<p>Also, does some web development in HTML, CSS, PHP, SQL and JavaScript.</p>
					<br><br><br><br><br><br><br><br><br><br><br>
				</div>
				
				<div class="BlogPost">
					<h1>Application, Game and Full Stack Developer</h1>
					<h3>A lover of developing and number crunching.</h3>
					<p>Frequent dabbler of C, C++ C# and Java.</p>
					<p>Also, does some web development in HTML, CSS, PHP, SQL and JavaScript.</p>
					<br><br><br><br><br><br><br><br><br><br><br>
				</div>
				
				<div class="BlogPost">
					<h1>Application, Game and Full Stack Developer</h1>
					<h3>A lover of developing and number crunching.</h3>
					<p>Frequent dabbler of C, C++ C# and Java.</p>
					<p>Also, does some web development in HTML, CSS, PHP, SQL and JavaScript.</p>
					<br><br><br><br><br><br><br><br><br><br><br>
				</div>
				<div class="BlogPost">
					<h1>Application, Game and Full Stack Developer</h1>
					<h3>A lover of developing and number crunching.</h3>
					<p>Frequent dabbler of C, C++ C# and Java.</p>
					<p>Also, does some web development in HTML, CSS, PHP, SQL and JavaScript.</p>
					<br><br><br><br><br><br><br><br><br><br><br>
				</div>
			</div>

		</div>
					<?php include("inc/Footer.php"); ?>
    </body>
</html>
