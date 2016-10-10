
$(function () {
	'use strict';

  var rows= [];


// C3 Chart dose not support the hidden objects render
// to have he C3 Chart rendered the hidden calss was removed so this funcion restore the hidden calss  to panels
  var initApp = function(){
    $(".ipanel").addClass("hidden");
  }

  //adding the assets in the rows
  var renderRows = function(rows){
    for(var i = 1; i <= 300; i++){
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
		return rows;
  }


 //adding search input to the unit list
  var filterRows = function(rows) {
    var results = [];
    for(var i = 0; i < rows.length; i++) {
      if(rows[i].active) results.push(rows[i].markup)
    }
    return results;
  }


//Handeling the event of search when user is typing on the serach inout of unit-list
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


  //Show the bar icon on the unit list
  var contentArea= $("#contentArea");
  if ( typeof(contentArea) != 'undefined' ){
      contentArea.hammer().on('click tap', '.unit-list', function() {
            $(".active-unit").removeClass("active-unit");
            $(this).addClass("active-unit");
      });

      contentArea.hammer().on('mouseover touchstart', '.unit-list', function() {
          var showdetails = $(".show-details");
          showdetails.hide();
          $(this).find(".show-details").show();
  })}



  //clear teh serach input by clicking / Tapping on the close btn on search
  if ( typeof(untiSearch) != 'undefined' ){
   untiSearch.oninput = onUnitSearch;
   var searchclear=$(".searchclear");
   searchclear.toggle(Boolean($(".searchinput").val()));
   searchclear.click(function () {
     $(this).prev().val('').focus();
     $(this).hide();
     onUnitSearch();
   })}




   //Handels the event wehen user click on the right menu to show zone toolbar
   $(".show-zone-toolbar").on("click",function(){
       $("#toolbarContainer").removeClass("hidden");
   })
   //Close the zone toolbar when user click on close X
   $(".close-button").on("click",function(){
       $(this).parent().
           addClass('hidden');
   });




//Clusterize plugin allow the application to load unlimited units on sidebar
 var clusterize = new Clusterize({
    rows:filterRows(renderRows(rows)),
    scrollId: 'scrollArea',
    contentId: 'contentArea'
  });



 //init the chart
	var chart = c3.generate({
    bindto: '#chart',
		size:{
			height:200
		},
		oninit:function(){
				$(".ipanel").removeClass("hidden");},
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ]
    }
	});
  chart.unload({ ids: ['data1,data2']});




  //add event listener to the unit-list chart ipanel-close-button
  $("#contentArea").on("click",".fa-bar-chart",function(){
     setTimeout(function(){
			 chart.unload({ ids: ['data1,data2']});
      	chart.load({
      	  columns: [
      	    ['data1', 100, 100, 150, 120, 100, 40, 80],
            ['data2', 50, 20, 10, 40, 15, 25,50, 20, 10, 40, 15, 25,50, 20, 10, 40, 15, 25,50, 20, 10, 40, 15, 25,50, 20, 10, 40, 15, 25,50, 20, 10, 40, 15, 25,50, 20, 10, 40, 15, 25,]
      	  ]
      	});
  },1000)});

  initApp();

});
