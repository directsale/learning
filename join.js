//Write a simple JavaScript program to join all elements of the following array into a string
function join(ar)
{
	console.log(ar.toString());
	console.log(ar.join(","));
	console.log(ar.join("+"));
	console.log(ar.join("*"));
	
}
join(["Red", "Green", "White", "Black"]);