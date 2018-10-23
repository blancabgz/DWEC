var tablero = [];
var finalizado = false;
var turno1 = true;
var fila;
var columna;

class tresRaya{
	constructor(){
		this.tablero = [];
		this.finalizado = false;
		this.turno1 = true;
		this.fila;
		this.columna;
		this.crearTablero();
		this.rellenarTablero();
		this.imprimeTablero();
		
	}

	crearTablero(){ // creo el array bidimensional
		this.finalizado = false;
		this.turno1 = true;
		for (var i = 0; i < 3; i++) {
			this.tablero[i]= [];
			for (var j = 0; j < 3; j++) {
				this.tablero[i][j] = [];
			}
		}
	}
	rellenarTablero(){
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				this.tablero[i][j] = 0;
			}
		}
	}

	imprimeTablero(){
		document.write('<table width="100" height="100" border="1"');
		for(var i=0;i<3;i++){
			document.write('<tr>');
			for(var j=0;j<3;j++){
				document.write('<td>'+ this.tablero[i][j] +'</td>'); 
			}
			document.write('</tr>');
		}
		document.write('</table>');
	}

	seleccionarCasilla(fila,columna){
		if(this.finalizado == false){
			if(this.tablero[fila][columna] == 0){
				if(this.turno1 == true){
					this.tablero[fila][columna] = "a";
					this.imprimeTablero();
					this.turno1 = false;
				}else{
					this.tablero[fila][columna] = "b";
					this.imprimeTablero();
					this.turno1 = true;
				}
				
			}else{
				alert("Ese hueco esta ocupado");
			}
			this.comprobarSolucion();
		}else{
			alert("La partida ha acabado");
		}
	}

	comprobarSolucion(){
        //Comprobaciones horizontales
        if(this.tablero[0][0] == this.tablero[0][1] && this.tablero[0][0] == this.tablero[0][2]
            && (this.tablero[0][0] == "a" || this.tablero[0][0] == "b")){
            alert("Ha ganado el jugador "+ this.tablero[0][0]);
            this.finalizado = true;
        }
        if(this.tablero[1][0] == this.tablero[1][1] && this.tablero[1][0] == this.tablero[1][2]
            && (this.tablero[1][0] == "a" || this.tablero[1][0] == "b")){
            alert("Ha ganado el jugador "+ this.tablero[1][0]);
            this.finalizado = true;
        }
        if(this.tablero[2][0] == this.tablero[2][1] && this.tablero[2][0] == this.tablero[2][2]
            && (this.tablero[2][0] == "a" || this.tablero[2][0] == "b")){
            alert("Ha ganado el jugador "+ this.tablero[2][0]);
            this.finalizado = true;
        }
        //Comprobaciones verticales
        if(this.tablero[0][0] == this.tablero[1][0] && this.tablero[0][0] == this.tablero[2][0]
            && (this.tablero[0][0] == "a" || this.tablero[0][0] == "b")){
            alert("Ha ganado el jugador "+ this.tablero[0][0]);
            this.finalizado = true;
        }
        if(this.tablero[0][1] == this.tablero[1][1] && this.tablero[1][1] ==this.tablero[2][1]
            && (this.tablero[0][1] == "a" || this.tablero[0][1] == "b")){
            alert("Ha ganado el jugador "+this.tablero[0][1]);
            this.finalizado = true;
        }
        if(this.tablero[0][2] == this.tablero[1][2] && this.tablero[1][2] == this.tablero[2][2]
            && (this.tablero[0][2] == "a" || this.tablero[0][2] == "b")){
            alert("Ha ganado el jugador "+this.tablero[0][2]);
            this.finalizado = true;
        }
        //Comprobaciones diagonales
        if(this.tablero[0][0] == this.tablero[1][1] && this.tablero[1][1] == this.tablero[2][2]
            && (this.tablero[0][0] == "a" || this.tablero[0][0] == "b")){
            alert("Ha ganado el jugador "+ this.tablero[0][0]);
            this.finalizado = true;
        }
        if(this.tablero[0][2] == this.tablero[1][1] && this.tablero[1][1] == this.tablero[2][0]
            && (this.tablero[0][2] == "a" || this.tablero[0][2] == "b")){
            alert("Ha ganado el jugador "+ this.tablero[0][2]);
            this.finalizado = true;
        }
    }
}

var traya = new tresRaya();


