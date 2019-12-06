var arr = [1, 2, 3, 4]
function indexPos(arr){
    var find = []
    for(var i = 0; i<arr.length; i++){
        if(arr[0]){
            find.push(arr[i])
        }
    }
    return find
}

console.log(indexPos([1]))