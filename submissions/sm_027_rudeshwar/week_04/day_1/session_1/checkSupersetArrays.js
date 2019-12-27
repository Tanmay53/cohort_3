// ### FSD.JS.6.3
// - File `checkSupersetArrays.js`
// - Check if the first array is a superset of the second array
// - Create a function that accepts the two arrays
// - Use Objects data type to solve the problem
// - Return true or false

// ASSUMING IF B IS A SUPERSET OF A
// CREATE A FUNCTION THAT ACCEPTS TWO ARRAYS A,B:
// CREATE TWO EMPTY OBJECTS
// CHECK IF LENGTH OF ARRAY B IS GREATER THAN A:
// IF TRUE:
// RETURN FALSE

// FOR EVERY ELEMENT IN A:
// CREATE A KEY WITH THAT ELEMENT IN FIRST OBJECT

// FOR EVERY ELEMENT IN B:
// CREATE A KEY WITH THAT ELEMENT IN SECOND OBJECT

// FLAG = TRUE
// FOR EVERY KEY IN FIRST OBJECT:
// IF KEY DOES NOT EXIST IN SECOND OBJECT:
// FLAG = FALSE
// RETURN FLAG

arr1=[1,2,3,4,5]
arr2=[7,5,1,2,3,4]
function checkSupersetArrays(arr1,arr2)
{
    obj1={}
    obj2={}
    size1=arr1.length
    size2=arr2.length
    if(size2<size1)
    {
        console.log(false)
    }
    for(var i=0;i<=arr1.length-1;i++)
    {
        obj1[arr1[i]]=arr1[i]//see how the keys are assigned with values// 
        // console.log(obj1)//{ '1': 1, '2': 2, '3': 3, '4': 4, '5': 5 }
    }
    for(var j=0;j<=arr2.length-1;j++)
    {
        obj2[arr2[j]]=arr2[j]//see how the keys are assigned with values// 
        // console.log(obj2)//{ '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7 }
    }

    // FLAG = TRUE
    // FOR EVERY KEY IN FIRST OBJECT:
    // IF KEY DOES NOT EXIST IN SECOND OBJECT:
    // FLAG = FALSE
    // RETURN FLAG

    flag=true//assuming what?
    for(key1 in obj1)
    {
        if(!(key1 in obj2))
        {
            flag=false
        }
    }
    return flag
}
ans=checkSupersetArrays(arr1,arr2)
console.log(flag)