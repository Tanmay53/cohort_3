var data = "surya11472@gmail.com"
var j = 0
var count = 0
for (i = 0; i < data.length; i++) {

    if (data[i] == "@") {
        count++
    }
}
if (data[0] == "." || isNaN(Number(data[0])) == false || count != 1 || data[data.length - 1] == ".") {
    console.log("Invalid")
    count = 0
}
else {
    var dotvalue = dot(data)
    var spec = specialChar(data)

    if (dotvalue == true && spec == true) {
        console.log("Valid")
    }
    else {
        console.log("invalid")
    }
}
// dot verification

function dot(data) {
    var count = 0
    console.log(data)
    for (i = 0; i < data.length; i++) {
        console.log(data[i])
        if (data[i] == "." && data[i + 1] == "." && i + 1 != data.length) {
            count++;
        }
        if (data[i] == "." && (data[i - 1] == "@" || data[i + 1] == "@")) {
            count++;
        }
    }
    console.log(count)
    if (count == 0) {
        count = 0
        return true;
    }
    else {
        count = 0
        return false;

    }
//special charecters

}
function specialChar(data) {
    var arra = ["!", "#", "$", "%", "^", "&", "*", "(", ")", "+", "{", "}", "?", "/", "|"]
    var obj = {}
    var count_1 = 0
    var sum = 0

    for (i = 0; i < data.length; i++) {
        obj[data[i]] = 1
    }
    console.log(Object.keys(obj))
    for (i = 0; i < arra.length; i++) {
        if (obj[arra[i]] != undefined) {

            count_1 = 1
        }
        else {
            count_1 = 0;
        }
        sum = sum + count_1
    }
    if (sum == 1) {
        sum = 0
        return false
    }
    else {
        sum = 0
        return true
    }
}



