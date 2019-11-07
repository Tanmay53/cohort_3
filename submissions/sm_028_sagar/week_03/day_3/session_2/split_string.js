var string = ' AAB/BB/3/KDSO'; //given string
var givenChar = '/'; //given character

//invoking function
split_arr(string, givenChar);



//function for split array
function split_arr(string, givenChar) {
    var i = 0;
    var temp = [];
    for (var i = 0; i < string.length; i++) {
        temp.push(string[i]);
    }
    // console.log(temp);

    var tempString = '';
    var arr = [];
    for (var i = 0; i < temp.length; i++) {

        if (temp[i] === givenChar) {
            // console.log(givenChar)
            arr.push(tempString);
            tempString = '';
            continue;
        }

        tempString = tempString + temp[i];
        // arr.push(tempString);
        // console.log(tempString);

    }
    arr.push(tempString);
    console.log(arr);
}


//TEST CASE
// input:
// string = ' AAB/BB/3/KDSO'
// givenChar = '/'
// output:
// [ ' AAB', 'BB', '3', 'KDSO' ]