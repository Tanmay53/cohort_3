function reverseInt(num) {
    var digit = 0, rev = 0
    while(num != 0){
        digit = num % 10
        rev = digit + rev*10
        num = Math.floor(num/10)
    }
    return rev
}

console.log(reverseInt(6987)) // 7896
console.log(reverseInt(1212)) // 2121
console.log(reverseInt(6969)) // 9696
console.log(reverseInt(1001)) // 1001