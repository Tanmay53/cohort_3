var obj1=
{
    rmDpv:function(input)
   {
    var input1=[]
    var arr=[]
    for(var i=0;i<input.length;i++)
    {
        for(var j=i+1;j<input.length-1;j++)
        {
            if(input[i]==input[j])
            {
               input[j]=null
            }
        }
    }
    for(var i=0;i<input.length;i++)
    {
        if(input[i]!==null)
        {
            arr.push(input[i])
        }
    }
    console.log('result after revoming duplicate values is '+arr)
  }
} 
obj1.rmDpv([1,2,3,3,4,4,5,6,7,8,9,10])