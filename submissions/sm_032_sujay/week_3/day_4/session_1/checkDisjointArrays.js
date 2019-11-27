arr1 = ['1','2','3']
arr2 = ['4','5']

function disjoint(a,b)
{
    var count=0;
    for(var i=0;i<a.length;i++)
    {
        for(j=0;j<b.length;j++)
        {
            if (a[i]==b[j])
            {
                count++
            }
        }
    }
    if(count>0)
    {
        console.log("It is not a disjoint array")
    }
    else{
        console.log("It is a Disjoint array")
    }
}disjoint(arr1,arr2)