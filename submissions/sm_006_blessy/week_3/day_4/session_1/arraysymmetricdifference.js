arr1 = [1,2,3,4,5]
arr2 = [4,5,6,7,8]
arr = 0;
count= arr2.length;
for(var i=0; i<arr1.length; i++)
{
   for(var j=0;j<arr2.length; j++)
   {
     if(arr1[i]!==arr2[j])
         {
       count--
          }
        if(count==0)
         
        arr.push(arr2[j])
        // console.log(arr)
         
   }
}

      count1=arr1.length;
   for(var l=0; l<arr1.length; l++)
   {
      for(var m=0;m<arr2.length; m++)
      {
   
          if(arr1[l]!==arr2[m])
            {
          count1--
     
            }
   
       }
           if(count1==0)
           {
           arr.push(arr2[m])
           }
       }
console.log(arr)