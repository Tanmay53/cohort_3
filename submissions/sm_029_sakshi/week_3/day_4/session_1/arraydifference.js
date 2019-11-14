function difference(arr1, arr2) 
{
    var new_arr = []

    for(var i = 0; i < arr1.length; i++) 
    {
        var count=arr2.length
        for(var j = 0; j < arr2.length; j++)
        {
            if(arr1[i] != arr2[j])
            {
                count--
            }
        
        }
        if(count==0)
        {
            new_arr.push(arr1[i])
        }
    }

    return new_arr
}
console.log(difference([2,4,6,5,7],[2,8,6,9,3]))