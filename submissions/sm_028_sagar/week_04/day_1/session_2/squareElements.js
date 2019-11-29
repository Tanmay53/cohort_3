var inp = [10, 20, 30, 40] //input

console.log(square(inp))

function square(inp) {
    return inp.map(function(ele) {
        return ele * ele;
    })
}