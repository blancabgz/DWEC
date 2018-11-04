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
		this.a=false;
		this.b=false;
		this.hueco=false;
		this.tablero = [];
		this.finalizado = false;
		this.turno1 = true;
		this.fila;
		this.columna;
		this.crearTablero();
		this.rellenarTablero();

		
	}

	crearTablero(){ 
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


