var string = 'Hi I am Sagar Kadu'; //given string;
countVowels(string);


//function for counting vowels
function countVowels(string) {
    var vowelCount = 0;
    var temp = [];
    //Adding characters in array
    for (var i = 0; i < string.length; i++) {
        temp.push(string[i]);
    }
    // console.log(temp);
    for (var i = 0; i < temp.length; i++) {
        var char = temp[i].toLowerCase();
        // console.log(char);
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowelCount++;
        }
    }
    console.log("Total vowels in '" + string + "' is: ", vowelCount);
}

// countVowels('Thanks for watching');

//TEST CASE
// input:
// string = 'Hi I am Sagar Kadu'
// output:
// Total vowels in 'Hi I am Sagar Kadu' is:  7