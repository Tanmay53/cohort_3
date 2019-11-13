var arr1=[4,3,6]
var arr=[1,4,3]
var arr2=[]
function arraydifference(arr,arr1)
{
    var arr2=[]
    var arr3=[]
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
  for(var i=0;i<arr1.length;i++)
  {
      for (var j=0;j<arr2.length;j++)
      {
        if(arr1[i]==arr2[j])
        {
            break;
        }
        if(arr1[i]!=arr2[j])
        {   
            if(j=arr2.length-1 && (arr1[i]!=arr2[arr2.length-1]))
            {
            arr3.push(arr1[i])
            }
           continue;
        }
      }
  }

return arr3
}
arr2=arraydifference(arr,arr1)
console.log(arr2)