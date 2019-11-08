var str = 'Masai School India', count = 0
function vowelCount() {
    for(var i = 0; i < str.length; i++){
        if(str[i] == 'a'||str[i] == 'e'||str[i] == 'i'||str[i] == 'o'||str[i] == 'u'||
            str[i] == 'A'||str[i] == 'E'||str[i] == 'I'||str[i] == 'O'||str[i] == 'U' ){
            count++
        }
    }
    console.log("Vowel Count is =",count)
}

vowelCount()