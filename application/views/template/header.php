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
  <?php if (  $navbar ) { ?>
    <header>
    <div class="row">
      <div class="col-xs-2 col-md-1">
          <a  href="#"  class="center menu-toggle" ak-toggle="#assets-panel" data-toggle="tooltip" data-placement="bottom" title="Tracking"><i class="fa fa-2x fa-television" aria-hidden="true"></i></a>
      </div>

      <div class="col-xs-8 col-md-10 center company-title"><?php echo $profilename; ?></div>

      <div class="col-xs-2 col-md-1">
        <a href="#" class="center"  ak-toggle="#menu-panel" data-toggle="tooltip" data-placement="bottom" title="Menu"><i class="fa fa-2x fa-bars" aria-hidden="true"></i></a>
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
            <li role="presentation" class="<?php echo $map;?>" ><a href="#">Map</a></li>
            <li role="presentation"><a href="#">Reports</a></li>
            <li role="presentation"><hr /></li>
            <li role="presentation"><a href="logout">Logout</a></li>
          </ul>
  </div>

  <div class="ipanel ipanel-left hidden" id="assets-panel">
    <span class="ipanel-close-button"><i class="fa fa-times" aria-hidden="true"></i></span>
		<div id="scrollArea" class="clusterize-scroll">
		<div id="contentArea" class="clusterize-content">
			<?php
			 for ($i=1;$i<100; $i++)
				print('
				<div class="container-fluid no-padding">
				<div class="row gap-top">
					<div class="col-xs-12  text-primary">
						<h4> Truck '.$i.' </h4>
					</div>
				</div>
				<div class="row ">
						<div class="col-xs-9 small">
									2016-09-01 04:21 PM
						</div>
						<div class="col-xs-2 text-primary block-center">
							<i class="fa fa-2x	 fa-arrow-circle-up fa-rotate-45r" aria-hidden="true"></i>
						</div>
				</div>
				<div class="row">
					<div class="col-xs-1">
						<i class="fa fa-dirction fa-arrow-circle-up fa-rotate-45l" aria-hidden="true"></i>
					</div>
					<div class="col-xs-1">
						<i class="fa fa-dirction fa-arrow-circle-up fa-rotate-45r" aria-hidden="true"></i>
					</div>
					<div class="col-xs-1">
						<i class="fa fa-dirction fa-arrow-circle-up fa-rotate-45r" aria-hidden="true"></i>
					</div>
					<div class="col-xs-1">
						<i class="fa fa-dirction fa-arrow-circle-up fa-rotate-45r" aria-hidden="true"></i>
					</div>
					<div class="col-xs-3">
						&nbsp;
					</div>

					<div class="col-xs-4">
								110 km/h
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 small">
							6 Simpson Rd, Bolton, ON L7E 1G9, Canada
					</div>
				</div>
				</div>');
				?>
			</div>
			</div>
	</div>


  <div class="ipanel ipanel-bottom hidden" id="monitor-panel">
      <span class="ipanel-close-button"><i class="fa fa-times" aria-hidden="true"></i></span>

  </div>
<?php } ?>
