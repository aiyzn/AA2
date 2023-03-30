/*
	for(initialization; condition; iterator){
		code if condition is true
	}
*/

var a = 2

for(let b = 1; b < 4109; b){
	if(b<4108){
		document.write(b + " , ");

	}else{
		document.write(b);
	}
		b = b + a;
		a = a*2-1;
}

