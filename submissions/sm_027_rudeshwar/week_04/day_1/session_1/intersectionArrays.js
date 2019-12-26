// CREATE A FUNCTION THAT ACCEPTS TWO ARRAYS A,B:
// CREATE TWO EMPTY OBJECTS
// CREATE EMPTY ARRAY RESULT
// FOR EVERY ELEMENT IN A:
//     CREATE A KEY WITH THAT ELEMENT IN FIRST OBJECT
// FOR EVERY ELEMENT IN B:
//     CREATE A KEY WITH THAT ELEMENT IN SECOND OBJECT
// FOR EVERY KEY IN FIRST OBJECT:
//     IF KEY EXIST IN SECOND OBJECT:
//         PUSH ELEMENT TO RESULT
// RETURN RESULT

arr1=[3,28,1,5,83]
arr2=[6,1,3,5,11]

function findIntersection(arr1,arr2){
    let obj={};
    let res=[];
    for(var i=0;i<=arr1.length-1;i++)
    {
        obj[arr1[i]]=arr1[i]//see how the keys are assigned with values// 
        // okay finally I got some useful conclusion 
        console.log(obj)
    }

    for(var i=0;i<arr2.length;i++)
    {
        for(var key in obj)
        {
            // console.log(Number(key))
            if(Number(key)===arr2[i]){//what is the meaning of this line
                // console.log(Number(key))
                res.push(arr2[i])
            }
        }
    }
    console.log(res)
}

findIntersection(arr1,arr2)