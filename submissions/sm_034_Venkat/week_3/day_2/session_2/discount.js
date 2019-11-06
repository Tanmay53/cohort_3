var total=300;
var disc
if (total>=300){
       disc= total*0.1
       if (disc<100)
       {
          total=total-disc
       }
         else
           {
             disc=100
             total=total-disc
           }
  console.log('final price:'+total,'discount price:'+disc)
                }
    
   else{
     console.log('discount is invalid.final price:'+total)
       }
       
     