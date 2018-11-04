var nombre = document.getElementsByName("nombre").value;
var apellidos = document.getElementsByName("apellido").value;
var dni = document.getElementsByName("dni").value;
var telefono = document.getElementsByName("telefono").value;
var email = document.getElementsByName("email").value;
var usuario = document.getElementsByName("usuario").value;

var valnombre = false;
var valapell = false;
var valdni = false;
var valtlf = false;
var valmail = false;
var valuser = false;

function validacionNombre() {
    var exp = new RegExp("^[a-z A-Z]*$");
    if (exp.test(nombre)) {
        console.log(valnombre);
    } else {
        valnombre = false;
    }
}

function validacionApellidos() {
    var exp = new RegExp("^[a-zA-Z ]{0,50}$");
    if (exp.test(apellidos)) {
        valapell = true;
    } else {
        valapell = false;
    }
}

function validacionDni() {
    var exp = new RegExp("^\d{8}[a-zA-Z]$");
    if (exp.test(dni)) {
        valdni = true;
    } else {
        valdni = false;
    }
}

function validacionTelefono() {
    var exp = new RegExp("^\d{8}[a-zA-Z]$");
    if (exp.test(telefono)) {
        valtlf = true;
    } else {
        valtlf = false;
    }
}

function validacionUsuario() {
    var exp = new RegExp("^\d{8}[a-zA-Z]$");
    if (exp.test(usuario)) {
        valuser = true;
    } else {
        valuser = false;
    }
}

function validacionEmail() {
    var exp = new RegExp("^\d{8}[a-zA-Z]$");
    if (exp.test(email)) {
        valmail = true;
    } else {
        valmail = false;
    }
}

