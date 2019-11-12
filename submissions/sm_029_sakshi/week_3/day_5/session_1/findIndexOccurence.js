function firstindex(arr1,value)
{
    index=[]
    for(var i=0;i<arr1.length;i++)
    {
    if(arr1[i]==value)
       {
        index.push(i);
       }
}
if(index.length>0)
{
   return index;
}
else{
    return -1;
}
}
console.log(firstindex([4,2,3,1,4,5,4,4,6],4))
