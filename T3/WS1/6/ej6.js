var base = parseInt(prompt("Ingrese la base"));
	var potencia = parseInt(prompt("Ingrese la potencia"));

function potenciaRecursiva(base,potencia){
	if(potencia == 0){
		return 1;
	}else{
		return base * potenciaRecursiva(base,potencia -1);
	}
}

document.write("La potencia entre dos numeros es " + potenciaRecursiva(base,potencia));