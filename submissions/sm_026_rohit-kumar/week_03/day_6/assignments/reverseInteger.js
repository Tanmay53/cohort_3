function reverseInt(num) {
    var new_num = 0

    while(num > 0) {
        remainder =  num % 10
        num       = Math.floor(num / 10)
        new_num   = new_num * 10 + remainder
    }
    return new_num
}

// main

var num = 12345
console.log(reverseInt(num))

/*
----------------------------------Test Cases-----------------------------------
Input                                                                   Ouput
12345                                                                   54321
0                                                                       0
1                                                                       1

*/