//8. Write a JavaScript program to find the most frequent item of an array
//Ex:a(5times) var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
function mostFrequentItem(){
	var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
	var count=1;
	var most=1;
	var ar=arr1.sort();
	var value;
	var temp=ar[0];
	for( var i=1; i<ar.length;i++)
	{
		if(temp==ar[i])
		{
			count++;
		}
		else
		{	temp=ar[i+1];
			count=1;
		}
		if(most<count)
		{
			most=count;
			value=ar[i];
		}
		
	}
	console.log(most ,value);
}
mostFrequentItem();