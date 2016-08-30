
/*Loading map*/
$(function (){
  'use strict';
	Microsoft.Maps.loadModule('Microsoft.Maps.Overlays.Style', { callback: function(){
		var map = new Microsoft.Maps.Map(document.getElementById('map'), {
				credentials:'Av9JcLdtfrLzO-_ITZjWvMgjmr-8ChIJ6kl0MBCHvJEWJwq8K2zES5Aue9umfftz',
				center: new Microsoft.Maps.Location(47.5, -122.3),
				customizeOverlays: true,
				showBreadcrumb: false,
				mapTypeId: Microsoft.Maps.MapTypeId.auto,
				enableSearchLogo: false	,
				zoom: 13
		})}})});


/*UI: handle events on the map*/
$(function () {
	'use strict';
	var refreshTime =4000;
	var goOffline = function(){
		var offlineui = $(".offline-ui");
		offlineui.
				removeClass("offline-ui-up").
				addClass("offline-ui-down");
		console.log('offline')}


	var goOnline = function(){
		var offlineui = $(".offline-ui");
		offlineui.
				removeClass("offline-ui-down").
				addClass("offline-ui-up")}



	var isTouchDevice =function(){
	      return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)}

	if(isTouchDevice()===false){
	  	$('[data-toggle="tooltip"]').tooltip()}


	setInterval($.ajax,refreshTime, {
				url: 'map/getdata',
				success: function(data){
					goOnline();
				},
				error: function(xhr){
					goOffline();
				}}/*args passed to $.ajax*/
)})
