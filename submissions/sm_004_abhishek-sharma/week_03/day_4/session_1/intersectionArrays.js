function intersection(arr1, arr2) {
    var arr = []
    for(var i = 0; i < arr1.length; i++){
        for(var j = 0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                arr.push(arr1[i])
                break
            }
        }
    }
    return arr  
}

var result = console.log(intersection([1, 2, 5, 6, 10, 25], [4, 5, 9, 25]))
result = console.log(intersection([1, 2, 6, 10], [4, 5, 9, 25]))
