var arr_1=[2,5,7,9,1,4,3,13]
var arr_2=[2,2,3,5,6]
function unionArrays(arr_1,arr_2)
{
    var a=[]
    var res=[]
    for(i=0;i<arr_1.length;i++)
    {   
        a.push(arr_1[i])
    }
    for(j=0;j<arr_2.length;j++)
    {
        a.push(arr_2[j])
    }
    for(i=0;i<a.length;i++)
    {
        for(j=i+1;j<a.length;j++)
        {
            if(a[i]==a[j])
            {
                a[j]=null
            }
        }
    }
    for(i=0;i<a.length;i++)
    {
        if(a[i]!=null)
            res.push(a[i])
    }
    console.log(res)
}
unionArrays(arr_1,arr_2)
    
    
    
    
    


