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


  var updateInfo = function(data){
    var memcpu = $(".offline-ui-content");
    memcpu.html( data );

  }
	var isTouchDevice =function(){
	      return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)}

	if(isTouchDevice()===false){
	  	$('[data-toggle="tooltip"]').tooltip();}


  var rows= [];

  for(var i = 1; i <= 1000; i++){
  rows.push({
    values: [i, 'Truck' + i  ],
    markup:   '<div class="unit-list border-bottom container-fluid" uid="'+i+'">' +
                '<div class="row"><div class="col-xs-7 pad-top unit-name">Truck' + i + '</div>'+
                '<div class="col-xs-1"><i class="fa fa-ix fa-arrow-circle-up fa-rotate-45r" aria-hidden="true"></i></div>'+
                '<div class="col-xs-2 show-details"><a href="#" ak-toggle="#monitor-panel"><i class="fa fa-ix fa-bar-chart" aria-hidden="true"></i></a></div>'+
                '</div></a>' +
                '<div class="row">'+
                    '<div class="col-xs-7 small pad-top">2016-09-01 04:21 PM</div>' +
                    '<div class="col-xs-4 small pad-top">'+ Math.floor((Math.random() * 100) + 1)+'  km/h</div>'+
                '</div>' +
              '</div>',
    active: true
  })}

  var contentArea= $("#contentArea");
  if ( typeof(contentArea) != 'undefined' ){
  contentArea.hammer().on('click tap', '.unit-list', function() {
      $(".active-unit").removeClass("active-unit");
      $(this).addClass("active-unit");
  });

  contentArea.hammer().on('mouseover tap', '.unit-list', function() {
      var showdetails = $(".show-details");
      showdetails.hide();
      $(this).find(".show-details").show();
  })}



  var filterRows = function(rows) {
    var results = [];
    for(var i = 0; i < rows.length; i++) {
      if(rows[i].active) results.push(rows[i].markup)
    }
    return results;
  }

  var onUnitSearch = function(search) {
    for(var i = 0 ; i < rows.length ; i++) {
      var suitable = false;
      for(var j = 0 ; j < rows[i].values.length; j++) {
        if(rows[i].values[j].toString().indexOf(untiSearch.value) + 1)
          suitable = true;
      }
      rows[i].active = suitable;
    }
    $(this).next().toggle(Boolean($(this).val()));
    clusterize.update(filterRows(rows));
  }

  if ( typeof(untiSearch) != 'undefined' ){
   untiSearch.oninput = onUnitSearch;
   var searchclear=$(".searchclear");
   searchclear.toggle(Boolean($(".searchinput").val()));
   searchclear.click(function () {
     $(this).prev().val('').focus();
     $(this).hide();
     onUnitSearch();
   })}


 var clusterize = new Clusterize({
    rows:filterRows(rows),
    scrollId: 'scrollArea',
    contentId: 'contentArea'
  });

  $(".show-zone-toolbar").on("click",function(){
      $("#toolbarContainer").removeClass("hidden");
  })


  $(".close-button").on("click",function(){
      $(this).parent().
          addClass('hidden');
  });


	setInterval($.ajax,refreshTime , {
				url: 'map/getdata',
				success: function(data){
					goOnline();
				},
				error: function(xhr){
					goOffline();
				}}/*args passed to $.ajax*/
  )

  setInterval($.ajax,refreshTime * 3, {
        url: 'map/getinfo',
        success: function(data){
          updateInfo(data);
        },
        error: function(xhr){
        }}/*args passed to $.ajax*/
  )
})
