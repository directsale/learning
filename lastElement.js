// Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array
function last(arr,n){
	var ar=[];
	if(arr==[])
		return [];
	if(n==null)
		return arr[arr.length-1];
	if(n<0)
		return [];
	else{
		arr.reverse();
	 ar=arr.slice(0,n);
	 ar.reverse();
	 return ar;
	}
}
function last1(arr,n){
	if(n ==undefined) return arr[arr.length-1];
	return arr.slice(arr.length-n>0? arr.length -n : 0);
}
console.log(last1([7, 9, 0, -2])); 
console.log(last1([7, 9, 0, -2],3)); 
console.log(last1([7, 9, 0, -2],6));
console.log(last1([],3));
