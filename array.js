//tao array so chan
function mangsochan(){
	var array=[];
	for( var i=0; i<20; i++)
	{
		if(i%2==0)
			array.push(i);
	}
	console.log(array);
}
mangsochan();
// tao array so le
function mangsole(){
	var mang=[];
	for( var i=0; i<20; i++)
	{
		if(i%2!=0)
			mang.push(i);
	}
	console.log(mang);
}
mangsole();
