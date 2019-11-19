function reduceSum()
{
    newArra = arr.filter(function (elements){
       return elements > n
    })
    var sum = newArra.reduce(function (a,b){
        return a+b
    })
console.log(sum)
}
var arr = [70,2,3,4,40,50]
var n = 20

reduceSum(arr , n)