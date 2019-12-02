var arr1 = [5, 16, 0, 29, 99, 56]
var arr2 = [100, 200, -500, 33, 2, 69]

function checkElement(arr){
    arr[0] = null
    var temp = null
    var result = arr.map(function(element){
        if(element > temp){
            temp = element
            return -1
        }
        else{
            temp = element
            return 1
        }
    })    
    return result
}

console.log(checkElement(arr1))
console.log(checkElement(arr2))
