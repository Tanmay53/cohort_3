var itemPrice = [ {
    item :60} ,{item :50},{item:70},{item :80}]

var sum = itemPrice.reduce(function (a,elements){
    return a+elements.item
},0)
console.log(sum)