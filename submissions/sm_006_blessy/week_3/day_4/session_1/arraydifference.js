 arr1 = [1,2,3,4,5,6]
 arr2 = [4,5,6,7,8,9]
 arr = []

for(var i=0; i<arr1.length; i++)
{
    count=arr2.length
    for(var j=0; j<arr2.length; j++)
    {
       
        if(arr1[i]!==arr2[j])
        {
            count--
        }
    }
    if(count==0)
{
    arr.push(arr1[i])
}
}

console.log(arr)
    