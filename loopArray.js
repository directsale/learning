function loopArray(ar){
      var text="<ul>";
       ar.sort();
  // ar.reverse();
    console.log(ar);
    for(var i=0; i<ar.length;i++)
    {
        text+="<li>";
        console.log(ar[i]);
        text+="</li>";
    }
   text+="</ul>";
 
}

loopArray(["xoài","ổi","cam","bưởi"]);