var data = 56789
var sum = ""
var i =0
reversestr(data)

function reversestr(data){
    var value =data.toString() // string convertion
    for (i = value.length-1; i >= 0 ; i--)
    {
        sum = sum+value[i]

    }
console.log(parseInt(sum))

return sum

}

// sample test --
// 1234
// 56723