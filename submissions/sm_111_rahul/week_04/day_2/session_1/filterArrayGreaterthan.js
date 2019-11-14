function filterArrayGreaterThan(arr, target){
    newArr = arr.filter(function(element){
        if(element < target)
        return element
    })
    console.log(newArr)
}
array = [4, 7, 8, 10]
value = 8
filterArrayGreaterThan(array, value)