// function to print string in reverse order
function reverse_string(str){
    var new_string = ''
    len = str.length

    for(var i = len-1; i >= 0; i--){
        new_string = new_string + str[i]
    }

    return new_string
}


// code starts here
str = "Hello World"
//str = "Sam is a good boy"
//str = "Rohit Kumar"

console.log("Reversed String : ", reverse_string(str))

/*

Test Cases
1. Hello World          -> dlroW olleH
2. Sam is a good boy    -> yob doog a si maS
3. Rohit Kumar          -> ramuK tihoR

*/