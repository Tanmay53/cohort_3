var name='my name is ashish'
var arr=[]
var n=0
var s=0;
for(var i=0;i<name.length;i++)
{  
    n=n+1
    if(name[i]!==' ')
    {
        arr.push(name[i])+arr.push(name[i-1])
     }

}
console.log(arr)
        
    


