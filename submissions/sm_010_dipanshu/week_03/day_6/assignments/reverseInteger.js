function reverse(a){

    var num = a

    if(num < 0){
        num = -1*num
        var isNegative = true
    }

    len = findLength(num)

    var sum = 0

    for(var i=0;i<len;i++){
        var mod = num%10
        rev = mod * (10**(len-1-i))
        sum += rev
        num = Math.floor(num/10)
    }

    if(isNegative){
        return -1 * sum
    }
    else{
        return sum
    }
}

function findLength(a){
    cnt = 0
    num = a

    while(num > 0){
        num = Math.floor(num/10)
        cnt++
    }

    return cnt
}

console.log(reverse(-123456))
console.log(reverse(12345600))
console.log(reverse(22556917347))