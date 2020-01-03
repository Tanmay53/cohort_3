var arr1 = [1,2,3,4,5,6]
var arr2 = [4,5,6,7,8]
 arr = []
for(var i=0; i<arr1.length; i++)
{
    for(var j=0; j<arr2.length; j++)
    {
        if(arr1[i]==arr2[j]){
          arr.push(arr1[i])
        break
        }
    }
}
console.log(arr)