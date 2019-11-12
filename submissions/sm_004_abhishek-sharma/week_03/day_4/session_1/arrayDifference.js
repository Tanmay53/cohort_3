function difference(arr1, arr2) {
    var arr = []
    for(var i = 0; i < arr1.length; i++){
        var count = 0
        for(var j = 0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                count ++
            }
        }
        if(count == 0)
            arr.push(arr1[i])
    }
    return arr     
}

var result = console.log(difference([1, 2, 5, 6, 10, 25], [4, 5, 9, 1, 25]))
