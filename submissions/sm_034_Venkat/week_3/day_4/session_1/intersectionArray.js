function intersectionIs(x, y) {
var x = x || [1, 5, 6, 8, 9, 45, 61];
var y = y || [5, 2, 7, 6, 2, 23, 9];
var a = x.sort(function (l, m) { return l - m })
var b = y.sort(function (l, m) { return l - m })
var inter = [,];
for (i = 0; i < b.length; i++) {
    for (j = 0; j < a.length; j++) {
        if (a[j] == b[i]) {
            inter += b[i]
        }
    }
}
var u= inter.split ("").map(function(num){
    return parseInt(num)
})
console.log(u)
// console.log(typeof (u))
}
intersectionIs([1,8,5,6,2,7,4,54], [5,6,7,2,3,8])