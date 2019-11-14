function multiplier(array,target){
    var newArray = array.map(function(element){
        return element * target
    })
    console.log(newArray)
}

multiplier([1,2,3,4,5,6,7,8,9],10)