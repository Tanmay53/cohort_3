var input = [10, 20, 30, 20, 50] //input

var checkEle = input.map(function(ele, i, arr) {

    if (arr[i - 1] > arr[i]) {
        return -1;
    }
    return 1;
})

console.log(checkEle)