function checkElementBefore(arr) {
    var result = arr.reduce(function (a, c) {
        return a + c.price
    }, 0)
    return result
}
var arr = [{ item: 'item1', price: 10 },
{ item: 'item2', price: 20 },
{ item: 'item3', price: 30 },
{ item: 'item4', price: 40 }]
console.log(checkElementBefore(arr))