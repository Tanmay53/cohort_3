function checkSubset(superset,subset)
{
var count=0
    for(i=0;i<subset.length;i++)
        {
            for(j=0;j<superset.length;j++)
            {
                if(subset[i] == superset[j])
                {
                    count++
                }
                
            }
        }
    if(count==subset.length)
    {
        console.log("Subset")
    }
    else
    {
        console.log("not a subset")
    }
}
checkSubset([2,5,7,9,1,4,3],[1,2,3])
