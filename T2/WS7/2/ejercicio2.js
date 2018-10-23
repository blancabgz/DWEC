var geocoder = 0; 
var infowindow = 0;
function success(position) {


	  var coordenadas = position.coords;


	  console.log('Tu posición actual es:');
	  latitude = coordenadas.latitude;

	  longitude = coordenadas.longitude;

	  map = new google.maps.Map(document.getElementById('map'), {
	        center: {
	            lat: latitude,
	            lng: longitude,
	        },
	        zoom: 18
	    })

	  var marker = {
	    lat: latitude,
	    lng: longitude
	  };

	  addMarker(marker);
	  geocoder = new google.maps.Geocoder;
	  infowindow = new google.maps.InfoWindow;
	 



}


function error(error) {
  console.warn('ERROR(' + error.code + '): ' + error.message);
}

function addMarker(data) {
    new google.maps.Marker({
        position: new google.maps.LatLng(data.lat, data.lng),
        map: map
    });
}

function geocodeLatLng(geocoder, map, infowindow) {
        var input = document.getElementById('latlng').value;
        var latlngStr = input.split(',', 2);
        var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
        geocoder.geocode({'location': latlng}, function(results, status) {
          if (status === 'OK') {
            if (results[0]) {
              map.setZoom(11);
              var marker = new google.maps.Marker({
                position: latlng,
                map: map
              });
              infowindow.setContent(results[0].formatted_address);
              infowindow.open(map, marker);
            } else {
              window.alert('No results found');
            }
          } else {
            window.alert('Geocoder failed due to: ' + status);
          }
        });
}

function initMap()
{

	navigator.geolocation.getCurrentPosition( success, error);
	geocodeLatLng(geocoder, map, infowindow);
}
