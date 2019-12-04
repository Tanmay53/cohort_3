name="divyansh";
var arr=name.split('')
var rev=[]
var j=0;
var result=[]

for(i=arr.length-1;i>=0;i--)
{
  
    rev[j]=arr[i]
    j++;


}
 result=rev.join("")
 console.log(result)