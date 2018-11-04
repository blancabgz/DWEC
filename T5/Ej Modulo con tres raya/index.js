import { tresRaya } from './tresraya.js';

var traya = new tresRaya();

function seleccionarCasilla(event){
	var a = event.target.id[0];
	var b = event.target.id[1];
	traya.seleccionarCasilla(a,b);


	if(traya.tablero[a][b] == "a"){
		document.getElementById(a.toString()+b.toString()).style.background="red";
		document.getElementById(a.toString()+b.toString()).innerHTML = "X";
		document.getElementById(a.toString()+b.toString()).style.textAlign = "center";
		document.getElementById(a.toString()+b.toString()).style.color = "white";
		document.getElementById(a.toString()+b.toString()).style.fontSize = "40px";
		console.log(traya.a);
	
	}
	if(traya.tablero[a][b] == "b"){
		document.getElementById(a.toString()+b.toString()).style.background="black";
		document.getElementById(a.toString()+b.toString()).innerHTML = "O";
		document.getElementById(a.toString()+b.toString()).style.textAlign = "center";
		document.getElementById(a.toString()+b.toString()).style.color = "white";
		document.getElementById(a.toString()+b.toString()).style.fontSize = "40px";
		console.log(traya.b);
	}

	if(traya.a == true){
			document.getElementById("resul").innerHTML = "HA GANADO EL JUGADOR X";
			document.getElementById("resul").style.color = "red";
	}

	if(traya.b == true){
		document.getElementById("resul").innerHTML = "HA GANADO EL JUGADOR O";
		document.getElementById("resul").style.color = "black";
	}

	if(traya.finalizado == true) {
		alert("SE HA TERMINADO EL JUEGO");
	}
	if(traya.hueco == true){
		alert("Ese hueco esta ocupado");
	}

}

function reiniciar(){
	location.reload();
}

for(var i=0;i<3;i++){
	for(var j=0;j<3;j++){
		document.getElementById(i.toString() + j.toString()).onclick=seleccionarCasilla;
	}
}

document.getElementById("boton").onclick = reiniciar;



