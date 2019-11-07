var string = 'sagar kadu' //given string

//invoking function
var arr = generateArray(string);
console.log(arr);

//function for array which stores single characters
function generateArray(string) {
    var temp = [];
    for (var i = 0; i < string.length; i++) {
        temp.push(string[i]);
    }
    return temp;
}



// input:
// string = 'sagar kadu'
// output:
// [ 's', 'a', 'g', 'a', 'r', ' ', 'k', 'a', 'd', 'u' ]