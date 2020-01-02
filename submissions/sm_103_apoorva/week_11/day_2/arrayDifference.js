function arrayDifference(arr_1,arr_2)
{   if(arr_1 == undefined || arr_2 == undefined)
    {
        return false
    }
    else
    {
        var a=[]
        var res=[]
        var u=[]
        for(i=0;i<arr_1.length;i++)
        {
            for(j=0;j<arr_2.length;j++)
            {
                if(arr_1[i] == arr_2[j])
                {
                    a.push(arr_1[i])
                }
                    
            }
        }
        for(i=0;i<arr_1.length;i++)
        {   
            res.push(arr_1[i])
        }
        for(j=0;j<arr_2.length;j++)
        {
            res.push(arr_2[j])
        }
        for(i=0;i<a.length;i++)
        {
            for(j=0;j<res.length;j++)
            {
                if(a[i]==res[j])
                {
                    res[j]=null
                }
            }
        }
        for(i=0;i<res.length;i++)
        {
            if(res[i]!=null)
            {
                u.push(res[i])
            }
        } 
        return u  
    }
     
}


module.exports = arrayDifference