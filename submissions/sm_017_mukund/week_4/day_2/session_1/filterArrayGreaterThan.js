var arr=[33,45,24,57,89,55,59]
var val=60

function filter(arr,value){
    var newArr = arr.filter(function(i){
        return i<value;
    })

    return newArr;
}

console.log(filter(arr,val))