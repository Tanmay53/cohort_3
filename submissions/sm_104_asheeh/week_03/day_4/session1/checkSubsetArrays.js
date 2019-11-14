function checkSubsetArrays(arr1, arr2)
{
    if(arr1.length < arr2.length)
    {
    var count = 0
    for(var i=0 ; i<arr1.length ; i++)
    {
        for(var j=0 ; j<arr2.length ; j++)
        {
          if(arr1[i] == arr2[j])
          {
            count = count + 1
            break;
          }
        }  
    }
    if(count == arr1.length)
    {
        return ('arr1 is subset of arr2')
    }
    else
    {
        return ('arr1 is not a subset of arr2')
    }
    }
    else
    {
        return ('arr1 is not a subset of arr2')
    }
    
}

console.log(checkSubsetArrays([1, 3, 6], [1, 2, 3, 5, 6, 7]))