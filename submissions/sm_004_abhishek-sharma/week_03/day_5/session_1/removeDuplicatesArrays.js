function removeDuplicates(arr) {
    var len = arr.length
    var unique = [], position = [], str = []
    // Finding the position of duplicates in the array
    for(var i = 0; i < len; i++){
        str[i] = arr[i]
        for(var j = i + 1; j < len; j++){
            if(str[i] == arr[j]){
                position.push(j)
            }
        }
    }
    // Adding only unique elemets to another array
    for(var i = 0; i < len; i++){
        var count = 0
        for(var j = 0; j < position.length; j++){
            if(i == position[j]){
                count++
            }
        }
        if(count == 0){
            unique.push(arr[i])
        }
    }
    return unique
}

console.log(removeDuplicates([1, 2, 3, 2, 5, 4, 1, 9, 1, 45, 23, 9, 45, 99, 99]))
console.log(removeDuplicates(['a', 'b', 'c', 'e', 'gth', 'xyz', 'gth', 'b', 'e', 'iu']))
