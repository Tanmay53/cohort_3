function removeDuplicatesArrays(arr)
{ var i, arr1=[], k=0, count=0
    for( i=0 ; i<arr.length ; i++)
    {
        for(var j=i+1 ; j<arr.length ; j++)
        {
            if(arr[i] == arr[j])
            {
                arr[j] = null
                
            }
        }
    }
    for(i=0 ; i<arr.length ; i++)
    {   
        if(arr[i] != null)
        {
            arr1[k] = arr[i]
            k++
                 
        }
    }
    console.log(arr1)
    return arr1
}

removeDuplicatesArrays([1, 2, 4, 2, 5, 4, 2])