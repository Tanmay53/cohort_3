function findIndexpos(arr,val)
{
    count=arr.length
for(var i=0; i<arr.length; i++)
    {
      if(arr[i]==val)

       {
        console.log(i)
       return i
       }


    }

}

console.log(findIndexpos([1,2,3,2,1,4,4,5,6,1,4],4))