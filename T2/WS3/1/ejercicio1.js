/* Crea las siguientes funciones y ll malas desde á una página XHTML para mostrar
su funcionamiento:
a) invierteCadena(cad_arg): devuelve invertida una cadena dada por el usuario
b) inviertePalabras(cad_arg): devuelve invertidas las palabras contenidas en la
cadena.
c) encuentraPalabraMasLarga(cad_arg): para una cadena de caracteres dada
devuelve la longitud de la palabra más larga en ella contenida
d) fltraPalabrasMasLargas(cad_arg, i): para una cadena de caracteres y un
valor numérico (i), devuelva el número de palabras cuya longitud es mayor a i.
e) cadenaBienFormada(cad_arg): formatea correctamente la cadena pasada,
de tal modo que sólo aparece en mayúscula la primera letra y el resto en
minúscula.

*/ 


invierteCadena("hola");
function invierteCadena(cad_arg){
	var x = cad_arg.length;
	var cadenaInvertida = " ";

	while(x>=0){
		cadenaInvertida += cad_arg.charAt(x);
		x--;
	}
	document.write(cadenaInvertida + "</br>");
}


function inviertePalabras(cad_arg){
	var x = cad_arg.length;
	var cadenaInvertida = "";
	while (x>=0) {
		cadenaInvertida = cadenaInvertida + cad_arg.charAt(x);
		x--;
	}
	document.write(cadenaInvertida + "</br>");
}

 inviertePalabras("Hola mundo");

 function encuentraPalabraMasLarga(cad_arg){
  const words = cad_arg.split(/ +/);
  let longest = words[0];
  words.map((word) => {
    if(word.length > longest.length) {
      longest = word;
    }
  });
  return longest;
}

document.write(encuentraPalabraMasLarga("Italia venció por dos goles a cero a España por la Eurocopa 2016 </br>"));

function filtrarPalabrasMasLargas(cadena,valor){
	cadena = cadena.split(" ");
	var temp = 0;
	var x = 0;
	while(x < cadena.length){
		if(cadena[x].length >= valor){
			temp++;
		}
		x++;
	}
	return temp;
} 

/* no completa */function cadenaBienFormada(cadena){
	return cadena.slice(0,1).toUpperCase() + cadena.slice(1).toLowerCase();
}

