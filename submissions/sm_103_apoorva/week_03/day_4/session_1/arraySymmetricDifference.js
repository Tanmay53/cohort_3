var arr_1=[2,5,7,9,1,4,3,13]
var arr_2=[2,2,3,5,6]
function arraySymmetricDifference(arr_1,arr_2)
{
    var a=[]
    var res=[]
    var s=[]
    for(i=0;i<arr_1.length;i++)
    {   
        a.push(arr_1[i])
    }
    for(j=0;j<arr_2.length;j++)
    {
        a.push(arr_2[j])
    }
    for(i=0;i<arr_1.length;i++)
    {
        for(j=0;j<arr_2.length;j++)
        {
            if(arr_1[i] == arr_2[j])
            {
                res.push(arr_1[i])
            }
                
        }
    }
    for(i=0;i<a.length;i++)
    {
        for(j=0;j<res.length;j++)
        {
            if(a[i]==res[j])
            {
                a[i]=null
            }
        }
    }
    for(i=0;i<a.length;i++)
    {
        if(a[i] !=null)
            s.push(a[i])   
    }
    console.log(s)
}
arraySymmetricDifference(arr_1,arr_2)