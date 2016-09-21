<?php defined('BASEPATH') OR exit('No direct script access allowed');
require_once "test/bugsnag/guzzle.phar";
require_once "test/bugsnag/bugsnag.phar";
$bugsnag = Bugsnag\Client::make("8d62b3ed903b59de2e75f28386ee40ae");
Bugsnag\Handler::register($bugsnag);?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1,user-scalable=0">
	<link rel="stylesheet" href="<?php echo base_url("assets/css/app.css"); ?>" />
	<script type="text/javascript" src="http://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0"></script>
	<script type="text/javascript" src="<?php echo base_url("assets/js/app.js"); ?>"></script>
	<script src="//d2wy8f7a9ursnm.cloudfront.net/bugsnag-3.min.js" data-apikey="75fcfa068a74b10504d48d69a2b7afd3"></script>
	<title>EagleiGPS</title>
</head>

<body class="close-all-panels">
	<script type="text/javascript">
			window.base_url = <?php echo json_encode(base_url()); ?>;
	</script>
  <?php if (  $navbar ) { ?>
  <header>
    <div class="row">
			<div class="col-md-2 col-xs-2">
						<a href="#" ak-toggle="#assets-panel"><i class="fa fa-ix fa-th"></i></a>
			</div>
			<div class="col-md-8 col-xs-8 company-title center">
					EAGLEiGPS
			</div>
			<div class="col-md-2 col-xs-2 text-right">
				<a href="#" ak-toggle="#menu-panel" ><i class="fa fa-ix fa-bars"></i></a>
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
		<div id="menuScrollArea" class="clusterize-scroll">
			<div id="menuContentArea" class="clusterize-content">
        <ul class="nav nav-pills nav-stacked nav-pills-eaglei">
            <li role="presentation"><a href="#">Dashboard</a></li>
            <li role="presentation" class="<?php echo $map;?>" ><a href="#">Map</a></li>
						<?php if ( $map == "active"){?>
						<li>
							<ul class="nav nav-pills nav-stacked" id="submenu1" role="menu" aria-labelledby="btn-1">
								<li role="presentation"><a class="sub-menu ipanel-close show-zone-toolbar" href="#">Show Zone Toolbar</a></li>
								<li role="presentation"><a class="sub-menu" href="#">Link 2.2</a></li>
								<li role="presentation"><a class="sub-menu" href="#">Link 2.3</a></li>
								<li><hr class='limited'/></li>
							</ul>
						</li>
						<?php }?>
						<li role="presentation"><a href="#">Reports</a></li>
            <li role="presentation"><a href="logout">Logout</a></li>
          </ul>
				</div>
			</div>
  </div>

  <div class="ipanel ipanel-bottom hidden" id="monitor-panel">
      <span class="ipanel-close-button"><i class="fa fa-times" aria-hidden="true"></i></span>
			<h1>Hello</h1>
			<div id='chart'></div>
	</div>
<?php } ?>
