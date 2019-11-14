var arr=[1,3,2,4,6,2,4]
function removeDuplicatesArrays(arr)
{
    removed=[]
    for(var i=0;i<arr.length;i++)
    {
        for(j=i+1;j<arr.length;j++)
        {
            if(arr[i]==arr[j])
            {
                arr[j]=null
            }
        }
        
    }
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]!= null)
        {
            removed.push(arr[i])
        }
    }
    console.log(removed)
}
removeDuplicatesArrays(arr)