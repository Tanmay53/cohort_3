function sumeven(arr)
{
    var sum=0;
    for(var i=0;i<arr.length;i++)
    {
        if( Number(arr[i])%2==0)
        sum=sum + Number(arr[i])
    }
    console.log('sum is ' +sum)
}
arr=['1','2','3','4','5']
sumeven(arr)