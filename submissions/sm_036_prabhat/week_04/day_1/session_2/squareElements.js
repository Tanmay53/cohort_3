function squareElements (arr){
    var square = arr.map(function(ele){
        return ele ** 2;
    })
    return square;
}

var arr = [5,8,9,3,25,552,2,58]
console.log(squareElements(arr))