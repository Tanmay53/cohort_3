arr1=[1,2,3,4,5,6]
arr2=[2,7,8,9,3,4]

obj1={}
obj2={}
obj3={}


function diff(a,b)
{
    for(i=0,j=0;j<b.length,i<a.length;i++,j++)
    {
        obj1[a[i]]=a[i]
        obj2[b[j]]=b[j]

    }
    for(key in obj2)
    {
        if(obj1[key])
        {
            delete obj1[key]
        }
    }

    
    // console.log(obj1)
    console.log(Object.values(obj1))
}diff(arr1,arr2)