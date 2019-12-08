var arr = [1, 2, 3, 4, 5, 2, 2, 4, 5, 2, 1, 4, 2, 3, 2, 3, 2]
function indexOccurance(target) {
    var result = []
    for (i = 0; i < arr.length; i++) {
        if (target == arr[i]) {
            flag = true
            result.push(i)
        }
        else if (target != arr[i]) {
            flag = false
        }
    }
    if (flag == true) {
        console.log(result)
    }
    else {
        console.log("-1")
    }
}
indexOccurance(9)