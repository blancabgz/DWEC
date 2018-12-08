 function loadDoc(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
  xhttp.open("GET", "email.xml", true);
  xhttp.send();
}

var listaCorreos = [];
function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = document.getElementById("correo")
    var x = xmlDoc.getElementsByTagName("CORREO");
    for (i = 0; i <x.length; i++) {
        if(listaCorreos[i] == undefined){
            listaCorreos.push(i);
            var row = table.insertRow(0);
            var remite = row.insertCell(0);
            remite.innerHTML = x[i].getElementsByTagName("REMITENTE")[0].childNodes[0].nodeValue; 
            var asunto = row.insertCell(1);
            asunto.innerHTML =  x[i].getElementsByTagName("ASUNTO")[0].childNodes[0].nodeValue;
        }
    }
}

setInterval(loadDoc,2000);































/* 
function peticion(){
	if (window.XMLHttpRequest) {
    	peti = new XMLHttpRequest();
 	} else {
    	peti = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	//Funcion de respuesta
	peti.onreadystatechange = muestraCorreo;
	
	//Realizar peticion HTTP
	peti.open("POST", "email.xml", true);
	peti.send();
}
	
	function muestraCorreo(){
		if (peti.readyState == 4 && peti.status == 200) {
			var xmlDoc = peti.responseXML;
			var listaCorreos = xmlDoc.getElementsByTagName("CORREO");
			var i = 0;
			function espera () {
				setTimeout(function () {
					let caja = document.createElement('div');
					caja.className = 'caja';
					let remitente = document.createElement('b');
					let asunto = document.createElement('div');
					let r = document.createTextNode(listaCorreos[i].getElementsByTagName("REMITENTE")[0].childNodes[0].nodeValue);
					let a = document.createTextNode(listaCorreos[i].getElementsByTagName("ASUNTO")[0].childNodes[0].nodeValue);
					remitente.appendChild(r);
					asunto.appendChild(a);
					document.body.appendChild(caja);
					caja.appendChild(remitente);
					caja.appendChild(asunto);
      				i++;
      				if (i < listaCorreos.length) {
         				espera();
      				}
   				}, 5000);
			}
			espera();
        }
    }
*/ 