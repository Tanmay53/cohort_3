function unionArrays(arr1, arr2)
{   
    var k = arr1.length , cnt = 0
    for(var j=0 ; j<arr2.length ; j++ )
    {
        for(var i=0 ; i<arr1.length ; i++)
        {
            if(arr2[j] != arr1[i])
            {
              cnt = cnt + 1
            }
            else
            {
                break;
            }

        }
        if(cnt == arr1.length)
        {
        arr1[k] = arr2[j]
        k++
        
        }
        cnt = 0
    }
    return arr1
    
}

console.log('Union of arr1 and arr2 is :', (unionArrays([1,2,3,4] , [5,6,2,4])))
//Test case1 : arr1 = [1,2,3,4] , arr2 = [5,6,3,4]
//Test case1 : arr1 = [1,2,3,4] , arr2 = [5,6,3,4]
