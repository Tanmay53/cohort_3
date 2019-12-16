var array1 = ['1', '1', '2', '2', '3', '4', '3']
var val1 = 3

function checkOccur(array, value) {
    var occur = []
    count = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] == value) {
            occur.push(i)
            count++
        }
    }
    if (count > 0)
        console.log(occur)
    else
        console.log(-1)


} checkOccur(array1, val1)