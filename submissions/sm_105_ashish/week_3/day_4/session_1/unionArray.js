function unionArray(A,B)
{
    var uno=[]
    var temp=[]
        for(var i=0; i<A.length;i++)
            {
            temp.push(A[i])  
            }
        for(var i=0;i<B.length;i++)
            {
                temp.push(B[i])
            }
        for(var i=0;i<temp.length;i++)
            { 
               for(var j=i+1;j<temp.length;j++)
               {
                   if(temp[i]==temp[j])
                   {
                       temp[j]=null
                   }
               }
            }
            for(var i=0;i<temp.length;i++)
            {
                if(temp[i]!==null)
                {
                    uno.push(temp[i])
                }
            }
            console.log(uno)
}  
unionArray([1,2,3,4,5,6,7],[6,7,8,9,11,12,13])