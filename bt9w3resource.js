//9. Write a JavaScript program which accept a string as input and swap the case of each character. 
//For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
function swapChar(str){
	var upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var lower='abcdefghijklmnopqrstuvwxyz';
	var rs=[];
	for( var i=0; i<str.length;i++)
	{
		if(upper.indexOf(str[i])!==-1)
		{
			rs.push(str[i].toLowerCase());
		}
		else if(lower.indexOf(str[i])!==-1)
		{
			rs.push(str[i].toUpperCase());
		}
		else{
			rs.push(str[i]);
		}
	}
	console.log(rs.join(''));
}
swapChar('The Quick Brown Fox');