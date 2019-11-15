function totalPrice(arr){
    var total=arr.reduce(function(acc,val){
        return typeof(val)==="string"? acc: acc+val
    },0)
    return total
}

var arr=['apple',200,'orange',50,'grapes',150]
console.log(totalPrice(arr))