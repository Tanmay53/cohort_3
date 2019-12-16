function checkSubsetArray(arr1, arr2) {
    var obj = {},
        counter = 0;
    arr2.forEach(function (ele) {
        obj[ele] = ele;
    })
    arr1.forEach(function (ele) {
        if (obj[ele] == ele)
            counter++
    })
    if (counter == arr1.length) {
        console.log(true)

    }
    else {
        console.log("false")
    }
}

checkSubsetArray([1, 2, 3, 1, 11], [1, 2,3,4,8,11])
