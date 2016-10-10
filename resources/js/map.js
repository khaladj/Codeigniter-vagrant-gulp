

/*Loading map*/
$(function (){
   'use strict';


   var shapeLayer = new Microsoft.Maps.EntityCollection();
   var edittingLayer = new Microsoft.Maps.EntityCollection();

    var map = new Microsoft.Maps.Map(document.getElementById("map"), {
       credentials:'Av9JcLdtfrLzO-_ITZjWvMgjmr-8ChIJ6kl0MBCHvJEWJwq8K2zES5Aue9umfftz',
       center: new Microsoft.Maps.Location(47.5, -122.3),
       customizeOverlays: true,
       showBreadcrumb: false,
       mapTypeId: Microsoft.Maps.MapTypeId.auto,
       enableSearchLogo: false	,
       showDashboard: false,
       zoom: 10
    });


    $(".zoom-in").on("click",function(){
      map.setView({zoom:map.getZoom()+1});
    });


    $(".zoom-out").on("click",function(){
        var cz = map.getZoom();
        if ( cz > 4 )
          map.setView({zoom:map.getZoom()-1});
    });

    document.getElementById("map").addEventListener("contextmenu", function(e){
    e.preventDefault();
    }, false);

    Microsoft.Maps.loadModule('Microsoft.Maps.Traffic', {});
    Microsoft.Maps.registerModule("WKTModule", "http://localhost:3000/my.eagleigps.com.local/assets/js/WKTModule.min.js");
    Microsoft.Maps.loadModule("WKTModule");

    //Register and load the Drawing Tools Module
    Microsoft.Maps.registerModule("DrawingToolsModule", "http://localhost:3000/my.eagleigps.com.local/assets/js/geofence.js");

    Microsoft.Maps.loadModule("DrawingToolsModule", {
        callback: function () {
            var drawingTools = new DrawingTools.DrawingManager(map,shapeLayer,edittingLayer, {
                toolbarContainer: document.getElementById('toolbarContainer'),
                events: {
                    drawingEnded: function (s) {
                        var wkt = WKTModule.Write(s);
                        console.log(s);
                    },
                    drawingChanged: function (s) {
                        var wkt = WKTModule.Write(s);
                        console.log(wkt);
                    },
                    drawingSelected:function(shape){
                        var locs = shape.getLocations();
                        console.log(shape);
                    },

                    drawingErased : function(s){
                        var wkt = WKTModule.Write(s);
                        console.log(wkt);
                    }
                }
            });
        }
    });
});
