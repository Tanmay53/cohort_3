var int=34589695
var s=''
console.log(int)

function reverseInt(int){
    count=int.toString().length
    while(count>0){
        count--
        r=int%10
        s+=r    
        d=Math.floor(int/10)
        int=d
    
}
    console.log('Reverse : ',Number(s))
}

reverseInt(int)