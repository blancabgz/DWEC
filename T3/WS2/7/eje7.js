/* Escribe las funciones para llevar a cabo las siguientes operaciones para un array de una 
dimensión:
a) Establecer los 10 elementos del array a cero.
b) Añadir 1 a cada uno de los elementos del array.
c) Muestra los valores del array separados por espacios.
*/ 

var arrayacero = [1,2,3,4,5,6,7,8,9,10];

function pasarACero(array){
	for(var i = 0; i<array.length; i++){
		array[i] = 0;
	}
}

pasarACero(arrayacero);


var arraysuma1 = [1,2,3,4,5,6,7,8,9,10];

function anadirUno(array){
	for(var i = 0; i<array.length; i++){
		array[i] = array[i]+1;
	}
}

anadirUno(arraysuma1);


var arrayespacio = [1,2,3,4,5,6,7,8,9,10];

function mostrarconespacio(array){
	for(var i = 0; i<array.length; i++){
		document.write(array[i] + " ");
	}
}

mostrarconespacio(arrayespacio);