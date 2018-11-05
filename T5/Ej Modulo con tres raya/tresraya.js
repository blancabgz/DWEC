export var tablero = [];
export var finalizado = false;
export var turno1 = true;
var a;
var b;
var fila;
var columna;
var hueco;

export class tresRaya{
	constructor(){
		this.a=false; // jugador 1
		this.b=false; // jugador 2
		this.hueco=false; // 
		this.tablero = []; // un array con las posiciones del tablero 
		this.finalizado = false; // el juego ha terminado, cuando esta a falso, el juego sigue funcionando, cuando esta a true, el juego ha terminado porque algun jugador ha ganado
		this.turno1 = true; // variable para manejar los turnos, cuando esta en true le toca al jugador a, cuando es falso, juega el b
		this.fila; // variable para introducir la fila
		this.columna; // variable para introducir la columna
		this.crearTablero(); // funcion que crea el tablero vacio
		this.rellenarTablero(); // se usa para que recorra el tablero y lo rellene con huecos vacios.

		
	}

	crearTablero(){ 
		this.finalizado = false;
		this.turno1 = true;
		for (var i = 0; i < 3; i++) {
			this.tablero[i]= [];
			for (var j = 0; j < 3; j++) {
				this.tablero[i][j] = []; // rellenar el array vacio
			}
		}
	}
	rellenarTablero(){
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				this.tablero[i][j] = 0; // rellena el array con huecos vacios, y se usa el 0 para ello. 
			}
		}
	}


	seleccionarCasilla(fila,columna){
		if(this.finalizado == false){
			if(this.tablero[fila][columna] == 0){
				this.hueco = false;
				if(this.turno1 == true){
					this.tablero[fila][columna] = "a";
					this.turno1 = false;
				}else{
					this.tablero[fila][columna] = "b";
					this.turno1 = true;
				}
				
			}else{
				this.hueco = true;
			}
			this.comprobarSolucion();
		}else{
			console.log("La partida ha acabado");
		}
	}

	comprobarSolucion(){
        //Comprobaciones horizontales
        if(this.tablero[0][0] == this.tablero[0][1] && this.tablero[0][0] == this.tablero[0][2]
            && (this.tablero[0][0] == "a" || this.tablero[0][0] == "b")){
            	if(this.tablero[0][0] == "a"){
            		this.a = true;
            	}else if(this.tablero[0][0] == "b"){
            		this.b=true;
            	}
            	this.finalizado = true;  
        }
        if(this.tablero[1][0] == this.tablero[1][1] && this.tablero[1][0] == this.tablero[1][2]
            && (this.tablero[1][0] == "a" || this.tablero[1][0] == "b")){
            if(this.tablero[1][0] == "a"){
            	this.a = true;
            }else if(this.tablero[1][0] == "b"){
            	this.b=true;
            }
            this.finalizado = true;
        }
        if(this.tablero[2][0] == this.tablero[2][1] && this.tablero[2][0] == this.tablero[2][2]
            && (this.tablero[2][0] == "a" || this.tablero[2][0] == "b")){
            if(this.tablero[2][0] == "a"){
            	this.a = true;
            }else if(this.tablero[2][0] == "b"){
            	this.b=true;
           	}
            this.finalizado = true;
        }
        //Comprobaciones verticales
        if(this.tablero[0][0] == this.tablero[1][0] && this.tablero[0][0] == this.tablero[2][0]
            && (this.tablero[0][0] == "a" || this.tablero[0][0] == "b")){
            if(this.tablero[0][0] == "a"){
            	this.a = true;
            }else if(this.tablero[0][0] == "b"){
            	this.b=true;
            }
            this.finalizado = true;
        }
        if(this.tablero[0][1] == this.tablero[1][1] && this.tablero[0][1] ==this.tablero[2][1]
            && (this.tablero[0][1] == "a" || this.tablero[0][1] == "b")){
            if(this.tablero[0][1] == "a"){
            	this.a = true;
            }else if(this.tablero[0][1] == "b"){
            	this.b=true;
            }
            this.finalizado = true;
        }
        if(this.tablero[0][2] == this.tablero[1][2] && this.tablero[0][2] == this.tablero[2][2]
            && (this.tablero[0][2] == "a" || this.tablero[0][2] == "b")){
            if(this.tablero[0][2] == "a"){
            	this.a = true;
            }else if(this.tablero[0][2] == "b"){
            	this.b=true;
            }
            this.finalizado = true;
        }
        //Comprobaciones diagonales
        if(this.tablero[0][0] == this.tablero[1][1] && this.tablero[0][0] == this.tablero[2][2]
            && (this.tablero[0][0] == "a" || this.tablero[0][0] == "b")){
            if(this.tablero[0][0] == "a"){
            	this.a = true;
            }else if(this.tablero[0][0] == "b"){
            	this.b=true;
            }
            this.finalizado = true;
        }
        if(this.tablero[0][2] == this.tablero[1][1] && this.tablero[0][2] == this.tablero[2][0]
            && (this.tablero[0][2] == "a" || this.tablero[0][2] == "b")){
            if(this.tablero[0][2] == "a"){
            	this.a = true;
            }else if(this.tablero[0][2] == "b"){
            	this.b=true;
            }
            this.finalizado = true;
        }
    }
}

var traya = new tresRaya();


