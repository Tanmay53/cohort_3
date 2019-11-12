function arraySymmetricDifference (arr1 , arr2)
{
    var arr3 = [] , k = 0 
    for(var i=0 ; i<arr1.length ; i++)
    {
        for(var j=0 ; j<arr2.length ; j++)
        {
            if(arr1[i] == arr2[j])
            {
                arr1[i] = null
                arr2[j] = null
            }
        }
    }
    for(var i=0 ; i<arr1.length ; i++)
    {
        if(arr1[i] != null)
        {
            arr3[k] = arr1[i]
            k++
        }
    }
    for(var j=0 ; j<arr2.length ; j++)
    {
        if(arr2[j] != null)
        {
            arr3[k] = arr2[j]
            k++
        }
    }
    return arr3
}

console.log('Symmetric difference of arr1 and arr2 is : ', arraySymmetricDifference([4,7,9,10,34,6] , [1,3,5,7,8,9]) )
//test case1 : arr1 = [4,7,9,10,34,6] , arr2 =  [1,3,5,7,8,9]