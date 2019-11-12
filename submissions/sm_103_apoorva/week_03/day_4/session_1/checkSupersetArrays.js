function checkSuperset(superset,subset)
{
var count=0
    for(i=0;i<superset.length;i++)
        {
            for(j=0;j<subset.length;j++)
            {
                if(superset[i] == subset[j])
                {
                    count++
                }
                
            }
        }
    if(count >= subset.length)
    {
        console.log("Superset")
    }
    else
    {
        console.log("not a Superset")
    }
}
checkSuperset([2,5,7,9,1,4,3],[1,6,3])
