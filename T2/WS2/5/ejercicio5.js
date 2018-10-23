/*Crea una web para resolver ecuaciones de segundo grado. Deberá pedir por
tanto los coeficientes y mostrar las soluciones posibles. */

var a = prompt("Coeficiente de x^2: ");
a = parseFloat(a);
var b = prompt("Coeficiente de x: ");
b = parseFloat(b);
var c = prompt("Coeficiente: ");
c = parseFloat(c);

disc=b*b-4*a*c;
var resultado1 = parseFloat((-b-Math.sqrt(disc))/(2*a));
var resultado2 = parseFloat((-b+Math.sqrt(disc))/(2*a));

document.write("X es igual a: "+resultado1+" y "+resultado2);
