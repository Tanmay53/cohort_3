// // No duplicates present in the arrays
// var arr1=[1,2,3,4]
// var arr2=[5,6,7,8,9]
// var result=[]

// function unionArrays(arr1,arr2)
// {
//     for(i=0;i<arr1.length;i++)
//     {
//         result.push(arr1[i])
//     }

//     for(j=0;j<arr2.length;j++)
//     {
//         result.push(arr2[j])
//     }
//         return result  //ends the function execution
// }

// ans = unionArrays(arr1,arr2) //passing arr1,arr2 to function and executing the function
// console.log(ans)



var arr1=[1,2,3,4]
var arr2=[3,4,5,6]
var result=[]

function unionArrays(arr1,arr2)
{
    for(i=0;i<=arr1.length-1;i++)
    {
        result.push(arr1[i]);   
    }

    for(j=0;j<=arr2.length-1;j++)
    {
        var flag = 0
        for(k=0;k<=result.length-1;k++) 
        {
            if(result[k]==arr2[j]) // checking if arr2 elements exist in result
            {
                flag = 1;
                break;
            }
        }
        if(flag === 0){
            result.push(arr2[j])
        }
    }
        return result  //ends the function execution
}
ans = unionArrays(arr1,arr2) //passing arr1,arr2 to function and executing the function
console.log(ans)

