function indexIs(a, val) {
var a = a || [1, 1, 2, 2, 3, 3, 5, 6, 1, 2, 3, 4, 7];
var val = val || 1
    var b = a.indexOf(val);
    console.log(val+ ' index number is ' + b)
}
indexIs ([1,2,5,4,5,8,7,3,6,5,4,6], 11)