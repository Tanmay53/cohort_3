function union(arr1, arr2) {
    var arr  = []
    for(var i = 0; i < arr1.length; i++){
        arr.push(arr1[i])
    }

    for(var j = 0; j < arr2.length; j++){
        var count = 0
        for(var k = 0; k < arr.length; k++){
            if(arr2[j] == arr[k]){
                count ++
            }
        }
        if(count == 0)
            arr.push(arr2[j])
    }
    return arr
}

var result = console.log(union([1, 2, 3, 6, 10], [1, 4, 2, 5, 9, 10, 10, 15]))