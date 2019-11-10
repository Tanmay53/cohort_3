function checksubset_arr(arr1,arr2)
{
    count=0
    if(arr2.length>arr1.length)
    {
        console.log("false");
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
    if(count==arr2.length)
    {
        console.log("subset")
    }
       else{
           console.log("not subset")
       }
    }
    
}
checksubset_arr([1,3,8,4,9,12],[1,3,555,9])