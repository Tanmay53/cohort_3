var inputString = 'KiMcT'; // Input string

//Invoking function
mirrorImage(inputString)


//function for mirroImage
function mirrorImage(string) {

    var capsString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var smallString = 'abcdefghijklmnopqrstuvwxyz'
    var mirrorString = '';

    for (var i = 0; i < inputString.length; i++) {
        var count = 0;
        for (var j = 0; j < capsString.length; j++) {
            count++;
            if (string[i] === capsString[j]) {
                mirrorString = mirrorString + capsString[capsString.length - count];
            } else if (string[i] === smallString[j]) {
                mirrorString = mirrorString + smallString[smallString.length - count]
            }
        }
    }

    console.log(mirrorString)
}


//TEST CASE
// input: 'AyzB'
// output: 'ZbaY'

// input: 'KiMcT'
//output: 'PrNxG'