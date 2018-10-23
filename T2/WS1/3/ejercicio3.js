/* Utilizando setTimeout() creo un contador hacía atrás de 60 segundos. */
var tiem = 60*1000; // pasamos el tiempo a milisegundos 

function time(){
    document.close(); // finaliza la escritura de un documento
    var cuenta = setTimeout(cuentaAtras, 1000);
}
function cuentaAtras(){
    if (tiem > 0){
        tiem -= 1000; // se van restando 1000 lo que equivale 1s
        document.write("Tiempo: "+tiem/1000+"<br>"); // sacar el tiempo en segundos y no en milisegundos, divide /1000
        time();
    }
}
time();