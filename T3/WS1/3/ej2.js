var number;
var n1=0;
var n2=0;
var n3=0;
var n4=0;
var n5=0;
var n6=0;

function lanzamiento(){
    number=Math.round(Math.random()*5);
    return(number);
}

function calculo(){
	for(var i=0; i<6000; i++){
		lanzamiento();
		if(number == 1){
			n1++;
		}else if(number == 2){
			n2++;
		}else if(number == 3){
			n3++;
		}else if(number == 4){
			n4++;
		}else if(number == 5){
			n5++;
		}else{
			n6++;
		}
		
	}


	document.write("1: " + n1 + "</br>");
	document.write("2: " + n2 + "</br>");
	document.write("3: " + n3 + "</br>");
	document.write("4: " + n4 + "</br>");
	document.write("5: " + n5 + "</br>");
	document.write("6: " + n6 + "</br>");
}



/* 
	*/