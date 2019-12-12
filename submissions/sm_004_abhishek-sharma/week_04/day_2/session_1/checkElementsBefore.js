var test1 = ["Apple", 100, "Banana", 30, "Guava", 80, "Jackfruit", 150]
function computePrice(arr){
    var total = arr.reduce(function(a,c){
        console.log(a, c)
        if(c == Number){
            console.log(a)
            return a+c
        }
    })
    console.log(total)
}

console.log(computePrice(test1))