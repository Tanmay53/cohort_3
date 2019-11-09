function reverseInterger(num){
    num=parseInt(num)
    var reverseNum=0
    while(num!=0){
        reverseNum= reverseNum*10 + num%10
        num=parseInt(num/10)
    }
    return reverseNum
}

console.log(reverseInterger(4001))
/*
passed test
4001
1234
12345678
*/