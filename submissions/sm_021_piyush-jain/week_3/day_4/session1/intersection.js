var arr1=['4','3','6']
var arr=['1','4','3']
var arr2=[]
function intersection(arr,arr1)
{   
    var arr2=[]
    for(var i=0;i<arr1.length;i++)
{
    for(var j=0;j<arr.length;j++)
    {   
        if(arr1[i]==arr[j])
        {
            arr2.push(arr1[i])
        }


    }
}
return arr2
}
arr2=intersection(arr,arr1)
console.log(arr2)