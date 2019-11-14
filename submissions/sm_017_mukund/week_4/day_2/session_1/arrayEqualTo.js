var a=[1,2,3,4,5,6,7,4,5]
var target=4

function arrayEqualSquare(arr,value){
    var newArr = arr.filter(function(i){
        
        return i!=value;
    })
    var newArr2 = newArr.map(function(j){
        
        return j**2;
    })

    return newArr2;
}

console.log(arrayEqualSquare(a,target))