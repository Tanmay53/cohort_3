var arr1=[1,5,3,4,8]
var arr=[1,5,3,4]
function checkSupersetarray(arr,arr1)
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
        console.log("Array1 is superset of array2")
    else 
        console.log("array1 is not superset of array2")    
}
checkSupersetarray(arr,arr1)
