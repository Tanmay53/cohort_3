function count_vowels(str){
    var vowels=0
    for(var i=0;i<str.length;i++){
        switch(str[i]){
            case 'a':
            case 'A':
            case 'E':
            case 'e':
            case 'i':
            case 'I':
            case 'o':
            case 'O':
            case 'u':
            case 'U':
                vowels++
        }
    }
    console.log('vowels:', vowels )
}

count_vowels("Hello World, this is Mihir")