function arrayEqualTo(arr, target){
   newArr =  arr.filter(function (element){
       return element !== target
    })
   newArr = newArr.map(function (element){
        return element*element
    })
   console.log(newArr)
}
array = [4,5,6,5,8]
value = 5
arrayEqualTo(array, value)