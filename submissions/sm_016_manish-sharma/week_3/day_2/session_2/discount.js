var total=500
if (total>=300){
      discount= (total * 0.10)
       if (discount<=100){
               final= (total - discount)
               console.log("Final price: "+ final+" , Discount price: "+discount)
        }
     else { final= (total - 100)
        console.log("Final price: "+ final+" , Discount price: 100")
     }
    }
 else {
    console.log("Discount is Invalid. Final price: "+ total)
  
 }
















