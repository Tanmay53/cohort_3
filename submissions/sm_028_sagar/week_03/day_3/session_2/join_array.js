var givenArr = ['A', 'B', 'C'] //given array
var char = 'a' //given char

joinArray(givenArr, char);

//function for joining array with given character:
function joinArray(givenArr, char) {
    var string = givenArr[0];
    for (var i = 1; i < givenArr.length; i++) {
        string = string + 'a' + givenArr[i];
    }
    console.log(string);
}


// input:
// givenArr = ['A', 'B', 'C']
// output:
// AaBaC