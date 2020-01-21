var arr=[0,25,50,85,15,500,27,9]
var  k =50

function reduceSum(arr,k)
{
    newArr=arr.filter(function(element){
        return element > 50
    }).reduce(function(arr,k){
        return arr + k
    })
    return newArr
}

reduceSum(arr,k)
console.log(newArr)

