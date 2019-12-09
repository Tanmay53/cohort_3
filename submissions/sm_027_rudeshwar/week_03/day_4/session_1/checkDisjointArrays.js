// USING ARRAYS
//     CREATE A FUNCTION THAT ACCEPTS TWO ARRAYS, A AND B
//     CREATE A FLAG AND SET IT TO TRUE
//     FOR EVERY ELEMENT IN ARRAY A:
//         CHECK IF THAT ELEMENT EXISTS IN ARRAY B:
//             IF TRUE:
//                 FLAG = FALSE
//                 BREAK
//         IF FLAG = FALSE:
//             RETURN FALSE
//         ELSE:
//             RETURN TRUE

var arr1=[1,2,3,]
var arr2=[1,2,3]
var ans
function isDisjoint(arr1,arr2)
{
    flag=true

    for(i=0;i<=arr1.length-1;i++)
    {
        for(j=0;j<=arr2.length-1;j++)
        {
            if(arr1[i]==arr2[j])
            {
                flag=false
                break
            }
            else
            {
                flag=true
            }
        }
    }
    if(flag===true)
    {
        console.log("disjoint sets")
        // return true
    }
    else{
        console.log(" not disjoint sets")
        // return false
    }
    // return ans
}
isDisjoint(arr1,arr2)




