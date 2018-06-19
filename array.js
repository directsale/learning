//tao array so chan
function mangsochan(){
	var array=[];
	for( var i=0; i<20; i++)
	{
		if(i%2==0)
		{
			array.push(i*3);
		}
	}
	
	console.log(array.splice(2,6));
}
mangsochan();
// tao array so le
function mangsole(){
	var mang=[];
	for( var i=0; i<20; i++)
	{
		if(i%2!=0)
			mang.push(i+2);
	}
	console.log(mang.slice(2,6));
}
mangsole();
