//Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.
// For example if you accept 025468 the output should be 0-254-6-8
function acceptNum(n){
	
	var acceptNum=[n[0]];
	
	for( var i=0; i<n.length;i++)
	{
		if((n[i]%2===0) && (n[i+1]%2===0))
			acceptNum.push("-",n[i+1]);
		else
			acceptNum.push(n[i+1]);
		
	}
	console.log(acceptNum.join(""));
}
acceptNum("025468");
