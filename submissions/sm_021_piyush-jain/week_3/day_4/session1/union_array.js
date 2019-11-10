var arr1=[4,4,6]
var arr=[4,3,2]
for(var i=0;i<arr1.length;i++)
{
    for(var j=0;j<arr.length;j++)
    {   
        if(arr1[i]==arr[j])
        {
            break;
        }
        if(arr1[i]!=arr[j])
        { 
           if(j=arr.length-1)
           {
            arr.push(arr1[i])
           }
           continue;
        }

    }
}
console.log(arr)