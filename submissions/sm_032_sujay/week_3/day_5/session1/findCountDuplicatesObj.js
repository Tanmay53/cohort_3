array=[1,2,3,1,1,1,1]
tar=1

function countDup(a,b)
{
    copy= {}

    for(i=0;i<a.length;i++)
    {
        count=0
        if(b==a[i]){
            copy[i]=b
            
            // console.log(Object.values(copy))
            // console.log(Object.keys(copy))
        }
    }
    // console.log(Object.values(copy))
    console.log(Object.keys(copy).length)

}countDup(array,tar)