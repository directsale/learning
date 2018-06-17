//tim boi so chung cua 2 so trong day boi so cho truoc(0<= n<=10)
var boiso1=require('./boiso');
function boisochungar(a,b){
	//var a1=boiso1(a);
	var a1=boiso1(b);
	var boisochunga=[];
	for( var n=1; n<=10; n++)
		{
			if(a1[n]%a==0 && a1[n]%b==0)
			{
				boisochunga.push(a1[n]);
			}
		}		
		console.log(boisochunga);
       return boisochunga;
 }
boisochungar(2,4);
