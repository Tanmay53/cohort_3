function firstindex(arr1,value)
{
    for(var i=0;i<arr1.length;i++)
    {
    if(arr1[i]==value)
       {
        return i;
       }
}
return -1;
}
console.log(firstindex([4,2,3,5,6],3))
