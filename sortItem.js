// 7.Write a JavaScript program to sort the items of an array
//the sort() function sorts values as strings.
function sortItem1(){
	var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];
	console.log(arr1.sort());
	}
	//Use the same trick to sort an array ascending
function sortItem2(){
	var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];
	console.log(arr1.sort(function(a,b) {return a-b;}));
	}
	//Use the same trick to sort an array descending
function sortItem3(){
	var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];
		console.log(arr1.sort(function(a,b) {return b-a;}));
}
sortItem1();
sortItem2();
sortItem3();