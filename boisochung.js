//tim boi so chung cua 2 so trong n so(0<= n<=100)
function boisochung(a,b){
	for( var n=1; n<=100; n++)
		{
			if(n%a==0 && n%b==0)
			{
					console.log(n);
				
			}
		}		
       return n;
 }
boisochung(2,5);

 function bscnn(a,b){
	 for(var n=1; n<= 100; n++)
	 {
		 if(n%a==0&& n%b==0)
		 { 
			console.log("bscnn cua ",a,b, "la ",n);
			return;
		 }
	 }
 }
 bscnn(2,3);
 