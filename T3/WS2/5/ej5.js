/* Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1
al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén 
juntos los elementos pares y los impares. Después, volver a mostrar el array. */ 


function EvenOdd(){
	var array1 = [];
	for(var i=0; i<100; i++){
		array1[i] = Math.round(Math.random()*1000+1);
	}
	document.write("Even Elements: ");
    array1.forEach(function(element) {
        if(element % 2 == 0){
            document.write(element + " ");
        }
    }

    );
    document.write("</br>");
    document.write("Odd Elements: ");

    array1.forEach(function(element) {
        if(element % 2 != 0){
            document.write(element + " ");
        }
    }

    );
} 

EvenOdd();



