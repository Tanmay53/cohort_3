var string="bcdfgh"
var count=0
var arr=string.split("")
for(var i=0;i<arr.length;i++)
{
    if(arr[i]!='a'||'e'||'i'||'o'||'u')
    {
        count=count+1
    }
}
console.log(count)