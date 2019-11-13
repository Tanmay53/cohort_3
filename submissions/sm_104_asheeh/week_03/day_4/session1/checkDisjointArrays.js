function checkDisjointArrays(arr1, arr2)
{
    for(var i=0 ; i<arr1.length ; i++)
    {
        for(var j=0 ; j<arr2.length ; j++)
        {
            if(arr1[i] == arr2[j])
            {
                return ('Arrays are not disjoint')
            }
        
        }
    }
    return ('Arrays are disjoint')
    
}
   console.log(checkDisjointArrays( [1, 3, 4, 5, 6], [3, 8, 9]))
    
