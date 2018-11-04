function cambiacolor(event){
	//if(event.ontouchstart){
		event.target.style.backgroundColor="blue";
	//}
}
function crearTabla(){
	document.write('<table width="10" height="10" border="1" cellspacing="1" cellpadding="10">');
	for(i=0;i<100;i++){
		document.write('<tr>');
		document.write('<td ontouchstart="cambiacolor(event)"></td><td ontouchstart="cambiacolor(event)""> </td>');
		document.write('<td ontouchstart="cambiacolor(event)"></td><td ontouchstart="cambiacolor(event)""> </td>');
		document.write('<td ontouchstart="cambiacolor(event)"></td><td ontouchstart="cambiacolor(event)""> </td>');
		document.write('</tr>');
	}
	document.write('</table>');
}