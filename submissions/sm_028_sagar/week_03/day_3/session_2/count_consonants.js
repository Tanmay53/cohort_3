// var string = 'Hi I am Sagar Kadu'; //given string;

//invoking function
countConsonants(' Masai ');


//function for counting consonants
function countConsonants(string) {
    var countConsonants = 0;
    var temp = [];
    //Adding characters in array
    for (var i = 0; i < string.length; i++) {
        temp.push(string[i]);
    }
    // console.log(temp);
    for (var i = 0; i < temp.length; i++) {
        var char = temp[i].toLowerCase();
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === ' ') {
            continue;
        }
        countConsonants++;
        // console.log(char);
    }
    console.log("Total consonants in '" + string + "' is: ", countConsonants);
}


//TEST CASE
// input:
// ' Masai '
// output:
//Total consonants in ' Masai ' is:  2