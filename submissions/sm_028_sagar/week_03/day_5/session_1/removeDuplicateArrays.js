var inputArr = [10, 20, 'sagar', 6.22, 20, 'sagar', 7, 99, 23, 67]

//invoking function
console.log(removeDuplicate(inputArr))



//function to remove duplicates
function removeDuplicate(inputArr) {
    var uniqueArr = [];
    uniqueArr.push(inputArr[0]);

    for (var i = 1; i < inputArr.length; i++) {
        var flag = true;
        for (var j = 0; j < uniqueArr.length; j++) {
            if (inputArr[i] === uniqueArr[j]) {
                flag = false;
                break;
            }
        }
        if (flag == true) {
            uniqueArr.push(inputArr[i]);
        }
    }

    return uniqueArr;
}

//test case
// input:
// inputArr = [10, 20, 'sagar', 6.22, 20, 'sagar', 7, 99, 23, 67]
// output:
// [ 10, 20, 'sagar', 6.22, 7, 99, 23, 67 ]