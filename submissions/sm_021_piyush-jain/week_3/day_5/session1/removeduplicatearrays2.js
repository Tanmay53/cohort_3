var arr=[1,2,3,4,5,4,6,4,3,3,2,1,10,2]
function reverse(arr){
var obj={}
var counter=0
for (var i=0;i<arr.length;i++)
{
     obj[arr[i]]=counter++
}
for(key in obj)
{
    console.log(key)
}
// console.log(obj)
}
reverse(arr)
