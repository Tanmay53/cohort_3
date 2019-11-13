function checkSuperset(superset,subset)
{
var count=0
    superset.forEach(function(elements)
        {
            subset.forEach(function(items)
            {
                if(elements == items)
                {
                    count++
                }
                
            })
        })
    if(count >= elements)
    {
        console.log("True")
    }
    else
    {
        console.log("False")
    }
}
checkSuperset([2,5,7,9,1,4,3],[1,6,3])
