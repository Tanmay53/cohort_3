// function to split the sring into single character and store them into array

function splitString(str) {

    var arr = [];

    for (var i = 0; i < str.length; i++) {
        arr[i] = str[i];
    }

    return arr;
}

console.log(splitString('shivansh singh'));
console.log(splitString('Hello World!'));