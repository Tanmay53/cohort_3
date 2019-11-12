function intersectionArrays(arr1 , arr2)
{
    var arr3 = [] , k = 0 , cnt = 0
    for(var i=0 ; i<arr1.length ; i++)
    {
        for(var j=0 ; j<arr2.length ; j++)
        {
            if(arr1[i] == arr2[j])
            {
                arr3[k] = arr1[i]
                k++
                cnt = cnt + 1
            }
        }
    }
    if(cnt == 0)
    {
        return ('Both arrays have no common element')
    }
    else
    {
      return arr3
    }
}

console.log('Intersection ofarr1 and arr2 is :',intersectionArrays([1,2,3,4] , [6,3,8,2]))
//Test case1: arr1 = [1,2,3,4] , arr2 = [6,3,8,2]
//Test case2: arr1 = [1,2,3,4] , arr2 = [6,9,8,7]