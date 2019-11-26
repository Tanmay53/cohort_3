var test1 = ["Apple", 100, "Banana", 30, "Guava", 80, "Jackfruit", 150]
function computePrice(arr){
    var total = arr.reduce(function(a,c,index){
        // console.log(index, a, c)
        if(index % 2 == 1){
            return a+c
        }
    }, )
    console.log(total)
}

console.log(computePrice(test1))