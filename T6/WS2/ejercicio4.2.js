var username;
var message;

function obtenerUsuario(){
    options = document.getElementById("opciones");
    username = document.getElementById("username");
    message = document.getElementById("disponible");
    loadDoc();
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            if (username != '') {
                if(myObj.validar == 'Si'){
                    message.innerHTML = 'Nombre de usuario no disponible';
                    options.innerHTML = 'Otras opciones: '+ myObj['nombre'][0] +', '+ myObj['nombre'][1] +', '+ myObj['nombre'][2];
                    message.style.color = 'red';
                } else {
                    message.innerHTML = 'Nombre de usuario disponible';
                    options.style.display = 'none';
                    message.style.color = 'green';
                }
            }
        }
    };
    xhttp.open("GET", "usuario4.2.php?user="+username, true);
    xhttp.send();
}