/*
 return mirror image of a single character
 return same char if mirror is not found
 */
function mirror_of(char) {
    caps  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    small = "abcdefghijklmnopqrstuvwxyz"
    
    var index = caps.indexOf(char)
    if (index >= 0) {
      return caps[25 - index]
    }
    else {
      index = small.indexOf(char)
      if(index >= 0){
        return small[25 - index]
      }
    }
    return char
}

// function to accumulate mirror character
function get_mirror_image(string) {
    new_string = ''
    for(var i = 0; i < string.length; i++) {
        new_string = new_string + mirror_of(string[i])
    }

    return new_string
}

// code execution starts here

var string = "PaPa"
var string = "PaPa"
var string = "AbKbA"

console.log(get_mirror_image(string))

/*
------------------------Test Cases-----------------------

Input --------------------------- Ouput

AyzB                              AyzB
PaPa                              KzKz
AbRaM                             ZyIzN
AbKbA                             ZyPyZ


*/
