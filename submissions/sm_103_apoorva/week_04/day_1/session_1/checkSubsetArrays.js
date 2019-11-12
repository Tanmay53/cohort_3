function checkSubset(superset,subset)
{
var count=0
    subset.forEach(function(elments)
        {
            superset.forEach(function(items)
            {
                if(elments == items)
                {
                    count++
                }
                
            })
        })
    if(count==subset.length)
    {
        console.log('True')
    }
    else
    {
        console.log('False')
    }
}
checkSubset([2,5,7,9,1,4,3],[1,2,3])
