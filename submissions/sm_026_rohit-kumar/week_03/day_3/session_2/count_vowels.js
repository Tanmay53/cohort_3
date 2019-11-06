function count_vowels(str){
    var upper_str = str.toUpperCase()
    var count = 0

    // code to count matching vowels
    for(var i = 0; i < upper_str.length; i++){
        switch(upper_str[i]){
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
                count += 1
                break
        }
    }
    return count
}


// code execution starts here
var str = "hello world"
console.log("Vowels Count : ", count_vowels(str))