var arr1=[1,2,3,4,5]
var arr2 =[5,6,7,8]
count = 0;
for(var i=0; i<arr1.length; i++)
{
    for(var j=0; j<arr2.length; j++)
    {
      count=count+1
     arr2.shift()
   //console.log(arr2)
   var arr = arr1.concat(arr2)
   console.log("union array is", arr)
   return count

    }
}