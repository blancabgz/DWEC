var dd = fechaHoy.getDate();
var mm = fechaHoy.getMonth()+1; 
var yyyy = fechaHoy.getFullYear();


/*fechaHoy = mm+'/'+dd+'/'+yyyy;*/



var fecha85 = new Date();
fecha85.setDate(fechaHoy.getDate() + 85);
document.write(fecha85 + "</br>");


var fecha187 = new Date();
fecha187.setDate(fechaHoy.getDate() - 187);
document.write(fecha187 + "</br>");


var fecha85y2 = new Date();
fecha85y2.setDate(fecha85.getDate() +730);
document.write(fecha85y2 + "</br>");

var fechamen1 = new Date();
fechamen1.setDate(fecha187.getDate()+1);
document.write(fechamen1 + "</br>");

var fechaResto = new Date();
fechaResto.setDate(fecha85.getDate() - fecha187.getDate());
document.write(fechaResto + "</br>");