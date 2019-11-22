var arr1=[1,5,3]
var arr=[8,7,6]
function checkDisjointarray(arr,arr1)
{   
    var flag=0
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
                flag=1;
                break;
            }
        }
        if(flag==1)
        break;
    }
    if(flag==0)
        console.log("Disjoint Array")
    else 
        console.log("Not an Disjoint array")    
}
checkDisjointarray(arr,arr1)
