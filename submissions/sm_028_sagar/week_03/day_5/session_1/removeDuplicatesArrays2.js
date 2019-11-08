var input = [10, 10, 8, 9, 6.33, 'sagar', 45, 'sagar']

//Invoking function
console.log(removeDuplicate(input))


//function for removing duplicate using object
function removeDuplicate(input) {

    var obj = {}
    obj.uniqueArr = []
    obj.uniqueArr.push(input[0]);

    for (var i = 1; i < input.length; i++) {
        var flag = true;
        for (var j = 0; j < obj.uniqueArr.length; j++) {
            if (input[i] === obj.uniqueArr[j]) {
                flag = false;
                break;
            }
        }
        if (flag == true) {
            obj.uniqueArr.push(input[i]);
        }
    }
    return obj.uniqueArr;
}

//test case
// input:
// var input = [10, 10, 8, 9, 6.33, 'sagar', 45, 'sagar']
// output:
// [ 10, 8, 9, 6.33, 'sagar', 45 ]