//tim boi cua mot so (0<= n<=10)
function boiso(a){
	let boiso;
	let array=[];
       for( var n=0; n<=10 ; n++){
               boiso=a*n;
			   array.push(boiso);
	   }
	     return array;
 }
module.exports=boiso;
