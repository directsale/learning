//kiem tra fai so nguyen to ko
function ngto(a){
  
    if(a%1==0 && a%a==0)
       {
           for( var i=2; i<a/2 ; i++){
               if(a%i==0){
                   return false;
               }
          }
          }

        return true;
 }
ngto(11);