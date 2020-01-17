var arr=[5,27,10,100,1000,50,3,27,15]
var target=27
var newArr=[]
function arrayEqualTo(arr,target){    
    newArr=arr.filter(function(element){
        return element!==27
    }).map(function(val){
        return val*val;
    })
    return newArr
    // return square
}
arrayEqualTo(arr,target)
console.log(newArr)
// console.log(square)
