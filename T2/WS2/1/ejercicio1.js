/* Crea una página en la que se muestre:
• Un número aleatorio entre 0 y 1.
• Igual pero entre 100 y 200.
• Pide dos valores al usuario y genera un nº aleatorio entre esos dos valores. */

var aleat = Math.random();
document.write("Un numero aleatorio entre 0 y 1 es: " + aleat + "</br>");

var aleat2 = Math.random() * (200 - 100) + 100;
document.write("Un numero aleatorio entre 100 y 200 es: " + aleat2+"</br>");


var minimo = prompt("Valor mínimo: ");
var maximo = prompt("Valor máximo: ");
aleat3 = Math.random() * (maximo - minimo) * minimo;
document.write("Un numero aleatorio entre los que has introducido es: "+aleat3+"<br>")