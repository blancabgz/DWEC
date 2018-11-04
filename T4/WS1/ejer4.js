function color(event) {
    if (event.shiftKey) {
        event.target.style.backgroundColor = "blue"; //si pulsas shift la cuadricula se pone de color azul
    } else if (event.ctrlKey) {
        event.target.style.backgroundColor = ""; // si pulsas control se borra
    } else {
        event.target.style.backgroundColor = "red"; // la cuadricula se pone de color rojo sin pulsar nada
    }
}


function inicio() {
    document.write('<table border="1" height="10" width="10"  cellpadding="60">');
    for (i = 0; i < 100; i++) {
        document.write('<tr>');
        document.write('<td onmouseover="color(event)"></td><td onmouseover="color(event)""> </td>');
        document.write('<td onmouseover="color(event)"></td><td onmouseover="color(event)""> </td>');
        document.write('<td onmouseover="color(event)"></td><td onmouseover="color(event)""> </td>');
        document.write('</tr>');
    }
    document.write('</table>');

}

