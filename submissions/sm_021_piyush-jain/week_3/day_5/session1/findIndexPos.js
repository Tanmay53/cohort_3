var arr=[1,2,3,4,5,6]
function IndexOf(num,arr)
{
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]==num)
        {
            console.log( i)
        }
    }
}
IndexOf(4,arr);