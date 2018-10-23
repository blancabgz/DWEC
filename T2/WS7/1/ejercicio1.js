/* Develop a web app in which:
    -Test if geolocation is available.
    -If it's available, show the current position (latitude and longitude).
    -If it isn't available, show a message for each and everyone of the possible errors.
    -Improve your code so you show the position continuously (although the user could be in moving, so it could change)
    -Find the way to meassure the distance traveled.
*/

function calcDistance(p1, p2) { 
    return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2)/1000).toFixed(2); 
} 

function success(position) {
    	var latitude  = position.coords.latitude;
    	var longitude = position.coords.longitude;
        document.write(latitude + " y " + longitude);
}   	

function error() {
    document.write("Unable to retrieve your location");
}

if ("geolocation" in navigator) {
    id = navigator.geolocation.watchPosition(success, error);
    calcDistance(id);

} else {
  document.write("La navegacion no es disponible");
}


