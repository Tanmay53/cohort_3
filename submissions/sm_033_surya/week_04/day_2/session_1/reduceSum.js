var arra = [10,20,30,40,50]
var n = 20

reduceSum(arra , n)
function reduceSum()
{
    newArra = arra.filter(function (elements){
       return elements > n
    })
    var sum = newArra.reduce(function (a,b){
        return a+b
    })
console.log(sum)
}