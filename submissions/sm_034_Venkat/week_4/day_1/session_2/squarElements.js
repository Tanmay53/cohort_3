function square(x) {
    var s= x.map(function(n) {
        return n*n
    })
    console.log(s)
}
square([3,5,7,6,4])