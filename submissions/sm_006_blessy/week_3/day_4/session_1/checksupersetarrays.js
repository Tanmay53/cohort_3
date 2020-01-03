var arr1 =[1,2,3,4,5,6,7,8,9,10]
var arr2 =[1,2,3,4,5]
count = 0;
for(var i=0; i<arr1.length; i++)
{
    for(var j=0; j<arr2.length; j++ )
    {
        if(arr2[j]==arr1[i])
        {
        count=count+1;
       console.log("superset")
         }
         else{
             console.log("not a superset")
         
            }
            return count;
    }
}
