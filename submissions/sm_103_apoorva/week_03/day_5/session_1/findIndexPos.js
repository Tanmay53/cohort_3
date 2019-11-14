var arr =[1,4,3,6,5]
function findIndexPos(arr,num)
{
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]==num)
        {
            return i
        }
    }
    return -1

}
console.log(findIndexPos(arr,2))