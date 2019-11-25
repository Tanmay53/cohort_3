var arr1=[1,5,3]
var arr=[1,4,3]
function checkSubsetarray(arr,arr1)
{   var count=0
    var obj={}
    for(var i=0;i<arr1.length;i++)
    {
        obj[arr1[i]]=1;
    }
    console.log(obj)
    for(var j=0;j<arr.length;j++)
    {
        for(key in obj)
        {   
            if(Number(key)==arr[j])
            {   
                count+=1;
            }
        }
    }
    if(count==arr.length)
        console.log("Array2 is subset of array1")
    else 
        console.log("array2 is not subset of array1")    
}
checkSubsetarray(arr,arr1)
