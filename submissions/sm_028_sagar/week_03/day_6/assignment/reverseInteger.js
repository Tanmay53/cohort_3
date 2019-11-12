var input = 7860590 //input integer

//Invoke function
console.log(reverseInteger(input))

//function to reverse integer
function reverseInteger(number) {

    var num = 0;

    while (number > 0) {
        num = num * 10;
        var temp = number % 10;
        number = (parseInt(number / 10));
        if (temp === 0)
            continue;
        num = num + temp;
    }
    return num;
}

// input -----------> output
// 78659 -----------> 95687
// 786590 ----------> 95687
// 7860590 ---------> 950687