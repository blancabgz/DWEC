function porDefecto(){
  var par = document.getElementsByTagName("p");
  for(var i=0;i<par.length;i++){
  par[i].style.fontSize = "12px";
  }
}
function aumentar(){
  var par = document.getElementsByTagName("p");
  for(var i=0;i<par.length;i++){
  par[i].style.fontSize = "20px";
  }

}
function decrementar(){
  var par = document.getElementsByTagName("p");
  for(var i=0;i<par.length;i++){
  par[i].style.fontSize = "6px";
  }
}