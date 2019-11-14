function reduceSum(arr, k){
    newArr = arr.filter(function (element){
        return element > k
    })
    newArr = newArr.reduce(function (acc,curr ){
       return  acc + curr
    }) 
    console.log(newArr)   
}
reduceSum([3,5,6,8], 3)