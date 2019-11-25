function evens(num) {
    var num = num || 8
    // var i = 0
    for (i = 1; i <= num; i++) {
        if (i % 2 == 0)
            console.log(i)
    }
}
evens()