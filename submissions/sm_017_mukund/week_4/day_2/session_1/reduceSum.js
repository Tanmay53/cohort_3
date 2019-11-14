var a=[8,4,6,7,9,2,14,27,19,16]
var val=10

function reduceSum(arr,value){
    var newArr = arr.filter(function(i){
        return i>value;
    })

    
    var sum = newArr.reduce(function(s,i){
        return s+i;
     0 })

     return sum;
}

console.log(reduceSum(a,val))