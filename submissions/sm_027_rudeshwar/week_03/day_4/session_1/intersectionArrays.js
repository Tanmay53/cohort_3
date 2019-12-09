// CREATE A FUNCTION THAT ACCEPTS TWO ARRAYS:
// CREATE AN EMPTY ARRAY RESULT
// FOR EVERY ELEMENT IN ARRAY A:
//     CHECK IF THAT ELEMENT EXISTS IN ARRAY B:
//         IF TRUE:
//             CHECK IF ELEMENT IS PRESENT IN RESULT ARRAY:
//                 IF FALSE:
//                     PUSH TO RESULT ARRAY
// RETURN RESULT ARRAY

var arr1=[1,2,3,4,5,6,7]
var arr2=[3,4,5]
var result=[]
function intersectionArrays(arr1,arr2) //function accepting two array
{
    for(i=0;i<=arr1.length-1;i++)      
    {
        for(j=0;j<=arr2.length-1;j++) 
        {
            if(arr1[i]==arr2[j])    
            {
                result.push(arr1[i]) 
                break
            }
        }
    }
    return result
}
ans=intersectionArrays(arr1,arr2) // executing the function
console.log(ans)
