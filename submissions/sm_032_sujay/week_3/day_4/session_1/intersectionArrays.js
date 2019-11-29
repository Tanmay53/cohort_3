s1=[1,2,3,4,5,6,7,8,9,'c']
s2=['a','b','c',2,'f',3,'t',4]

s3=[]

function intersectionArray(x,y)
{
for(i=0;i<x.length;i++)
    {
        for(j=0;j<y.length;j++)
        {

        
      if( x[i] == y[j])
        {
        s3.push(x[i])
        //console.log(x[i])
        }
     }
 }

console.log(s3)

}
intersectionArray(s1,s2)