var a=[1,2,3,4,5]
var t=100

function multiplier(arr,x){
    var newArr=arr.map(function(i){
        return i*x;
    })

    return newArr;
}

console.log(multiplier(a,t))