arr1 = [1,2,3,4,5]
arr2= [6,7,8, null]

function disjoint(a,b)
{
    check={}

    for(i=0;i<a.length;i++)
    {
        check[a[i]]=a[i]
        
    }
    // console.log(check)
    for(j=0;j<b.length;j++)
    {
        check[b[j]]=b[j]
    }
    if( (Object.keys(check).length) == (a.length+b.length))
    {
        console.log('True')
    }
    else{
        console.log("False")
    }

}disjoint(arr1,arr2)