function filterArray(array,target){
    var newArray = array.filter(function(element){
        return element < target
    })
    console.log(newArray)
}

filterArray([1,2,3,4,5,6,7,8,1,9],7)