function show(chr, arr) {
    var chr= chr || 'I';
    var arr= arr || ['Am', 'Venkat', 'Subbu']
    var array= chr.concat(","+ arr)
    console.log(array)
    console.log(typeof(array))
}
show()