function checksuperset_arr(arr1,arr2)
{
    count=0
    if(arr2.length>arr1.length)
    {
        console.log("Not a superset");
    }
    else{
    for(var i=0;i<arr1.length;i++)
    {
        for(var j=0;j<arr2.length;j++)
        {
            if(arr1[i]==arr2[j])
            {
             count++
            }
            
        }
    }
    if(count<=arr1.length)
    {
        console.log("superset")
    }
       else{
           console.log("not superset")
       }
    }
    
}
checksuperset_arr([1,3,8,4,9,12],[1,3,89,45,76,88,9])