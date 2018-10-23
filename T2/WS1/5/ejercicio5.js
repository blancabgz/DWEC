/*Usando el objeto Date, sus métodos getHours, getMinutes y GetSeconds y
el método setTimeout() crea un reloj que se actualice cada segundo. */
function inicio(){
    document.close();
    var reloj = setTimeout(cuenta, 1000); // cuanta para minutos, segundos y horas
}
function cuenta(){
    document.write(
	    new Date().getHours()+":"+ // obtener la hora actual
	    new Date().getMinutes()+":"+// obtener los minutos actuales
	    new Date().getSeconds()+"<br>" // obtener los segundos actuales
    ); 
    inicio();
}
inicio();