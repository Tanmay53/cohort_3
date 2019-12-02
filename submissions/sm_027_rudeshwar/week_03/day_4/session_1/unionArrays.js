// No duplicates present in the arrays
var arr1=[1,2,3,4,5]
var arr2=[2,5,6,7,8,9]
var result=[]

function unionArrays(arr1,arr2)
{
    for(i=0;i<=arr1.length-1;i++)
    {
        result.push(arr1[i])
    }

    for(j=0;j<=arr2.length-1;j++)
    {
        result.push(arr2[j])
    }
        return result  //ends the function execution
}

ans = unionArrays(arr1,arr2) //passing arr1,arr2 to function and executing the function
console.log(ans)

