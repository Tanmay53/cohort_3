function arrayDifference(arr1 , arr2)
{
    var arr3 = [] , k=0 , count = 0
    for(var i=0 ; i<arr1.length ; i++)
    {
        for(var j=0 ; j<arr2.length ; j++)
        {
            if(arr1[i] !=arr2[j])
            {
                count = count + 1
            }
            else
            {
                break;
            }
        }
        if(count == arr2.length)
        {
          arr3[k] = arr1[i]
          k++
        }
        count = 0
    }
    return arr3
}

console.log('Difference of array is : ',arrayDifference([1,2,3,4,5] , [6,9,4,8,3]))

//test case1 :arr1 = [1,2,3,4,5] , arr2 = [6,9,4,8,3]
//test case1 :arr1 = [1,2,3,4,5] , arr2 = [6,9,8]