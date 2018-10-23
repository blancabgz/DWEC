/* Realiza lo mismo para la información de la pantalla utilizada por el cliente */

document.write("<table border='1' cellspacing='2'>");
document.write("<tr>");
document.write("<td>Resolución de pantalla</td>");
document.write("<td>"+screen.width + "*" + screen.height+"</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>Area visible disponible</td>");
document.write("<td>"+ screen.availWidth + "*" + screen.availHeight+"</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>Profundidad de color</td>");
document.write("<td>"+ screen.colorDepth+" bits</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>Resolución de color</td>");
document.write("<td>"+screen.pixelDepth+" bits </td>");
document.write("</tr>");


