var inicial = new Date();
var final = new Date();
var tiempo;
inicial = inicial.getTime();
function carga(){
	final = final.getTime();
	tiempo = final - inicial;
	document.getElementById("resultado").innerHTML = "El tiempo transcurrido es " + tiempo;
	
}