// File arrayDifference.js
// Create an array with the difference of two given arrays
// Create a function that accepts the two arrays
// Use Objects data type to solve the problem
// Return new array (Do Array A - array B)

// CREATE A FUNCTION THAT ACCEPTS TWO ARRAYS A,B:
// create a object
// now what to do with object
//


arr1=[1,5,3,4,11]
arr2=[3,4,5,10]

function arrayDifference(arr1,arr2)
{
    var obj1={};
    var obj2={};
    let res=[];
    for(var i=0;i<=arr1.length-1;i++)
    {
        obj1[arr1[i]]=arr1[i]//see how the keys are assigned with values// 
        // console.log(obj1)//{ '1': 1, '3': 3, '4': 4, '5': 5, '11': 11 }
    }
    for(var j=0;j<=arr2.length-1;j++)
    {
        obj2[arr2[j]]=arr2[j]//see how the keys are assigned with values// 
        // console.log(obj2)//{ '3': 3, '4': 4, '5': 5, '10': 10 }
    }

    for (key in obj1) {
        if (!(key in obj2)) {
            // console.log(res)
            res.push(obj1[key])
        }
    }
    return res

}
ans=arrayDifference(arr1,arr2)//1,4,11
console.log(ans)

