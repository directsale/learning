//xuat ra man hinh tu 1-100, neu so la boi so cua 3 thi xuat ra Fizz, la boi so cua 5 thi in Buzz, cua ca 3,5 thi in Fizz Buzz 
function printi(){
var i;
	for( i=1; i<= 100; i++)
	{
		if(i%3==0 && i%5==0)
		{
			console.log("Fizz Buzz");
			continue;
		}
		if(i%3==0)
		{	
			console.log("Fizz");
			continue;
		}
		if(i%5==0)
		{
			console.log("Buzz");
			continue;
		}
		
		else
		 console.log(i);
	}

}
printi();