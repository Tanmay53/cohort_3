function joinArray(inputArray, character){

    var temp = ''

    for(var i=0;i<inputArray.length;i++){
        temp += inputArray[i] + character
    }

    return temp
}

var joinedArray = joinArray(['a','bb','ccc','dddd'],'1ms')
console.log(joinedArray)