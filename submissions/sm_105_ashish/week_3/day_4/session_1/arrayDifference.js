function arrayDiff(A,B)
{
    var AB=[]
    var BA=[]
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
                BA.push(B[i])
            }
        }
        console.log(AB)
        console.log(BA)
}
arrayDiff([1,2,3,4,5,6,7],[3,4,5,6,9])