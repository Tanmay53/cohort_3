
function union(arr1,arr2)
{
  obj={}
  for(var i=0;i<=arr1.length-1;i++)
{
  obj[arr1[i]]=arr1[i]
  //console.log(obj[arr1[i]])
}  
    for(var i=0;i<=arr2.length-1;i++)
{
  obj[arr2[i]]=arr2[i]
  //console.log(obj[arr2[i]])
}
  console.log(Object.keys(obj))
  //console.log(arr2.length)
  
}
arr1=[2,3,4,5]
arr2=[1,7,8,9]
union(arr1,arr2)