//Write a JavaScript function to check whether an `input` is an array or not
function is_array(ar){
	return Array.isArray(ar);
}
console.log(is_array('w3resource')); 
console.log(is_array([1, 2, 4, 0]));
