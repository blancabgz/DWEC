import { tresRaya } from './tresraya.js';

var traya = new tresRaya();

function seleccionarCasilla(event){ // funcion para seleccionar una casilla según pulses en una casilla y en una fila
	var a = event.target.id[0]; // obtiene del texto que le pases que seria el id, en este caso la fila que se encuentra en la posicion 0
	var b = event.target.id[1]; //obtiene del texto que le pases que seria el id, en este caso la columna que se encuentra en la posicion 1
	traya.seleccionarCasilla(a,b); // llamas a la funcion con la fila y columna obtenida


	if(traya.tablero[a][b] == "a"){ // pone una cruz en el espacio donde pulse el jugador 1
		document.getElementById(a.toString()+b.toString()).style.background="red";
		document.getElementById(a.toString()+b.toString()).innerHTML = "X";
		document.getElementById(a.toString()+b.toString()).style.textAlign = "center";
		document.getElementById(a.toString()+b.toString()).style.color = "white";
		document.getElementById(a.toString()+b.toString()).style.fontSize = "40px";
		console.log(traya.a);
	
	}
	if(traya.tablero[a][b] == "b"){ // pone un circulo cuando sea el turno del jugador B
		document.getElementById(a.toString()+b.toString()).style.background="black";
		document.getElementById(a.toString()+b.toString()).innerHTML = "O";
		document.getElementById(a.toString()+b.toString()).style.textAlign = "center";
		document.getElementById(a.toString()+b.toString()).style.color = "white";
		document.getElementById(a.toString()+b.toString()).style.fontSize = "40px";
		console.log(traya.b);
	}

	if(traya.a == true){ // el jugador a ha ganado
			document.getElementById("resul").innerHTML = "HA GANADO EL JUGADOR X";
			document.getElementById("resul").style.color = "red";
	}

	if(traya.b == true){ //el jugador b ha ganado
		document.getElementById("resul").innerHTML = "HA GANADO EL JUGADOR O";
		document.getElementById("resul").style.color = "black";
	}

	if(traya.finalizado == true) { // si ha finalizado la partida (true) o no (false) que va comprobando a medida que avanza el juego
		alert("SE HA TERMINADO EL JUEGO");
	}
	if(traya.hueco == true){
		alert("Ese hueco esta ocupado");
	}

}

function reiniciar(){ // boton reiniciar el juego y comenzar de nuevo
	location.reload();
}

for(var i=0;i<3;i++){ // recorrer todas las casillas cada vez que haces click para averiguar cual has pulsado 
	for(var j=0;j<3;j++){
		document.getElementById(i.toString() + j.toString()).onclick=seleccionarCasilla;
	}
}

document.getElementById("boton").onclick = reiniciar; // usar el boton para volver a iniciar el juego



