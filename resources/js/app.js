
function getMap(){
	Microsoft.Maps.loadModule('Microsoft.Maps.Overlays.Style', { callback: loadMap  });
}

function loadMap(){
	map = new Microsoft.Maps.Map(document.getElementById('map'), {
			credentials:'Av9JcLdtfrLzO-_ITZjWvMgjmr-8ChIJ6kl0MBCHvJEWJwq8K2zES5Aue9umfftz',
			center: new Microsoft.Maps.Location(47.5, -122.3),
			customizeOverlays: true,
			showBreadcrumb: false,
			mapTypeId: Microsoft.Maps.MapTypeId.auto,
			enableSearchLogo: false	,
			zoom: 13
	});
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  getMap();
})
