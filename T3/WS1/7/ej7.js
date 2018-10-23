var numero = parseInt(prompt("Introduce un numero"));

function factorial (n) {
    var total = 1; 
    for (i=1; i<=n; i++) {
    	total = total * i; 
    }
    document.write(total);
}

factorial(numero);
