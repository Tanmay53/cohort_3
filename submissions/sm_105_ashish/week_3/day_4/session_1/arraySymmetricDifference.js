function arrsymdiff(A,B)
{
    var AB=[]
    for(var i=0;i<A.length;i++)
    { 
        for(var j=0;j<B.length;j++)
        {
            if(A[i]==B[j])
            {
               A[i]=null
               B[j]=null
            }
       }
    }
   for(var i=0;i<A.length;i++)
   {
       if(A[i]!==null)
       {
         AB.push(A[i])
       }
   }
   for(var i=0;i<B.length;i++)
   {
       if(B[i]!==null)
       {
         AB.push(B[i])
       }
   }
   console.log(AB)
}
arrsymdiff([1,3,50,5,6],[0,4,5,6,7,8])