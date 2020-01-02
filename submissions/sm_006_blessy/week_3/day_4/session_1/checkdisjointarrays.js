var arr1 = [1,3,9,7]
var arr2 = [2,4,6,8,10,12]
count =0;
for(var i=0; i<arr1.length;i++)
{
    for(var j=0; j<arr2.length;j++)
    {
        if(arr1[i]!== arr2[j])
        
        {
            count=count+checkDisjointArrays(arr1,arr2); 
            
            console.log("disjoint arrays")
        }  
        

         else
           
         { 
         
            console.log("joint arrays")
         }
         return count;

    }
    
}
        
    
