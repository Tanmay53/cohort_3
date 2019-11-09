var arr=[3,4];
var arr1=[1,2,3];
var i=0
 function CheckSubsetArray1(arr,arr1)
{   
    var i=0,j=0
    var count=0
    var arr3=[]
    for(i=0;i<arr.length;i++)
    {
        for(j=0;j<arr1.length;j++)
        {
            if(arr[i]==arr1[j])
            {
                arr3.push(arr[i])
            }
            else 
              continue;

        }
    }
    for(i=0;i<arr.length;i++)
    {
        for(j=0;j<arr3.length;j++)
        {
            if(arr[i]==arr3[j])
            {
                count+=1
            }
        }
    }
    if(count==arr.length && (count<arr1.length))
    {
        console.log("String 2 is superset of String1")
    }
    else 
    console.log("String 2 is not a  superset of String1")
}
CheckSubsetArray1(arr,arr1);