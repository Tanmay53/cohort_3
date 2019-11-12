var str = "Masai", rev = ""
var count = str.length
function reverseString() {
    for(var i = count - 1; i >= 0; i--){
        rev += str[i]
    }
    console.log(rev)   
}

reverseString()


