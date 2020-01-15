    var arr1 = [2,4,6]
    var arr2 = [1,2,3,4,5,6,7,8,9,10]
   count=0;
   for(var i=0; i<arr1.length; i++)
        {
     for(var j=0; j<arr2.length; j++)
         {
       if(arr1[i]==arr2[j])
       {
        count=count+1;
       
        console.log("subset")
       }
         else{

         console.log("not a subset")
        }
            return count;

       }
    }

    
        


