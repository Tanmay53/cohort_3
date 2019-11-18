function checkElementBefore(arr)
{
    newarray=arr.map(function(element,index,arr)
    {
          if(arr[index-1]>arr[index])
            {
                return -1
            }
            else
            {
              return 1
            }
        
    })
    return newarray
}
console.log(checkElementBefore([2,4,5,3,7]))