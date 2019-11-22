var arr1=[1,4,3]
var arr=[1,4,3,2,6]

function unionArray(arr,arr1)
{   var count=0
    var obj={}
    for(var i=0;i<arr1.length;i++)
    {
        obj[arr1[i]]=1;
    }
    for(key in obj)
    {
        for(var j=0;j<arr.length;j++)
        {
            if((Number(key)!=arr[j])&& (arr[j]!=Number(key)) )
            obj[arr[j]]=1

        }
    }
    var Union=Object.keys(obj)
    console.log(Union)       
}
unionArray(arr,arr1)

