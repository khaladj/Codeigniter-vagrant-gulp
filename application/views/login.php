	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="<?php echo base_url("assets/css/app.css"); ?>" />
		<script type="text/javascript" src="http://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0"></script>
		<script type="text/javascript" src="<?php echo base_url("assets/js/app.js"); ?>"></script>
		<title>EagleiGPS</title>
	</head>
	<body>
		<div class="container nav-pills-eaglei">
			<div class="row">
				<div class="col-sm-6 col-md-4 col-md-offset-4 col-sm-offset-3">
					<div class="panel panel-default">
						<div class="panel-heading">
							<strong> Sign in to continue</strong>
						</div>
						<div class="panel-body">
					    <?php echo form_open('verifylogin'); ?>
								<fieldset>
									<div class="row">
										<div class="center-block">
											<img class="profile-img"
												src="../assets/images/logo.png" alt="">
										</div>
									</div>
									<div class="row">
										<div class="col-sm-12 col-md-10  col-md-offset-1 ">
											<div class="form-group">
												<span class="text-danger"><?php echo validation_errors(); ?></span>
												<div class="input-group">
													<span class="input-group-addon">
														<i class="glyphicon glyphicon-user"></i>
													</span>
													<input class="form-control" placeholder="Username" name="username" type="text" autofocus>
												</div>
											</div>
											<div class="form-group">
												<div class="input-group">
													<span class="input-group-addon">
														<i class="glyphicon glyphicon-lock"></i>
													</span>
													<input class="form-control" placeholder="Password" name="password" type="password" value="">
												</div>
											</div>
											<div class="checkbox">
											 <label>
												 <input type="checkbox" value="remember-me"> Remember me
											 </label>
										 </div>
											<div class="form-group">
												<input type="submit" class="btn btn-lg btn-primary btn-block" value="Sign in">
											</div>
											<a href="#" class="forgot-password">
							 								Forgot your password?
					 						</a>
										</div>
									</div>
								</fieldset>
							</form>
						</div>
						<div class="panel-footer ">
									Contact us : support@eagleigps.com
						</div>
	                </div>
				</div>
			</div>
		</div>
	 </body>
	</html>
