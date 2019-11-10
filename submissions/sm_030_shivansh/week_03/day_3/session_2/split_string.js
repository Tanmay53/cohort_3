/**  function to split string into different string over 
the occurence of a given string store them in array **/

function splitString(str, char) {

    var arr = new Array();
    var subString = '';


    for (var i = 0; i < str.length; i++) {

        subString += str[i];

        if (str[i] === char) {

            arr.push(subString);
            subString = '';
        }
    }

    arr.push(subString);
    return arr;
}

console.log(splitString("shivansh", "s"));
console.log(splitString("shivansh singh", "s"));
console.log(splitString("My name is Khan", "a"));


