var arr1 = [1, 2, 3, 3]
var arr2 = [4, 5, 6]
var union = []

for (var i = 0; i < arr1.length; i++) {
    flag = true
    for (var j = 0; j < union.length; j++) {
        if (arr1[i] == union[j]) {
            flag = false
            break;
        }
    }
    if (flag == true) {
        union.push(arr1[i])
    }
}


for (var i = 0; i < arr2.length; i++) {
    flag = true
    for (var j = 0; j < union.length; j++) {
        if (arr2[i] == union[j]) {
            flag = false
            break;
        }
    }
    if (flag == true) {
        union.push(arr2[i])
    }
}

console.log(union)










