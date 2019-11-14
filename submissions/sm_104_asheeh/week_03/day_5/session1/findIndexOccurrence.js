function findIndexOccurrence(arr , value)
{
    var arr1 = [] , k=0 , cnt = 0
    for(var i=0 ; i<arr.length ; i++)
    {
        if(arr[i] == value)
        {
            arr1[k] = i
            k++
            cnt = cnt + 1
        }
    }
    if(cnt == 0)
    {
        return -1
    }
    else
    {
        return arr1
    }
}
var value
console.log('Occurence of' + value + 'is at :' ,findIndexOccurrence([23, 22, 6, 12, 5, 6, 7, 6] , 6 ))
//Test case1 : arr = [23, 22, 6, 12, 5, 6, 7, 6] , value = 6
//Test case1 : arr = [23, 22, 6, 12, 5, 6, 7, 6] , value = 10