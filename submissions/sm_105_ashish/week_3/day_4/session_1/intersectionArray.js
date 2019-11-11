function checkIntersection(A,B)
{
    var arr=[]
    for(var i=0;i<A.length;i++)
    {
        for(var j=0;j<B.length;j++)
        {
            if(A[i]==B[j])
            {
                arr[j]=B[j]
            }
        }
    }
    console.log(arr)
}
checkIntersection([1,2,3,4,5,8,9],[3,4,5,6,7])