// function  to  reverse the integer

function reverseInt(num) {

    var str = "" + num;

    var results = "";

    for (var i = str.length - 1; i >= 0; i--) {
        results += str[i];
    }

    console.log(parseInt(results));
}



reverseInt(1234);
reverseInt(123456789);