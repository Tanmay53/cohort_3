var arr1=[1,2,3,4,5]
var arr2=[5,4,3,2,1,0]
var ans

function isSuperset(arr1,arr2)
{
    var flag =false
    for(i=0;i<=arr1.length-1;i++)
    {
        for(j=0;j<=arr2.length-1;j++)
        {
            if(arr1[i]==arr2[j])
            {
                flag=true
                break
            }
            else
            {
                flag=false
            }
        }
    }
    if (flag===true)
    {
        console.log("arr2 is a superset of arr1")
    }

    else
    {
        console.log("arr2 is not superset of arr1")
    }
return ans

}

isSuperset(arr1,arr2)