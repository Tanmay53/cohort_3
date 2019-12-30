// File checkDisjointArrays.js
// Check if two given arrays are disjoint or not
// Create a function that accepts the two arrays
// Use Objects data type to solve the problem
// Return true or false


// CREATE A FUCNTION THAT ACCEPTS TWO ARRAYS A,B:
// CREATE TWO EMPTY OBJECT
// FLAG = TRUE
// FOR EVERY ELEMENT IN A:
// CREATE A KEY WITH THAT ELEMENT IN FIRST OBJECT

// FOR EVERY ELEMENT IN B:
// CREATE A KEY WITH THAT ELEMENT IN SECOND OBJECT

// FOR EVERY KEY IN FIRST OBJECT:
// CHECK IF KEY EXISTS IN SECOND OBJECT:
// IF IT DOES:
// FLAG = FALSE
// RETURN FLAG

arr1=[1,2,3,4]
arr2=[5,6,7,8]
function checkDisjointArrays(arr1,arr2)
{
    obj1={}
    obj2={}
    for(var i=0;i<=arr1.length-1;i++)
    {
        obj1[arr1[i]]=arr1[i]//see how the keys are assigned with values// 
        // console.log(obj1)//
    }
    for(var j=0;j<=arr2.length-1;j++)
    {
        obj2[arr2[j]]=arr2[j]//see how the keys are assigned with values// 
        // console.log(obj2)//
    }
// FOR EVERY KEY IN FIRST OBJECT:
// CHECK IF KEY EXISTS IN SECOND OBJECT:
// IF IT DOES:
// FLAG = FALSE
// RETURN FLAG
    for(key1 in obj1)
    {
        if(key1 in obj2)
        {
            flag=false
        }
        else{
            flag=true
        }        
    }
    return flag  
}
ans=checkDisjointArrays(arr1,arr2)
console.log(ans)