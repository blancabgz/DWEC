function loadDoc(){
    myFunction();
  
}


var listaCorreos = [];

function myFunction() {
    var xhttp;
	xhttp = new XMLHttpRequest();
    var table = document.getElementById("correo");
	
	xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { 
            let variable = JSON.parse(this.responseText);
            for(var i=0;i<variable.correo.length; i++){
                if(listaCorreos[i] == undefined){
                    listaCorreos.push(i);
					var row = table.insertRow(0);
					var remite = row.insertCell(0);
					remite.innerHTML = variable.correo[i].remitente; 
					var asunto = row.insertCell(1);
					asunto.innerHTML =  variable.correo[i].asunto;
                }
            }
        }
    };
    
    xhttp.open("GET", "email.json", true);
    xhttp.send();
}

setInterval(loadDoc,2000);