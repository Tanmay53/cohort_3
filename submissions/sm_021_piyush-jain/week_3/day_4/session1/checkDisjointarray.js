var arr1=[1,5,3]
var arr=[4,5,6]
var arr2=[]
function checkDisjointarray(arr,arr1)
{   
    var arr2=[]
    var count=0
    for(var i=0;i<arr1.length;i++)
    {
    for(var j=0;j<arr.length;j++)
    {   
        if(arr1[i]==arr[j])
        {
            arr2.push(arr1[i])
            count+=1
        }
    }
}
if(count==0)
{
    console.log("Disjoint Array")
}
return arr2
}
arr2=checkDisjointarray(arr,arr1)
console.log(arr2)