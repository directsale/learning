// length mang 1 chia length mang2: 24/5=4 du 4 nen phai vong ve lay them 1ptu:mang1[0] cho du 5x5=25
function kethop2mang(){
	var mang1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
	var mang2=["a","b","c","d","e"];
	for( var i=0; i<mang1.length-1 ; i=i+5)
	{
		for( var j=0; j<= mang2.length-1; j++){
			
		mang2[j]=mang1.slice(i,i+5);
		i=i+5;
		if(j==mang2.length-1)
			mang2[j].push(mang1[0]);
		console.log("mang2[",j,"]",mang2[j]);
	}
	
	}
}
kethop2mang();