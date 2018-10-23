/* Haciendo uso de un array unidimensional, escribir un script para simular el lanzamiento de 
dos dados. El script debe simular el lanzamiento (aleatorio) de ambos dados. La suma de los 
dos valores debe calcularse a continuación (la suma variará pues de 2 a 12, siendo éstos los 
valores menos frecuentes así como 7 el más frecuente). Haz una simulación con 36.000 
lanzamientos y muestra el número de veces que aparece cada una de las combinaciones */


function dadoarray(){
    var dado = [];
    var resultado = [];
    var cuenta = [];
    cuenta[2] = 0;
    cuenta[3] = 0;
    cuenta[4] = 0;
    cuenta[5] = 0;
    cuenta[6] = 0;
    cuenta[7] = 0;
    cuenta[8] = 0;
    cuenta[9] = 0;
    cuenta[10] = 0;
    cuenta[11] = 0;
    cuenta[12] = 0;

    for (var i=1;i<=36000;i++){
        var dado1 = Math.round(Math.random()*5);
        var dado2 = Math.round(Math.random()*5);
        cuenta[dado1 + dado2]++;
        
    }
    for (var j=2;j<=12;j++){
        resultado.push(cuenta[j]);
    }
    document.write('El 2 sale: '+ resultado[0] + '<br/>');
    document.write('El 3 sale: '+ resultado[1] + '<br/>');
    document.write('El 4 sale: '+ resultado[2] + '<br/>');
    document.write('El 5 sale: '+ resultado[3] + '<br/>');
    document.write('El 6 sale: '+ resultado[4] + '<br/>');
    document.write('El 7 sale: '+ resultado[5] + '<br/>');
    document.write('El 8 sale: '+ resultado[6] + '<br/>');
    document.write('El 9 sale: '+ resultado[7] + '<br/>');
    document.write('El 10 sale: '+ resultado[8] + '<br/>');
    document.write('El 11 sale: '+ resultado[9] + '<br/>');
    document.write('El 12 sale: '+ resultado[10] + '<br/>');

    
}

dadoarray();