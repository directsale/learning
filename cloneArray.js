//Write a JavaScript function to clone an array
function array_Clone(ar){
    var arr1=[];
    for( var i=0; i<ar.length; i++)
    {
       arr1.push(ar[i]);
    }
    //console.log(arr1,"arr1");

    //return arr1;//C1: use loop
    //return Array.from(ar);//C2: use Array.from()
    //return ar.slice(0);//C3: use slice
    //return arr1.concat(ar);//C4: use concat
   // return Object.assign(ar);//C5: use Object.assign()
    return JSON.parse(JSON.stringify(ar));//C6: use JSON.parse(JSON.stringify())
   //Please note that these methods will clone the Array object itself, array contents however are copied by reference and are not deep cloned.

//origAr == clonedArr //returns false
//origAr[0] == clonedArr[0] //returns true
// Only C6 //origAr[0] == clonedArr[0] //returns false
}
console.log(array_Clone([1, 2, 4, 0])); 
console.log(array_Clone([1, 2, [4, 0]]));
var t = [1, 2, [4, 0]];
//var t = [1, new Date(), [4, 0]];
var t1 = array_Clone(t);
t1[2].push(5);
console.log(t[2]==t1[2]);//C6 return false b/c typeof different

