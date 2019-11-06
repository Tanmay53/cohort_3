var arr=[0,2,4,6,8,10]
var sum=0
for(var i=0;i<arr.length;i++)
{
    if(arr[i]%2==0)
    {
        sum+=arr[i]
    }
}
console.log(sum)