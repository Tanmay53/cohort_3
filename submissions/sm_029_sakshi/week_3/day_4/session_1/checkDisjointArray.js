function disjoint_arr(arr1,arr2)
{
    var count=0;
    for(var i=0;i<arr1.length;i++)
    {
        for(var j=0;j<arr2.length;j++)
        {
            if(arr1[i]===arr2[j])
            {
               count++ ;
            }
            
        }
    }
        if(count==0)
        {
            console.log("Disjoint")
        }
        else{
            console.log("joint")
        }
    
}
disjoint_arr([1,3,8,4,9,12],[5,6,7,2,9])