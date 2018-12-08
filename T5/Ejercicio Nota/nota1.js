var arrayNotas = [];
class Nota{
    constructor(titulo,texto){
        this.titulo = titulo;
        this.texto = texto;
        this.fecha = new Date();
        this.hora = new Date().getHours() + ":" + new Date().getMinutes();
        this.timestamp = new Date().getTime();
    }
}

if (localStorage.getItem("array") != null){
    arrayNotas = JSON.parse(localStorage.getItem("array"));
    todasNotas(arrayNotas);
}

function todasNotas(notas){
    localStorage.setItem("array", JSON.stringify(arrayNotas));
    while (panel.firstChild) {
        panel.removeChild(panel.firstChild);
    }
    for (var i=0;i<notas.length;i++){
        panel.appendChild(vista(notas[i]));
    }
}

function crearNota(){
    var tituloNota = document.getElementById("tituloN").value;
    var textoNota = document.getElementById("textoN").value;
    arrayNotas.push(new Nota(tituloNota,textoNota));
    localStorage.setItem("array", JSON.stringify(arrayNotas));
    main();
}

function borrarNota(){
    var index = document.getElementById("nborrar").value;
    if (index > -1) {
        arrayNotas.splice(index, 1);
    }
    main();
}

function vista(nota){
    var divRaiz = document.createElement("div");
    divRaiz.setAttribute("class","nota");
    var h1 = document.createElement("h1");
    h1.innerHTML = nota.titulo;
    var parrafo = document.createElement("h2");
    parrafo.innerHTML = nota.texto;
    var hora = document.createElement("p");
    hora.innerHTML = nota.fecha;

    divRaiz.appendChild(h1);
    divRaiz.appendChild(parrafo);
    divRaiz.appendChild(hora);

    return divRaiz;
}


function main(){
    var panel = document.getElementById("panelNotas");
    while(panel.firstChild){
        panel.removeChild(panel.firstChild);
    }
    for(var i=0; i<arrayNotas.length;i++){  
        panel.appendChild( vista(arrayNotas[i]));
        
    }

}