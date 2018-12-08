var usuario;
var resultado;

function obtenerUsuario(){
    usuario = document.getElementById("username").value;
    resultado = document.getElementById("disponible");
    loadDoc();
}

function loadDoc(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { 
            let variable = JSON.parse(this.responseText);
            if (usuario != '') {
                if(variable.validar == 'Si'){
                    resultado.innerHTML = 'Nombre de usuario no disponible';
                    resultado.style.color = 'red';
                } else {
                    resultado.innerHTML = 'Nombre de usuario disponible';
                    resultado.style.color = 'green';
                }
            }
        }
    };
  xhttp.open("GET", "usuario4.1.php?user="+usuario, true);
  xhttp.send();
}