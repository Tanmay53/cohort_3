function returnMultiplier(arr, target){
    newArr = arr.map(function (element){
        return element * target
    })
    console.log(newArr)
}

returnMultiplier([5,6,7], 2)