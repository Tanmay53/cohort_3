var arr1=[1,5,3]
var arr=[1,4,3,2,6]

function intersectionArray(arr,arr1)
{   var count=0
    var obj={}
    var inter={}
    for(var i=0;i<arr1.length;i++)
    {
        obj[arr1[i]]=1;
    }
    for(key in obj)
    {
        for(var j=0;j<arr.length;j++)
        {
            if((Number(key)==arr[j]) )
            inter[key]=arr[j]

        }
    }
    var Intersection=Object.keys(inter)
    console.log(Intersection)       
}
intersectionArray(arr,arr1)

