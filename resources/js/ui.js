/*UI: handle events on the map*/
$(function () {
	'use strict';

	var refreshTime =4000;

	//prevent double tap zooming on Safari
	$.fn.nodoubletapzoom = function() {
	  $(this).bind('touchstart', function preventZoom(e){
	      var t2 = e.timeStamp;
	      var t1 = $(this).data('lastTouch') || t2;
	      var dt = t2 - t1;
	      var fingers = e.originalEvent.touches.length;
	      $(this).data('lastTouch', t2);
	      if (!dt || dt > 500 || fingers > 1){
	          return; // not double-tap
	      }
	      e.preventDefault(); // double tap - prevent the zoom
	      // also synthesize click events we just swallowed up
	      $(e.target).trigger('click');
	  });
	};


	var initApp=function(){
		$("body").nodoubletapzoom();
	}




	var goOffline = function(){
		var offlineui = $(".offline-ui");
		offlineui.
				removeClass("offline-ui-up").
				addClass("offline-ui-down");}



	var goOnline = function(){
		var offlineui = $(".offline-ui");
		offlineui.
				removeClass("offline-ui-down").
				addClass("offline-ui-up")}



  var updateInfo = function(data){
    var memcpu = $(".offline-ui-content");
    memcpu.html( data );
  }


	var isTouchDevice =function(){
	      return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)}



	if(isTouchDevice()===false){
	  	$('[data-toggle="tooltip"]').tooltip();}



	setInterval($.ajax,refreshTime * 3, {
				url: 'map/getinfo',
				success: function(data){
					updateInfo(data);
				},
				error: function(xhr){
				}}/*args passed to $.ajax*/
	)

	setInterval($.ajax,refreshTime , {
				url: 'map/getdata',
				success: function(data){
					goOnline();
				},
				error: function(xhr){
					goOffline();
				}}/*args passed to $.ajax*/
  );

	initApp();

});
