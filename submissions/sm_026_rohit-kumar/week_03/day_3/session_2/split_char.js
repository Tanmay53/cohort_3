function split(str){
    var arr = []
    for(var i = 0; i < str.length; i++){
        arr.push(str[i])
    }

    return arr
}

// code execution starts here
str = "Masai School"
str = ""
str = 'a'

res = split(str)
console.log("The string after splitting : ", res)

/*
---------------------Test Cases ----------------------
Input                       Output
This is a string            [ 'T',
                            'h',
                            'i',
                            's',
                            ' ',
                            'i',
                            's',
                            ' ',
                            'a',
                            ' ',
                            's',
                            't',
                            'r',
                            'i',
                            'n',
                            'g' ]

Masai School                [ 'M', 'a', 's', 'a', 'i', ' ', 'S', 'c', 'h', 'o', 'o', 'l' ]

a                           ['a']
*/ 


