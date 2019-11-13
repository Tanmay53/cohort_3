// Doesn't work for numbers in the string
// var str = 'Masai School India', count = 0
// function consonantsCount() {
//     for(var i = 0; i < str.length; i++){
//         if(!(str[i] == 'a'||str[i] == 'e'||str[i] == 'i'||str[i] == 'o'||str[i] == 'u'||
//             str[i] == 'A'||str[i] == 'E'||str[i] == 'I'||str[i] == 'O'||str[i] == 'U' )){
//             count++
//         }
//     }
//     console.log("Consonants count is =",count)
// }
// consonantsCount()

var str = 'Masai School 548ril5k India', count = 0
function consonantsCount() {
    for(var i = 0; i < str.length; i++){
        switch(str[i]){
            case 'b':
            case 'B':
            case 'c':
            case 'C':
            case 'd':
            case 'D':
            case 'f':
            case 'F':
            case 'g':
            case 'G':
            case 'h':
            case 'H':
            case 'j':
            case 'J':
            case 'k':
            case 'K':
            case 'l':
            case 'L':
            case 'm':
            case 'M':
            case 'n':
            case 'N':
            case 'p':
            case 'P':
            case 'q':
            case 'Q':
            case 'r':
            case 'R':
            case 's':
            case 'S':
            case 't':
            case 'T':
            case 'v':
            case 'V':
            case 'w':
            case 'W':
            case 'x':
            case 'X':
            case 'y':
            case 'Y':
            case 'z':
            case 'Z': count++
        }
    }
    console.log('Consonants count is =',count)
}

consonantsCount()