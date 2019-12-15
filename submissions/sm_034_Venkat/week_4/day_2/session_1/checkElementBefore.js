function addItemPrices(obj) {
    var obj = obj;
    var num= Object.values(obj);
    var sum= num.reduce(function(a, b) {
        return a + b})
    console.log(sum)
}
addItemPrices({violet: 50, indigo: 40, blue: 30, green: 10,
    yellow: 5, orange: 15, red: 20})