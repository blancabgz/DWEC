checkCookie();

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, minutos) {
    var d = new Date();
    d.setTime(d.getTime() + (minutos*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";";
    checkCookie();
}

function checkCookie(){
    if(getCookie("username") != ""){
        if(getCookie("letra") != ""){
            document.body.style.fontSize = getCookie("letra");
        }
        if(getCookie("fondo") != ""){
            document.body.style.backgroundColor = getCookie("fondo");
        }
        if(getCookie("parrafo") != ""){
            document.body.style.color = getCookie("parrafo");
        }
        document.getElementById("hola").innerHTML = "Hola  "+getCookie("username");
    }else{
        var txt;
        var username = prompt("Introduce tu nombre de nombre usuario:", "");
        if (username == null || username == "") {
            alert("Usuario no valido");
        } else {
            setCookie("username", username, 5);
        }
    }
}

function cambiarLetraFondo(){
    var fondo = document.getElementById("fondo").value;
    var letra = document.getElementById("letra").value;
    var parrafo = document.getElementById("parrafo").value;
    if(fondo != ""){
        setCookie("fondo",fondo,5);
        document.getElementById("hola").style.backgroundColor = fondo;
    }
    if(letra != ""){
        setCookie("letra",letra,5);
        document.getElementById("hola").style.fontSize = letra;
    }
    if(parrafo != ""){
        setCookie("parrafo",parrafo,5);
        document.getElementById("hola").style.color = parrafo;
    }
}

function borrarCookies(){
    document.cookie = "usuario=;expires="+new Date();
    document.cookie = "fondo=;expires="+new Date();
    document.cookie = "letra=;expires="+new Date();
    document.cookie = "parrafo=;expires="+new Date();
    checkCookie();
}