function findIndexPos(arr , value)
{
    var i=0 , cnt=0
    for(var i=0 ; i<arr.length ; i++)
    {
        if(arr[i] == value)
        {
            cnt = cnt + 1
            return (i)
        }
    }
    if(cnt == 0)
    {
        return (-1)
    }
}

console.log('Index of value is :',findIndexPos([12,4,6,8,2,8] ,8))
//Test case1 : arr = [12,4,6,8,2,8] , value = 8
//Test case1 : arr = [12,4,6,8,2,8] , value = 10