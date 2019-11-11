function count_vowels(str){
    var upper_str = str.toUpperCase()
    var count = 0

    // if char is not one of these vowels then it is a consonant
    for(var i = 0; i < upper_str.length; i++){

        // ignore whitespace
        if(upper_str[i] == ' ')
            continue
        
        if(upper_str[i] != 'A' && upper_str[i] != 'E' && upper_str[i] != 'I' && upper_str[i] != 'O' && upper_str[i] != 'U'){
            count += 1
        }
        
    }
    return count
}


// code execution starts here
str = "hello world"
str = "prayagraj"
console.log("Consonant Count : ", count_vowels(str))

/*
------------Test Cases------------------
str                 output
hello world         7
allahabad           5
prayagraj           6
*/