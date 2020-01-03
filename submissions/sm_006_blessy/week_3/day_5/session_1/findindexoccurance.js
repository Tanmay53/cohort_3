function indexOccurance(arr,val)
{
    var newarr =[]
    count=arr.length
    for(var i=0; i<arr.length;i++)
    {
        if(arr[i]==val)
        {
       newarr.push(i)
       count--

        }
    }
console.log(newarr)
    
}
console.log(indexOccurance([1,2,2,3,2,4,5,6,5,4],2))