//Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array
function first(ar,n)
{
	if(ar==[])
		return [];
	if(n==null)
		return ar[0];
	if(n<0)
		return [];
	return ar.slice(0,n);
}
console.log(first([7, 9, 0, -2])); 
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
