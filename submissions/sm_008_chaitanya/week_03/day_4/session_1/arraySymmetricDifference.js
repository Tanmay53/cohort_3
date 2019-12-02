var a = [1, 2, 3, 4, 5, 3, 3, 3]                   //output=[1,2,3,6,7,8]
var b = [4, 5, 6, 7, 8, 8, 8, 8]
result = []
function arraySymmetricDifference(a, b) {
    for (i = 0; i < a.length; i++) {
        flag = true
        count = b.length;
        for (j = 0; j < b.length; j++) {
            if (a[i] != b[j]) {
                count--
            }
            if (count == 0) {
                for (k = 0; k < result.length; k++) {
                    if (a[i] == result[k]) {
                        flag = false
                        break
                    }
                }
                if (flag == true) {
                    result.push(a[i])
                }
            }
        }

    }
    for (i = 0; i < b.length; i++) {
        count = a.length;
        flag = true
        for (j = 0; j < a.length; j++) {
            if (b[i] != a[j]) {
                count--
            }
            if (count == 0) {
                for (k = 0; k < result.length; k++) {
                    if (b[i] == result[k]) {
                        flag = false
                        break
                    }
                }
                if (flag == true) {
                    result.push(b[i])
                }
            }
        }
    }
    return result
}
console.log(arraySymmetricDifference(a, b))