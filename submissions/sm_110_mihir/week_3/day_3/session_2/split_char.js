function split_char(str){
    var arr=[]
    for(var i=0;i<str.length;i++)
        arr[i]=str[i]
    return arr
}

var arrChar=split_char("camelCase")
console.log(arrChar)