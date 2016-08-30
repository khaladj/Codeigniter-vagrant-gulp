<?php defined('BASEPATH') OR exit('No direct script access allowed');?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="<?php echo base_url("assets/css/app.css"); ?>" />
	<script type="text/javascript" src="http://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0"></script>
	<script type="text/javascript" src="<?php echo base_url("assets/js/app.js"); ?>"></script>
	<title>EagleiGPS</title>
</head>

<body class="close-all-panels">
	<div id='printoutPanel'></div>
	<div id='map'></div>

	<header>
			<div class="row">
				<div class="col-xs-2 col-md-1">
						<a class="center" ak-toggle="#assets-panel" data-toggle="tooltip" data-placement="bottom" title="Tracking"><i class="fa fa-2x fa-television" aria-hidden="true"></i></a>
				</div>

				<div class="col-xs-8 col-md-10 center company-title">Client Compnay Name</div>

				<div class="col-xs-2 col-md-1">
					<a class="center"  ak-toggle="#menu-panel" data-toggle="tooltip" data-placement="bottom" title="Menu"><i class="fa fa-2x fa-bars" aria-hidden="true"></i></a>
				</div>
			</div>
	</header>


	<div class="ipanel hidden ipanel-bottom" id="bottom-panel">
		<span class="ipanel-close-button"><i class="fa fa-times" aria-hidden="true"></i></span>
		dsflkjadslfkjasdfasdadsfasdf
		asdfljasdfljasdlfjalksdjf
		asdflkasdflkjasldkfj
		asdf;lkadslkf<br>
		asdf;lkadslkf<br>
	</div>

	<div class="ipanel ipanel-right hidden" id="menu-panel">
		<span class="ipanel-close-button"><i class="fa fa-times" aria-hidden="true"></i></span>
				<ul class="nav nav-pills nav-stacked nav-pills-eaglei">
						<li role="presentation"><a href="#">Dashboard</a></li>
						<li role="presentation" class="active"><a href="#">Map</a></li>
						<li role="presentation"><a href="#">Reports</a></li>
						<li role="presentation"><hr /></li>
						<li role="presentation"><a href="logout">Logout</a></li>
					</ul>
	</div>

	<div class="ipanel ipanel-left hidden" id="assets-panel">
		<span class="ipanel-close-button"><i class="fa fa-times" aria-hidden="true"></i></span>
		Left
	</div>

	<div class="ipanel ipanel-bottom hidden" id="monitor-panel">
			<span class="ipanel-close-button"><i class="fa fa-times" aria-hidden="true"></i></span>
			Left
	</div>

	<div data-phase="0" class="offline-ui offline-ui-up offline-ui-up-5s">
		<div class="offline-ui-content" data-retry-in="" data-retry-in-abbr=""></div>
		<a class="offline-ui-retry"></a>
	</div>

 </body>
</html>
