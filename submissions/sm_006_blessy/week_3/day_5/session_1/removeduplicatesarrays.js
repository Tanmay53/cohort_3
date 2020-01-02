function duplicatesarray(arr)
{
    
 // var arr = [1,2,3,4,4,5,5,6,7] 
  var arr2=[]
   count = arr.length;
  for(var i=0;i<arr.length;i++)
  {
      if(arr[i] !== arr[i-1])
      {
       count--
      arr2.push(arr[i])
      }

    }
    console.log(arr2)

}
duplicatesarray([1,2,2,3,3,4,5,6,6,6,6,7,7,7,8])