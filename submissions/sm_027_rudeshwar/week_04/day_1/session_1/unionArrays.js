arr1=[1,2,1,2,2,2,3]
arr2=[4,5,6,2]

function unionArr(arr1,arr2)//accepting arr1 and arr2 as arguments
{
    obj={}
    // console.log(typeof(obj))
    for(var i=0;i<arr1.length || i<arr2.length;i++)//iterating through both the arrays
    {
        // count++//count=count+1
        if(i<arr1.length)//checking if "i" value is less than zero
        {
            obj[arr1[i]]=arr1[i]
            // console.log(Object.keys(obj))
            // console.log(Object.values(obj))

            // console.log(obj[arr1[i]])console.log(Object.keys(obj))
            // console.log(obj)
            // console.log(arr1[i])
        }
        if(i<arr2.length)
        {
            obj[arr2[i]]=arr2[i]
        }
    }
    // count+=2*Object.keys(obj).length
    // console.log(count)
    return Object.keys(obj).map(function(val){
        return parseInt(val)
    }) 
}
console.log(unionArr(arr1,arr2))
// console.log(Object.keys(obj))// It will print object keys
// console.log(Object.values(obj))// It will print object values
// console.log(obj)