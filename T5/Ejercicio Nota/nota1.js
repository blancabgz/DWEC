var arrayNotas = [];
class Nota{
    constructor(titulo,texto){
        this.titulo = titulo;
        this.texto = texto;
        this.fecha = new Date();
    }
}

function crearNota(){
    var tituloNota = document.getElementById("tituloN").value;
    var textoNota = document.getElementById("textoN").value;
    arrayNotas.push(new Nota(tituloNota,textoNota));
   
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